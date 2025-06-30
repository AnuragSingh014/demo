"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
  useCallback,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image, { ImageProps } from "next/image";

const CarouselContext = createContext<any>({});
type CardItem = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const Carousel = ({ items }: { items: React.ReactNode[] }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const animationRef = useRef<number | null>(null);
  const lastScrollTime = useRef<number>(0);
  const scrollSpeedRef = useRef<number>(1.5);

   // Responsive card dimensions (SAFE)
   const getCardDimensions = () => {
    if (typeof window === "undefined") {
      return { width: 384, gap: 32 };
    }
    const isMobile = window.innerWidth < 768;
    return {
      width: isMobile ? 230 : 384,
      gap: isMobile ? 16 : 32,
    };
  };

  // Initialize and update dimensions
  useEffect(() => {
    setDimensions(getCardDimensions());
    
    const handleResize = () => {
      setDimensions(getCardDimensions());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [dimensions, setDimensions] = useState(getCardDimensions());
  
  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      setDimensions(getCardDimensions());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Clone items for infinite effect
  const originalLength = items.length;
  const clonedItems = [...items, ...items, ...items];

  // Set initial scroll position
  useEffect(() => {
    if (carouselRef.current) {
      const { width, gap } = dimensions;
      carouselRef.current.scrollLeft = (width + gap) * originalLength;
    }
  }, [dimensions, originalLength]);

  // Infinite scroll logic

  // Smooth auto-scroll with requestAnimationFrame
  const autoScroll = useCallback(() => {
    if (!carouselRef.current) return;
    
    const now = Date.now();
    if (now - lastScrollTime.current < 16) {
      animationRef.current = requestAnimationFrame(autoScroll);
      return;
    }
    
    lastScrollTime.current = now;
    carouselRef.current.scrollBy({ 
      left: scrollSpeedRef.current, 
      behavior: "smooth" 
    });
    
    animationRef.current = requestAnimationFrame(autoScroll);
  }, []);

  // Start/stop auto-scroll on hover
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleMouseEnter = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };

    const handleMouseLeave = () => {
      if (!animationRef.current) {
        animationRef.current = requestAnimationFrame(autoScroll);
      }
    };

    carousel.addEventListener('mouseenter', handleMouseEnter);
    carousel.addEventListener('mouseleave', handleMouseLeave);
    
    // Start auto-scroll
    animationRef.current = requestAnimationFrame(autoScroll);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      carousel.removeEventListener('mouseenter', handleMouseEnter);
      carousel.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [autoScroll]);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleInfiniteScroll = useCallback(() => {
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
  
    scrollTimeout.current = setTimeout(() => {
      if (!carouselRef.current) return;
      const { scrollLeft } = carouselRef.current;
      const { width, gap } = dimensions;
      const singleSetWidth = (width + gap) * originalLength;
  
      if (scrollLeft >= singleSetWidth * 2) {
        carouselRef.current.scrollLeft = scrollLeft - singleSetWidth;
      } else if (scrollLeft < singleSetWidth) {
        carouselRef.current.scrollLeft = scrollLeft + singleSetWidth;
      }
  
      const newIndex = Math.round(
        (carouselRef.current.scrollLeft - singleSetWidth) / (width + gap)
      ) % originalLength;
      setCurrentIndex((newIndex + originalLength) % originalLength);
    }, 100);
  }, [dimensions, originalLength]);
  
  useEffect(() => {
    return () => {
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, []);
  
  return (
    <div className="relative w-full">
      <div
        className="flex w-full overflow-x-scroll overscroll-x-contain scroll-smooth py-10 [scrollbar-width:none] md:py-20"
        ref={carouselRef}
        onScroll={handleInfiniteScroll}
      >
        <div className="flex flex-row justify-start gap-4 pl-4 mx-auto max-w-7xl">
          {clonedItems.map((item, idx) => (
            <div key={idx} className="rounded-3xl">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ... rest of your components (Card, BlurImage) remain the same ...



// --- Card Component ---
export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: CardItem;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  // Close on Escape
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line
  }, [open]);

  // Outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
    // eslint-disable-next-line
  }, [open]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="relative z-[60] mx-auto my-10 h-fit max-w-5xl rounded-3xl bg-white p-4 font-sans md:p-10 dark:bg-neutral-900"
            >
              <button
                className="sticky top-4 right-0 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-black dark:bg-white"
                onClick={handleClose}
              >
                <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </button>
              <motion.p
                layoutId={layout ? `category-${card.title}` : undefined}
                className="text-base font-medium text-black dark:text-white"
              >
                {card.category}
              </motion.p>
              <motion.p
                layoutId={layout ? `title-${card.title}` : undefined}
                className="mt-4 text-2xl font-semibold text-neutral-700 md:text-5xl dark:text-white"
              >
                {card.title}
              </motion.p>
              <div className="py-10">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="relative z-10 flex h-80 w-56 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 md:h-[40rem] md:w-96 dark:bg-neutral-900"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
        <div className="relative z-40 p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-left font-sans text-sm font-medium text-white md:text-base"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="mt-2 max-w-xs text-left font-sans text-xl font-semibold [text-wrap:balance] text-white md:text-3xl"
          >
            {card.title}
          </motion.p>
        </div>
        <BlurImage
          src={card.src}
          alt={card.title}
          className="absolute inset-0 z-10 object-cover"
        />
      </motion.button>
    </>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <img
      className={cn(
        "h-full w-full transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className,
      )}
      onLoad={() => setLoading(false)}
      src={src as string}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};


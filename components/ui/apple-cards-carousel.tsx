"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
  RefObject,
  MutableRefObject,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image, { ImageProps } from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";


import {
  
  useCallback,

} from "react";


// Dummy icons and BlurImage for demonstration

// const BlurImage = (props: any) => (
//   <img {...props} style={{ borderRadius: 24, ...props.style }} />
// );

// Carousel Context
const CarouselContext = createContext<any>({});

interface CarouselProps {
  items: React.ReactElement[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

// export const CarouselContext = createContext<{
//   onCardClose: (index: number) => void;
//   currentIndex: number;
// }>({
//   onCardClose: () => {},
//   currentIndex: 0,
// });

export const Carousel = ({ items }: { items: React.ReactNode[] }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Card width and gap
  const isMobile = () =>
    typeof window !== "undefined" && window.innerWidth < 768;
  const cardWidth = isMobile() ? 230 : 384;
  const gap = isMobile() ? 4 : 8;

  // Clone items before and after
  const originalLength = items.length;
  const clonedItems = [...items, ...items, ...items];

  // Set initial scroll position to the first "real" set
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = (cardWidth + gap) * originalLength;
    }
  }, [cardWidth, gap, originalLength]);

  // Infinite scroll logic
  const handleInfiniteScroll = useCallback(() => {
    if (!carouselRef.current) return;
    const { scrollLeft } = carouselRef.current;
    const singleSetWidth = (cardWidth + gap) * originalLength;

    if (scrollLeft >= singleSetWidth * 2) {
      // At end, jump back to middle set
      carouselRef.current.scrollLeft = scrollLeft - singleSetWidth;
    } else if (scrollLeft < singleSetWidth) {
      // At start, jump forward to middle set
      carouselRef.current.scrollLeft = scrollLeft + singleSetWidth;
    }
    setCurrentIndex(
      Math.round(
        (carouselRef.current.scrollLeft - singleSetWidth) / (cardWidth + gap)
      ) % originalLength
    );
  }, [cardWidth, gap, originalLength]);

  // Auto-scroll effect
  useEffect(() => {
    const scrollAmount = 1.5;
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        handleInfiniteScroll();
      }
    }, 20);
    return () => clearInterval(interval);
  }, [handleInfiniteScroll]);

  return (
    <div className="relative w-full">
      <div
        className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-20"
        ref={carouselRef}
        onScroll={handleInfiniteScroll}
        style={{ scrollBehavior: "smooth" }}
      >
        <div
          className="flex flex-row justify-start gap-4 pl-4 mx-auto max-w-7xl"
        >
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


// --- Card Component ---
export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
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
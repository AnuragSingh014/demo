// components/BlogHero.js
const BlogHero = () => (
  <section className="relative bg-gradient-to-br  dark:bg-[oklch(0.147_0.004_49.25)] py-8 lg:py-12">
    <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
    <div className="relative max-w-4xl mx-auto px-4 md:px-6 text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 text-sm font-medium mb-6">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 4h12v2H4V4zm0 4h12v2H4V8zm0 4h8v2H4v-2z" />
        </svg>
        Insights & Stories
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
        The <span className="text-emerald-500">Blog</span>
      </h1>
      <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
        Explore the latest news, product updates, and expert insights from our team. 
        Stay inspired and informed!
      </p>
    </div>
  </section>
);

// Dummy blog data
const posts = [
  {
    slug: "ai-in-2025",
    title: "How AI Will Shape 2025: Trends & Predictions",
    excerpt: "Discover the key developments in artificial intelligence and what to expect in the coming year.",
    date: "2025-06-15",
    author: "Jane Doe",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    tags: ["AI", "Trends"],
  },
  {
    slug: "productivity-hacks",
    title: "10 Productivity Hacks for Remote Teams",
    excerpt: "Boost your team's efficiency with these actionable tips for remote collaboration.",
    date: "2025-06-10",
    author: "John Smith",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    tags: ["Productivity", "Remote Work"],
  },
  {
    slug: "design-systems",
    title: "Design Systems: Why Your Startup Needs One",
    excerpt: "Learn how a design system can streamline your product development and improve consistency.",
    date: "2025-05-28",
    author: "Alex Lee",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    tags: ["Design", "Startups"],
  },
  // Add more posts as desired
];

// Blog Card Component
const BlogCard = ({ post }) => (
  <a
    href={`/blog/${post.slug}`}
    className="block bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow shadow-slate-950/5 hover:shadow-lg transition-shadow border border-slate-200 dark:border-slate-800"
  >
    <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
    <div className="p-6 flex flex-col h-full">
      <div className="flex gap-2 mb-2">
        {post.tags.map(tag => (
          <span
            key={tag}
            className="inline-block px-2 py-1 bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 text-xs rounded font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      <h2 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{post.title}</h2>
      <p className="text-slate-600 dark:text-slate-400 mb-4">{post.excerpt}</p>
      <div className="mt-auto flex items-center justify-between text-xs text-slate-400">
        <span>{post.author}</span>
        <span>{new Date(post.date).toLocaleDateString()}</span>
      </div>
    </div>
  </a>
);

// Pre-footer CTA
const BlogPreFooter = () => (
  <section className="bg-emerald-50 dark:bg-[oklch(0.147_0.004_49.25)] py-16 lg:py-20  border-emerald-100 dark:border-slate-800">
    <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
        Never miss an update!
      </h2>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
        Subscribe to our newsletter for the latest articles, tips, and exclusive content delivered straight to your inbox.
      </p>
      <form className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
        <input
          type="email"
          placeholder="Your email address"
          className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          required
        />
        <button
          type="submit"
          className="px-6 py-3 bg-emerald-500 text-white font-medium rounded-lg hover:bg-emerald-600 transition-colors"
        >
          Subscribe
        </button>
      </form>
      <p className="text-xs text-slate-400 mt-4">No spam. Unsubscribe anytime.</p>
    </div>
  </section>
);

// Main Blogs Page
export default function Blogs() {
  return (
    <>
      <BlogHero />
      <main className="max-w-6xl mx-auto px-4 md:px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map(post => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </main>
      <BlogPreFooter />
      {/* Attach your <FooterSection /> here */}
    </>
  );
}

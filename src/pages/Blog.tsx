import { Link } from "wouter";
import { motion } from "framer-motion";
import { useSEO } from "@/hooks/use-seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { blogPosts } from "@/data/content";
import { Badge } from "@/components/ui/badge";
import {
  Clock, Calendar, ArrowRight, Star, Newspaper,
  ScanText, TrendingUp, ImageIcon, FileText,
  BookOpen, Code2, Layers, Brain, Database, Zap,
  Globe, Shield
} from "lucide-react";

const covers = [
  {
    grad: "from-[#0f0c29] via-[#302b63] to-[#24243e]",
    accent: "#6366f1",
    icon: <ScanText className="h-24 w-24" />,
    pattern: "grid",
    category: "OCR Basics",
  },
  {
    grad: "from-[#0d1b2a] via-[#1b4332] to-[#0d2b1d]",
    accent: "#10b981",
    icon: <TrendingUp className="h-24 w-24" />,
    pattern: "dots",
    category: "Business",
  },
  {
    grad: "from-[#1a0533] via-[#3b0764] to-[#1e1b4b]",
    accent: "#a855f7",
    icon: <ImageIcon className="h-24 w-24" />,
    pattern: "diagonal",
    category: "Image Processing",
  },
  {
    grad: "from-[#1c0a00] via-[#7c2d12] to-[#431407]",
    accent: "#f97316",
    icon: <FileText className="h-24 w-24" />,
    pattern: "grid",
    category: "Document Tools",
  },
  {
    grad: "from-[#0c1445] via-[#1e3a8a] to-[#0c2461]",
    accent: "#3b82f6",
    icon: <Brain className="h-24 w-24" />,
    pattern: "dots",
    category: "AI & ML",
  },
  {
    grad: "from-[#1a0020] via-[#831843] to-[#4a044e]",
    accent: "#ec4899",
    icon: <BookOpen className="h-24 w-24" />,
    pattern: "diagonal",
    category: "Tutorials",
  },
  {
    grad: "from-[#0a1628] via-[#0e4d6e] to-[#0c2340]",
    accent: "#06b6d4",
    icon: <Code2 className="h-24 w-24" />,
    pattern: "grid",
    category: "Developer",
  },
  {
    grad: "from-[#0f2d0a] via-[#14532d] to-[#0a2e1a]",
    accent: "#22c55e",
    icon: <Layers className="h-24 w-24" />,
    pattern: "dots",
    category: "Productivity",
  },
  {
    grad: "from-[#1f1501] via-[#78350f] to-[#451a03]",
    accent: "#f59e0b",
    icon: <Database className="h-24 w-24" />,
    pattern: "diagonal",
    category: "Data",
  },
  {
    grad: "from-[#060b12] via-[#0f172a] to-[#0c1635]",
    accent: "#818cf8",
    icon: <Zap className="h-24 w-24" />,
    pattern: "grid",
    category: "Speed & Perf",
  },
  {
    grad: "from-[#0d2137] via-[#164e63] to-[#0a2a40]",
    accent: "#0ea5e9",
    icon: <Globe className="h-24 w-24" />,
    pattern: "dots",
    category: "Languages",
  },
  {
    grad: "from-[#200a0a] via-[#7f1d1d] to-[#3b0000]",
    accent: "#ef4444",
    icon: <Shield className="h-24 w-24" />,
    pattern: "diagonal",
    category: "Privacy",
  },
  {
    grad: "from-[#0d0d1f] via-[#1e1b4b] to-[#312e81]",
    accent: "#8b5cf6",
    icon: <ScanText className="h-24 w-24" />,
    pattern: "grid",
    category: "OCR Tech",
  },
  {
    grad: "from-[#001a0d] via-[#065f46] to-[#064e3b]",
    accent: "#34d399",
    icon: <TrendingUp className="h-24 w-24" />,
    pattern: "dots",
    category: "Growth",
  },
  {
    grad: "from-[#1a1500] via-[#854d0e] to-[#431a00]",
    accent: "#fbbf24",
    icon: <Newspaper className="h-24 w-24" />,
    pattern: "diagonal",
    category: "Guide",
  },
];

type PatternType = "grid" | "dots" | "diagonal";

function CoverPattern({ type, color }: { type: PatternType; color: string }) {
  if (type === "grid") {
    return (
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
        backgroundSize: "32px 32px"
      }} />
    );
  }
  if (type === "dots") {
    return (
      <div className="absolute inset-0 opacity-[0.12]" style={{
        backgroundImage: `radial-gradient(circle, ${color} 1px, transparent 1px)`,
        backgroundSize: "20px 20px"
      }} />
    );
  }
  return (
    <div className="absolute inset-0 opacity-[0.06]" style={{
      backgroundImage: `repeating-linear-gradient(45deg, ${color} 0px, ${color} 1px, transparent 1px, transparent 50%)`,
      backgroundSize: "24px 24px"
    }} />
  );
}

function ArticleCover({
  post,
  index,
  height = "h-52",
  showTitle = false,
  featured = false,
}: {
  post: (typeof blogPosts)[number];
  index: number;
  height?: string;
  showTitle?: boolean;
  featured?: boolean;
}) {
  const cover = covers[index % covers.length];

  return (
    <div className={`relative ${height} bg-gradient-to-br ${cover.grad} overflow-hidden`}>
      {/* Pattern overlay */}
      <CoverPattern type={cover.pattern as PatternType} color={cover.accent} />

      {/* Radial glow */}
      <div className="absolute inset-0" style={{
        background: `radial-gradient(ellipse at 70% 30%, ${cover.accent}30 0%, transparent 65%)`
      }} />

      {/* Decorative circles */}
      <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full opacity-10"
        style={{ background: `radial-gradient(circle, ${cover.accent}, transparent)` }} />
      <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full opacity-10"
        style={{ background: `radial-gradient(circle, ${cover.accent}, transparent)` }} />

      {/* Icon */}
      <div className="absolute inset-0 flex items-center justify-center"
        style={{ color: cover.accent, opacity: featured ? 0.18 : 0.22 }}>
        {cover.icon}
      </div>

      {/* Bottom gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      {/* Featured badge */}
      {featured && (
        <div className="absolute top-4 left-4">
          <span className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full text-white"
            style={{ background: cover.accent }}>
            <Star className="h-3 w-3 fill-white" /> Featured
          </span>
        </div>
      )}

      {/* Category tag */}
      <div className="absolute top-4 right-4">
        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/90 border border-white/10">
          {cover.category}
        </span>
      </div>

      {/* Read time badge at bottom */}
      <div className="absolute bottom-4 left-4 flex items-center gap-2">
        <span className="flex items-center gap-1 text-xs font-semibold text-white/80 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
          <Clock className="h-3 w-3" /> {post.readTime} read
        </span>
      </div>

      {/* Author avatar bottom right */}
      <div className="absolute bottom-4 right-4">
        <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white shadow-lg border border-white/20"
          style={{ background: `linear-gradient(135deg, ${cover.accent}, #6366f1)` }}>
          R
        </div>
      </div>

      {/* Title overlay on cover for featured */}
      {showTitle && (
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h2 className="text-white font-black text-xl md:text-2xl leading-snug drop-shadow-lg line-clamp-2">
            {post.title}
          </h2>
        </div>
      )}
    </div>
  );
}

export default function Blog() {
  useSEO({
    title: "OCR Blog & Resources | ImageToText.fun",
    description: "Learn about OCR technology, machine learning, and how to extract text from images efficiently. 15+ expert guides."
  });

  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-cyan-500/5 border-b">
          <div className="container mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Badge variant="outline" className="mb-4 px-4 py-1 text-primary border-primary/30">Articles & Guides</Badge>
              <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4">OCR Blog & Resources</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Deep dives into Optical Character Recognition technology, practical guides, and industry insights.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">

              {/* Main Content */}
              <div>
                {/* Featured post (large) */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-10"
                >
                  <Link href={`/blog/${featured.slug}`}>
                    <article
                      data-testid={`card-blog-featured-${featured.slug}`}
                      className="group rounded-3xl overflow-hidden border bg-card hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer"
                    >
                      <ArticleCover post={featured} index={0} height="h-72" featured showTitle />

                      <div className="p-7">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                          <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{featured.date}</span>
                          <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{featured.readTime} read</span>
                          <span className="flex items-center gap-1.5 text-primary font-semibold">By Rabeea Naseer</span>
                        </div>
                        <h2 className="text-2xl font-black leading-snug mb-3 group-hover:text-primary transition-colors">{featured.title}</h2>
                        <p className="text-muted-foreground leading-relaxed mb-5">{featured.summary}</p>
                        <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:gap-2.5 transition-all">
                          Read full article <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </article>
                  </Link>
                </motion.div>

                {/* Article grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {rest.map((post, i) => (
                    <motion.div
                      key={post.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.04 }}
                      whileHover={{ y: -4 }}
                    >
                      <Link href={`/blog/${post.slug}`}>
                        <article
                          data-testid={`card-blog-${post.slug}`}
                          className="group rounded-3xl overflow-hidden border bg-card hover:shadow-xl hover:shadow-primary/10 hover:border-primary/20 transition-all duration-300 cursor-pointer h-full flex flex-col"
                        >
                          <ArticleCover post={post} index={i + 1} height="h-44" />

                          <div className="p-5 flex flex-col flex-1">
                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
                              <Calendar className="h-3 w-3" />
                              <time>{post.date}</time>
                            </div>
                            <h3 className="font-black text-sm leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2 flex-1">
                              {post.title}
                            </h3>
                            <p className="text-xs text-muted-foreground line-clamp-2 mb-3 leading-relaxed">{post.summary}</p>
                            <span className="text-xs font-bold text-primary flex items-center gap-1 group-hover:gap-2 transition-all opacity-0 group-hover:opacity-100">
                              Read more <ArrowRight className="h-3.5 w-3.5" />
                            </span>
                          </div>
                        </article>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <aside className="space-y-6">
                {/* Featured Posts */}
                <div className="bg-muted/40 rounded-2xl border p-5 sticky top-20">
                  <div className="flex items-center gap-2 mb-5">
                    <Star className="h-4 w-4 text-primary" />
                    <h3 className="font-bold text-sm">Featured Posts</h3>
                  </div>
                  <div className="space-y-3">
                    {blogPosts.slice(0, 7).map((post, i) => {
                      const cover = covers[i % covers.length];
                      return (
                        <Link key={post.slug} href={`/blog/${post.slug}`}>
                          <div className="flex gap-3 group cursor-pointer py-2 border-b last:border-0">
                            {/* Mini cover */}
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cover.grad} flex items-center justify-center shrink-0 relative overflow-hidden`}>
                              <div className="absolute inset-0 opacity-[0.12]" style={{
                                backgroundImage: `radial-gradient(circle, ${cover.accent} 1px, transparent 1px)`,
                                backgroundSize: "8px 8px"
                              }} />
                              <div style={{ color: cover.accent, opacity: 0.6 }}>
                                <Newspaper className="h-5 w-5" />
                              </div>
                            </div>
                            <div className="min-w-0">
                              <p className="text-xs font-bold group-hover:text-primary transition-colors line-clamp-2 leading-snug">{post.title}</p>
                              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                                <Clock className="h-3 w-3" />{post.readTime}
                              </p>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-2xl border border-primary/10 p-5">
                  <h3 className="font-bold text-sm mb-4">Popular Tools</h3>
                  <div className="space-y-2">
                    {["/image-to-text", "/handwriting-to-text", "/receipt-to-excel", "/screenshot-to-text"].map(path => (
                      <Link key={path} href={path}>
                        <div className="text-sm font-medium text-primary hover:underline cursor-pointer flex items-center gap-1.5 py-0.5">
                          <ArrowRight className="h-3.5 w-3.5 shrink-0" />
                          {path.replace("/", "").replace(/-/g, " ").replace(/\b\w/g, (l: string) => l.toUpperCase())}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Author card */}
                <div className="rounded-2xl border overflow-hidden">
                  <div className="h-16 bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-700 relative">
                    <div className="absolute inset-0 opacity-10" style={{
                      backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                      backgroundSize: "16px 16px"
                    }} />
                  </div>
                  <div className="p-4 -mt-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center mb-3 shadow-lg">
                      <span className="text-lg font-black text-white">R</span>
                    </div>
                    <p className="font-black text-sm">Rabeea Naseer</p>
                    <p className="text-xs text-muted-foreground mb-3">Founder, NovatraTech</p>
                    <Link href="/author/rabeea-naseer">
                      <span className="text-xs font-bold text-primary hover:underline cursor-pointer flex items-center gap-1">
                        View author profile <ArrowRight className="h-3 w-3" />
                      </span>
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

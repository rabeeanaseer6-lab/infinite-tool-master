import { Link } from "wouter";
import { motion } from "framer-motion";
import { useSEO } from "@/hooks/use-seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { blogPosts } from "@/data/content";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, ArrowRight, Star, Newspaper, ScanText, TrendingUp, ImageIcon, FileText, BookOpen, Code2 } from "lucide-react";

const blogGradients = [
  "from-violet-600 to-purple-800",
  "from-blue-600 to-cyan-700",
  "from-emerald-600 to-teal-800",
  "from-orange-600 to-red-700",
  "from-pink-600 to-rose-700",
  "from-indigo-600 to-blue-800",
  "from-amber-600 to-orange-700",
  "from-cyan-600 to-sky-800",
  "from-fuchsia-600 to-pink-800",
  "from-lime-600 to-green-700",
  "from-teal-600 to-emerald-800",
  "from-sky-600 to-indigo-700",
  "from-rose-600 to-pink-800",
  "from-purple-600 to-violet-800",
  "from-green-600 to-teal-700",
];

const articleIcons = [
  <ScanText className="h-16 w-16 opacity-50" />,
  <TrendingUp className="h-16 w-16 opacity-50" />,
  <ImageIcon className="h-16 w-16 opacity-50" />,
  <FileText className="h-16 w-16 opacity-50" />,
  <BookOpen className="h-16 w-16 opacity-50" />,
  <Code2 className="h-16 w-16 opacity-50" />,
];

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
                      className="group rounded-2xl overflow-hidden border bg-card hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer"
                    >
                      <div className={`relative h-72 bg-gradient-to-br ${blogGradients[0]} flex items-center justify-center overflow-hidden`}>
                        <div className="absolute inset-0 opacity-20" style={{
                          backgroundImage: "linear-gradient(45deg, rgba(255,255,255,.08) 25%, transparent 25%, transparent 75%, rgba(255,255,255,.08) 75%), linear-gradient(45deg, rgba(255,255,255,.08) 25%, transparent 25%, transparent 75%, rgba(255,255,255,.08) 75%)",
                          backgroundSize: "24px 24px",
                          backgroundPosition: "0 0, 12px 12px"
                        }} />
                        <div className="text-white">{articleIcons[0]}</div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                            <Star className="h-3 w-3" /> Featured
                          </span>
                        </div>
                      </div>
                      <div className="p-8">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                          <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{featured.date}</span>
                          <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{featured.readTime} read</span>
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {rest.map((post, i) => (
                    <motion.div
                      key={post.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                    >
                      <Link href={`/blog/${post.slug}`}>
                        <article
                          data-testid={`card-blog-${post.slug}`}
                          className="group rounded-2xl overflow-hidden border bg-card hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer h-full flex flex-col"
                        >
                          {/* Article image */}
                          <div className={`h-44 bg-gradient-to-br ${blogGradients[(i + 1) % blogGradients.length]} flex items-center justify-center relative overflow-hidden`}>
                            <div className="absolute inset-0 opacity-20" style={{
                              backgroundImage: "radial-gradient(circle at 30% 70%, rgba(255,255,255,0.15) 0%, transparent 60%)"
                            }} />
                            <div className="text-white">{articleIcons[(i + 1) % articleIcons.length]}</div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                            <div className="absolute bottom-3 left-3">
                              <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                                {post.readTime} read
                              </span>
                            </div>
                          </div>

                          <div className="p-5 flex flex-col flex-1">
                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
                              <Calendar className="h-3 w-3" />
                              <time>{post.date}</time>
                            </div>
                            <h3 className="font-bold text-base leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2 flex-1">
                              {post.title}
                            </h3>
                            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{post.summary}</p>
                            <span className="text-xs font-bold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
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
              <aside className="space-y-8">
                {/* Featured Posts */}
                <div className="bg-muted/40 rounded-2xl border p-6">
                  <div className="flex items-center gap-2 mb-5">
                    <Star className="h-4 w-4 text-primary" />
                    <h3 className="font-bold text-base">Featured Posts</h3>
                  </div>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 6).map((post, i) => (
                      <Link key={post.slug} href={`/blog/${post.slug}`}>
                        <div className="flex gap-3 group cursor-pointer py-2 border-b last:border-0">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${blogGradients[i % blogGradients.length]} flex items-center justify-center shrink-0`}>
                            <Newspaper className="h-5 w-5 text-white/80" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold group-hover:text-primary transition-colors line-clamp-2 leading-snug">{post.title}</p>
                            <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                              <Clock className="h-3 w-3" />{post.readTime}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-2xl border border-primary/10 p-6">
                  <h3 className="font-bold text-base mb-4">Popular Tools</h3>
                  <div className="space-y-2">
                    {["/image-to-text", "/handwriting-to-text", "/receipt-to-excel", "/screenshot-to-text"].map(path => (
                      <Link key={path} href={path}>
                        <div className="text-sm font-medium text-primary hover:underline cursor-pointer flex items-center gap-1">
                          <ArrowRight className="h-3.5 w-3.5" />
                          {path.replace("/", "").replace(/-/g, " ").replace(/\b\w/g, (l: string) => l.toUpperCase())}
                        </div>
                      </Link>
                    ))}
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

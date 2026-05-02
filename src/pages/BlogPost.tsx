import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { useSEO } from "@/hooks/use-seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { blogPosts } from "@/data/content";
import { Calendar, Clock, ChevronLeft, ArrowRight, Github, Linkedin, BookOpen, ScanText, TrendingUp, ImageIcon, FileText, Code2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import NotFound from "@/pages/not-found";

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
  <ScanText className="h-20 w-20 text-white/60" />,
  <TrendingUp className="h-20 w-20 text-white/60" />,
  <ImageIcon className="h-20 w-20 text-white/60" />,
  <FileText className="h-20 w-20 text-white/60" />,
  <BookOpen className="h-20 w-20 text-white/60" />,
  <Code2 className="h-20 w-20 text-white/60" />,
];

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:slug");
  const postIndex = blogPosts.findIndex(p => p.slug === params?.slug);
  const post = postIndex >= 0 ? blogPosts[postIndex] : undefined;

  if (!match || !post) {
    return <NotFound />;
  }

  useSEO({ title: `${post.title} | ImageToText.fun Blog`, description: post.summary });

  const related = blogPosts.filter(p => p.slug !== post.slug).slice(0, 3);
  const gradientClass = blogGradients[postIndex % blogGradients.length];
  const iconEl = articleIcons[postIndex % articleIcons.length];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Featured Image Hero */}
        <div className={`relative h-72 md:h-96 bg-gradient-to-br ${gradientClass} overflow-hidden`}>
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-[0.08]" style={{
            backgroundImage: "linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%), linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%)",
            backgroundSize: "32px 32px",
            backgroundPosition: "0 0, 16px 16px"
          }} />
          {/* Radial glow */}
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse at center, rgba(255,255,255,0.12) 0%, transparent 70%)"
          }} />
          {/* Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            {iconEl}
          </div>
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/90 to-transparent" />
          {/* Back link overlay */}
          <div className="absolute top-6 left-0 right-0 container mx-auto px-4">
            <Link href="/blog">
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/90 hover:text-white transition-colors bg-black/20 hover:bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full cursor-pointer">
                <ChevronLeft className="h-4 w-4" /> Back to Blog
              </span>
            </Link>
          </div>
          {/* Read time badge */}
          <div className="absolute bottom-8 left-0 right-0 container mx-auto px-4">
            <div className="flex items-center gap-3 flex-wrap">
              <Badge className="bg-white/20 text-white border-white/20 backdrop-blur-sm px-3 py-1">
                <Clock className="h-3 w-3 mr-1" /> {post.readTime} read
              </Badge>
              <Badge className="bg-white/20 text-white border-white/20 backdrop-blur-sm px-3 py-1">
                <Calendar className="h-3 w-3 mr-1" /> {post.date}
              </Badge>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 max-w-4xl py-12">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            {/* Main Article */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight mb-8">
                  {post.title}
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="prose prose-lg dark:prose-invert max-w-none"
              >
                <div className="text-lg leading-relaxed text-foreground whitespace-pre-wrap">
                  {post.content}
                </div>
              </motion.div>

              {/* Tags */}
              <div className="mt-10 pt-8 border-t flex flex-wrap gap-2">
                {["OCR", "Text Extraction", "AI", "Tesseract"].map(tag => (
                  <Badge key={tag} variant="secondary" className="px-3 py-1 text-xs font-semibold">{tag}</Badge>
                ))}
              </div>

              {/* Author Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-10 p-6 rounded-2xl border bg-gradient-to-br from-primary/5 to-cyan-500/5 border-primary/10"
              >
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">Written by</p>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-600 to-cyan-500 flex items-center justify-center shrink-0 shadow-md">
                    <span className="text-2xl font-black text-white">R</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link href="/author/rabeea-naseer">
                      <h3 className="font-black text-lg hover:text-primary transition-colors cursor-pointer">Rabeea Naseer</h3>
                    </Link>
                    <p className="text-sm text-primary font-semibold mb-2">AI & Data-Driven SaaS, Automation & Web Systems Developer</p>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      Founder of NovatraTech. She builds and scales digital platforms by combining software development, search intelligence, and applied data modeling across 25+ web assets.
                    </p>
                    <div className="mt-3 flex items-center gap-3">
                      <a href="https://github.com/rabeeanaseer6-lab" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Github className="h-4 w-4" />
                      </a>
                      <a href="https://www.linkedin.com/in/rabeea-naseer-045b4a337/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <Link href="/author/rabeea-naseer">
                        <span className="text-xs font-semibold text-primary hover:underline cursor-pointer flex items-center gap-1">
                          View full profile <ArrowRight className="h-3 w-3" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6 lg:pt-0">
              {/* About Author mini card */}
              <div className="sticky top-20 space-y-6">
                <div className="bg-muted/40 rounded-2xl border p-5">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">Author</p>
                  <Link href="/author/rabeea-naseer">
                    <div className="flex items-center gap-3 mb-3 cursor-pointer group">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shrink-0">
                        <span className="text-sm font-black text-white">R</span>
                      </div>
                      <div>
                        <p className="font-bold text-sm group-hover:text-primary transition-colors">Rabeea Naseer</p>
                        <p className="text-xs text-muted-foreground">Founder, NovatraTech</p>
                      </div>
                    </div>
                  </Link>
                  <Link href="/author/rabeea-naseer">
                    <Button variant="outline" size="sm" className="w-full rounded-xl text-xs font-semibold" data-testid="link-author-profile">
                      View Profile <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </div>

                {/* Related articles */}
                <div className="bg-muted/40 rounded-2xl border p-5">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">Related Articles</p>
                  <div className="space-y-3">
                    {related.map((rel, i) => (
                      <Link key={rel.slug} href={`/blog/${rel.slug}`}>
                        <div className="flex gap-3 group cursor-pointer py-2 border-b last:border-0">
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${blogGradients[i % blogGradients.length]} flex items-center justify-center shrink-0`}>
                            <BookOpen className="h-4 w-4 text-white/80" />
                          </div>
                          <p className="text-xs font-semibold group-hover:text-primary transition-colors leading-snug line-clamp-2">
                            {rel.title}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

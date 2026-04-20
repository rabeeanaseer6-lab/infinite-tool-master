import { Link } from "wouter";
import { motion } from "framer-motion";
import { useSEO } from "@/hooks/use-seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { blogPosts } from "@/data/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Github, Linkedin, ExternalLink, Calendar, Clock,
  Code2, Database, Brain, Globe, Layers, TrendingUp,
  ArrowRight, BookOpen, Star, Zap, BarChart2
} from "lucide-react";

const blogGradients = [
  "from-violet-600 to-purple-800",
  "from-blue-600 to-cyan-700",
  "from-emerald-600 to-teal-800",
  "from-orange-600 to-red-700",
  "from-pink-600 to-rose-700",
  "from-indigo-600 to-blue-800",
  "from-amber-600 to-orange-700",
  "from-cyan-600 to-sky-800",
];

const expertise = [
  { icon: <Brain className="h-5 w-5" />, title: "AI & Machine Learning", desc: "Applied AI systems, intelligent automation, and data science pipelines.", color: "from-violet-500/10 to-purple-500/10 border-violet-500/20" },
  { icon: <Code2 className="h-5 w-5" />, title: "Full-Stack Development", desc: "End-to-end web platforms — SaaS tools, APIs, automation systems.", color: "from-blue-500/10 to-cyan-500/10 border-blue-500/20" },
  { icon: <TrendingUp className="h-5 w-5" />, title: "SEO Architecture", desc: "Multi-domain search intelligence and content-driven SEO infrastructure.", color: "from-emerald-500/10 to-teal-500/10 border-emerald-500/20" },
  { icon: <Database className="h-5 w-5" />, title: "Data Modeling", desc: "Applied analytics, data pipelines, and scalable data-driven systems.", color: "from-orange-500/10 to-amber-500/10 border-orange-500/20" },
  { icon: <Globe className="h-5 w-5" />, title: "Web Infrastructure", desc: "Multi-domain web ecosystems, monetization, and platform management.", color: "from-pink-500/10 to-rose-500/10 border-pink-500/20" },
  { icon: <Layers className="h-5 w-5" />, title: "Automation Systems", desc: "Intelligent automation workflows that reduce manual effort at scale.", color: "from-indigo-500/10 to-blue-500/10 border-indigo-500/20" },
];

const stats = [
  { value: "25+", label: "Niche Web Assets", icon: <Globe className="h-5 w-5" /> },
  { value: "5+", label: "Years Experience", icon: <Star className="h-5 w-5" /> },
  { value: "AI+SEO", label: "Core Speciality", icon: <Brain className="h-5 w-5" /> },
  { value: "Full-Stack", label: "Development Stack", icon: <Zap className="h-5 w-5" /> },
];

const projects = [
  { name: "ImageToText.fun", desc: "High-authority OCR platform with 15+ specialized tools. Built with React, Tesseract.js, and a content-first SEO strategy.", tag: "SaaS Tool", color: "from-indigo-500 to-cyan-500" },
  { name: "NovatraTech", desc: "Parent digital ecosystem — a portfolio of niche web assets combining software, data intelligence, and monetization systems.", tag: "Digital Ecosystem", color: "from-purple-500 to-pink-500" },
  { name: "Kaggle Analytics", desc: "Open datasets and notebooks focused on applied analytics, NLP, and automation use cases.", tag: "Data Science", color: "from-emerald-500 to-teal-500" },
  { name: "GitHub Projects", desc: "Open-source tools covering web scraping, OCR pipelines, SEO automation, and AI integrations.", tag: "Open Source", color: "from-orange-500 to-amber-500" },
];

export default function Author() {
  useSEO({
    title: "Rabeea Naseer — AI & SaaS Developer | ImageToText.fun",
    description: "Rabeea Naseer is an AI and data-driven web systems developer and founder of NovatraTech. She builds and scales digital platforms combining software, SEO intelligence, and applied data modeling."
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero section */}
        <section className="relative overflow-hidden py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]" />
          <div className="absolute inset-0 opacity-[0.05]" style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "36px 36px"
          }} />
          <motion.div
            animate={{ scale: [1, 1.1, 1], x: [0, 20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl"
            style={{ background: "radial-gradient(circle, #6366f1 0%, #4f46e5 100%)" }}
          />

          <div className="relative container mx-auto max-w-5xl">
            <div className="grid lg:grid-cols-[auto_1fr] gap-12 items-center">
              {/* Avatar */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center lg:items-start"
              >
                <div className="relative">
                  <div className="w-36 h-36 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-600 to-cyan-500 flex items-center justify-center shadow-2xl shadow-indigo-500/30">
                    <span className="text-5xl font-black text-white">R</span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-emerald-400 rounded-xl flex items-center justify-center shadow-lg">
                    <BarChart2 className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="mt-6 flex gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="link-author-github"
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center text-white transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="link-author-linkedin"
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center text-white transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://kaggle.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="link-author-kaggle"
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center text-white transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>

              {/* Bio */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-primary/20 text-primary border-primary/30 px-3 py-1">AI Developer</Badge>
                  <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 px-3 py-1">Founder, NovatraTech</Badge>
                  <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 px-3 py-1">Data Systems</Badge>
                </div>

                <h1 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">Rabeea Naseer</h1>
                <p className="text-lg text-indigo-300 font-semibold mb-6">AI & Data-Driven SaaS, Automation & Web Systems Developer</p>

                <p className="text-slate-300 leading-relaxed text-base max-w-2xl">
                  Rabeea Naseer is an AI and data-driven web systems developer and the founder of{" "}
                  <span className="text-white font-semibold">NovatraTech</span>. She builds and scales digital platforms by combining
                  software development, search intelligence, and applied data modeling. Her work spans multi-domain web infrastructures,
                  SaaS tools, automation systems, and content-driven platforms.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="py-12 border-b bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-primary flex justify-center mb-2">{stat.icon}</div>
                  <div className="text-3xl font-black text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Full Bio */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl grid lg:grid-cols-[1fr_320px] gap-14">
            <div>
              <h2 className="text-3xl font-black mb-8 tracking-tight">About Rabeea</h2>

              <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  She has independently developed and managed over <strong className="text-foreground">25 niche web assets</strong>, handling full-stack development, SEO architecture, analytics optimization, and monetization systems. Each project reflects her methodology of building compounding digital infrastructure — platforms that grow in authority and revenue over time.
                </p>
                <p>
                  Beyond infrastructure building, she actively explores <strong className="text-foreground">AI systems, data science applications, and scalable intelligent technologies</strong>. She maintains projects on GitHub and Kaggle focused on applied analytics and automation — ranging from NLP pipelines to web scraping frameworks.
                </p>
                <p>
                  Her long-term focus is on designing <strong className="text-foreground">scalable AI-powered digital ecosystems</strong> that merge software engineering, data intelligence, and real-world impact. She approaches each project not as a product launch but as a long-lived digital asset — designed to serve users and rank authoritatively for years.
                </p>
                <p>
                  ImageToText.fun is one such asset — a high-authority OCR platform built with technical depth, privacy-first architecture, and the kind of content infrastructure that earns lasting search visibility.
                </p>
              </div>

              {/* Expertise grid */}
              <h2 className="text-3xl font-black mt-14 mb-8 tracking-tight">Areas of Expertise</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {expertise.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className={`p-5 rounded-2xl bg-gradient-to-br border ${item.color}`}
                  >
                    <div className="text-primary mb-3">{item.icon}</div>
                    <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* Projects */}
              <h2 className="text-3xl font-black mt-14 mb-8 tracking-tight">Notable Projects</h2>
              <div className="space-y-4">
                {projects.map((proj, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex gap-4 p-5 rounded-2xl border bg-card hover:border-primary/30 transition-colors group"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${proj.color} flex items-center justify-center shrink-0 shadow-sm`}>
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-base group-hover:text-primary transition-colors">{proj.name}</h3>
                        <Badge variant="outline" className="text-xs px-2 py-0">{proj.tag}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{proj.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick info card */}
              <div className="bg-gradient-to-br from-primary/10 to-cyan-500/10 border border-primary/20 rounded-2xl p-6">
                <h3 className="font-bold mb-5 text-base">Quick Facts</h3>
                <ul className="space-y-3 text-sm">
                  {[
                    ["Role", "AI & SaaS Developer"],
                    ["Company", "NovatraTech (Founder)"],
                    ["Focus", "AI, Data, Web Systems"],
                    ["Assets", "25+ Web Properties"],
                    ["Platforms", "GitHub, Kaggle"],
                  ].map(([label, value]) => (
                    <li key={label} className="flex justify-between gap-4">
                      <span className="text-muted-foreground shrink-0">{label}</span>
                      <span className="font-semibold text-right">{value}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-col gap-2">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="w-full gap-2 rounded-xl text-xs font-semibold">
                      <Github className="h-4 w-4" /> GitHub Profile
                    </Button>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="w-full gap-2 rounded-xl text-xs font-semibold">
                      <Linkedin className="h-4 w-4" /> LinkedIn
                    </Button>
                  </a>
                </div>
              </div>

              {/* NovatraTech card */}
              <div className="rounded-2xl border overflow-hidden">
                <div className="h-24 bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-700 flex items-center justify-center">
                  <span className="text-white font-black text-2xl tracking-tight">NovatraTech</span>
                </div>
                <div className="p-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A portfolio digital ecosystem combining AI tools, SEO infrastructure, and scalable content platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Author's articles */}
        <section className="py-20 px-4 bg-muted/40 border-t">
          <div className="container mx-auto max-w-5xl">
            <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
              <div>
                <h2 className="text-3xl font-black tracking-tight">Articles by Rabeea</h2>
                <p className="text-muted-foreground mt-1">OCR insights, AI tutorials, and data-driven development guides.</p>
              </div>
              <Link href="/blog">
                <Button variant="outline" className="rounded-xl font-semibold" data-testid="link-all-articles">
                  All Articles <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.slice(0, 6).map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <article
                      data-testid={`card-author-blog-${post.slug}`}
                      className="group rounded-2xl overflow-hidden border bg-card hover:shadow-lg hover:shadow-primary/10 transition-all cursor-pointer h-full flex flex-col"
                    >
                      <div className={`h-36 bg-gradient-to-br ${blogGradients[i % blogGradients.length]} flex items-center justify-center relative`}>
                        <div className="absolute inset-0 opacity-20" style={{
                          backgroundImage: "radial-gradient(circle at 30% 70%, rgba(255,255,255,0.2) 0%, transparent 60%)"
                        }} />
                        <BookOpen className="h-12 w-12 text-white/70" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                          <Calendar className="h-3 w-3" />
                          <time>{post.date}</time>
                          <span>·</span>
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </div>
                        <h3 className="font-bold text-sm leading-snug group-hover:text-primary transition-colors line-clamp-2 flex-1">
                          {post.title}
                        </h3>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

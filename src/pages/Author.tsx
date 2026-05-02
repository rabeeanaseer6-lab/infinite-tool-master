import { Link } from "wouter";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useSEO } from "@/hooks/use-seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { blogPosts } from "@/data/content";
import { Button } from "@/components/ui/button";
import { useRef, useState, useEffect } from "react";
import {
  Github, Linkedin, ExternalLink, ArrowRight, ArrowLeft,
  BookOpen, Globe, Brain, Code2, Database, TrendingUp,
  Layers, ChevronRight, Zap, Star, BarChart2, Calendar, Clock, Link2
} from "lucide-react";

const blogGradients = [
  "from-violet-600 to-purple-800",
  "from-blue-600 to-cyan-700",
  "from-emerald-600 to-teal-800",
  "from-orange-600 to-red-700",
  "from-pink-600 to-rose-700",
  "from-indigo-600 to-blue-800",
];

const skills = [
  "AI Systems", "SaaS Development", "Data Engineering", "SEO Architecture",
  "Web Automation", "Python", "React", "Predictive Analytics", "Full-Stack",
  "User Behavior Modeling", "Analytics Pipelines", "NLP", "Kaggle", "GitHub",
  "Revenue Systems", "Digital Ecosystems", "Machine Learning", "TypeScript"
];

const expertise = [
  { icon: <Brain className="h-8 w-8" />, title: "AI & Machine Learning", desc: "Intelligent automation, predictive systems, and applied AI pipelines.", grad: "from-violet-500 to-purple-600" },
  { icon: <Code2 className="h-8 w-8" />, title: "SaaS Development", desc: "End-to-end product engineering — from architecture to revenue.", grad: "from-blue-500 to-cyan-600" },
  { icon: <TrendingUp className="h-8 w-8" />, title: "SEO Architecture", desc: "Search intelligence, content systems, and multi-domain authority.", grad: "from-emerald-500 to-teal-600" },
  { icon: <Database className="h-8 w-8" />, title: "Data Engineering", desc: "Analytics pipelines, predictive modeling, and data-driven systems.", grad: "from-orange-500 to-amber-600" },
  { icon: <Globe className="h-8 w-8" />, title: "Web Infrastructure", desc: "25+ digital assets — automated, monetized, and performance-driven.", grad: "from-rose-500 to-pink-600" },
  { icon: <Layers className="h-8 w-8" />, title: "Automation Systems", desc: "Self-optimizing workflows that compound in value over time.", grad: "from-indigo-500 to-blue-600" },
];

const projects = [
  { name: "ImageToText.fun", role: "Creator & Lead Developer", desc: "High-authority OCR platform with 15+ specialized tools, a full blog library, and privacy-first client-side processing.", tag: "SaaS Tool", color: "from-indigo-600 to-cyan-600", icon: "🔍" },
  { name: "NovatraTech", role: "Founder", desc: "A portfolio digital ecosystem — combining AI tools, SEO infrastructure, and scalable content platforms engineered for longevity.", tag: "Digital Ecosystem", color: "from-violet-600 to-pink-600", icon: "🚀" },
  { name: "Kaggle Projects", role: "Data Scientist", desc: "Applied analytics notebooks covering NLP, predictive systems, automation frameworks, and real-world data experiments.", tag: "Data Science", color: "from-emerald-600 to-teal-600", icon: "📊" },
  { name: "GitHub Automation", role: "Open Source Developer", desc: "Open-source tools for web scraping, OCR pipelines, SEO automation, and AI integrations across production systems.", tag: "Open Source", color: "from-orange-600 to-amber-600", icon: "⚙️" },
];

const stats = [
  { value: "25+", label: "Web Assets Built", icon: <Globe className="h-6 w-6" /> },
  { value: "5+", label: "Years Building", icon: <Star className="h-6 w-6" /> },
  { value: "AI+Data", label: "Core Stack", icon: <Brain className="h-6 w-6" /> },
  { value: "Full-Stack", label: "Engineering", icon: <Zap className="h-6 w-6" /> },
];

function AnimatedCounter({ target }: { target: string }) {
  const isNumeric = /^\d+/.test(target);
  const num = parseInt(target);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!isNumeric || started) return;
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setStarted(true); observer.disconnect(); }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isNumeric, started]);

  useEffect(() => {
    if (!started || !isNumeric) return;
    let start = 0;
    const duration = 1200;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * num));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, num, isNumeric]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-black">
      {isNumeric ? `${count}+` : target}
    </div>
  );
}

export default function Author() {
  useSEO({
    title: "Rabeea Naseer — Founder @ NovatraTech | AI & Data-Driven Systems Developer",
    description: "Rabeea Naseer is an AI & data-driven systems developer and founder of NovatraTech, building scalable SaaS products, automated web infrastructures, and data-intelligent digital ecosystems."
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Project carousel
  const [projIndex, setProjIndex] = useState(0);
  const nextProj = () => setProjIndex(i => (i + 1) % projects.length);
  const prevProj = () => setProjIndex(i => (i - 1 + projects.length) % projects.length);

  // Skills ticker speed
  const tickerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen flex flex-col bg-background overflow-x-hidden">
      <Header />

      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b0720] via-[#1a1040] to-[#0d1a3a]" />

        {/* Animated grid */}
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: "linear-gradient(#a78bfa 1px, transparent 1px), linear-gradient(90deg, #a78bfa 1px, transparent 1px)",
          backgroundSize: "48px 48px"
        }} />

        {/* Blobs */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 pointer-events-none">
          <motion.div animate={{ scale: [1, 1.15, 1], x: [0, 30, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ background: "radial-gradient(circle, #6366f1, #8b5cf6)" }} />
          <motion.div animate={{ scale: [1, 1.2, 1], x: [0, -20, 0] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-15"
            style={{ background: "radial-gradient(circle, #06b6d4, #3b82f6)" }} />
          <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full blur-3xl opacity-10"
            style={{ background: "radial-gradient(circle, #ec4899, #8b5cf6)" }} />
        </motion.div>

        {/* Floating dots */}
        {[...Array(20)].map((_, i) => (
          <motion.div key={i}
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
            className="absolute w-1 h-1 rounded-full bg-white/40"
            style={{ left: `${5 + (i * 4.7) % 90}%`, top: `${10 + (i * 7.3) % 80}%` }}
          />
        ))}

        <motion.div style={{ opacity: heroOpacity }} className="relative container mx-auto px-4 max-w-6xl py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Text */}
            <div>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Founder @ NovatraTech", "AI Developer", "Data Systems"].map((tag, i) => (
                    <motion.span key={tag} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="px-3 py-1 rounded-full text-xs font-bold border border-white/20 bg-white/10 text-white/90 backdrop-blur-sm">
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <h1 className="text-5xl md:text-7xl font-black text-white mb-4 leading-none tracking-tight">
                  Rabeea<br />
                  <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Naseer</span>
                </h1>

                <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg">
                  Building <span className="text-white font-semibold">scalable SaaS</span>, automation systems, and data-intelligent web ecosystems at the intersection of AI and software engineering.
                </p>

                <div className="flex flex-wrap gap-3">
                  <a href="https://rabeeanaseer.online" target="_blank" rel="noopener noreferrer" data-testid="link-hero-portfolio">
                    <Button className="rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700 text-white font-bold gap-2 shadow-lg shadow-violet-900/30 border-0">
                      <Link2 className="h-4 w-4" /> Portfolio
                    </Button>
                  </a>
                  <a href="https://www.linkedin.com/in/rabeea-naseer-045b4a337/" target="_blank" rel="noopener noreferrer" data-testid="link-hero-linkedin">
                    <Button className="rounded-xl bg-[#0077b5] hover:bg-[#006399] text-white font-bold gap-2 shadow-lg shadow-blue-900/30">
                      <Linkedin className="h-4 w-4" /> LinkedIn
                    </Button>
                  </a>
                  <a href="https://github.com/rabeeanaseer6-lab" target="_blank" rel="noopener noreferrer" data-testid="link-hero-github">
                    <Button variant="outline" className="rounded-xl border-white/20 text-white hover:bg-white/10 font-bold gap-2 backdrop-blur-sm">
                      <Github className="h-4 w-4" /> GitHub
                    </Button>
                  </a>
                  <Link href="/blog">
                    <Button variant="ghost" className="rounded-xl text-white/70 hover:text-white hover:bg-white/10 font-semibold gap-2">
                      Read Articles <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right: Visual card */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block">
              <div className="relative">
                {/* Main card */}
                <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md p-8 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500 via-indigo-600 to-cyan-500 flex items-center justify-center shadow-xl shadow-violet-900/40">
                      <span className="text-4xl font-black text-white">R</span>
                    </div>
                    <div>
                      <p className="text-white font-black text-xl">Rabeea Naseer</p>
                      <p className="text-violet-300 text-sm font-semibold">Founder, NovatraTech</p>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />)}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      { label: "Web Assets", val: "25+" },
                      { label: "Experience", val: "5+ yrs" },
                      { label: "Stack", val: "AI+Data" },
                      { label: "Focus", val: "SaaS" },
                    ].map(item => (
                      <div key={item.label} className="bg-white/5 rounded-xl p-3 border border-white/10">
                        <p className="text-xs text-slate-400">{item.label}</p>
                        <p className="text-white font-black text-lg">{item.val}</p>
                      </div>
                    ))}
                  </div>

                  {/* Skill pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {["AI Systems", "Python", "React", "SEO", "SaaS", "Analytics"].map(s => (
                      <span key={s} className="px-2.5 py-1 rounded-full text-xs font-semibold bg-violet-500/20 text-violet-300 border border-violet-500/20">{s}</span>
                    ))}
                  </div>

                  {/* Portfolio link */}
                  <a href="https://rabeeanaseer.online" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-violet-500/20 to-cyan-500/20 border border-violet-500/20 hover:border-violet-400/40 transition-colors group">
                    <Link2 className="h-4 w-4 text-violet-400 shrink-0" />
                    <span className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">rabeeanaseer.online</span>
                    <ExternalLink className="h-3 w-3 text-white/40 ml-auto group-hover:text-white/70 transition-colors" />
                  </a>
                </div>

                {/* Floating mini cards */}
                <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 bg-emerald-500 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg shadow-emerald-900/30 flex items-center gap-2">
                  <BarChart2 className="h-4 w-4" /> Building Ecosystems
                </motion.div>
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 -left-4 bg-violet-600 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg shadow-violet-900/30 flex items-center gap-2">
                  <Zap className="h-4 w-4" /> AI-Powered Systems
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs font-semibold tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </section>

      {/* ─── SKILLS TICKER ─────────────────────────────────────── */}
      <div className="py-6 bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-8 whitespace-nowrap"
          ref={tickerRef}
        >
          {[...skills, ...skills].map((skill, i) => (
            <span key={i} className="text-white font-bold text-sm flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/60 inline-block" />
              {skill}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ─── STATS ─────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group rounded-3xl border bg-background p-8 text-center overflow-hidden hover:border-primary/40 transition-colors"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="text-primary flex justify-center mb-3 opacity-80">{stat.icon}</div>
                  <AnimatedCounter target={stat.value} />
                  <p className="text-sm text-muted-foreground mt-2 font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─────────────────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-3xl bg-gradient-to-br from-violet-600 via-indigo-700 to-blue-800 p-1 shadow-2xl shadow-violet-500/20">
                <div className="rounded-[22px] bg-gradient-to-br from-[#0f0c29] to-[#1a1050] p-8">
                  <p className="text-xs font-bold text-violet-400 uppercase tracking-widest mb-6">Who I Am</p>

                  {[
                    { icon: "🧠", text: "AI & data-driven systems developer" },
                    { icon: "🏗️", text: "Founder of NovatraTech" },
                    { icon: "📦", text: "Built 25+ niche web assets independently" },
                    { icon: "🔗", text: "Software + SEO + Data science intersection" },
                    { icon: "📈", text: "Self-optimizing, revenue-driven platforms" },
                    { icon: "🌐", text: "Published on GitHub & Kaggle" },
                  ].map((item, i) => (
                    <motion.div key={i}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-3 py-3 border-b border-white/5 last:border-0"
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-white/80 text-sm font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decorative glow */}
              <div className="absolute -inset-4 rounded-3xl bg-violet-600/10 blur-3xl -z-10" />
            </motion.div>

            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h2 className="text-4xl font-black tracking-tight mb-6">
                Engineering systems<br />
                <span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">that compound</span>
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>She combines <strong className="text-foreground">full-stack engineering with SEO architecture, data analytics, and user behavior modeling</strong> to transform websites into automated, performance-driven systems — not static builds.</p>
                <p>Her work integrates <strong className="text-foreground">analytics pipelines and AI automation</strong> to optimize decision-making, user flows, and scalable growth continuously.</p>
                <p>Her long-term focus: engineering <strong className="text-foreground">intelligent, self-optimizing digital ecosystems</strong> where AI and data continuously enhance performance and impact.</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="https://rabeeanaseer.online" target="_blank" rel="noopener noreferrer" data-testid="link-about-portfolio">
                  <Button className="rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700 text-white font-bold gap-2 border-0">
                    <Link2 className="h-4 w-4" /> Portfolio
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/rabeea-naseer-045b4a337/" target="_blank" rel="noopener noreferrer">
                  <Button className="rounded-xl bg-[#0077b5] hover:bg-[#006399] text-white font-bold gap-2" data-testid="link-about-linkedin">
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </Button>
                </a>
                <a href="https://github.com/rabeeanaseer6-lab" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="rounded-xl font-bold gap-2" data-testid="link-about-github">
                    <Github className="h-4 w-4" /> GitHub
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── EXPERTISE CAROUSEL ────────────────────────────────── */}
      <section className="py-24 px-4 bg-muted/20 overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Skill Set</p>
            <h2 className="text-4xl font-black tracking-tight">Areas of Expertise</h2>
          </motion.div>

          {/* Draggable horizontal scroll */}
          <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide cursor-grab active:cursor-grabbing">
            <motion.div className="flex gap-5" style={{ width: "max-content" }}
              drag="x"
              dragConstraints={{ right: 0, left: -(expertise.length * 260 - 800) }}
            >
              {expertise.map((item, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="w-60 shrink-0 rounded-3xl border bg-background p-6 select-none"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.grad} flex items-center justify-center text-white mb-5 shadow-lg`}>
                    {item.icon}
                  </div>
                  <h3 className="font-black text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-4 opacity-60">← Drag to explore →</p>
        </div>
      </section>

      {/* ─── PROJECTS SLIDER ───────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-end justify-between mb-10 flex-wrap gap-4"
          >
            <div>
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Portfolio</p>
              <h2 className="text-4xl font-black tracking-tight">Notable Projects</h2>
            </div>
            <div className="flex gap-2">
              <button onClick={prevProj} className="w-11 h-11 rounded-2xl border hover:border-primary/50 hover:bg-primary/5 flex items-center justify-center transition-colors" aria-label="Previous project">
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button onClick={nextProj} className="w-11 h-11 rounded-2xl border hover:border-primary/50 hover:bg-primary/5 flex items-center justify-center transition-colors" aria-label="Next project">
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </motion.div>

          <div className="relative overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div key={projIndex}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className={`rounded-3xl bg-gradient-to-br ${projects[projIndex].color} p-px shadow-2xl`}>
                  <div className="rounded-[22px] bg-background p-10 grid md:grid-cols-[1fr_auto] gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-4xl">{projects[projIndex].icon}</span>
                        <div>
                          <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{projects[projIndex].tag}</p>
                          <h3 className="text-2xl font-black">{projects[projIndex].name}</h3>
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-primary mb-3">{projects[projIndex].role}</p>
                      <p className="text-muted-foreground leading-relaxed">{projects[projIndex].desc}</p>
                    </div>
                    <div className={`hidden md:flex w-32 h-32 rounded-3xl bg-gradient-to-br ${projects[projIndex].color} items-center justify-center shadow-xl text-5xl`}>
                      {projects[projIndex].icon}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {projects.map((_, i) => (
                <button key={i} onClick={() => setProjIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === projIndex ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
                  aria-label={`Go to project ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── ARTICLES GRID ─────────────────────────────────────── */}
      <section className="py-24 px-4 bg-muted/20 border-t">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-end justify-between mb-10 flex-wrap gap-4"
          >
            <div>
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Writing</p>
              <h2 className="text-4xl font-black tracking-tight">Articles by Rabeea</h2>
            </div>
            <Link href="/blog">
              <Button variant="outline" className="rounded-xl font-semibold gap-2" data-testid="link-all-articles">
                All Articles <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogPosts.slice(0, 6).map((post, i) => (
              <motion.div key={post.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -4 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <article data-testid={`card-author-blog-${post.slug}`}
                    className="group rounded-3xl overflow-hidden border bg-background hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all cursor-pointer h-full flex flex-col"
                  >
                    <div className={`h-40 bg-gradient-to-br ${blogGradients[i % blogGradients.length]} flex items-center justify-center relative overflow-hidden`}>
                      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 70%, rgba(255,255,255,0.15) 0%, transparent 60%)" }} />
                      <BookOpen className="h-14 w-14 text-white/50" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                        <Calendar className="h-3 w-3" /> {post.date}
                        <span>·</span>
                        <Clock className="h-3 w-3" /> {post.readTime}
                      </div>
                      <h3 className="font-black text-sm leading-snug group-hover:text-primary transition-colors line-clamp-2 flex-1">
                        {post.title}
                      </h3>
                      <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Read article <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONNECT CTA ───────────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#1a1050]" />
            <div className="absolute inset-0 opacity-[0.06]" style={{
              backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "32px 32px"
            }} />
            <div className="relative px-10 py-16">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center shadow-xl mb-6">
                <span className="text-3xl font-black text-white">R</span>
              </div>
              <h2 className="text-4xl font-black text-white mb-4 tracking-tight">Let's Connect</h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Explore her work on GitHub, connect on LinkedIn, or read her OCR and AI articles on this platform.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://rabeeanaseer.online" target="_blank" rel="noopener noreferrer" data-testid="link-cta-portfolio">
                  <Button size="lg" className="rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 text-white font-bold gap-2 px-8 shadow-lg shadow-violet-900/40 border-0">
                    <Link2 className="h-5 w-5" /> rabeeanaseer.online
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/rabeea-naseer-045b4a337/" target="_blank" rel="noopener noreferrer" data-testid="link-cta-linkedin">
                  <Button size="lg" className="rounded-xl bg-[#0077b5] hover:bg-[#006399] text-white font-bold gap-2 px-8 shadow-lg shadow-blue-900/40">
                    <Linkedin className="h-5 w-5" /> LinkedIn
                  </Button>
                </a>
                <a href="https://github.com/rabeeanaseer6-lab" target="_blank" rel="noopener noreferrer" data-testid="link-cta-github">
                  <Button size="lg" variant="outline" className="rounded-xl border-white/20 text-white hover:bg-white/10 font-bold gap-2 px-8 backdrop-blur-sm">
                    <Github className="h-5 w-5" /> GitHub
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

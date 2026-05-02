import { Link } from "wouter";
import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useSEO } from "@/hooks/use-seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OCREngine } from "@/components/OCREngine";
import { tools } from "@/data/tools";
import { blogPosts } from "@/data/content";
import {
  CheckCircle2, Zap, Shield, Globe, Layers, FastForward,
  ScanText, FileText, ImageIcon, PenLine, Monitor, Aperture,
  Receipt, CreditCard, Code2, Braces, Laugh, Scale, BookOpen, Car, Instagram,
  ArrowRight, ChevronRight, Clock, Star, Users, TrendingUp
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ReactNode> = {
  ScanText: <ScanText className="h-6 w-6" />,
  FileText: <FileText className="h-6 w-6" />,
  ImageIcon: <ImageIcon className="h-6 w-6" />,
  PenLine: <PenLine className="h-6 w-6" />,
  Monitor: <Monitor className="h-6 w-6" />,
  Aperture: <Aperture className="h-6 w-6" />,
  Receipt: <Receipt className="h-6 w-6" />,
  CreditCard: <CreditCard className="h-6 w-6" />,
  Code2: <Code2 className="h-6 w-6" />,
  Braces: <Braces className="h-6 w-6" />,
  Laugh: <Laugh className="h-6 w-6" />,
  Scale: <Scale className="h-6 w-6" />,
  BookOpen: <BookOpen className="h-6 w-6" />,
  Car: <Car className="h-6 w-6" />,
  Instagram: <Instagram className="h-6 w-6" />,
};

const blogGradients = [
  "from-violet-500 to-purple-700",
  "from-blue-500 to-cyan-600",
  "from-emerald-500 to-teal-700",
  "from-orange-500 to-red-600",
  "from-pink-500 to-rose-600",
  "from-indigo-500 to-blue-700",
];

function AnimatedCounter({ target, suffix = "" }: { target: number | string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || typeof target === "string") return;
    let start = 0;
    const duration = 1500;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {typeof target === "string" ? target : count}{suffix}
    </span>
  );
}

function FadeInSection({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const faqs = [
  { q: "Is my data secure?", a: "Yes, absolutely. ImageToText.fun operates 100% in your browser using WebAssembly. Your images are never uploaded to any server, making it completely private and secure. Not a single pixel of your image ever leaves your device." },
  { q: "What image file formats are supported?", a: "We support all standard web image formats including JPG/JPEG, PNG, WebP, BMP, and TIFF. You can also paste images directly from your clipboard using Ctrl+V (or Cmd+V on Mac) and even load images from a URL." },
  { q: "Is ImageToText.fun really free?", a: "Yes, completely free with no hidden fees. Since all processing happens on your device using WebAssembly, we have minimal server costs, allowing us to offer this tool 100% free with no usage limits." },
  { q: "How accurate is the OCR?", a: "Accuracy depends on image quality. For clear, high-resolution images, accuracy is typically 95–99%. For blurry, handwritten, or unusual fonts, it may be lower. We recommend at least 300 DPI for best results." },
  { q: "Which languages are supported?", a: "We support over 50 languages including English, Spanish, French, German, Chinese (Simplified & Traditional), Japanese, Korean, Arabic, Russian, Portuguese, Hindi, and many more." },
  { q: "Can I extract text from handwritten notes?", a: "Yes! Our Handwriting to Text tool uses Tesseract's 'best' mode for handwriting recognition. For best results, write clearly with dark ink on light paper and ensure even lighting when photographing." },
  { q: "How do I extract text from a PDF?", a: "Take a screenshot of the PDF page and upload it to any of our tools. For multi-page PDFs, process each page screenshot individually." },
  { q: "Why is my extracted text inaccurate?", a: "Low image quality is the most common cause. Ensure your image is well-lit, in focus, and has sufficient contrast. Skewed or rotated text can also reduce accuracy — try rotating the image before scanning." },
  { q: "Does it work on mobile devices?", a: "Yes! ImageToText.fun is fully responsive and works on smartphones and tablets. You can take a photo with your camera, select it from your gallery, or paste from clipboard." },
  { q: "Can I process multiple images at once?", a: "Currently each scan processes one image at a time. For batch processing needs, you can process multiple images sequentially without any usage limits." },
  { q: "What is the maximum image size?", a: "While there's no hard limit, very large images (above 10MB) may take longer to process due to browser memory constraints. We recommend resizing images to 2000px width for optimal performance." },
  { q: "Can I download the extracted text as a PDF?", a: "Yes! After extraction, click the 'PDF' download button to save the extracted text as a properly formatted PDF document. You can also download as TXT or copy to clipboard." },
  { q: "Is an account or signup required?", a: "No account, no signup, no email required. Open the site, upload an image, and start extracting text immediately. It's truly instant." },
  { q: "How does client-side OCR work?", a: "We use Tesseract.js, a WebAssembly port of the Tesseract OCR engine, which runs entirely in your browser tab. Your image stays on your device while our OCR code processes it locally." },
  { q: "Can I use this for commercial projects?", a: "Yes, extracted text is yours to use however you like. There are no restrictions on commercial use of text you extract from your own images." },
  { q: "Does it work offline?", a: "After the initial page load, yes — the language data is downloaded once and cached in your browser. Subsequent uses of the same language work without an internet connection." },
  { q: "What is the difference between your tool pages?", a: "Each tool page is optimized with specific Tesseract settings for that content type. For example, the Receipt to Excel tool uses table-aware segmentation, while the Handwriting tool uses the 'best' trained neural network." },
  { q: "Can I extract text from receipts and invoices?", a: "Absolutely. Our Receipt to Excel tool is specifically designed for this. It extracts merchant names, dates, totals, and line items, which you can download as CSV for spreadsheet import." },
  { q: "Is my data stored or logged?", a: "No. We do not store, log, or have any access to your images or the text you extract. The processing is entirely local, so there's nothing to store on our end." },
  { q: "What browsers are supported?", a: "Chrome, Firefox, Edge, and Safari (modern versions) are all supported. We recommend Chrome or Edge for the best WebAssembly performance." },
];

export default function Home() {
  useSEO({ 
    title: "ImageToText.fun | Free Online OCR & Text Extraction", 
    description: "The world's fastest, 100% private, client-side OCR tool. Extract text from any image instantly in your browser. 50+ languages, zero uploads, completely free."
  });

  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">

        {/* ── HERO ────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden min-h-[90vh] flex items-center">
          {/* Layered gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]" />
          
          {/* Animated grid pattern */}
          <div className="absolute inset-0 opacity-[0.06]" style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }} />

          {/* Floating blobs */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], x: [0, 20, 0], y: [0, -15, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, #6366f1 0%, #4f46e5 100%)" }}
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], x: [0, -25, 0], y: [0, 20, 0] }}
            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full opacity-15 blur-3xl"
            style={{ background: "radial-gradient(circle, #06b6d4 0%, #0891b2 100%)" }}
          />

          <div className="relative container mx-auto px-4 py-24 grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text + CTA */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge className="mb-6 px-4 py-1.5 text-sm font-semibold bg-primary/20 text-primary border-primary/30 hover:bg-primary/30">
                  100% Free — No Sign-up Required
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-white mb-6"
              >
                Extract Text<br />
                from <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-teal-400">Any Image</span><br />
                Instantly
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-xl text-slate-300 mb-10 leading-relaxed max-w-xl"
              >
                Powered by Tesseract.js — your images never leave your browser. 
                50+ languages, handwriting, receipts, legal docs, and more.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/image-to-text">
                  <Button size="lg" className="px-8 py-6 text-base font-bold rounded-xl shadow-lg shadow-primary/40 hover:shadow-primary/60 transition-shadow" data-testid="button-hero-start">
                    Start Scanning Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="#tools">
                  <Button size="lg" variant="outline" className="px-8 py-6 text-base font-bold rounded-xl border-white/20 text-white hover:bg-white/10 hover:border-white/30">
                    View All Tools
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-slate-400 text-sm"
              >
                {["No uploads to server", "Zero data storage", "Works offline", "Open source engine"].map(t => (
                  <span key={t} className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    {t}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right: OCR Demo Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Glow behind card */}
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/30 to-cyan-500/30 rounded-3xl blur-xl" />
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                <div className="p-4 border-b border-white/10 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-2 text-slate-400 text-xs font-mono">imagetotext.fun — OCR Engine</span>
                </div>
                <div className="p-4">
                  <OCREngine />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── STATS ───────────────────────────────────────────────────── */}
        <section className="py-14 bg-background border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: 50, suffix: "+", label: "Languages Supported", icon: <Globe className="h-6 w-6" /> },
                { value: "100%", suffix: "", label: "Free Forever", icon: <Star className="h-6 w-6" /> },
                { value: 0, suffix: "", label: "Server Uploads", icon: <Shield className="h-6 w-6" /> },
                { value: 15, suffix: "+", label: "Specialized Tools", icon: <Layers className="h-6 w-6" /> },
              ].map((stat, i) => (
                <FadeInSection key={i} delay={i * 0.1}>
                  <div className="flex flex-col items-center gap-2">
                    <div className="text-primary mb-1">{stat.icon}</div>
                    <div className="text-4xl md:text-5xl font-black text-foreground tracking-tight">
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── TOOLS DIRECTORY ─────────────────────────────────────────── */}
        <section id="tools" className="py-28 px-4">
          <div className="container mx-auto">
            <FadeInSection>
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4 px-4 py-1 text-primary border-primary/30">Specialized Tools</Badge>
                <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">A Tool for Every OCR Task</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  Whatever you need to scan, we have a purpose-built tool optimized for exactly that.
                </p>
              </div>
            </FadeInSection>
          
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {tools.map((tool, i) => (
                <FadeInSection key={tool.path} delay={Math.min(i * 0.05, 0.4)}>
                  <Link href={tool.path}>
                    <Card
                      data-testid={`card-tool-${tool.path.replace("/", "")}`}
                      className="h-full hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer group relative overflow-hidden"
                    >
                      {/* Subtle hover gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-300" />
                      <CardContent className="p-5 relative">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                          {iconMap[tool.icon] ?? <ScanText className="h-6 w-6" />}
                        </div>
                        <h3 className="font-bold text-base mb-1 group-hover:text-primary transition-colors leading-tight">{tool.name}</h3>
                        <p className="text-sm text-muted-foreground leading-snug">{tool.desc}</p>
                        <div className="mt-4 flex items-center text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0 duration-200">
                          Open Tool <ChevronRight className="h-3.5 w-3.5 ml-0.5" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ────────────────────────────────────────────── */}
        <section className="py-28 px-4 bg-muted/40 border-y">
          <div className="container mx-auto">
            <FadeInSection>
              <div className="text-center mb-20">
                <Badge variant="outline" className="mb-4 px-4 py-1 text-primary border-primary/30">Simple Process</Badge>
                <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">How It Works</h2>
                <p className="text-muted-foreground max-w-xl mx-auto text-lg">Five steps from image to text. No account, no upload, no waiting.</p>
              </div>
            </FadeInSection>
            
            <div className="relative">
              {/* Connector line */}
              <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
                {[
                  { step: "01", title: "Upload Image", desc: "Drag & drop, paste from clipboard, enter a URL, or select from your device.", icon: <ImageIcon className="h-6 w-6" /> },
                  { step: "02", title: "Select Language", desc: "Choose from 50+ supported languages including RTL scripts and CJK characters.", icon: <Globe className="h-6 w-6" /> },
                  { step: "03", title: "Local Processing", desc: "Our WebAssembly engine scans your image entirely in the browser. No server contact.", icon: <Zap className="h-6 w-6" /> },
                  { step: "04", title: "Review Text", desc: "Check and edit the extracted text in the built-in rich text editor.", icon: <FileText className="h-6 w-6" /> },
                  { step: "05", title: "Export Anywhere", desc: "Copy to clipboard, download as TXT, or save as a formatted PDF.", icon: <TrendingUp className="h-6 w-6" /> },
                ].map((item, i) => (
                  <FadeInSection key={i} delay={i * 0.12}>
                    <div className="text-center flex flex-col items-center">
                      <div className="relative mb-6">
                        <div className="w-20 h-20 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/30 z-10 relative">
                          {item.icon}
                        </div>
                        <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-background border-2 border-primary text-primary text-xs font-black flex items-center justify-center">
                          {item.step}
                        </div>
                      </div>
                      <h3 className="font-bold text-base mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </FadeInSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ───────────────────────────────────────────── */}
        <section className="py-28 px-4">
          <div className="container mx-auto">
            <FadeInSection>
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4 px-4 py-1 text-primary border-primary/30">Our Advantage</Badge>
                <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Why Choose ImageToText.fun</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">The most reliable, private, and capable free OCR tool available anywhere.</p>
              </div>
            </FadeInSection>
          
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Shield className="h-7 w-7" />, title: "Zero Privacy Risk", desc: "Processing happens entirely in your browser. Your images never touch our servers — ever. Not even metadata.", color: "from-emerald-500/20 to-teal-500/20", border: "border-emerald-500/20" },
                { icon: <Zap className="h-7 w-7" />, title: "WebAssembly Fast", desc: "Tesseract runs as native-speed WebAssembly. Typical scans complete in 2–5 seconds, not minutes.", color: "from-yellow-500/20 to-orange-500/20", border: "border-yellow-500/20" },
                { icon: <Globe className="h-7 w-7" />, title: "50+ World Languages", desc: "Support for Latin, Cyrillic, CJK, Arabic, Devanagari, and more — including right-to-left scripts.", color: "from-blue-500/20 to-indigo-500/20", border: "border-blue-500/20" },
                { icon: <Layers className="h-7 w-7" />, title: "Complex Layouts", desc: "Handles multi-column documents, tables, mixed fonts, and documents with graphics alongside text.", color: "from-purple-500/20 to-violet-500/20", border: "border-purple-500/20" },
                { icon: <CheckCircle2 className="h-7 w-7" />, title: "Neural Network Accuracy", desc: "LSTM-based deep learning engine achieves 95–99% accuracy on clear, properly lit documents.", color: "from-pink-500/20 to-rose-500/20", border: "border-pink-500/20" },
                { icon: <FastForward className="h-7 w-7" />, title: "No Account Needed", desc: "Open the page, drop your image, get your text. No sign-up, no trial, no paywall. Ever.", color: "from-cyan-500/20 to-sky-500/20", border: "border-cyan-500/20" },
              ].map((feature, i) => (
                <FadeInSection key={i} delay={i * 0.08}>
                  <div className={`p-6 rounded-2xl bg-gradient-to-br ${feature.color} border ${feature.border} hover:scale-[1.02] transition-transform duration-300`}>
                    <div className="text-primary mb-4">{feature.icon}</div>
                    <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── BLOG PREVIEW ────────────────────────────────────────────── */}
        <section className="py-28 px-4 bg-muted/40 border-y">
          <div className="container mx-auto">
            <FadeInSection>
              <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
                <div>
                  <Badge variant="outline" className="mb-4 px-4 py-1 text-primary border-primary/30">From the Blog</Badge>
                  <h2 className="text-4xl md:text-5xl font-black tracking-tight">Latest Articles</h2>
                  <p className="text-muted-foreground mt-2 text-lg">Deep dives into OCR, AI, and document processing.</p>
                </div>
                <Link href="/blog">
                  <Button variant="outline" className="rounded-xl font-semibold" data-testid="link-view-all-blog">
                    View All Articles
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredPosts.map((post, i) => (
                <FadeInSection key={post.slug} delay={i * 0.12}>
                  <Link href={`/blog/${post.slug}`}>
                    <article
                      data-testid={`card-blog-${post.slug}`}
                      className="group rounded-2xl overflow-hidden border bg-card hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer h-full flex flex-col"
                    >
                      {/* Featured image gradient */}
                      <div className={`relative h-52 bg-gradient-to-br ${blogGradients[i % blogGradients.length]} overflow-hidden`}>
                        <div className="absolute inset-0 opacity-30" style={{
                          backgroundImage: "linear-gradient(45deg, rgba(255,255,255,.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,.1) 75%), linear-gradient(45deg, rgba(255,255,255,.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,.1) 75%)",
                          backgroundSize: "20px 20px",
                          backgroundPosition: "0 0, 10px 10px"
                        }} />
                        {/* Central visual */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-white/80">
                            {i === 0 && <ScanText className="h-20 w-20 opacity-60" />}
                            {i === 1 && <TrendingUp className="h-20 w-20 opacity-60" />}
                            {i === 2 && <ImageIcon className="h-20 w-20 opacity-60" />}
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/30 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                            {post.readTime} read
                          </span>
                        </div>
                      </div>

                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                          <Clock className="h-3.5 w-3.5" />
                          <time>{post.date}</time>
                        </div>
                        <h3 className="font-bold text-lg leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 flex-1">{post.summary}</p>
                        <div className="mt-4 flex items-center text-sm font-semibold text-primary gap-1 group-hover:gap-2 transition-all">
                          Read article <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </article>
                  </Link>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ──────────────────────────────────────────────── */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-indigo-600 to-cyan-600" />
          <div className="absolute inset-0 opacity-[0.06]" style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "30px 30px"
          }} />
          <div className="relative container mx-auto text-center">
            <FadeInSection>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Ready to Extract Text?</h2>
              <p className="text-white/80 text-xl mb-8 max-w-xl mx-auto">Join millions of users who trust ImageToText.fun for fast, private OCR. No account needed.</p>
              <Link href="/image-to-text">
                <Button size="lg" variant="secondary" className="px-10 py-6 text-base font-bold rounded-xl shadow-xl" data-testid="button-cta-start">
                  Start Scanning for Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </FadeInSection>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────────── */}
        <section className="py-28 px-4 bg-muted/40 border-t">
          <div className="container mx-auto max-w-4xl">
            <FadeInSection>
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4 px-4 py-1 text-primary border-primary/30">Questions & Answers</Badge>
                <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Frequently Asked Questions</h2>
                <p className="text-muted-foreground text-lg">Everything you need to know about ImageToText.fun.</p>
              </div>
            </FadeInSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
              <div className="space-y-1">
                {faqs.slice(0, 10).map((faq, i) => (
                  <FadeInSection key={i} delay={i * 0.04}>
                    <Accordion type="single" collapsible>
                      <AccordionItem value={`faq-${i}`} className="border rounded-xl px-1 mb-2">
                        <AccordionTrigger className="text-sm font-semibold text-left px-3 hover:no-underline">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-muted-foreground px-3 pb-3 leading-relaxed">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </FadeInSection>
                ))}
              </div>
              <div className="space-y-1">
                {faqs.slice(10).map((faq, i) => (
                  <FadeInSection key={i} delay={i * 0.04}>
                    <Accordion type="single" collapsible>
                      <AccordionItem value={`faq-b-${i}`} className="border rounded-xl px-1 mb-2">
                        <AccordionTrigger className="text-sm font-semibold text-left px-3 hover:no-underline">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-muted-foreground px-3 pb-3 leading-relaxed">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </FadeInSection>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

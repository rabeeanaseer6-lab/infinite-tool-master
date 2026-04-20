import { Link, useLocation } from "wouter";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scan, Menu, ChevronDown, ScanText, FileText, ImageIcon, PenLine, Monitor, Aperture, Receipt, CreditCard, Code2, Braces, Laugh, Scale, BookOpen, Car, Instagram, Newspaper, BookMarked, History, Info, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { tools } from "@/data/tools";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const toolIconMap: Record<string, React.ReactNode> = {
  ScanText: <ScanText className="h-4 w-4" />,
  FileText: <FileText className="h-4 w-4" />,
  ImageIcon: <ImageIcon className="h-4 w-4" />,
  PenLine: <PenLine className="h-4 w-4" />,
  Monitor: <Monitor className="h-4 w-4" />,
  Aperture: <Aperture className="h-4 w-4" />,
  Receipt: <Receipt className="h-4 w-4" />,
  CreditCard: <CreditCard className="h-4 w-4" />,
  Code2: <Code2 className="h-4 w-4" />,
  Braces: <Braces className="h-4 w-4" />,
  Laugh: <Laugh className="h-4 w-4" />,
  Scale: <Scale className="h-4 w-4" />,
  BookOpen: <BookOpen className="h-4 w-4" />,
  Car: <Car className="h-4 w-4" />,
  Instagram: <Instagram className="h-4 w-4" />,
};

function MegaMenuItem({ tool }: { tool: typeof tools[0] }) {
  return (
    <Link href={tool.path}>
      <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-accent transition-colors cursor-pointer group">
        <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
          {toolIconMap[tool.icon] ?? <ScanText className="h-4 w-4" />}
        </div>
        <div className="min-w-0">
          <div className="text-sm font-semibold leading-tight truncate">{tool.name}</div>
          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{tool.desc}</p>
        </div>
      </div>
    </Link>
  );
}

type MenuKey = "all" | "students" | "business" | "developers" | "resources" | null;

export function Header() {
  const [open, setOpen] = useState<MenuKey>(null);
  const [location] = useLocation();

  const studentTools = tools.filter(t => t.category.includes("students"));
  const businessTools = tools.filter(t => t.category.includes("business"));
  const developerTools = tools.filter(t => t.category.includes("developers"));

  const toggle = (key: MenuKey) => setOpen(prev => (prev === key ? null : key));

  const NavItem = ({ id, label }: { id: MenuKey; label: string }) => (
    <button
      onClick={() => toggle(id)}
      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-colors hover:bg-accent ${open === id ? "bg-accent text-accent-foreground" : "text-foreground"}`}
      data-testid={`nav-menu-${id}`}
    >
      {label}
      <ChevronDown className={`h-3.5 w-3.5 text-muted-foreground transition-transform duration-200 ${open === id ? "rotate-180" : ""}`} />
    </button>
  );

  return (
    <>
      {/* Click-outside overlay */}
      {open && (
        <div className="fixed inset-0 z-40" onClick={() => setOpen(null)} />
      )}

      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0" onClick={() => setOpen(null)}>
            <div className="bg-primary p-1.5 rounded-lg group-hover:bg-primary/90 transition-colors shadow-sm shadow-primary/30">
              <Scan className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-black tracking-tight">ImageToText<span className="text-primary">.fun</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            <NavItem id="all" label="All Tools" />
            <NavItem id="students" label="For Students" />
            <NavItem id="business" label="For Business" />
            <NavItem id="developers" label="For Developers" />
            <NavItem id="resources" label="Resources" />
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <Link href="/image-to-text" className="hidden md:block">
              <Button size="sm" className="font-bold rounded-lg px-5 shadow-sm shadow-primary/30" data-testid="button-header-cta">
                Start Scanning
              </Button>
            </Link>

            {/* Mobile hamburger */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden" data-testid="button-mobile-menu">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[320px] p-0">
                <div className="flex items-center gap-2 p-4 border-b">
                  <Scan className="h-5 w-5 text-primary" />
                  <span className="font-black text-base">ImageToText<span className="text-primary">.fun</span></span>
                </div>
                <ScrollArea className="h-[calc(100vh-5rem)]">
                  <div className="p-4 space-y-6">
                    <div>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3 px-1">All Tools</p>
                      <div className="space-y-0.5">
                        {tools.map(tool => (
                          <Link key={tool.path} href={tool.path}>
                            <div className="flex items-center gap-2.5 px-2 py-2 rounded-lg hover:bg-accent text-sm font-medium cursor-pointer">
                              <span className="text-primary">{toolIconMap[tool.icon]}</span>
                              {tool.name}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3 px-1">Resources</p>
                      <div className="space-y-0.5">
                        {[
                          { href: "/blog", label: "Blog", icon: <Newspaper className="h-4 w-4" /> },
                          { href: "/wiki", label: "Wiki Hub", icon: <BookMarked className="h-4 w-4" /> },
                          { href: "/updates", label: "Changelog", icon: <History className="h-4 w-4" /> },
                          { href: "/about", label: "About Us", icon: <Info className="h-4 w-4" /> },
                          { href: "/contact", label: "Contact", icon: <Mail className="h-4 w-4" /> },
                          { href: "/author/rabeea-naseer", label: "Author Profile", icon: <User className="h-4 w-4" /> },
                        ].map(item => (
                          <Link key={item.href} href={item.href}>
                            <div className="flex items-center gap-2.5 px-2 py-2 rounded-lg hover:bg-accent text-sm font-medium cursor-pointer">
                              <span className="text-primary">{item.icon}</span>
                              {item.label}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <Link href="/image-to-text">
                        <Button className="w-full font-bold">Start Scanning Free</Button>
                      </Link>
                    </div>
                  </div>
                </ScrollArea>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mega Dropdown Panels */}
        <AnimatePresence>
          {open && (
            <motion.div
              key={open}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="absolute left-0 right-0 top-full bg-background border-b shadow-xl z-50"
            >
              <div className="container mx-auto px-4 py-6">

                {/* ALL TOOLS */}
                {open === "all" && (
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">All 15 Tools</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1">
                      {tools.map(tool => <MegaMenuItem key={tool.path} tool={tool} />)}
                    </div>
                  </div>
                )}

                {/* FOR STUDENTS */}
                {open === "students" && (
                  <div className="grid lg:grid-cols-[1fr_280px] gap-8">
                    <div>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">Tools for Students</p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
                        {studentTools.map(tool => <MegaMenuItem key={tool.path} tool={tool} />)}
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-2xl p-5 border border-primary/10">
                      <p className="font-bold text-sm mb-2">For Students</p>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-4">Convert handwritten notes, digitize textbook pages, extract text from professor slides, and build searchable study guides in seconds.</p>
                      <Link href="/handwriting-to-text">
                        <Button size="sm" variant="outline" className="w-full text-xs font-semibold">
                          Try Handwriting OCR
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}

                {/* FOR BUSINESS */}
                {open === "business" && (
                  <div className="grid lg:grid-cols-[1fr_280px] gap-8">
                    <div>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">Tools for Business</p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
                        {businessTools.map(tool => <MegaMenuItem key={tool.path} tool={tool} />)}
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl p-5 border border-emerald-500/10">
                      <p className="font-bold text-sm mb-2">For Business</p>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-4">Automate expense reports, digitize contracts, scan business cards, extract invoice data, and eliminate manual data entry from your workflow.</p>
                      <Link href="/receipt-to-excel">
                        <Button size="sm" variant="outline" className="w-full text-xs font-semibold">
                          Try Receipt to Excel
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}

                {/* FOR DEVELOPERS */}
                {open === "developers" && (
                  <div className="grid lg:grid-cols-[1fr_280px] gap-8">
                    <div>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">Tools for Developers</p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
                        {developerTools.map(tool => <MegaMenuItem key={tool.path} tool={tool} />)}
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-violet-500/10 to-indigo-500/10 rounded-2xl p-5 border border-violet-500/10">
                      <p className="font-bold text-sm mb-2">For Developers</p>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-4">Extract text as JSON objects, convert UI screenshots to HTML, parse code from images, and integrate OCR into your development workflow.</p>
                      <Link href="/image-to-json">
                        <Button size="sm" variant="outline" className="w-full text-xs font-semibold">
                          Try Image to JSON
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}

                {/* RESOURCES */}
                {open === "resources" && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { href: "/blog", title: "Blog", desc: "15+ in-depth articles about OCR, AI, and document processing.", icon: <Newspaper className="h-5 w-5" />, color: "from-blue-500/10 to-cyan-500/10 border-blue-500/10" },
                      { href: "/wiki", title: "OCR Wiki", desc: "Definitions of 10 essential OCR and computer vision terms.", icon: <BookMarked className="h-5 w-5" />, color: "from-purple-500/10 to-violet-500/10 border-purple-500/10" },
                      { href: "/updates", title: "Changelog", desc: "See weekly algorithm improvements and new feature releases.", icon: <History className="h-5 w-5" />, color: "from-emerald-500/10 to-teal-500/10 border-emerald-500/10" },
                      { href: "/about", title: "About Us", desc: "Our story, mission, and commitment to free, private OCR.", icon: <Info className="h-5 w-5" />, color: "from-orange-500/10 to-amber-500/10 border-orange-500/10" },
                      { href: "/author/rabeea-naseer", title: "Author", desc: "Rabeea Naseer — AI developer & founder of NovatraTech.", icon: <User className="h-5 w-5" />, color: "from-violet-500/10 to-indigo-500/10 border-violet-500/10" },
                    ].map(item => (
                      <Link key={item.href} href={item.href}>
                        <div className={`p-4 rounded-xl border bg-gradient-to-br ${item.color} hover:scale-[1.02] transition-transform cursor-pointer`}>
                          <div className="text-primary mb-2">{item.icon}</div>
                          <p className="font-bold text-sm mb-1">{item.title}</p>
                          <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

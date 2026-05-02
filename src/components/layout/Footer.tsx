import { Link } from "wouter";
import { tools } from "@/data/tools";
import { Scan, Github, Twitter, Linkedin, ExternalLink, Link2, Mail, MessageSquare } from "lucide-react";

export function Footer() {
  const popularTools = tools.slice(0, 8);
  const moreTools = tools.slice(8);

  return (
    <footer className="border-t bg-muted/40 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-1 group">
              <div className="bg-primary p-1.5 rounded-lg group-hover:bg-primary/90 transition-colors">
                <Scan className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-black tracking-tight text-base">ImageToText<span className="text-primary">.fun</span></span>
            </Link>
            <p className="text-xs text-muted-foreground mb-1 mt-2">A product by</p>
            <span className="inline-block font-bold text-sm text-foreground">NovatraTech</span>
            <p className="text-xs text-muted-foreground mt-3 mb-5 leading-relaxed">
              The world's fastest, 100% private, client-side OCR tool. Your images never leave your browser.
            </p>
            <div className="flex gap-3 mb-5">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-muted hover:bg-primary/10 hover:text-primary rounded-lg flex items-center justify-center text-muted-foreground transition-colors" data-testid="link-footer-twitter">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/in/rabeea-naseer-045b4a337/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-muted hover:bg-primary/10 hover:text-primary rounded-lg flex items-center justify-center text-muted-foreground transition-colors" data-testid="link-footer-linkedin">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://github.com/rabeeanaseer6-lab" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-muted hover:bg-primary/10 hover:text-primary rounded-lg flex items-center justify-center text-muted-foreground transition-colors" data-testid="link-footer-github">
                <Github className="h-4 w-4" />
              </a>
              <a href="https://kaggle.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-muted hover:bg-primary/10 hover:text-primary rounded-lg flex items-center justify-center text-muted-foreground transition-colors" data-testid="link-footer-kaggle">
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <Link href="/author/rabeea-naseer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline" data-testid="link-footer-author">
                About the Author
              </Link>
              <a href="https://rabeeanaseer.online" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-portfolio">
                <Link2 className="h-3 w-3" /> rabeeanaseer.online
              </a>
            </div>
          </div>

          {/* Popular tools */}
          <div>
            <h3 className="font-bold text-sm mb-4">Popular Tools</h3>
            <ul className="space-y-2.5 text-sm">
              {popularTools.map(tool => (
                <li key={tool.path}>
                  <Link href={tool.path} className="text-muted-foreground hover:text-foreground hover:text-primary transition-colors text-xs">
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More tools */}
          <div>
            <h3 className="font-bold text-sm mb-4">More Tools</h3>
            <ul className="space-y-2.5 text-sm">
              {moreTools.map(tool => (
                <li key={tool.path}>
                  <Link href={tool.path} className="text-muted-foreground hover:text-foreground hover:text-primary transition-colors text-xs">
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-sm mb-4">Resources</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors text-xs">Blog</Link></li>
              <li><Link href="/wiki" className="text-muted-foreground hover:text-primary transition-colors text-xs">OCR Wiki</Link></li>
              <li><Link href="/updates" className="text-muted-foreground hover:text-primary transition-colors text-xs">Changelog</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-xs">About Us</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-xs">Contact</Link></li>
              <li><Link href="/author/rabeea-naseer" className="text-muted-foreground hover:text-primary transition-colors text-xs">Author Profile</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-sm mb-4">Legal</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-xs">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors text-xs">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="text-muted-foreground hover:text-primary transition-colors text-xs">Disclaimer</Link></li>
            </ul>

            {/* Site identity mini card */}
            <div className="mt-8 p-4 rounded-xl bg-gradient-to-br from-primary/10 to-cyan-500/10 border border-primary/10">
              <p className="text-xs font-bold text-foreground mb-1">Built by</p>
              <p className="text-sm font-black">Rabeea Naseer</p>
              <p className="text-xs text-muted-foreground mt-0.5">Founder, NovatraTech</p>
              <Link href="/author/rabeea-naseer">
                <span className="mt-2 inline-block text-xs font-semibold text-primary hover:underline cursor-pointer">View profile →</span>
              </Link>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-bold text-sm mb-4">Contact Us</h3>
            <div className="p-4 rounded-xl bg-card border space-y-3">
              <p className="text-xs text-muted-foreground leading-relaxed">
                Questions, bug reports, or feature requests? We'd love to hear from you.
              </p>
              <a href="mailto:hello@imagetotext.fun" className="flex items-center gap-2 text-xs text-primary hover:underline font-medium">
                <Mail className="h-3.5 w-3.5 shrink-0" />
                hello@imagetotext.fun
              </a>
              <Link href="/contact">
                <span className="mt-1 flex items-center justify-center gap-1.5 w-full rounded-lg bg-primary text-primary-foreground text-xs font-semibold px-3 py-2 hover:bg-primary/90 transition-colors cursor-pointer">
                  <MessageSquare className="h-3.5 w-3.5" />
                  Send a Message
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} ImageToText.fun · A <span className="font-semibold text-foreground">NovatraTech</span> product. All rights reserved.</p>
          <p>Processing text in browser since 2022 · Built by <Link href="/author/rabeea-naseer" className="font-semibold text-foreground hover:text-primary transition-colors">Rabeea Naseer</Link></p>
        </div>
      </div>
    </footer>
  );
}

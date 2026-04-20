import { Link } from "wouter";
import { tools } from "@/data/tools";
import { Scan, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  const popularTools = tools.slice(0, 8);
  const moreTools = tools.slice(8);

  return (
    <footer className="border-t bg-muted/40 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Scan className="h-5 w-5 text-primary" />
              </div>
              <span className="font-bold tracking-tight">ImageToText.fun</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6">
              The world's fastest, 100% private, client-side OCR tool. Extract text from any image instantly in your browser.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-linkedin">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-github">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Popular Tools</h3>
            <ul className="space-y-3 text-sm">
              {popularTools.map(tool => (
                <li key={tool.path}>
                  <Link href={tool.path} className="text-muted-foreground hover:text-foreground transition-colors">
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">More Tools</h3>
            <ul className="space-y-3 text-sm">
              {moreTools.map(tool => (
                <li key={tool.path}>
                  <Link href={tool.path} className="text-muted-foreground hover:text-foreground transition-colors">
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link href="/wiki" className="text-muted-foreground hover:text-foreground transition-colors">OCR Wiki</Link></li>
              <li><Link href="/updates" className="text-muted-foreground hover:text-foreground transition-colors">Changelog</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="text-muted-foreground hover:text-foreground transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ImageToText.fun. All rights reserved.</p>
          <p>Processing text in browser since 2022.</p>
        </div>
      </div>
    </footer>
  );
}

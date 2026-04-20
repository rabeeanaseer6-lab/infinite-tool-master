import { Link } from "wouter";
import { Scan, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { tools } from "@/data/tools";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

export function Header() {
  const students = ["/handwriting-to-text", "/screenshot-to-text", "/book-page-to-text", "/png-to-text"];
  const business = ["/receipt-to-excel", "/business-card-scanner", "/legal-document-ocr", "/license-plate-ocr"];
  const developers = ["/image-to-html", "/image-to-json", "/png-to-text"];

  const getTools = (paths: string[]) => tools.filter(t => paths.includes(t.path));

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Scan className="h-6 w-6 text-primary" />
            </div>
            <span className="text-xl font-bold tracking-tight">ImageToText.fun</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>All Tools</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-6 w-[600px] md:w-[800px]">
                      {tools.map((tool) => (
                        <Link key={tool.path} href={tool.path}>
                          <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">{tool.name}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">{tool.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger>For Students</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {getTools(students).map(tool => (
                        <li key={tool.path}>
                          <Link href={tool.path}>
                            <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                              <div className="text-sm font-medium leading-none">{tool.name}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">{tool.desc}</p>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {[
                        { title: "Blog", href: "/blog", desc: "Read our latest articles" },
                        { title: "Wiki", href: "/wiki", desc: "OCR terminology defined" },
                        { title: "Changelog", href: "/updates", desc: "See what's new" },
                        { title: "About", href: "/about", desc: "Our story and mission" },
                        { title: "Contact", href: "/contact", desc: "Get in touch with us" },
                      ].map((item) => (
                        <li key={item.title}>
                          <Link href={item.href}>
                            <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                              <div className="text-sm font-medium leading-none">{item.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">{item.desc}</p>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-2">
            <Link href="/image-to-text">
              <Button variant="default" className="font-semibold">Start Scanning</Button>
            </Link>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <ScrollArea className="h-full py-6 pr-6">
                <Link href="/" className="flex items-center gap-2 mb-8">
                  <Scan className="h-6 w-6 text-primary" />
                  <span className="text-xl font-bold">ImageToText.fun</span>
                </Link>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-3 text-sm text-muted-foreground uppercase tracking-wider">All Tools</h4>
                    <div className="flex flex-col gap-2">
                      {tools.map(tool => (
                        <Link key={tool.path} href={tool.path} className="text-sm hover:text-primary transition-colors py-1">
                          {tool.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3 text-sm text-muted-foreground uppercase tracking-wider">Resources</h4>
                    <div className="flex flex-col gap-2">
                      <Link href="/blog" className="text-sm hover:text-primary transition-colors py-1">Blog</Link>
                      <Link href="/wiki" className="text-sm hover:text-primary transition-colors py-1">Wiki</Link>
                      <Link href="/updates" className="text-sm hover:text-primary transition-colors py-1">Updates</Link>
                      <Link href="/about" className="text-sm hover:text-primary transition-colors py-1">About</Link>
                      <Link href="/contact" className="text-sm hover:text-primary transition-colors py-1">Contact</Link>
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

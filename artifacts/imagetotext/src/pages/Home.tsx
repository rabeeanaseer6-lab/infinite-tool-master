import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OCREngine } from "@/components/OCREngine";
import { tools } from "@/data/tools";
import { CheckCircle2, Zap, Shield, Globe, Layers, FastForward } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  useSEO({ 
    title: "ImageToText.fun | Free Online OCR & Text Extraction", 
    description: "The world's fastest, 100% private, client-side OCR tool. Extract text from any image instantly in your browser." 
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto text-center max-w-4xl mb-12">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-foreground">
              Extract Text from Images <span className="text-primary">Instantly</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              100% free, entirely private OCR processing. Your images never leave your browser. 
              Supports 50+ languages, handwriting, and complex layouts.
            </p>
          </div>
          
          <div className="container mx-auto pb-12">
            <OCREngine />
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 border-y bg-muted/30">
          <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Languages</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Free</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">Zero</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Server Uploads</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1s</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Instant Results</div>
            </div>
          </div>
        </section>

        {/* Tools Directory */}
        <section className="py-24 px-4 container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">A Tool for Every OCR Task</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Whatever you need to scan, we have a specialized tool optimized for it.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map(tool => (
              <Link key={tool.path} href={tool.path}>
                <Card className="h-full hover:border-primary/50 hover:shadow-md transition-all cursor-pointer group">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{tool.name}</h3>
                    <p className="text-sm text-muted-foreground">{tool.desc}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 px-4 bg-muted/30 border-y">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Five simple steps to extract text from your images.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { step: "01", title: "Upload Image", desc: "Drag & drop, paste, or select your file." },
                { step: "02", title: "Select Language", desc: "Choose from 50+ supported languages." },
                { step: "03", title: "Local Processing", desc: "Our engine scans locally in your browser." },
                { step: "04", title: "Review Text", desc: "Check the extracted text in the editor." },
                { step: "05", title: "Export", desc: "Copy, download as TXT, or save to PDF." }
              ].map((item, i) => (
                <div key={i} className="text-center relative">
                  <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-bold mx-auto mb-4 border-2 border-primary/20">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                  {i < 4 && <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-border -z-10" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 px-4 container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose ImageToText.fun</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">The most reliable, private, and capable OCR tool available.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Shield className="h-8 w-8 text-primary" />, title: "100% Private", desc: "Processing happens entirely in your browser. No server uploads." },
              { icon: <Zap className="h-8 w-8 text-primary" />, title: "Lightning Fast", desc: "Powered by WebAssembly for near-native performance." },
              { icon: <Globe className="h-8 w-8 text-primary" />, title: "50+ Languages", desc: "Support for global languages, scripts, and character sets." },
              { icon: <Layers className="h-8 w-8 text-primary" />, title: "Complex Layouts", desc: "Preserves paragraphs, columns, and document structure." },
              { icon: <CheckCircle2 className="h-8 w-8 text-primary" />, title: "High Accuracy", desc: "State-of-the-art neural network OCR engine." },
              { icon: <FastForward className="h-8 w-8 text-primary" />, title: "No Sign-up Required", desc: "Start scanning immediately. Completely free to use." }
            ].map((feature, i) => (
              <div key={i} className="flex gap-4 p-6 border rounded-xl bg-card">
                <div className="flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-4 bg-muted/30 border-y">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is my data secure?</AccordionTrigger>
                <AccordionContent>
                  Yes, absolutely. ImageToText.fun operates 100% in your browser. Your images are never uploaded to any server, making it completely private and secure.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What file formats are supported?</AccordionTrigger>
                <AccordionContent>
                  We support all standard web image formats including JPG, PNG, WebP, and BMP. You can also paste images directly from your clipboard.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it really free?</AccordionTrigger>
                <AccordionContent>
                  Yes! Since processing happens on your device, we don't have expensive server costs, allowing us to offer this tool completely free.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

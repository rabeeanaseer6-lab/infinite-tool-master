import { useSEO } from "@/hooks/use-seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Users, Shield, Zap, Globe } from "lucide-react";

export default function About() {
  useSEO({ title: "About Us | ImageToText.fun", description: "Our mission to make OCR free, fast, and 100% private for everyone." });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Our Mission</h1>
            <p className="text-xl text-muted-foreground">
              To make text extraction fast, accessible, and uncompromisingly private.
            </p>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
            <p>
              Founded in 2022, ImageToText.fun started with a simple observation: most OCR tools on the web require you to upload your sensitive documents to unknown servers. We believed there was a better way.
            </p>
            <p>
              By leveraging the power of WebAssembly and modern browser capabilities, we built an OCR engine that runs entirely on your device. Whether you're scanning a grocery receipt, a page from a textbook, or a highly confidential legal document, your data never leaves your computer.
            </p>
            <p>
              We are committed to keeping this core tool free forever. By eliminating server processing costs, we can offer a best-in-class text extraction service without the need for subscriptions or invasive tracking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-muted/30 p-8 rounded-xl border">
              <Shield className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Privacy First</h3>
              <p className="text-muted-foreground">Zero server uploads. 100% client-side processing. Your documents remain yours.</p>
            </div>
            <div className="bg-muted/30 p-8 rounded-xl border">
              <Zap className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Blazing Fast</h3>
              <p className="text-muted-foreground">Optimized neural networks run efficiently on your device for instant results.</p>
            </div>
            <div className="bg-muted/30 p-8 rounded-xl border">
              <Globe className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Globally Accessible</h3>
              <p className="text-muted-foreground">Supporting over 50 languages and scripts, breaking down communication barriers.</p>
            </div>
            <div className="bg-muted/30 p-8 rounded-xl border">
              <Users className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">For Everyone</h3>
              <p className="text-muted-foreground">From students to developers to legal professionals, our tools are built to scale with your needs.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

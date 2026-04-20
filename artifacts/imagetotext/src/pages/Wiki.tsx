import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { wikiTerms } from "@/data/content";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

export default function Wiki() {
  useSEO({ title: "OCR Wiki & Terminology | ImageToText.fun", description: "Learn the terminology behind Optical Character Recognition, computer vision, and machine learning." });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center rounded-full mx-auto mb-6">
              <BookOpen size={32} />
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">OCR Glossary & Wiki</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Understanding the complex terminology behind text extraction technology.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wikiTerms.map(term => (
              <Link key={term.term} href={`/wiki/${term.term}`}>
                <Card className="h-full hover:border-primary/50 hover:shadow-md transition-all cursor-pointer group">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">{term.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">{term.content}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

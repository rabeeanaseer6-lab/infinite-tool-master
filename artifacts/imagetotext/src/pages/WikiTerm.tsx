import { useRoute } from "wouter";
import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { wikiTerms } from "@/data/content";
import { ChevronLeft } from "lucide-react";
import NotFound from "@/pages/not-found";

export default function WikiTerm() {
  const [match, params] = useRoute("/wiki/:term");
  const termData = wikiTerms.find(t => t.term === params?.term);

  if (!match || !termData) {
    return <NotFound />;
  }

  useSEO({ title: `${termData.title} | OCR Wiki`, description: `Definition and explanation of ${termData.title} in the context of OCR.` });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link href="/wiki" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ChevronLeft size={16} className="mr-1" /> Back to Wiki
          </Link>
          
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8">{termData.title}</h1>
            <div className="text-lg leading-relaxed text-foreground bg-muted/30 p-8 rounded-xl border">
              {termData.content}
            </div>
          </article>
          
          <div className="mt-16 pt-8 border-t">
            <h3 className="text-2xl font-bold mb-6">See Also</h3>
            <div className="flex flex-wrap gap-3">
              {wikiTerms.filter(t => t.term !== termData.term).slice(0, 5).map(related => (
                <Link key={related.term} href={`/wiki/${related.term}`} className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                  {related.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import { useSEO } from "@/hooks/use-seo";
import { OCREngine } from "@/components/OCREngine";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

interface ToolPageProps {
  tool: {
    name: string;
    h1: string;
    metaDescription: string;
    intro: string;
  }
}

export default function ToolPage({ tool }: ToolPageProps) {
  useSEO({ title: `${tool.name} | ImageToText.fun`, description: tool.metaDescription });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center py-16 px-4">
        <div className="w-full max-w-4xl text-center mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-foreground">{tool.h1}</h1>
          <p className="text-xl text-muted-foreground">{tool.intro}</p>
        </div>
        <OCREngine />
      </main>
      <Footer />
    </div>
  );
}

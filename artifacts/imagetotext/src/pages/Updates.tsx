import { useSEO } from "@/hooks/use-seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { updates } from "@/data/content";

export default function Updates() {
  useSEO({ title: "Changelog & Updates | ImageToText.fun", description: "See the latest improvements, algorithm updates, and new features on ImageToText.fun." });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">Changelog</h1>
            <p className="text-xl text-muted-foreground">Algorithm improvements and platform updates.</p>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
            {updates.map((update, i) => (
              <div key={update.version} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-secondary text-secondary-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border bg-card shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-xl">{update.version}</h3>
                    <span className="text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">{update.date}</span>
                  </div>
                  <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                    {update.points.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import { useRoute } from "wouter";
import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { blogPosts } from "@/data/content";
import { Calendar, Clock, ChevronLeft } from "lucide-react";
import NotFound from "@/pages/not-found";

export default function BlogPost() {
  const [match, params] = useRoute("/blog/:slug");
  const post = blogPosts.find(p => p.slug === params?.slug);

  if (!match || !post) {
    return <NotFound />;
  }

  useSEO({ title: `${post.title} | ImageToText.fun Blog`, description: post.summary });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link href="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ChevronLeft size={16} className="mr-1" /> Back to Blog
          </Link>
          
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">{post.title}</h1>
              <div className="flex items-center gap-6 text-muted-foreground">
                <span className="flex items-center gap-2"><Calendar size={18} /> {post.date}</span>
                <span className="flex items-center gap-2"><Clock size={18} /> {post.readTime} read</span>
              </div>
            </div>
            
            <div className="text-lg leading-relaxed text-foreground whitespace-pre-wrap">
              {post.content}
            </div>
          </article>
          
          <div className="mt-16 pt-8 border-t">
            <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.filter(p => p.slug !== post.slug).slice(0, 2).map(related => (
                <Link key={related.slug} href={`/blog/${related.slug}`} className="block group">
                  <div className="border rounded-xl p-6 hover:border-primary/50 transition-colors h-full">
                    <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{related.title}</h4>
                    <p className="text-sm text-muted-foreground line-clamp-2">{related.summary}</p>
                  </div>
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

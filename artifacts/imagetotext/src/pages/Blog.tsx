import { Link } from "wouter";
import { useSEO } from "@/hooks/use-seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { blogPosts } from "@/data/content";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Calendar } from "lucide-react";

export default function Blog() {
  useSEO({ title: "OCR Blog & Resources | ImageToText.fun", description: "Learn about OCR technology, machine learning, and how to extract text from images efficiently." });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">OCR Blog & Resources</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Discover the latest in Optical Character Recognition technology, tips for better text extraction, and industry news.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card className="h-full hover:border-primary/50 hover:shadow-md transition-all cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                        <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                      </div>
                      <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors leading-tight">{post.title}</h3>
                      <p className="text-muted-foreground text-sm line-clamp-3">{post.summary}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            
            <div className="space-y-8">
              <div className="bg-muted/30 p-6 rounded-xl border">
                <h3 className="font-bold text-lg mb-4">Featured Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 5).map(post => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                      <h4 className="font-medium group-hover:text-primary transition-colors text-sm">{post.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{post.date}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import { useSEO } from "@/hooks/use-seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function Terms() {
  useSEO({ title: "Terms of Service | ImageToText.fun", description: "Terms and conditions for using the ImageToText.fun OCR tools." });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-extrabold tracking-tight mb-8">Terms of Service</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
            <p className="font-medium text-foreground">Last updated: October 2024</p>

            <h2 className="text-foreground mt-8">1. Acceptance of Terms</h2>
            <p>By accessing and using ImageToText.fun, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.</p>

            <h2 className="text-foreground mt-8">2. Description of Service</h2>
            <p>ImageToText.fun provides a web-based, client-side optical character recognition (OCR) utility. The service allows users to extract text from images they provide. The service is provided "as is" and is free of charge.</p>

            <h2 className="text-foreground mt-8">3. User Responsibilities</h2>
            <p>You agree not to use the service to process images that contain illegal, harmful, or deeply offensive content. Because processing happens locally, we do not monitor your usage; however, you are entirely responsible for the legality of the documents you process.</p>

            <h2 className="text-foreground mt-8">4. Intellectual Property</h2>
            <p>You retain all rights to the images you process and the text extracted from them. We claim no ownership over your data. The design, code, and content of the ImageToText.fun website itself are our property and are protected by copyright laws.</p>

            <h2 className="text-foreground mt-8">5. Disclaimer of Warranties</h2>
            <p>The service is provided without warranties of any kind, whether express or implied. We do not guarantee that the text extraction will be 100% accurate, error-free, or suitable for any specific purpose. We are not liable for any consequences arising from inaccuracies in the extracted text.</p>

            <h2 className="text-foreground mt-8">6. Limitation of Liability</h2>
            <p>In no event shall ImageToText.fun or its creators be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the service, even if we have been advised of the possibility of such damages.</p>

            <h2 className="text-foreground mt-8">7. Modifications to the Service</h2>
            <p>We reserve the right to modify or discontinue the service at any time without notice. We are not liable to you or any third party for any modification, suspension, or discontinuance of the service.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

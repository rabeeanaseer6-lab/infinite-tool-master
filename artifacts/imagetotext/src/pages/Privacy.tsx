import { useSEO } from "@/hooks/use-seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function Privacy() {
  useSEO({ title: "Privacy Policy | ImageToText.fun", description: "Our commitment to your privacy. Learn how our 100% client-side OCR works." });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-extrabold tracking-tight mb-8">Privacy Policy</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
            <p className="font-medium text-foreground">Last updated: October 2024</p>
            
            <h2 className="text-foreground mt-8">1. The Short Version: Your Data Stays on Your Device</h2>
            <p>
              ImageToText.fun is designed from the ground up to respect your privacy. <strong>All optical character recognition (OCR) processing happens locally in your web browser.</strong> We do not upload, store, or transmit your images or the extracted text to our servers or any third parties.
            </p>

            <h2 className="text-foreground mt-8">2. How Our Technology Works</h2>
            <p>
              When you select an image, paste it, or drag and drop it onto our site, the file is loaded directly into your browser's memory. We use an open-source technology called Tesseract.js (compiled to WebAssembly) to analyze the image and extract the text on your machine.
            </p>
            <p>
              Because there is no server-side processing, there is zero risk of your sensitive documents being intercepted during transmission or stored on a database you don't control.
            </p>

            <h2 className="text-foreground mt-8">3. Information We Do Collect</h2>
            <p>
              While we never see your images or text, we do collect minimal, anonymous analytics data to help us improve the site:
            </p>
            <ul>
              <li><strong>Page Views:</strong> Which tools are most popular.</li>
              <li><strong>Performance Metrics:</strong> How long it takes the page to load.</li>
              <li><strong>Error Logs:</strong> Anonymous crash reports if the site fails to load properly.</li>
            </ul>
            <p>This analytics data contains no personally identifiable information (PII).</p>

            <h2 className="text-foreground mt-8">4. Cookies and Local Storage</h2>
            <p>
              We use standard browser features like local storage to save your preferences (e.g., your selected language or theme mode). These are strictly functional and are not used for tracking across other websites.
            </p>

            <h2 className="text-foreground mt-8">5. Third-Party Links</h2>
            <p>
              Our blog or wiki may contain links to external websites. We are not responsible for the privacy practices of those sites and encourage you to read their respective privacy policies.
            </p>

            <h2 className="text-foreground mt-8">6. Changes to This Policy</h2>
            <p>
              We may update this policy occasionally. Any changes will be posted on this page with an updated "Last updated" date. Because we do not collect user accounts or emails, we cannot notify you directly of changes.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

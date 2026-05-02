import { useState, useCallback, useRef } from "react";
import Tesseract from "tesseract.js";
import { jsPDF } from "jspdf";
import { Upload, Copy, Download, Trash2, Check, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const LANGUAGES = [
  { code: "eng", name: "English" },
  { code: "spa", name: "Spanish" },
  { code: "fra", name: "French" },
  { code: "deu", name: "German" },
  { code: "chi_sim", name: "Chinese Simplified" },
  { code: "chi_tra", name: "Chinese Traditional" },
  { code: "jpn", name: "Japanese" },
  { code: "kor", name: "Korean" },
  { code: "ara", name: "Arabic" },
  { code: "por", name: "Portuguese" },
  { code: "rus", name: "Russian" },
  { code: "ita", name: "Italian" },
  { code: "nld", name: "Dutch" },
  { code: "pol", name: "Polish" },
  { code: "swe", name: "Swedish" },
  { code: "nor", name: "Norwegian" },
  { code: "dan", name: "Danish" },
  { code: "fin", name: "Finnish" },
  { code: "tur", name: "Turkish" },
  { code: "hin", name: "Hindi" },
];

export function OCREngine({ customIntro }: { customIntro?: string }) {
  const [image, setImage] = useState<string | null>(null);
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [language, setLanguage] = useState("eng");
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const processImage = async (imgSrc: string, lang: string) => {
    setIsProcessing(true);
    setProgress(0);
    setText("");

    try {
      const result = await Tesseract.recognize(imgSrc, lang, {
        logger: (m) => {
          if (m.status === "recognizing text") {
            setProgress(Math.round(m.progress * 100));
          }
        },
      });
      setText(result.data.text);
      setProgress(100);
    } catch (error) {
      console.error(error);
      toast({
        title: "OCR Error",
        description: "Failed to extract text. Please try a different image.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          const result = ev.target?.result as string;
          setImage(result);
          processImage(result, language);
        };
        reader.readAsDataURL(file);
      }
    },
    [language]
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setImage(result);
        processImage(result, language);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePaste = useCallback(
    (e: React.ClipboardEvent) => {
      const items = e.clipboardData.items;
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf("image") !== -1) {
          const blob = items[i].getAsFile();
          if (blob) {
            const reader = new FileReader();
            reader.onload = (event) => {
              const result = event.target?.result as string;
              setImage(result);
              processImage(result, language);
            };
            reader.readAsDataURL(blob);
          }
        }
      }
    },
    [language]
  );

  const copyToClipboard = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast({ title: "Copied to clipboard" });
  };

  const downloadTXT = () => {
    if (!text) return;
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "extracted-text.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadPDF = () => {
    if (!text) return;
    const doc = new jsPDF();
    const splitText = doc.splitTextToSize(text, 180);
    doc.text(splitText, 15, 15);
    doc.save("extracted-text.pdf");
  };

  const clearAll = () => {
    setImage(null);
    setText("");
    setProgress(0);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div
      className="w-full max-w-5xl mx-auto space-y-6"
      onPaste={handlePaste}
      data-testid="ocr-engine"
    >
      {customIntro && (
        <p className="text-muted-foreground text-center mb-6">{customIntro}</p>
      )}

      <div className="flex flex-col md:flex-row gap-4 items-end justify-between">
        <div className="w-full md:w-64 space-y-2">
          <label className="text-sm font-medium">Select Language</label>
          <Select
            value={language}
            onValueChange={setLanguage}
            disabled={isProcessing}
          >
            <SelectTrigger data-testid="select-language">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              {LANGUAGES.map((lang) => (
                <SelectItem key={lang.code} value={lang.code}>
                  {lang.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div
          className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center min-h-[400px] transition-colors relative overflow-hidden group
            ${image ? "border-primary/50 bg-primary/5" : "border-border hover:border-primary/50 bg-card"}`}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          {image ? (
            <>
              <img
                src={image}
                alt="Preview"
                className="max-w-full max-h-full object-contain rounded-md"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <Button
                  variant="secondary"
                  onClick={() => fileInputRef.current?.click()}
                  data-testid="btn-change-image"
                >
                  Change Image
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                <Upload size={32} />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Upload Image</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Drag & drop, paste (Ctrl+V), or click to browse
                </p>
              </div>
              <Button
                onClick={() => fileInputRef.current?.click()}
                data-testid="btn-browse-files"
              >
                Browse Files
              </Button>
            </div>
          )}
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>

        <div className="flex flex-col border rounded-xl overflow-hidden bg-card shadow-sm relative">
          {isProcessing && (
            <div className="absolute top-0 left-0 right-0 z-10">
              <Progress value={progress} className="h-1 rounded-none" />
            </div>
          )}

          <div className="bg-muted/50 p-3 border-b flex justify-between items-center">
            <h3 className="font-medium flex items-center gap-2">
              <FileText size={18} className="text-primary" />
              Extracted Text
            </h3>

            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={copyToClipboard}
                disabled={!text || isProcessing}
                data-testid="btn-copy"
                title="Copy text"
              >
                {copied ? (
                  <Check size={16} className="text-green-500" />
                ) : (
                  <Copy size={16} />
                )}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={downloadTXT}
                disabled={!text || isProcessing}
                data-testid="btn-download-txt"
                title="Download TXT"
              >
                <Download size={16} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={downloadPDF}
                disabled={!text || isProcessing}
                data-testid="btn-download-pdf"
                title="Download PDF"
              >
                PDF
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAll}
                disabled={(!text && !image) || isProcessing}
                data-testid="btn-clear"
                className="text-destructive hover:text-destructive hover:bg-destructive/10"
                title="Clear all"
              >
                <Trash2 size={16} />
              </Button>
            </div>
          </div>

          <div className="flex-1 p-0 relative">
            {isProcessing ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm z-10">
                <div className="text-primary font-medium mb-2">
                  Scanning Image... {progress}%
                </div>
                <div className="w-48">
                  <Progress value={progress} className="h-2" />
                </div>
              </div>
            ) : null}

            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Extracted text will appear here..."
              className="min-h-[350px] h-full resize-none border-0 focus-visible:ring-0 rounded-none p-6 text-base"
              data-testid="textarea-result"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

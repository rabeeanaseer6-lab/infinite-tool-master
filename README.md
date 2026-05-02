# ImageToText.fun

<p align="center">
  <a href="https://www.imagetotext.fun/">
    <img src="https://img.shields.io/badge/Live-www.imagetotext.fun-6C63FF?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Live Website" />
  </a>
  <a href="https://github.com/rabeeanaseer6-lab/infinite-tool-master">
    <img src="https://img.shields.io/badge/GitHub-infinite--tool--master-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repository" />
  </a>
  <img src="https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript 5" />
  <img src="https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 6" />
  <img src="https://img.shields.io/badge/Tesseract.js-7.0.0-0F172A?style=for-the-badge" alt="Tesseract.js 7.0.0" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/shadcn%2Fui-Accessible_UI-000000?style=for-the-badge" alt="shadcn/ui" />
  <img src="https://img.shields.io/badge/Radix_UI-Headless_Primitives-161618?style=for-the-badge" alt="Radix UI" />
  <img src="https://img.shields.io/badge/React_Query-TanStack-FF4154?style=for-the-badge&logo=reactquery&logoColor=white" alt="TanStack React Query" />
  <img src="https://img.shields.io/badge/Zod-Schema_Validation-3E67B1?style=for-the-badge" alt="Zod" />
  <img src="https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
  <img src="https://img.shields.io/badge/OCR-100%25_Client--Side-16A34A?style=for-the-badge" alt="100% Client-Side OCR" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="MIT License" />
</p>

<p align="center">
  <a href="https://www.imagetotext.fun/"><strong>https://www.imagetotext.fun/</strong></a>
</p>

<p align="center">
  <strong>Extract text from any image instantly with private, browser-based OCR — no sign-up, no uploads, no backend required.</strong>
</p>

<p align="center">
  ImageToText.fun is a modern OCR web app for screenshots, scanned documents, receipts, handwriting, legal pages, and multilingual text extraction. Everything runs locally in the browser, so users get fast results without sending images to a server.
</p>

---

## Overview

ImageToText.fun is a privacy-first OCR platform built to make text extraction simple, fast, and accessible.

Unlike traditional OCR tools that require server uploads, ImageToText.fun processes images entirely in the browser using WebAssembly-powered OCR. That means documents stay on-device, results arrive quickly, and the entire product can run as a zero-backend static application.

The platform is designed for real-world OCR workflows, from basic image-to-text extraction to more specialized document processing tasks.

## Live Product

**Website:** [https://www.imagetotext.fun/](https://www.imagetotext.fun/)

## Repository

**GitHub:** [https://github.com/rabeeanaseer6-lab/infinite-tool-master](https://github.com/rabeeanaseer6-lab/infinite-tool-master)

## Screenshots



### Homepage

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/f6dc82f8-1710-4e0f-847e-039bc7ace335" />


### OCR Workspace

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/32ddd7c3-b5cc-4248-88fa-43b7d8933bc1" />


### Tool Selection

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/84dd4bda-4e5a-46d1-a7d9-8601ec387444" />


### Extracted Text Result

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/e9f36863-b62e-454f-a385-937bd7d63f5a" />


### Recommended folder structure

```bash
screenshots/
├── homepage.png
├── ocr-workspace.png
├── tool-selection.png
└── extracted-text.png
```

## Why ImageToText.fun

ImageToText.fun is built around a few core product principles:

- **Privacy by default**  
  Images are processed locally in the browser and never need to be uploaded to a server.

- **Fast, zero-friction OCR**  
  Users should be able to extract text in seconds without creating an account.

- **Built for real-world documents**  
  The product is designed for screenshots, receipts, handwriting, legal documents, and more.

- **Deployable anywhere**  
  The app requires no backend infrastructure and can be hosted as a pure static site.

## Features

- 100% free and no sign-up required
- Client-side OCR powered by Tesseract.js
- Images never leave the browser
- No server uploads and no data storage
- Works offline after initial load
- Supports 50+ languages
- Handles handwriting, receipts, legal documents, and general image text
- Built-in text review and editing experience
- Export to clipboard, TXT, and formatted PDF
- 15+ specialized OCR tools powered by a shared OCR engine
- Zero-backend architecture for fast static deployment

## How It Works

ImageToText.fun follows a simple workflow:

1. Upload an image from your device, drag and drop, paste from clipboard, or use an image URL
2. Choose the document language
3. Process the image locally in the browser
4. Review and edit the extracted text
5. Export the result anywhere you need

## Key Architecture Decisions

### 100% Client-Side Processing

All OCR runs locally in the browser using WebAssembly. Images are never uploaded to a remote server, which improves privacy and removes backend complexity.

### Shared OCR Engine

The platform includes 15+ specialized OCR tools powered by a shared `OCREngine` component, making the system easier to scale and maintain.

### Multilingual Support

The application supports multilingual OCR workflows, including global languages such as English, Arabic, Chinese, Hindi, Japanese, and more.

### Zero Backend Required

ImageToText.fun is a pure static web app with no required backend, making deployment simple, fast, and cost-efficient.

## Tech Stack

### Core Framework

| Technology | Version | Purpose |
|---|---:|---|
| React | 19 | UI framework |
| TypeScript | 5 | Type safety |
| Vite | 6 | Build tool & dev server |

### OCR & Document Processing

| Technology | Version | Purpose |
|---|---:|---|
| Tesseract.js | 7.0.0 | Client-side OCR engine (WebAssembly) |
| jsPDF | 4.2.1 | PDF generation & export |

### Styling & UI

| Technology | Version | Purpose |
|---|---:|---|
| Tailwind CSS | 4 | Utility-first CSS framework |
| shadcn/ui | — | Accessible component library |
| Radix UI | Various | Headless UI primitives |
| Lucide React | Latest | Icon library |
| Framer Motion | Latest | Animations |
| tailwind-merge | Latest | Conditional class merging |
| class-variance-authority | Latest | Component variant management |

### Routing & State

| Technology | Version | Purpose |
|---|---:|---|
| Wouter | 3.3.5 | Client-side routing |
| TanStack React Query | Latest | Server state management |
| React Hook Form | 7.55.0 | Form handling |
| Zod | Latest | Schema validation |

### Additional Libraries

| Technology | Version | Purpose |
|---|---:|---|
| date-fns | 3.6.0 | Date formatting utilities |
| Recharts | 2.15.2 | Charts & data visualization |
| Embla Carousel | 8.6.0 | Touch-friendly carousels |
| next-themes | 0.4.6 | Dark/light mode theming |
| Sonner | 2.0.7 | Toast notifications |
| react-icons | 5.4.0 | Extended icon set |

### Infrastructure & Deployment

| Technology | Purpose |
|---|---|
| Vercel | Hosting & deployment |
| pnpm | Fast package manager |
| GitHub | Version control |

## Product Positioning

ImageToText.fun is built for users who want a modern OCR experience without privacy tradeoffs.

It is especially useful for:

- extracting text from screenshots
- reading printed documents
- digitizing receipts and invoices
- processing handwritten notes
- converting legal or business documents into editable text
- handling multilingual OCR directly in the browser

## Technical Highlights

- **WebAssembly OCR** for fast local execution
- **Static frontend architecture** with no backend required
- **Composable UI system** using Tailwind CSS, shadcn/ui, and Radix UI
- **Strong typing and validation** with TypeScript and Zod
- **Scalable frontend structure** powered by Vite and reusable components
- **Flexible export workflow** for TXT and PDF output

## Getting Started

### Prerequisites

Make sure you have:

- **Node.js**
- **pnpm**

### Clone the repository

```bash
git clone https://github.com/rabeeanaseer6-lab/infinite-tool-master.git
cd infinite-tool-master
```

### Install dependencies

```bash
pnpm install
```

### Start development server

```bash
pnpm dev
```

### Build for production

```bash
pnpm build
```

### Preview production build

```bash
pnpm preview
```

> Replace the script names above if your project uses different commands.

## Project Structure

A typical frontend structure for this project may look like:

```bash
src/
├── components/
├── features/
├── hooks/
├── lib/
├── pages/
├── styles/
└── main.tsx
```

> Update this section to match your exact repository structure if needed.

## Privacy Advantage

Privacy is one of the core strengths of ImageToText.fun.

Because OCR happens directly inside the browser:

- images are not uploaded to an external server
- extracted text can remain fully local
- there is no backend storage requirement
- deployment stays simple and efficient

This makes the product especially useful for privacy-conscious users handling personal or sensitive documents.

## Use Cases

ImageToText.fun is designed for:

- students extracting notes from images
- professionals digitizing scanned documents
- freelancers converting screenshots into editable text
- users handling receipts and invoices
- legal or admin workflows requiring text extraction
- privacy-conscious users who do not want file uploads

## Roadmap

Potential future improvements include:

- batch OCR for multiple images
- advanced layout detection
- improved handwriting recognition workflows
- side-by-side original image and extracted text comparison
- export presets for business and academic documents
- local-only OCR history
- enhanced mobile capture experience

## Contributing

Contributions are welcome.

To contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Commit with clear messages
5. Open a pull request

If you are planning a larger feature or product change, opening an issue first is encouraged.

## License

This project is licensed under the **MIT License**.

---

<p align="center">
  Built for fast OCR, stronger privacy, and a better image-to-text experience.
</p>

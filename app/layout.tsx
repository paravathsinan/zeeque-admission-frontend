import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "ZeeQue Preschool Admissions | Enquiry Form",
  description: "Begin Your Journey with ZeeQue. ZeeQue Preschool Network. India's Fastest Growing Preschool Network – Excellence in Every Play.",
  icons: {
    icon: "/logo-new.svg",
  },
  openGraph: {
    title: "ZeeQue Preschool Admissions | Enquiry Form",
    description: "Begin Your Journey with ZeeQue. ZeeQue Preschool Network. India's Fastest Growing Preschool Network – Excellence in Every Play.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZeeQue Preschool Admissions | Enquiry Form",
    description: "Begin Your Journey with ZeeQue. ZeeQue Preschool Network. India's Fastest Growing Preschool Network – Excellence in Every Play.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} font-body antialiased bg-luxury-cream text-luxury-charcoal dark:bg-luxury-navy dark:text-luxury-cream`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}

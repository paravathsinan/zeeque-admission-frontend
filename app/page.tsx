import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import EnquiryForm from "@/components/EnquiryForm";
import Downloads from "@/components/Downloads";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <EnquiryForm />
      <Downloads />
      <Footer />
    </main>
  );
}

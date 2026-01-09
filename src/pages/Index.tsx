import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import PopularProductsSection from "@/components/home/PopularProductsSection";
import ServicesSection from "@/components/home/ServicesSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import ContactsSection from "@/components/home/ContactsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <PopularProductsSection />
        <ServicesSection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

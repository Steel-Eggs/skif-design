import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import PopularProductsSection from "@/components/home/PopularProductsSection";
import ServicesSection from "@/components/home/ServicesSection";
import AdvantagesSection from "@/components/home/AdvantagesSection";
import ContactsSection from "@/components/home/ContactsSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <CategoriesSection />
        <PopularProductsSection />
        <ServicesSection />
        <AdvantagesSection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

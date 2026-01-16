import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import PopularProductsSection from "@/components/home/PopularProductsSection";
import ServicesSection from "@/components/home/ServicesSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import RentSection from "@/components/home/RentSection";
import NewsSection from "@/components/home/NewsSection";
import PartnersSection from "@/components/home/PartnersSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import SeoSection from "@/components/home/SeoSection";
import ContactsSection from "@/components/home/ContactsSection";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <PopularProductsSection />
        <CategoriesSection />
        <ServicesSection />
        <RentSection />
        <NewsSection />
        <PartnersSection />
        <ReviewsSection />
        <SeoSection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

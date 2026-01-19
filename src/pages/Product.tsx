import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  ChevronLeft, ChevronRight, ShoppingCart, Phone, Heart, Share2,
  Check, Truck, Shield, Clock, Play, ZoomIn, X
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CallbackModal from "@/components/CallbackModal";

// Mock product data
const mockProduct = {
  id: 1,
  name: "Прицеп для квадроцикла ССТ-7132-мини",
  sku: "7132-мини",
  brand: "ССТ",
  category: "Одноосные прицепы",
  categorySlug: "odnoosnye",
  price: 89900,
  oldPrice: 99900,
  inStock: true,
  rating: 4.8,
  reviewsCount: 24,
  images: [
    "https://www.skif-avto.ru/upload/iblock/07c/xygzme5zt9i56rpajnzded7k3tog73ab.JPG",
    "https://www.skif-avto.ru/upload/resize_cache/iblock/467/720_720_1/2efb8wnuce5737wxvu4ci8j0t5n41vps.JPG",
    "https://www.skif-avto.ru/upload/resize_cache/iblock/434/720_720_1/wijenp0br5okbstw4a37kocwiucfw03v.JPG",
    "https://www.skif-avto.ru/upload/resize_cache/iblock/219/720_720_1/a7qknx1z85rz5ryzd1np3jvupfvz4kdj.JPG",
    "https://www.skif-avto.ru/upload/resize_cache/iblock/b7a/720_720_1/wkko1mmpahi5q1hxwgoql111iiawzqys.JPG",
    "https://www.skif-avto.ru/upload/resize_cache/iblock/cce/720_720_1/sp4msspcmcdm943skgbulvfarq47gf4w.JPG",
  ],
  description: `
    <p>Прицеп для квадроцикла ССТ-7132-мини — компактный и надёжный помощник для транспортировки вашего квадроцикла. Идеально подходит для активного отдыха, охоты и рыбалки.</p>
    
    <h3>Особенности конструкции</h3>
    <p>Каркас прицепа изготовлен из высокопрочной стали с использованием технологии лазерной резки и сварки на роботизированном оборудовании. Это обеспечивает высокую точность сборки и долговечность конструкции.</p>
    
    <h3>Защита от коррозии</h3>
    <p>Все металлические элементы прицепа покрыты цинковым слоем методом горячего цинкования. Данная технология обеспечивает надёжную защиту от коррозии на срок более 25 лет даже при интенсивной эксплуатации.</p>
    
    <h3>Комплектация</h3>
    <ul>
      <li>Откидной трап для удобной погрузки</li>
      <li>Крепёжные ремни в комплекте</li>
      <li>Опорное колесо для маневрирования</li>
      <li>Светотехника по ГОСТ</li>
      <li>Документы для регистрации в ГИБДД</li>
    </ul>
  `,
  specifications: [
    { name: "Внутренние размеры (ДxШ)", value: "2450 x 1250 мм" },
    { name: "Внешние размеры (ДxШ)", value: "3200 x 1520 мм" },
    { name: "Высота бортов", value: "300 мм" },
    { name: "Грузоподъёмность", value: "750 кг" },
    { name: "Снаряжённая масса", value: "180 кг" },
    { name: "Полная масса", value: "930 кг" },
    { name: "Количество осей", value: "1" },
    { name: "Тип подвески", value: "Рессорная" },
    { name: "Размер шин", value: "R13" },
    { name: "Тип сцепного устройства", value: "Шар 50 мм" },
    { name: "Материал кузова", value: "Оцинкованная сталь" },
    { name: "Покрытие", value: "Горячее цинкование" },
    { name: "Категория прав", value: "B (при наличии)" },
    { name: "Гарантия", value: "24 месяца" },
  ],
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  videoTitle: "Обзор прицепа ССТ-7132-мини",
  features: [
    "Горячее цинкование",
    "Гарантия 2 года",
    "Документы для ГИБДД",
    "Рессорная подвеска",
  ],
};

const Product = () => {
  const { productId } = useParams<{ productId: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  
  const product = mockProduct; // In real app, fetch by productId

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: product.name,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-muted/50 border-b border-border">
          <div className="container py-4">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
              <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
              <span>/</span>
              <Link to="/catalog" className="hover:text-primary transition-colors">Каталог</Link>
              <span>/</span>
              <Link to={`/catalog/${product.categorySlug}`} className="hover:text-primary transition-colors">
                {product.category}
              </Link>
              <span>/</span>
              <span className="text-foreground font-medium truncate max-w-[200px] md:max-w-none">{product.name}</span>
            </nav>
          </div>
        </div>

        {/* Product main section */}
        <section className="py-8 md:py-12">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Gallery */}
              <div className="space-y-4">
                {/* Main image */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted group">
                  <img
                    src={product.images[currentImageIndex]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Zoom button */}
                  <button
                    onClick={() => setIsZoomOpen(true)}
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                  >
                    <ZoomIn className="w-5 h-5" />
                  </button>
                  
                  {/* Navigation arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  
                  {/* Image counter */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-black/50 text-white text-sm">
                    {currentImageIndex + 1} / {product.images.length}
                  </div>
                  
                  {/* Sale badge */}
                  {product.oldPrice && (
                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-bold">
                      -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                    </div>
                  )}
                </div>
                
                {/* Thumbnails */}
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        index === currentImageIndex 
                          ? 'border-primary ring-2 ring-primary/20' 
                          : 'border-transparent hover:border-primary/50'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} - фото ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product info */}
              <div className="space-y-6">
                {/* Brand & SKU */}
                <div className="flex items-center gap-3 flex-wrap">
                  <Badge variant="secondary" className="text-sm">
                    {product.brand}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    Артикул: {product.sku}
                  </span>
                </div>
                
                {/* Title */}
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground">
                  {product.name}
                </h1>
                
                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-muted'}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="font-semibold text-foreground">{product.rating}</span>
                  <span className="text-muted-foreground">({product.reviewsCount} отзывов)</span>
                </div>
                
                {/* Features badges */}
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, index) => (
                    <div 
                      key={index}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium"
                    >
                      <Check className="w-4 h-4" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                {/* Price */}
                <div className="p-6 rounded-2xl bg-muted/50 border border-border">
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-4xl font-heading font-black text-foreground">
                      {product.price.toLocaleString('ru-RU')} ₽
                    </span>
                    {product.oldPrice && (
                      <span className="text-xl text-muted-foreground line-through">
                        {product.oldPrice.toLocaleString('ru-RU')} ₽
                      </span>
                    )}
                  </div>
                  
                  {/* Availability */}
                  <div className="flex items-center gap-2 mb-6">
                    {product.inStock ? (
                      <>
                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-green-600 font-medium">В наличии</span>
                      </>
                    ) : (
                      <>
                        <div className="w-3 h-3 rounded-full bg-orange-500" />
                        <span className="text-orange-600 font-medium">Под заказ</span>
                      </>
                    )}
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button size="lg" className="flex-1 h-14 gradient-accent text-lg font-bold gap-2">
                      <ShoppingCart className="w-5 h-5" />
                      В корзину
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="flex-1 h-14 text-lg font-bold gap-2"
                      onClick={() => setIsCallbackOpen(true)}
                    >
                      <Phone className="w-5 h-5" />
                      Купить в 1 клик
                    </Button>
                  </div>
                  
                  {/* Quick actions */}
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
                    <button 
                      onClick={() => setIsFavorite(!isFavorite)}
                      className={`flex items-center gap-2 text-sm transition-colors ${isFavorite ? 'text-red-500' : 'text-muted-foreground hover:text-foreground'}`}
                    >
                      <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                      В избранное
                    </button>
                    <button 
                      onClick={handleShare}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Share2 className="w-5 h-5" />
                      Поделиться
                    </button>
                  </div>
                </div>
                
                {/* Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Truck className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">Доставка</p>
                      <p className="text-xs text-muted-foreground">По всей России</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">Гарантия</p>
                      <p className="text-xs text-muted-foreground">24 месяца</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">Кредит</p>
                      <p className="text-xs text-muted-foreground">От 3 990 ₽/мес</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs section */}
        <section className="py-8 md:py-12 bg-muted/30">
          <div className="container">
            <Tabs defaultValue="description" className="space-y-8">
              <TabsList className="w-full justify-start bg-card border border-border rounded-xl p-1.5 h-auto flex-wrap">
                <TabsTrigger 
                  value="description" 
                  className="px-6 py-3 text-base font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg"
                >
                  Описание
                </TabsTrigger>
                <TabsTrigger 
                  value="specifications" 
                  className="px-6 py-3 text-base font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg"
                >
                  Характеристики
                </TabsTrigger>
                <TabsTrigger 
                  value="video" 
                  className="px-6 py-3 text-base font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg"
                >
                  Видео
                </TabsTrigger>
              </TabsList>
              
              {/* Description tab */}
              <TabsContent value="description" className="mt-0">
                <Card className="border-2">
                  <CardContent className="p-6 md:p-8">
                    <div 
                      className="prose prose-lg max-w-none text-foreground
                        prose-headings:font-heading prose-headings:text-foreground prose-headings:font-bold
                        prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                        prose-p:text-muted-foreground prose-p:leading-relaxed
                        prose-ul:text-muted-foreground prose-li:marker:text-primary"
                      dangerouslySetInnerHTML={{ __html: product.description }}
                    />
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Specifications tab */}
              <TabsContent value="specifications" className="mt-0">
                <Card className="border-2">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-xl font-heading font-bold text-foreground mb-6">
                      Технические характеристики
                    </h3>
                    <div className="grid gap-0 divide-y divide-border">
                      {product.specifications.map((spec, index) => (
                        <div 
                          key={index}
                          className={`flex flex-col sm:flex-row sm:items-center py-4 gap-2 ${index % 2 === 0 ? 'bg-muted/30' : ''} px-4 -mx-4 sm:-mx-8 sm:px-8`}
                        >
                          <span className="text-muted-foreground sm:w-1/2">{spec.name}</span>
                          <span className="font-semibold text-foreground sm:w-1/2">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Video tab */}
              <TabsContent value="video" className="mt-0">
                <Card className="border-2">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-xl font-heading font-bold text-foreground mb-6">
                      {product.videoTitle}
                    </h3>
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-black">
                      <iframe
                        src={product.videoUrl}
                        title={product.videoTitle}
                        className="absolute inset-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <p className="text-muted-foreground mt-4">
                      Посмотрите подробный видеообзор данной модели прицепа от наших экспертов.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Image zoom modal */}
      {isZoomOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsZoomOpen(false)}
        >
          <button
            onClick={() => setIsZoomOpen(false)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          <img
            src={product.images[currentImageIndex]}
            alt={product.name}
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      
      {/* Callback modal */}
      <CallbackModal 
        isOpen={isCallbackOpen} 
        onClose={() => setIsCallbackOpen(false)} 
      />
    </div>
  );
};

export default Product;
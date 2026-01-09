import { Link } from "react-router-dom";
import { ArrowRight, ShoppingCart, Heart, Star, Flame, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const products = [
  {
    id: 1,
    name: "Прицеп СКИФ-3015",
    category: "Легковые прицепы",
    price: 89900,
    oldPrice: 99900,
    image: null,
    rating: 4.8,
    reviews: 124,
    isHit: true,
    isNew: false,
    inStock: true,
  },
  {
    id: 2,
    name: "Прицеп СКИФ-4520 Грузовой",
    category: "Грузовые прицепы",
    price: 156000,
    oldPrice: null,
    image: null,
    rating: 4.9,
    reviews: 89,
    isHit: false,
    isNew: true,
    inStock: true,
  },
  {
    id: 3,
    name: "Прицеп лодочный СКИФ-Л380",
    category: "Лодочные прицепы",
    price: 112500,
    oldPrice: 125000,
    image: null,
    rating: 4.7,
    reviews: 56,
    isHit: true,
    isNew: false,
    inStock: true,
  },
  {
    id: 4,
    name: "Фаркоп универсальный Toyota",
    category: "Фаркопы",
    price: 15900,
    oldPrice: null,
    image: null,
    rating: 4.6,
    reviews: 234,
    isHit: false,
    isNew: false,
    inStock: true,
  },
  {
    id: 5,
    name: "Прицеп для снегохода СКИФ-СМ250",
    category: "Для снегоходов",
    price: 78500,
    oldPrice: 85000,
    image: null,
    rating: 4.8,
    reviews: 45,
    isHit: false,
    isNew: true,
    inStock: false,
  },
  {
    id: 6,
    name: "Прицеп СКИФ-2500 Компакт",
    category: "Легковые прицепы",
    price: 67900,
    oldPrice: null,
    image: null,
    rating: 4.5,
    reviews: 178,
    isHit: true,
    isNew: false,
    inStock: true,
  },
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("ru-RU").format(price);
};

const PopularProductsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
      
      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-bold text-sm uppercase tracking-wider mb-4">
              <Flame className="h-4 w-4" />
              <span>Популярные товары</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              Хиты продаж
            </h2>
          </div>
          <Link 
            to="/catalog" 
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
          >
            <span>Все товары</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Products carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {products.map((product) => (
                <CarouselItem key={product.id} className="pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="group h-full">
                    <div className="bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/20 transition-all duration-500 hover:shadow-lg h-full flex flex-col">
                      {/* Image */}
                      <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-24 h-24 rounded-full bg-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                            <ShoppingCart className="h-10 w-10 text-primary/30" />
                          </div>
                        </div>
                        
                        {/* Badges */}
                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                          {product.isHit && (
                            <Badge className="bg-accent text-accent-foreground font-bold rounded-full px-3">
                              <Flame className="h-3 w-3 mr-1" />
                              Хит
                            </Badge>
                          )}
                          {product.isNew && (
                            <Badge className="bg-secondary text-secondary-foreground font-bold rounded-full px-3">
                              New
                            </Badge>
                          )}
                          {product.oldPrice && (
                            <Badge className="bg-destructive text-destructive-foreground font-bold rounded-full px-3">
                              -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                            </Badge>
                          )}
                        </div>
                        
                        {/* Actions overlay */}
                        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button className="w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                            <Heart className="h-5 w-5" />
                          </button>
                          <button className="w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                            <Eye className="h-5 w-5" />
                          </button>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        {/* Category */}
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                          {product.category}
                        </span>
                        
                        {/* Name */}
                        <h3 className="font-heading font-bold text-foreground text-lg mt-2 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                          <Link to={`/catalog/product/${product.id}`}>
                            {product.name}
                          </Link>
                        </h3>
                        
                        {/* Rating */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-secondary text-secondary" />
                            <span className="font-bold text-sm">{product.rating}</span>
                          </div>
                          <span className="text-muted-foreground text-sm">
                            {product.reviews} отзывов
                          </span>
                        </div>
                        
                        <div className="mt-auto">
                          {/* Price */}
                          <div className="flex items-baseline gap-3 mb-4">
                            <span className="text-2xl font-heading font-bold text-foreground">
                              {formatPrice(product.price)} ₽
                            </span>
                            {product.oldPrice && (
                              <span className="text-sm text-muted-foreground line-through">
                                {formatPrice(product.oldPrice)} ₽
                              </span>
                            )}
                          </div>
                          
                          {/* Actions */}
                          <div className="flex gap-2">
                            <Button 
                              className={`flex-grow rounded-full font-semibold ${
                                product.inStock 
                                  ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                                  : "bg-muted text-muted-foreground"
                              }`}
                              disabled={!product.inStock}
                            >
                              <ShoppingCart className="h-4 w-4 mr-2" />
                              {product.inStock ? "В корзину" : "Под заказ"}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 w-12 h-12 rounded-full border-2 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors" />
              <CarouselNext className="static translate-y-0 w-12 h-12 rounded-full border-2 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors" />
            </div>
          </Carousel>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/catalog">
            <Button 
              size="lg" 
              className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-lg px-10 py-6 group"
            >
              Смотреть все товары
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PopularProductsSection;

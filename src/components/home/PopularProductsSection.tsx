import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingCart, Heart, Star, Flame, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Import product images
import trailer1 from "@/assets/products/trailer-1.jpg";
import trailer2 from "@/assets/products/trailer-2.jpg";
import trailer3 from "@/assets/products/trailer-3.jpg";

const products = [
  {
    id: 1,
    name: "Прицеп СКИФ-3015",
    category: "Легковые прицепы",
    price: 89900,
    oldPrice: 99900,
    image: trailer1,
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
    image: trailer3,
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
    image: trailer2,
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
    image: trailer1,
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
    image: trailer3,
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
    image: trailer2,
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
  const [addedToCart, setAddedToCart] = useState<number | null>(null);

  const handleAddToCart = (productId: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setAddedToCart(productId);
    
    // Reset animation after 1.5s
    setTimeout(() => {
      setAddedToCart(null);
    }, 1500);
  };

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 text-accent font-semibold mb-2">
              <Flame className="h-5 w-5" />
              <span>Популярные товары</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Хиты продаж
            </h2>
          </div>
          <Link to="/catalog" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
            Все товары
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => {
            const discountPercent = product.oldPrice 
              ? Math.round((1 - product.price / product.oldPrice) * 100) 
              : 0;
            const savings = product.oldPrice ? product.oldPrice - product.price : 0;
            const isAdded = addedToCart === product.id;

            return (
              <Card 
                key={product.id} 
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  {/* Image */}
                  <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {product.isHit && (
                        <Badge className="gradient-accent text-accent-foreground font-bold">
                          <Flame className="h-3 w-3 mr-1" />
                          Хит
                        </Badge>
                      )}
                      {product.isNew && (
                        <Badge className="gradient-secondary text-secondary-foreground font-bold">
                          Новинка
                        </Badge>
                      )}
                      {product.oldPrice && (
                        <Badge variant="destructive" className="font-bold text-sm">
                          -{discountPercent}%
                        </Badge>
                      )}
                    </div>
                    
                    {/* Wishlist */}
                    <button className="absolute top-3 right-3 w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-destructive hover:text-destructive-foreground">
                      <Heart className="h-5 w-5" />
                    </button>
                    
                    {/* Quick view overlay */}
                    <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link to={`/catalog/product/${product.id}`}>
                        <Button variant="secondary" className="font-semibold">
                          Подробнее
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* Category */}
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      {product.category}
                    </span>
                    
                    {/* Name */}
                    <h3 className="font-heading font-bold text-foreground mt-1 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      <Link to={`/catalog/product/${product.id}`}>
                        {product.name}
                      </Link>
                    </h3>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-accent text-accent" />
                        <span className="font-semibold text-sm">{product.rating}</span>
                      </div>
                      <span className="text-muted-foreground text-sm">({product.reviews} отзывов)</span>
                    </div>
                    
                    {/* Price section */}
                    <div className="mb-3">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-heading font-bold text-foreground">
                          {formatPrice(product.price)} ₽
                        </span>
                        {product.oldPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            {formatPrice(product.oldPrice)} ₽
                          </span>
                        )}
                      </div>
                      {/* Savings info - compact */}
                      {product.oldPrice && (
                        <span className="text-xs text-destructive font-medium">
                          Выгода {formatPrice(savings)} ₽
                        </span>
                      )}
                    </div>
                    
                    {/* Actions */}
                    <div className="flex items-center gap-3">
                      <Button 
                        className={`flex-1 font-semibold transition-all duration-300 ${
                          isAdded 
                            ? 'bg-secondary text-secondary-foreground scale-95' 
                            : product.inStock 
                              ? 'gradient-primary hover:opacity-90' 
                              : ''
                        }`}
                        disabled={!product.inStock}
                        onClick={(e) => handleAddToCart(product.id, e)}
                      >
                        {isAdded ? (
                          <>
                            <Check className="h-5 w-5 animate-bounce" />
                            Добавлено!
                          </>
                        ) : (
                          <>
                            <ShoppingCart className="h-5 w-5" />
                            В корзину
                          </>
                        )}
                      </Button>
                    </div>
                    
                    {/* Stock status */}
                    <div className="mt-3">
                      {product.inStock ? (
                        <span className="text-sm font-medium text-secondary">✓ В наличии</span>
                      ) : (
                        <span className="text-sm font-medium text-muted-foreground">Под заказ</span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/catalog">
            <Button size="lg" className="gradient-primary font-bold text-lg px-10">
              Смотреть все товары
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularProductsSection;

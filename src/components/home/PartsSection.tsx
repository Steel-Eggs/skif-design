import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingCart, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

import amortizatorImg from "@/assets/parts/amortizator.jpg";
import rozetkaImg from "@/assets/parts/rozetka.jpg";
import rolikiImg from "@/assets/parts/roliki.jpg";
import stupicaImg from "@/assets/parts/stupica.jpg";

const partsProducts = [
  {
    id: 1,
    name: "Амортизатор наката AL-KO",
    price: 1950,
    oldPrice: 2300,
    image: amortizatorImg,
    rating: 4.8,
    reviews: 24,
    inStock: true,
    isHit: true,
  },
  {
    id: 2,
    name: "Розетка прицепа 7-контактная",
    price: 890,
    image: rozetkaImg,
    rating: 4.9,
    reviews: 56,
    inStock: true,
  },
  {
    id: 3,
    name: "Ролики килевые для лодочного прицепа",
    price: 4500,
    oldPrice: 5200,
    image: rolikiImg,
    rating: 4.7,
    reviews: 18,
    inStock: true,
    isNew: true,
  },
  {
    id: 4,
    name: "Ступица прицепа в сборе",
    price: 3200,
    image: stupicaImg,
    rating: 4.6,
    reviews: 31,
    inStock: true,
  },
  {
    id: 5,
    name: "Колесо в сборе R13 185/70",
    price: 4500,
    image: amortizatorImg,
    rating: 4.5,
    reviews: 12,
    inStock: false,
  },
  {
    id: 6,
    name: "Замковое устройство AL-KO AK 161",
    price: 3200,
    oldPrice: 3800,
    image: rozetkaImg,
    rating: 4.9,
    reviews: 89,
    inStock: true,
    isHit: true,
  },
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("ru-RU").format(price) + " ₽";
};

const PartsSection = () => {
  const [addingToCart, setAddingToCart] = useState<number | null>(null);

  const handleAddToCart = (productId: number, e: React.MouseEvent) => {
    e.preventDefault();
    setAddingToCart(productId);
    setTimeout(() => {
      setAddingToCart(null);
      toast.success("Товар добавлен в корзину");
    }, 500);
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Запчасти и аксессуары
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Оригинальные комплектующие для прицепов и мототехники
            </p>
          </div>
          <Link 
            to="/catalog/zapchasti"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
          >
            Все запчасти
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {partsProducts.map((product, index) => (
            <Link 
              key={product.id} 
              to={`/product/${product.id}`}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <Card className="h-full overflow-hidden border-2 border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-2 left-2 flex flex-col gap-1">
                    {product.isHit && (
                      <Badge className="bg-accent text-accent-foreground text-xs">Хит</Badge>
                    )}
                    {product.isNew && (
                      <Badge className="bg-secondary text-secondary-foreground text-xs">Новинка</Badge>
                    )}
                    {product.oldPrice && (
                      <Badge variant="destructive" className="text-xs">
                        -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                      </Badge>
                    )}
                  </div>

                  {/* Stock status */}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
                      <span className="text-sm font-medium text-muted-foreground">Нет в наличии</span>
                    </div>
                  )}
                </div>

                <CardContent className="p-3">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium">{product.rating}</span>
                    <span className="text-xs text-muted-foreground">({product.reviews})</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-medium text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors min-h-[2.5rem]">
                    {product.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-3">
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-bold text-foreground">{formatPrice(product.price)}</span>
                    </div>
                    {product.oldPrice && (
                      <span className="text-xs text-muted-foreground line-through">
                        {formatPrice(product.oldPrice)}
                      </span>
                    )}
                  </div>

                  {/* Add to cart */}
                  <Button
                    size="sm"
                    className="w-full gradient-primary text-primary-foreground text-xs h-8"
                    disabled={!product.inStock || addingToCart === product.id}
                    onClick={(e) => handleAddToCart(product.id, e)}
                  >
                    {addingToCart === product.id ? (
                      "Добавлено ✓"
                    ) : (
                      <>
                        <ShoppingCart className="h-3 w-3 mr-1" />
                        В корзину
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartsSection;

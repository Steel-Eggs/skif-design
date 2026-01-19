import { Link } from "react-router-dom";
import { ArrowRight, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard, { Product } from "@/components/ProductCard";

// Import product images
import trailer1 from "@/assets/products/trailer-1.jpg";
import trailer2 from "@/assets/products/trailer-2.jpg";
import trailer3 from "@/assets/products/trailer-3.jpg";

const products: Product[] = [
  {
    id: 1,
    name: "Прицеп СКИФ-3015",
    category: "Легковые прицепы",
    price: 89900,
    oldPrice: 99900,
    image: trailer1,
    rating: 4.8,
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
    isHit: true,
    isNew: false,
    inStock: true,
  },
];

const PopularProductsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4">
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
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
            />
          ))}
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

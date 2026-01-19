import { Link } from "react-router-dom";
import { Heart, ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import ProductCard, { Product } from "@/components/ProductCard";
import { useFavorites } from "@/hooks/useFavorites";

// Mock products database - in real app this would come from API
const allProducts: Product[] = [
  { id: 1, name: "Прицеп СКИФ-2500", price: 89000, oldPrice: 99000, brand: "СКИФ", isHit: true, inStock: true },
  { id: 2, name: "Прицеп МЗСА 817711", price: 125000, oldPrice: null, brand: "МЗСА", isNew: true, inStock: true },
  { id: 3, name: "Прицеп Курганский 8213", price: 78500, oldPrice: 85000, brand: "Курганские прицепы", inStock: true },
  { id: 4, name: "Прицеп Вектор ЛАВ 81012", price: 156000, oldPrice: null, brand: "Вектор", isHit: true, inStock: true },
  { id: 5, name: "Прицеп ССТ 7132-24", price: 234000, oldPrice: 250000, brand: "ССТ", inStock: false },
  { id: 6, name: "Прицеп Спутник 821311", price: 98000, oldPrice: null, brand: "Спутник", isNew: true, inStock: true },
  { id: 7, name: "Прицеп СКИФ-3500 Люкс", price: 145000, oldPrice: 159000, brand: "СКИФ", isHit: true, inStock: true },
  { id: 8, name: "Прицеп МЗСА 817719", price: 189000, oldPrice: null, brand: "МЗСА", inStock: true },
  { id: 9, name: "Прицеп Курганский 8219 Люкс", price: 112000, oldPrice: 125000, brand: "Курганские прицепы", inStock: true },
  { id: 10, name: "Прицеп Вектор ЛАВ 81015", price: 178000, oldPrice: null, brand: "Вектор", isNew: true, inStock: true },
  { id: 11, name: "Прицеп СКИФ-4000", price: 198000, oldPrice: 215000, brand: "СКИФ", inStock: true },
  { id: 12, name: "Прицеп Спутник 821315", price: 134000, oldPrice: null, brand: "Спутник", inStock: true },
];

const Favorites = () => {
  const { favorites, clearFavorites } = useFavorites();
  
  const favoriteProducts = allProducts.filter(p => favorites.includes(p.id));

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-destructive/10 via-background to-accent/5">
          <div className="container px-4">
            <div className="flex items-center gap-2 text-muted-foreground mb-6 text-sm">
              <Link to="/" className="hover:text-foreground transition-colors">Главная</Link>
              <span>/</span>
              <span className="text-foreground">Избранное</span>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-destructive/10 flex items-center justify-center">
                  <Heart className="w-8 h-8 md:w-10 md:h-10 text-destructive" />
                </div>
                <div>
                  <h1 className="text-2xl md:text-4xl font-heading font-bold text-foreground">
                    Избранное
                  </h1>
                  <p className="text-muted-foreground">
                    {favorites.length > 0 
                      ? `${favorites.length} ${favorites.length === 1 ? 'товар' : favorites.length < 5 ? 'товара' : 'товаров'}`
                      : 'Пока ничего нет'
                    }
                  </p>
                </div>
              </div>
              
              {favorites.length > 0 && (
                <Button variant="outline" onClick={clearFavorites}>
                  Очистить список
                </Button>
              )}
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-8 md:py-12">
          <div className="container px-4">
            {favoriteProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {favoriteProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Heart className="w-20 h-20 text-muted-foreground/30 mx-auto mb-6" />
                <h2 className="text-2xl font-heading font-bold text-foreground mb-3">
                  Список избранного пуст
                </h2>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Добавляйте товары в избранное, нажимая на сердечко на карточке товара
                </p>
                <Link to="/catalog">
                  <Button size="lg" className="gradient-primary gap-2">
                    <ArrowLeft className="w-5 h-5" />
                    Перейти в каталог
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Favorites;

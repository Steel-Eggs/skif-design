import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, SlidersHorizontal, Grid3X3, List } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import trailer1 from '@/assets/products/trailer-1.jpg';
import trailer2 from '@/assets/products/trailer-2.jpg';
import trailer3 from '@/assets/products/trailer-3.jpg';

// Demo products database
const allProducts = [
  {
    id: 1,
    name: 'Прицеп для квадроцикла ССТ-7132-мини',
    price: 57500,
    oldPrice: 65000,
    image: trailer1,
    rating: 4.8,
    category: 'Для мототехники',
    brand: 'ССТ',
    inStock: true
  },
  {
    id: 2,
    name: 'Прицеп лодочный МЗСА 81771G.022',
    price: 89000,
    image: trailer2,
    rating: 4.9,
    category: 'Для лодок',
    brand: 'МЗСА',
    inStock: true
  },
  {
    id: 3,
    name: 'Прицеп бортовой МЗСА 817701.012',
    price: 72000,
    oldPrice: 78000,
    image: trailer3,
    rating: 4.7,
    category: 'Бортовые',
    brand: 'МЗСА',
    inStock: true
  },
  {
    id: 4,
    name: 'Прицеп для снегохода Курганские прицепы 8213B5',
    price: 95000,
    image: trailer1,
    rating: 4.6,
    category: 'Для мототехники',
    brand: 'Курганские прицепы',
    inStock: true
  },
  {
    id: 5,
    name: 'Прицеп-платформа МЗСА 817730.001',
    price: 115000,
    image: trailer2,
    rating: 4.9,
    category: 'Платформы',
    brand: 'МЗСА',
    inStock: false
  },
  {
    id: 6,
    name: 'Прицеп для перевозки техники ССТ-7135',
    price: 145000,
    oldPrice: 160000,
    image: trailer3,
    rating: 4.8,
    category: 'Для техники',
    brand: 'ССТ',
    inStock: true
  },
  {
    id: 7,
    name: 'Прицеп лодочный Спутник AQUA',
    price: 78000,
    image: trailer1,
    rating: 4.5,
    category: 'Для лодок',
    brand: 'Спутник',
    inStock: true
  },
  {
    id: 8,
    name: 'Прицеп бортовой одноосный Вектор',
    price: 48000,
    oldPrice: 55000,
    image: trailer2,
    rating: 4.4,
    category: 'Бортовые',
    brand: 'Вектор',
    inStock: true
  }
];

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('search') || '';
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [sortBy, setSortBy] = useState('relevance');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Filter products based on search query
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    return allProducts.filter(product => 
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Sort products
  const sortedProducts = useMemo(() => {
    const products = [...filteredProducts];
    
    switch (sortBy) {
      case 'price-asc':
        return products.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return products.sort((a, b) => b.price - a.price);
      case 'rating':
        return products.sort((a, b) => b.rating - a.rating);
      case 'name':
        return products.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return products;
    }
  }, [filteredProducts, sortBy]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ search: searchQuery });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-6">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Главная</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Результаты поиска</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Search form */}
          <div className="mb-8">
            <form onSubmit={handleSearch} className="flex gap-2 max-w-2xl">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Поиск товаров..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              <Button type="submit" className="h-12 px-6">
                Найти
              </Button>
            </form>
          </div>

          {/* Results header */}
          {searchQuery && (
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl font-bold">
                  Результаты поиска: «{searchQuery}»
                </h1>
                <p className="text-muted-foreground mt-1">
                  {sortedProducts.length > 0 
                    ? `Найдено ${sortedProducts.length} ${sortedProducts.length === 1 ? 'товар' : sortedProducts.length < 5 ? 'товара' : 'товаров'}`
                    : 'Ничего не найдено'
                  }
                </p>
              </div>

              {sortedProducts.length > 0 && (
                <div className="flex items-center gap-4">
                  {/* Sort */}
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-48">
                      <SlidersHorizontal className="w-4 h-4 mr-2" />
                      <SelectValue placeholder="Сортировка" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevance">По релевантности</SelectItem>
                      <SelectItem value="price-asc">Сначала дешевле</SelectItem>
                      <SelectItem value="price-desc">Сначала дороже</SelectItem>
                      <SelectItem value="rating">По рейтингу</SelectItem>
                      <SelectItem value="name">По названию</SelectItem>
                    </SelectContent>
                  </Select>

                  {/* View mode */}
                  <div className="flex border rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'bg-white hover:bg-muted'}`}
                    >
                      <Grid3X3 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'bg-white hover:bg-muted'}`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Results */}
          {!searchQuery ? (
            <div className="text-center py-16">
              <Search className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h2 className="text-xl font-semibold mb-2">Введите поисковый запрос</h2>
              <p className="text-muted-foreground">
                Найдите прицепы, запчасти и аксессуары
              </p>
            </div>
          ) : sortedProducts.length === 0 ? (
            <div className="text-center py-16">
              <Search className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h2 className="text-xl font-semibold mb-2">По запросу «{searchQuery}» ничего не найдено</h2>
              <p className="text-muted-foreground mb-6">
                Попробуйте изменить запрос или посмотрите наш каталог
              </p>
              <Button asChild>
                <Link to="/catalog">Перейти в каталог</Link>
              </Button>
            </div>
          ) : (
            <div className={viewMode === 'grid' 
              ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6'
              : 'flex flex-col gap-4'
            }>
              {sortedProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                  viewMode={viewMode}
                />
              ))}
            </div>
          )}

          {/* Suggestions when searching */}
          {searchQuery && sortedProducts.length > 0 && (
            <div className="mt-12 p-6 bg-muted/50 rounded-lg">
              <h3 className="font-semibold mb-4">Не нашли что искали?</h3>
              <p className="text-muted-foreground mb-4">
                Свяжитесь с нами, и мы поможем подобрать подходящий прицеп
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="outline">
                  <a href="tel:+78002001636">Позвонить</a>
                </Button>
                <Button asChild>
                  <Link to="/contacts">Написать нам</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SearchResults;

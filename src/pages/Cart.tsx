import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Minus, Plus, ShoppingCart } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

import trailer1 from '@/assets/products/trailer-1.jpg';
import trailer2 from '@/assets/products/trailer-2.jpg';

// Demo cart items
const initialCartItems = [
  {
    id: 1,
    name: 'Прицеп для квадроцикла ССТ-7132-мини',
    price: 57500,
    quantity: 1,
    image: trailer1,
    sku: 'ССТ-7132'
  },
  {
    id: 2,
    name: 'Прицеп лодочный МЗСА 81771G.022',
    price: 89000,
    quantity: 1,
    image: trailer2,
    sku: 'МЗСА-81771'
  }
];

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [filterText, setFilterText] = useState('');

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const filteredItems = cartItems.filter(item =>
    item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const formatPrice = (price: number) => {
    return price.toLocaleString('ru-RU') + ' руб.';
  };

  const handleCheckout = () => {
    navigate('/checkout');
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
                <BreadcrumbPage>Корзина</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-2xl md:text-3xl font-bold mb-6">Корзина</h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingCart className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h2 className="text-xl font-semibold mb-2">Корзина пуста</h2>
              <p className="text-muted-foreground mb-6">Добавьте товары из каталога</p>
              <Button asChild>
                <Link to="/catalog">Перейти в каталог</Link>
              </Button>
            </div>
          ) : (
            <>
              {/* Top summary bar */}
              <div className="bg-white rounded-lg border p-4 mb-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-6">
                  {/* Total and checkout */}
                  <div className="text-right">
                    <div className="flex items-baseline gap-2">
                      <span className="text-muted-foreground">Итого:</span>
                      <span className="text-2xl md:text-3xl font-bold">{formatPrice(totalPrice)}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Сумма НДС: 0 руб.
                    </div>
                  </div>
                  <Button 
                    onClick={handleCheckout}
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-3 text-base"
                  >
                    Оформить заказ
                  </Button>
                </div>
              </div>

              {/* Filter and count */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                <div className="flex items-center gap-2 max-w-xs">
                  <Input
                    value={filterText}
                    onChange={(e) => setFilterText(e.target.value)}
                    placeholder="Фильтр"
                    className="w-48"
                  />
                  {filterText && (
                    <button
                      onClick={() => setFilterText('')}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <div className="text-sm text-muted-foreground">
                  В корзине {totalItems} {totalItems === 1 ? 'товар' : totalItems < 5 ? 'товара' : 'товаров'}
                </div>
              </div>

              {/* Cart items */}
              <div className="bg-white rounded-lg border divide-y">
                {filteredItems.map((item) => (
                  <div key={item.id} className="p-4 flex items-center gap-4">
                    {/* Image */}
                    <Link to={`/product/${item.id}`} className="shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-16 md:w-28 md:h-20 object-cover rounded"
                      />
                    </Link>

                    {/* Name */}
                    <div className="flex-1 min-w-0">
                      <Link 
                        to={`/product/${item.id}`}
                        className="font-medium hover:text-primary transition-colors line-clamp-2"
                      >
                        {item.name}
                      </Link>
                    </div>

                    {/* Price */}
                    <div className="text-right shrink-0">
                      <div className="font-semibold text-primary">
                        {formatPrice(item.price)}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        цена за 1 шт
                      </div>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 flex items-center justify-center border rounded hover:bg-muted transition-colors"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <Input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => {
                          const val = parseInt(e.target.value) || 1;
                          setCartItems(items =>
                            items.map(i =>
                              i.id === item.id ? { ...i, quantity: Math.max(1, val) } : i
                            )
                          );
                        }}
                        className="w-14 text-center"
                        min={1}
                      />
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 flex items-center justify-center border rounded hover:bg-muted transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Unit label */}
                    <div className="text-sm text-muted-foreground shrink-0 hidden sm:block">
                      шт
                    </div>

                    {/* Remove button */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-muted-foreground hover:text-destructive transition-colors shrink-0"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Bottom checkout button for mobile */}
              <div className="mt-6 md:hidden">
                <Button 
                  onClick={handleCheckout}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-base"
                >
                  Оформить заказ • {formatPrice(totalPrice)}
                </Button>
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;

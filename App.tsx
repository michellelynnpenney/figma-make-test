
import { useState } from "react";
import { animals } from "./data/animals";
import { AnimalCard } from "./components/AnimalCard";
import { CategoryNav } from "./components/CategoryNav";
import { Header } from "./components/Header";
import "./styles/card-flip.css";

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Get unique categories
  const categories = Array.from(
    new Set(animals.map((animal) => animal.category))
  );

  // Filter animals by category and search term
  const filteredAnimals = animals.filter((animal) => {
    const matchesCategory = activeCategory ? animal.category === activeCategory : true;
    const matchesSearch = animal.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background pb-10">
      <Header />
      
      <main className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <CategoryNav 
            categories={categories} 
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
          
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search animals..."
              className="w-full py-2 px-4 rounded-full border border-border bg-input-background"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {filteredAnimals.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <h3 className="mb-2">No animals found!</h3>
            <p className="text-muted-foreground">
              Try changing your search or selecting a different category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAnimals.map((animal) => (
              <AnimalCard key={animal.id} animal={animal} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

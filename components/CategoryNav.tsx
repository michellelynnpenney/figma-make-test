
import React from "react";

interface CategoryNavProps {
  categories: string[];
  activeCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export function CategoryNav({ categories, activeCategory, onSelectCategory }: CategoryNavProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <button
        className={`px-4 py-2 rounded-full transition-colors ${
          activeCategory === null
            ? "bg-primary text-primary-foreground"
            : "bg-muted hover:bg-muted/80"
        }`}
        onClick={() => onSelectCategory(null)}
      >
        All Animals
      </button>
      
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 rounded-full capitalize transition-colors ${
            activeCategory === category
              ? "bg-primary text-primary-foreground"
              : "bg-muted hover:bg-muted/80"
          }`}
          onClick={() => onSelectCategory(category)}
        >
          {category}s
        </button>
      ))}
    </div>
  );
}

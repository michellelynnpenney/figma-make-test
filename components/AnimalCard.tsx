
import React, { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card, CardContent } from "./ui/card";
import type { Animal } from "../data/animals";

interface AnimalCardProps {
  animal: Animal;
}

export function AnimalCard({ animal }: AnimalCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="perspective-1000 cursor-pointer w-full h-[400px]"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className={`relative w-full h-full transition-transform duration-500 preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front of card */}
        <Card className="absolute w-full h-full backface-hidden">
          <div className="relative h-2/3 overflow-hidden rounded-t-lg">
            <ImageWithFallback
              src={animal.image}
              alt={animal.name}
              className="object-cover w-full h-full"
            />
            <div className={`absolute top-0 right-0 rounded-bl-lg px-3 py-1 ${animal.color} text-white`}>
              {animal.category}
            </div>
          </div>
          <CardContent className="p-4">
            <h2 className="mb-1">{animal.name}</h2>
            <p className="text-muted-foreground mb-2 italic">{animal.species}</p>
            <p className="text-xs">Click to see fun facts!</p>
          </CardContent>
        </Card>

        {/* Back of card */}
        <Card className="absolute w-full h-full backface-hidden rotate-y-180 overflow-auto">
          <CardContent className="p-6">
            <h3 className="mb-3">Fun Facts about {animal.name}s</h3>
            <ul className="space-y-2 mb-4">
              {animal.facts.map((fact, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <p>{fact}</p>
                </li>
              ))}
            </ul>
            
            <div className="mt-4 p-3 bg-muted rounded-lg">
              <p className="italic">"{animal.funFact}"</p>
            </div>
            
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div>
                <p className="text-muted-foreground">Habitat:</p>
                <p>{animal.habitat}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Diet:</p>
                <p>{animal.diet}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

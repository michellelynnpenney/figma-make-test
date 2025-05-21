
import React from "react";

export function Header() {
  return (
    <header className="py-6 mb-8 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-2 items-center text-center">
          <h1 className="text-4xl font-bold text-primary tracking-tight">Animal Adventure</h1>
          <p className="text-muted-foreground max-w-lg">
            Discover amazing facts about the wonderful animals that share our planet!
          </p>
        </div>
      </div>
    </header>
  );
}

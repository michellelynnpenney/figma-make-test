
# Animal Adventure

A fun, interactive web application for children to learn about different animals.

## Features

- Browse animals by category (mammals, birds, reptiles, etc.)
- Search for specific animals
- Interactive flip cards with animal facts and information
- Kid-friendly design and interface

## Running Locally

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or newer)
- npm or yarn package manager

### Installation Steps

1. **Create a new React project**

   You can use Vite for a fast setup:

   ```bash
   npm create vite@latest animal-adventure -- --template react-ts
   cd animal-adventure
   ```

   Or use Create React App:

   ```bash
   npx create-react-app animal-adventure --template typescript
   cd animal-adventure
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Install additional dependencies**

   ```bash
   npm install tailwindcss postcss autoprefixer
   ```

4. **Set up Tailwind CSS**

   Initialize Tailwind:

   ```bash
   npx tailwindcss init -p
   ```

5. **Copy the project files**

   Create the following directory structure:

   ```
   /src
     /components
       /figma
       /ui
     /data
     /styles
   ```

   Then copy all the project files into their respective directories:
   
   - Copy all component files (.tsx) into `/src/components/`
   - Copy animal data file into `/src/data/`
   - Copy CSS files into `/src/styles/`
   - Copy App.tsx to the `/src/` directory
   
   Note: Make sure to adjust imports if necessary to match your file structure.

6. **Configure Tailwind CSS**

   Update your `tailwind.config.js` file:

   ```js
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: [
       "./src/**/*.{js,jsx,ts,tsx}",
     ],
     theme: {
       extend: {
         // Add your theme customizations here
       },
     },
     plugins: [],
   }
   ```

   Create or update your CSS file to include Tailwind directives:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

7. **Set up the ImageWithFallback component**

   Create `/src/components/figma/ImageWithFallback.tsx`:

   ```tsx
   import { useState, ImgHTMLAttributes } from "react";

   interface ImageWithFallbackProps extends ImgHTMLAttributes<HTMLImageElement> {
     fallback?: string;
   }

   export function ImageWithFallback({ 
     src, 
     fallback = "https://via.placeholder.com/300x200?text=Image+Not+Found", 
     alt = "Image",
     ...rest 
   }: ImageWithFallbackProps) {
     const [imgSrc, setImgSrc] = useState(src);

     return (
       <img
         src={imgSrc}
         alt={alt}
         onError={() => setImgSrc(fallback)}
         {...rest}
       />
     );
   }
   ```

8. **Add ShadCN UI components**

   For our app to work, we need to make sure the Card component is available. Create `/src/components/ui/card.tsx`:

   ```tsx
   import * as React from "react";

   const Card = React.forwardRef<
     HTMLDivElement,
     React.HTMLAttributes<HTMLDivElement>
   >(({ className, ...props }, ref) => (
     <div
       ref={ref}
       className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
       {...props}
     />
   ));
   Card.displayName = "Card";

   const CardHeader = React.forwardRef<
     HTMLDivElement,
     React.HTMLAttributes<HTMLDivElement>
   >(({ className, ...props }, ref) => (
     <div
       ref={ref}
       className={`flex flex-col space-y-1.5 p-6 ${className}`}
       {...props}
     />
   ));
   CardHeader.displayName = "CardHeader";

   const CardTitle = React.forwardRef<
     HTMLParagraphElement,
     React.HTMLAttributes<HTMLHeadingElement>
   >(({ className, ...props }, ref) => (
     <h3
       ref={ref}
       className={`text-lg font-semibold leading-none tracking-tight ${className}`}
       {...props}
     />
   ));
   CardTitle.displayName = "CardTitle";

   const CardDescription = React.forwardRef<
     HTMLParagraphElement,
     React.HTMLAttributes<HTMLParagraphElement>
   >(({ className, ...props }, ref) => (
     <p
       ref={ref}
       className={`text-sm text-muted-foreground ${className}`}
       {...props}
     />
   ));
   CardDescription.displayName = "CardDescription";

   const CardContent = React.forwardRef<
     HTMLDivElement,
     React.HTMLAttributes<HTMLDivElement>
   >(({ className, ...props }, ref) => (
     <div ref={ref} className={`p-6 pt-0 ${className}`} {...props} />
   ));
   CardContent.displayName = "CardContent";

   const CardFooter = React.forwardRef<
     HTMLDivElement,
     React.HTMLAttributes<HTMLDivElement>
   >(({ className, ...props }, ref) => (
     <div
       ref={ref}
       className={`flex items-center p-6 pt-0 ${className}`}
       {...props}
     />
   ));
   CardFooter.displayName = "CardFooter";

   export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
   ```

9. **Update the main index file**

   Modify your `src/index.tsx` or `src/main.tsx` (depending on your setup) to import the CSS files:

   ```tsx
   import React from 'react';
   import ReactDOM from 'react-dom/client';
   import App from './App';
   import './styles/globals.css';
   import './styles/card-flip.css';

   ReactDOM.createRoot(document.getElementById('root')!).render(
     <React.StrictMode>
       <App />
     </React.StrictMode>,
   );
   ```

10. **Run the application**

   ```bash
   npm run dev
   ```

   Or if you're using Create React App:

   ```bash
   npm start
   ```

   Open your browser and navigate to `http://localhost:3000` (for Create React App) or `http://localhost:5173` (for Vite).

## Troubleshooting

- **Path issues**: Make sure all import paths in your components match your project structure
- **Tailwind not working**: Check that Tailwind is properly configured and that your CSS imports are correct
- **Component errors**: Ensure you've copied all necessary components and dependencies

## Next Steps

- Add more animals to the data file
- Implement a sound feature to hear animal noises
- Add a quiz feature to test knowledge about animals

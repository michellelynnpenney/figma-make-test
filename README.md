
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

### Quick Start

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the development server**

   ```bash
   npm run dev
   ```
   
   This will start the development server and automatically open your browser to `http://localhost:3000`.

### Detailed Setup

If you're starting from scratch or encountering issues:

1. **Install dependencies**

   ```bash
   npm install
   ```

   If you're missing the Vite React plugin:
   
   ```bash
   npm install @vitejs/plugin-react --save-dev
   ```

2. **Check file structure**

   Ensure you have all necessary files:
   - `/index.html` - Entry HTML file
   - `/main.tsx` - React entry point
   - `/App.tsx` - Main application component
   - `/vite.config.ts` - Vite configuration
   - `/components/` - All React components
   - `/data/` - Animal data
   - `/styles/` - CSS files

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **If you still get errors**

   Try clearing your browser cache or running:
   
   ```bash
   npm run build && npm run preview
   ```
   
   This will build the production version and serve it locally.

## Troubleshooting

- **"Cannot GET /animal-adventure/"**: Make sure you're accessing the correct URL. The default is `http://localhost:3000/`
- **Module not found errors**: Check that all import paths match your file structure
- **Blank page**: Check the browser console for errors
- **Tailwind not working**: Ensure your Tailwind config is set up correctly

## Project Structure

```
/
├── index.html         # HTML entry point
├── main.tsx           # React entry point
├── App.tsx            # Main application component
├── vite.config.ts     # Vite configuration
├── components/        # React components
│   ├── AnimalCard.tsx
│   ├── CategoryNav.tsx
│   ├── Header.tsx
│   └── ...
├── data/              # Data files
│   └── animals.ts     # Animal data
└── styles/            # CSS files
    ├── card-flip.css  # Card flip animation styles
    └── globals.css    # Global styles including Tailwind
```

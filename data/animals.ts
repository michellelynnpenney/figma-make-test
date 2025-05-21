
export interface Animal {
  id: string;
  name: string;
  species: string;
  category: "mammal" | "bird" | "reptile" | "amphibian" | "fish" | "insect";
  image: string;
  facts: string[];
  funFact: string;
  habitat: string;
  diet: string;
  color: string;
}

export const animals: Animal[] = [
  {
    id: "elephant",
    name: "Elephant",
    species: "Loxodonta africana",
    category: "mammal",
    image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    facts: [
      "Elephants are the largest land animals on Earth",
      "They can live up to 70 years in the wild",
      "An elephant's trunk has over 40,000 muscles"
    ],
    funFact: "Baby elephants suck their trunks for comfort, just like human babies suck their thumbs!",
    habitat: "Savannas, forests, deserts, and marshes",
    diet: "Herbivore - they eat roots, grasses, fruits, and bark",
    color: "bg-gray-400"
  },
  {
    id: "lion",
    name: "Lion",
    species: "Panthera leo",
    category: "mammal",
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    facts: [
      "Lions are the only cats that live in groups called prides",
      "Male lions have large manes to look bigger to other lions",
      "Lions can sleep up to 20 hours a day"
    ],
    funFact: "A lion's roar can be heard from up to 5 miles away!",
    habitat: "Grasslands and savannas",
    diet: "Carnivore - they eat zebras, wildebeest, and other animals",
    color: "bg-amber-300"
  },
  {
    id: "penguin",
    name: "Penguin",
    species: "Spheniscidae",
    category: "bird",
    image: "https://images.unsplash.com/photo-1551986782-d0169b3f8fa7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    facts: [
      "Penguins can't fly but are excellent swimmers",
      "They can dive down to 500 meters in the ocean",
      "Emperor penguins can stay underwater for up to 20 minutes"
    ],
    funFact: "Penguins propose to each other with a pebble!",
    habitat: "Antarctica, South Africa, New Zealand, and South America",
    diet: "Carnivore - they eat fish, krill, and squid",
    color: "bg-slate-800"
  },
  {
    id: "peacock",
    name: "Peacock",
    species: "Pavo cristatus",
    category: "bird",
    image: "https://images.unsplash.com/photo-1599594214737-96a4d67c3943?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    facts: [
      "Only male peacocks have the colorful tail feathers",
      "A peacock's train can be over 6 feet long",
      "They can fly despite their large tail feathers"
    ],
    funFact: "Peacocks can make 11 different sounds, including a loud call that sounds like 'help'!",
    habitat: "Forests and rainforests in Asia and Africa",
    diet: "Omnivore - they eat plants, seeds, insects, and small creatures",
    color: "bg-blue-600"
  },
  {
    id: "frog",
    name: "Frog",
    species: "Anura",
    category: "amphibian",
    image: "https://images.unsplash.com/photo-1496070242169-b672c576566b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    facts: [
      "Frogs don't need to drink water - they absorb it through their skin",
      "They catch insects with their sticky tongues",
      "Some frogs can jump 20 times their body length"
    ],
    funFact: "A group of frogs is called an 'army'!",
    habitat: "Ponds, lakes, and damp areas",
    diet: "Carnivore - they eat insects and small animals",
    color: "bg-green-500"
  },
  {
    id: "turtle",
    name: "Turtle",
    species: "Testudines",
    category: "reptile",
    image: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    facts: [
      "Turtles have been around for over 200 million years",
      "Some turtles can live for more than 100 years",
      "A turtle's shell is actually part of its skeleton"
    ],
    funFact: "Baby turtles talk to each other while still in their eggs!",
    habitat: "Oceans, rivers, and lakes",
    diet: "Omnivore - they eat plants, insects, and small fish",
    color: "bg-emerald-700"
  },
  {
    id: "butterfly",
    name: "Butterfly",
    species: "Rhopalocera",
    category: "insect",
    image: "https://images.unsplash.com/photo-1452848168470-7c80f44409d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    facts: [
      "Butterflies taste with their feet",
      "They start life as caterpillars before transforming",
      "Some butterflies migrate thousands of miles"
    ],
    funFact: "A butterfly's wings are actually transparent - the colors come from tiny scales that reflect light!",
    habitat: "Gardens, meadows, and forests worldwide",
    diet: "Herbivore - they drink nectar from flowers",
    color: "bg-purple-400"
  },
  {
    id: "dolphin",
    name: "Dolphin",
    species: "Delphinidae",
    category: "mammal",
    image: "https://images.unsplash.com/photo-1607153333879-c174d265f1d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    facts: [
      "Dolphins are extremely intelligent marine mammals",
      "They use echolocation to find food and navigate",
      "Dolphins sleep with one eye open"
    ],
    funFact: "Dolphins have names for each other and will respond when called!",
    habitat: "Oceans worldwide",
    diet: "Carnivore - they eat fish and squid",
    color: "bg-blue-500"
  },
  {
    id: "giraffe",
    name: "Giraffe",
    species: "Giraffa camelopardalis",
    category: "mammal",
    image: "https://images.unsplash.com/photo-1547721064-da6cfb341d50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    facts: [
      "Giraffes are the tallest living animals on Earth",
      "Their tongues can be up to 20 inches long",
      "They only need to drink water once every few days"
    ],
    funFact: "Giraffes can clean their ears with their 21-inch long tongue!",
    habitat: "African savannas",
    diet: "Herbivore - they eat leaves from tall trees",
    color: "bg-orange-300"
  }
];

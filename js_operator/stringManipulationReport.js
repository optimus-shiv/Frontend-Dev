let product = " wireless headphones PRO ";

let cleaned = product.trim()
                     .toLowerCase()
                     .split(" ")
                     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                     .join(" ")
                     .replace("Pro", "Pro Edition");

console.log(cleaned);
console.log(cleaned.length);


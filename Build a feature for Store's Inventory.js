// Object of items with prices in USD
const itemsInUSD = {
    "Laptop": 1000,
    "Phone": 500,
    "Headphones": 150,
    "Charger": 20
  };
  
  // Exchange rate from USD to INR
  const exchangeRate = 80;
  
  // Convert prices to INR
  const itemsInINR = Object.fromEntries(
    Object.entries(itemsInUSD).map(([item, priceUSD]) => {
      const priceINR = priceUSD * exchangeRate; // Convert to INR
      return [item, priceINR]; // Return as key-value pair
    })
  );
  
  // Output the new object with prices in INR
  console.log(itemsInINR);
  
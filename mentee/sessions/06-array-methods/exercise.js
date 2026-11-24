// A   const available = products.filter((product) => product.inStock);
// B   const names = available.map((product) => product.name);
// C   console.log(names);
// X   const names = products.map((product) => product.inStock);
// Y   const available = products.filter((product) => product.name);


const products = [
    {name: "Book", inStock: false  },
    {name: "Pen", inStock: true  },
    {name: "Paper", inStock: false  },
    {name: "Bag", inStock: true  }
]




//Saves an array of objects with the following criteria of true in product inStock

// A

const available = products.filter((product) => product.inStock);

// From the array of objects available we now go into it and pull the names into its own array

// B

const names = available.map((product) => product.name);

//c 
console.log(names);



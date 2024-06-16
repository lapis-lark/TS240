interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Sample Product",
    price: 49.99,
    description: "A sample product for demonstration",
  },
];

function updateProduct(
    productId: number,
    updatedValues: Partial<Product>
  ): void {
    let product = products.filter(p => p.id === productId)[0];
    if (product) {
        product = {...product, ...updatedValues};
        console.log(product);
    } else {
        console.log('product not found');
    }
  }
  
  updateProduct(1, {
    name: "Updated Product Name",
    price: 99.99,
  });
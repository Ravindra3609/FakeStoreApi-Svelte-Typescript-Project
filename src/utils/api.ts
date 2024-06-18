export async function fetchProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
  }
  
  export async function fetchProductById(id: string) {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    return data;
  }
  
  export async function fetchCategories() {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    const data = await response.json();
    return data;
  }
  

  // fetch('https://fakestoreapi.com/products?limit=5')
  //           .then(res=>res.json())
  //           .then(json=>console.log(json))
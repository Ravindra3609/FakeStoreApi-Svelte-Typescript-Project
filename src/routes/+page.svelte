<script lang="ts">
  import { onMount } from 'svelte';
  import { fetchProducts, fetchCategories } from '../utils/api';
  import productcard from '../components/productcard.svelte';
  import navbar from '../components/navbar.svelte';

  let products = [];
  let categories = [];
  let selectedCategory = '';
  let searchQuery = '';
  let minPrice = 0;
  let maxPrice = 1000;
  let sortOption = '';

  onMount(async () => {
    products = await fetchProducts();
    categories = await fetchCategories();
  });

  function filterProducts() {
    return products
      .filter(product => 
        (selectedCategory === '' || product.category === selectedCategory) &&
        (searchQuery === '' || product.title.toLowerCase().includes(searchQuery.toLowerCase())) &&
        product.price >= minPrice &&
        product.price <= maxPrice
      )
      .sort((a, b) => {
        if (sortOption === 'price-asc') return a.price - b.price;
        if (sortOption === 'price-desc') return b.price - a.price;
        return 0;
      });
  }
</script>

<main class="container mx-auto p-4">
  <div class="flex justify-between mb-4">
    <select bind:value={selectedCategory} class="border p-2">
    <navbar/>
      <option value="">All Categories</option>
      {#each categories as category}
        <option value={category}>{category}</option>
      {/each}
    </select>
    <input type="text" bind:value={searchQuery} placeholder="Search..." class="border p-2" />
  </div>
  <div class="flex justify-between mb-4">
    <div>
      <label for="minPrice">Min Price</label>
      <input type="number" bind:value={minPrice} id="minPrice" class="border p-2" />
    </div>
    <div>
      <label for="maxPrice">Max Price</label>
      <input type="number" bind:value={maxPrice} id="maxPrice" class="border p-2" />
    </div>
    <div>
      <label for="sortOption">Sort By</label>
      <select bind:value={sortOption} id="sortOption" class="border p-2">
        <option value="">None</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
    </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {#each filterProducts() as product}
      <ProductCard {product} />
    {/each}
  </div>
</main>
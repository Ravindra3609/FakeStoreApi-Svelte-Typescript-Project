<script lang="ts">
  export let product: { title: string, price: number, image: string };
</script>

<div class="product-card border p-4">
  <img src={product.image} alt={product.title} class="w-full h-48 object-cover mb-4" />
  <h2 class="text-lg font-bold">{product.title}</h2>
  <p class="text-gray-600">${product.price}</p>
</div>

<style>
    .product-card {
    max-width: 300px;
  
  }
</style>
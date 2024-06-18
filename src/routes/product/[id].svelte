<script lang="ts">
  import { onMount } from 'svelte';
  import { fetchProductById } from '../../utils/api';
  import { addToCart } from '../../stores/cart';
  export let params;
  
  let product = null;

  onMount(async () => {
    product = await fetchProductById(params.id);
  });
</script>

<main class="container mx-auto p-4">
  {#if product}
    <div class="flex">
      <img src={product.image} alt={product.title} class="w-1/2"/>
      <div class="ml-4">
        <h1 class="text-2xl">{product.title}</h1>
        <p>{product.description}</p>
        <p class="text-xl font-bold">${product.price}</p>
        <button on:click={() => addToCart(product)} class="mt-4 p-2 border">Add to Cart</button>
      </div>
    </div>
  {:else}
    <p>Loading...</p>
  {/if}
</main>
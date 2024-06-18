<script lang="ts">
  import cart, { removeFromCart, clearCart } from '../stores/cart';
</script>

<main class="container mx-auto p-4">
  {#if $cart.length > 0}
    <ul>
      {#each $cart as item}
        <li class="flex justify-between items-center p-2 border-b">
          <div>
            <h2>{item.title}</h2>
            <p>${item.price} x {item.quantity}</p>
          </div>
          <button on:click={() => removeFromCart(item.id)} class="p-2 border">Remove</button>
        </li>
      {/each}
    </ul>
    <button on:click={() => clearCart()} class="mt-4 p-2 border">Clear Cart</button>
  {:else}
    <p>Your cart is empty.</p>
  {/if}
</main>
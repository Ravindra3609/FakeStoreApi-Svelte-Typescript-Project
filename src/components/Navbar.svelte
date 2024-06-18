<script>
  import cart from '../stores/cart';
  $: totalItems = $cart.reduce((sum, item) => sum + item.quantity, 0);
</script>

<nav class="bg-gray-800 p-4 text-white">
  <div class="container mx-auto flex justify-between items-center">
    <a href="/" class="text-xl">FakeStore</a>
    <a href="/cart" class="relative">
      Cart ({totalItems})
    </a>
  </div>
</nav>
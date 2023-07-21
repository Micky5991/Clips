<script>
    import "../app.css";
    import Header from "./Header.svelte";
</script>

<svelte:head>
    <title>😂 Clips</title>
</svelte:head>

<div class="container mx-auto">
    <Header />

    <div class="my-8">
        <slot />
    </div>
</div>


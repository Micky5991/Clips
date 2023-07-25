<script>
    import "../app.css";
    import Header from "./Header.svelte";
    import {page} from "$app/stores";

    let session = $page.data.session;
</script>

<svelte:head>
    <title>😂 Clips</title>
</svelte:head>

<div class="container mx-auto">
    <Header session={session} />

    <div class="my-8">
        <slot />
    </div>
</div>


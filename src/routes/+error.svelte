<script>
    import {page} from "$app/stores";
</script>

<div class="text-center">
    <div class="font-bold text-8xl mb-6">{$page.status}</div>
    <div class="text-xl">{$page.error.message}</div>
</div>

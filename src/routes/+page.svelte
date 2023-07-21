<script>
    export let data;
</script>

<ul>
    {#each data.clips as clip}
        <li>Clip: {clip.title}</li>
    {:else}
        empty
    {/each}
</ul>

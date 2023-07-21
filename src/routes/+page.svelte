<script>
    export let data;
</script>

<ul>
    {#each data.clips as clip}
        <li>Clip: <a href={clip.slug}>{clip.title}</a></li>
    {:else}
        empty
    {/each}
</ul>

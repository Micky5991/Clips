<script>
    export let data;
</script>

<div class="space-y-8">
    {#each data.clips as clip}
        <div class="flex flex-col sm:flex-row bg-zinc-800 rounded-lg">
            <div class="sm:w-3/12 shrink-0 h-32 sm:h-auto">
                <a href={clip.slug}>
                    <img src="rickastley.png" alt={`Thumbnail of clip ${clip.title}`} class="w-full h-full sm:aspect-video object-cover"/>
                </a>
            </div>
            <div class="py-4 px-6">
                <a href={clip.slug} class="font-bold text-2xl">{clip.title}</a>
            </div>
        </div>
    {:else}
        No clips have been uploaded.
    {/each}
</div>

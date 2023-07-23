<script>
    export let data = { clip: null };

    let { clip } = data;
</script>

<h1 class="text-3xl font-black tracking-wide">{clip.title}</h1>

<video autoplay preload="auto" controls width="250" class="aspect-ratio aspect-video w-full my-12 bg-black">
    <source src="rickastley.mp4" type="video/mp4">
    <track kind="captions" src="."/>
</video>

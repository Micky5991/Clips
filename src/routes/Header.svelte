<script>
    export let session;

    let user;

    $: user = session?.user;

</script>

<div class="flex flex-row justify-between items-center my-4">
    <div class="font-black text-2xl">
        <a href="/">😂 Clips</a>
    </div>
    <div>
        {#if user != null}
            <div class="flex flex-row items-center space-x-4">
                <div>
                    <img src={user.image} alt={`Avatar by ${user.name}`} class="h-8 w-8 rounded" />
                </div>
                <div>{user.name}</div>
            </div>

        {:else}
            <a href="/auth/signin">Login</a>
        {/if}

    </div>
</div>

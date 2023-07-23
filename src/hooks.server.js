import { SvelteKitAuth } from "@auth/sveltekit";
import Discord from "@auth/core/providers/discord";
import { env } from '$env/dynamic/private';

export const handle = SvelteKitAuth({
    providers: [
        Discord({
            clientId: env.DISCORD_ID,
            clientSecret: env.DISCORD_SECRET,
        }),
    ]
})

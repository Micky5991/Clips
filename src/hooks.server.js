import { SvelteKitAuth } from "@auth/sveltekit";
import Discord from "@auth/core/providers/discord";
import { env } from '$env/dynamic/private';
import {PrismaAdapter} from "@auth/prisma-adapter";
import prisma from "$lib/prisma.js";

export const handle = SvelteKitAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        Discord({
            clientId: env.DISCORD_ID,
            clientSecret: env.DISCORD_SECRET,
        }),
    ]
})

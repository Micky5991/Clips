import prisma from "$lib/prisma.js";
import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    return {
        clip: await getClip(params.video),
    };
}

async function getClip(slug) {
    const clip = await prisma.clip.findFirst({ where: { slug: { equals: slug } }});

    if (clip == null) {
        throw error(404);
    }

    return clip;
}

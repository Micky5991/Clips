import prisma from "$lib/prisma.js";

/** @type {import('./$types').PageLoad} */
export async function load() {
    return {
        clips: await loadClips(),
    };
}

function loadClips() {
    return prisma.clip.findMany();
}

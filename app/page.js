import ClipManager from "@/app/clip-manager.js";
import prisma from "@/libs/prisma.js";

function getClips() {
    return prisma.clip.findMany();
}

export default async function Home() {
    const clips = await getClips();

    return (
        <div>
            <ClipManager clips={clips}/>
        </div>
    )
}

import env from "@/libs/env.js";
import prisma from "@/libs/prisma.js";
import { notFound } from "next/navigation.js";
import formatDistance from "date-fns/formatDistance";
import format from "date-fns/format";

export const metadata = {
    title: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor. | ${env('NEXT_PUBLIC_PAGE_NAME')}`,
    description: 'Watch clips uploaded by users',
    openGraph: {
        title: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
        siteName: env('NEXT_PUBLIC_PAGE_NAME'),
        videos: [
            {
                secure: 'rickastley.mp4',
            }
        ],
        locale: 'en_US',
        type: 'video.other',
    },
}

function getData(slug) {
    return prisma.clip.findFirst({ where: { slug: { equals: slug }}});
}

export default async function Video({ params: { video: slug } }) {
    const video = await getData(slug);

    if (video == null) {
        return notFound();
    }

    return (
        <div>

            <h1 className={'my-4 font-black text-2xl md:text-3xl lg:text-4xl tracking-wide'}>
                {video.title}
            </h1>

            <div className={'my-8 lg:my-12'}>
                <video
                    width="1280"
                    height="720"
                    controls
                    autoPlay={true}
                    loop={true}
                    playsInline={true}
                    className={'w-full aspect-video'}>
                    <source src="rickastley.mp4" type="video/mp4" />
                </video>
            </div>

            <div className={'bg-zinc-900 p-6 rounded-2xl'}>
                Uploaded <span className={'font-bold'} title={format(video.createdAt, "dd.MM.yyyy - HH:mm")}>{formatDistance(video.createdAt, new Date(), { addSuffix: true })}</span>
            </div>

        </div>
    )
}

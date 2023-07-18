import Link from "next/link.js";
import Image from "next/image.js";
import DateDisplay from "@/components/date-display.js";

export default function Clip({ clip }) {
    return (
        <div className={'bg-zinc-900 rounded flex flex-col md:flex-row'}>
            <div className={'relative h-32 md:w-48 md:h-auto shrink-0'}>
                <Link href={clip.slug}>
                    <Image src={"/rickastley.png"} fill={true} className={"object-cover"} />
                </Link>
            </div>
            <div className={'p-6 space-y-1'}>
                <div>
                    <Link href={clip.slug} className={'font-bold tracking-wide'}>{clip.title}</Link>
                </div>
                <div className={'text-sm'}>
                    Uploaded <DateDisplay date={clip.createdAt} className={'font-bold'} />
                </div>
            </div>
        </div>
    );
}

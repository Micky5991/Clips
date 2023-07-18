import Link from "next/link.js";

export default function Clip({ clip }) {
    return (
        <div className={'bg-zinc-900 rounded px-4 py-4'}>
            <Link href={clip.slug}>{clip.title}</Link>
        </div>
    );
}

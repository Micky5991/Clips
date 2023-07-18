import Clip from "@/app/clip.js";

export default function ClipManager({ clips }) {
    return (
        <div className={'space-y-8 my-8'}>
            <div>
                Suchen
            </div>
            <div className={'space-y-4'}>
                {clips.map(clip => <Clip key={clip.id} clip={clip} />)}
            </div>
        </div>
    )
}

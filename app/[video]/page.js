export default function Video({ params: { video: videoId } }) {
    return (
        <div>
            VIDEO: {videoId}
            <video width="320" height="240" controls autoPlay={true} loop={true} className={'w-full aspect-video'}>
                <source src="rickastley.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

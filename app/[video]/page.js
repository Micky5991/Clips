export default function Video({ params: { video: videoId } }) {
    return (
        <div>
            VIDEO: {videoId}
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
    )
}

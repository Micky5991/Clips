export default function Loading() {
    return (
        <div role="status" className="w-full animate-pulse">
            <div className="h-8 my-4 bg-gray-200 rounded-full dark:bg-gray-700 w-96"></div>

            <div className={"w-full my-12 aspect-video bg-gray-200 rounded-lg dark:bg-gray-700"}></div>

            <div className={'bg-zinc-900 p-6 rounded-2xl h-16'}></div>

            <span className="sr-only">Loading...</span>
        </div>
    );
}

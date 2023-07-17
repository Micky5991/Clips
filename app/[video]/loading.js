export default function Loading() {
    return (
        <div role="status" className="w-full animate-pulse">
            <div className="h-8 my-8 bg-gray-200 rounded-full dark:bg-gray-700 w-96 mb-4"></div>

            <div className={"w-full my-12 aspect-video bg-gray-200 rounded-lg dark:bg-gray-700 mb-4"}></div>

            <span className="sr-only">Loading...</span>
        </div>
    );
}

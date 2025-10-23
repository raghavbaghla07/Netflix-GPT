export const VideoTitle = ({ title, overview }) => {
    return (
        <div className="w-screen aspect-video pt-[15%] px-20 absolute  text-white bg-gradient-to-tr from-black ">
            <h1 className="text-6xl font-bold"> {title} </h1>
            <p className="py-6 text-lg w-1/4 ">{overview}</p>
            <div className="flex">
                <button
                    className="bg-white p-4 w-40 hover:bg-opacity-80 flex items-center justify-center text-lg text-black  rounded-lg mx-1.5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 mr-2">
                        <path
                            fillRule="evenodd"
                            d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.742 1.295 2.545 0 3.286L7.279 20.99c-1.25.717-2.779-.217-2.779-1.643V5.653z"
                            clipRule="evenodd"
                        />
                    </svg>
                    Play
                </button>
                <button
                    className="bg-gray-500 p-4 px-12  text-lg text-white bg-opacity-40 rounded-lg mx-1.5">
                    More info</button>
            </div>
        </div>
    )
}

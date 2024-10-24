import { assets } from "../assets/assets";

export default function Steps() {
  return (
    <div className="flex flex-col items-center justify-center mx-4 lg:mx-40 my-32">
        <h1 className="mx-auto max-w-80 text-center font-semibold text-2xl bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 text-transparent bg-clip-text">Your Guideline to Remove Image&apos;s Background</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
            <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <img src={assets.upload_icon} alt={assets.upload_icon} />
                <div>
                    <p className="font-semibold bg-gradient-to-r from-violet-500 via-indigo-500 to-sky-500 text-transparent bg-clip-text text-lg">Upload Image</p>
                    <p className="text-gray-400">Choose your image to start using BG Remover.</p>
                </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <img src={assets.remove_bg_icon} alt={assets.remove_bg_icon} />
                <div>
                    <p className="font-semibold bg-gradient-to-r from-violet-500 via-indigo-500 to-sky-500 text-transparent bg-clip-text text-lg">Remove Background</p>
                    <p className="text-gray-400">AI detects and removes the background automatically.</p>
                </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <img src={assets.download_icon} alt={assets.download_icon} />
                <div>
                    <p className="font-semibold bg-gradient-to-r from-violet-500 via-indigo-500 to-sky-500 text-transparent bg-clip-text text-lg">Download Image</p>
                    <p className="text-gray-400">Save your edited image with a clean background.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

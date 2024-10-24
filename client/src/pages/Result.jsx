import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

export default function Result() {
  return (
    <div className="mx-4 lg:mx-40 my-5 lg:mt-14 min-h-[75vh]">
      <div className="bg-white rounded-xl p-8 drop-shadow-md">
        {/* Image Container */}
        <div className="flex flex-col md:grid grid-cols-2 gap-8">
          {/* Original Image */}
          <div>
            <p className="font-semibold text-xl mb-3 bg-gradient-to-r from-violet-500 via-indigo-500 to-sky-500 text-transparent bg-clip-text">Original Image</p>
            <img src={assets.image_w_bg} alt={assets.image_w_bg} className="rounded-2xl border" />
          </div>

          {/* Result Image */}
          <div className="flex flex-col">
            <p className="font-semibold text-xl mb-3 bg-gradient-to-r from-violet-500 via-indigo-500 to-sky-500 text-transparent bg-clip-text">Result Image</p>
            <div className="relative overflow-hidden h-full bg-layer border rounded-2xl">
              {/* <img src={assets.image_wo_bg} alt={assets.image_wo_bg} className="rounded-2xl" /> */}
              {/* Loader */}
              <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
                <div className="border-4 border-indigo-500 rounded-full h-10 w-10 border-t-transparent animate-spin"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center md:justify-end items-center gap-5 mt-5">
          <button className="px-6 py-2.5 text-indigo-600 border border-indigo-500 rounded-lg text-lg">Try New Image</button>
          <Link to='' className="px-6 py-2.5 text-white shadow-sm border-indigo-500 text-lg rounded-lg bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-600">Donwload Image</Link>
        </div>
      </div>
    </div>
  )
}

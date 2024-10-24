import { assets } from '../assets/assets';

export default function Upload() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className="mx-auto text-center font-semibold text-2xl bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 text-transparent bg-clip-text">
        Remove BG Instantly , Give It a Try !
      </h1>

      <div className="flex mt-6">
        <input type="file" id="upload" hidden />
        <label
          htmlFor="upload"
          className="bg-white flex items-center gap-4 shadow-md hover:shadow-lg transition-all duration-300 p-3 rounded-lg cursor-pointer"
        >
          <img src={assets.upload_icon} alt={assets.upload_icon} />
          <p className="text-lg bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-600 text-transparent bg-clip-text">
            Upload Your Image
          </p>
        </label>
      </div>
    </div>
  );
}

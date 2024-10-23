import { assets } from '../assets/assets';

export default function Header() {
  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 lg:px-40 mt-10 sm:mt-20'>
        {/* ----------- Left Side ----------- */}
        <div className=''>
            <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-snug text-neutral-800'>
                Image Background
                <br /> 
                <span className='bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-600 text-transparent bg-clip-text'>Remover, AI-Based !</span>
            </h1>
            <p className='my-4 text-[17px] text-gray-500'><b>100%</b> Automatically & Free, Enjoooooooy !</p>

            <div className="flex mt-6">
                <input type="file" id="upload-input" hidden />
                <label htmlFor="upload-input" className='bg-white flex items-center gap-4 shadow-md hover:shadow-lg transition-all duration-300 p-3 rounded-lg cursor-pointer'>
                    <img src={assets.upload_icon} alt={assets.upload_icon} />
                    <p className="text-lg bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-600 text-transparent bg-clip-text">Upload Your Image</p>
                </label>
            </div>
        </div>

        {/* ----------- Right Side ----------- */}
        <div className='w-full max-w-96'>
            <img src={assets.header_img} alt={assets.header_img} />
        </div>
    </div>
  )
}

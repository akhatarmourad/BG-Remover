import { useState } from "react";
import { assets } from '../assets/assets';

export default function SliderEffect() {

  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (event) => {
    setSliderPosition(event.target.value);
  }

  return (
    <div className="flex flex-col items-center">
        <h1 className="mx-auto text-center font-semibold text-2xl bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 text-transparent bg-clip-text">
            Erase Backgrounds Effortlessly <br /> for Free & Keep the High Quality
        </h1>

        {/* Background Slider */}
        <div className="relative mt-14 shadow-lg rounded-2xl">
            <img src={assets.image_w_bg} style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }} className="max-h-96 rounded-2xl" />
            <img src={assets.image_wo_bg}  style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }} className="max-h-96 absolute top-0 left-0 rounded-2xl" />
            
            <input 
                type="range"
                min={0}
                max={100}
                value={sliderPosition}
                onChange={(e) => handleSliderChange(e)}
                className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider'
            />
        </div>
    </div>
  )
}

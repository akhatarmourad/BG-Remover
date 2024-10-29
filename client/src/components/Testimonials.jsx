import { testimonialsData } from '../assets/assets';

export default function Testimonials() {
  return (
    <div className="flex flex-col items-center justify-center my-32 mx-4 lg:mx-40">
        <h1 className="mx-auto text-center font-semibold text-2xl bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 text-transparent bg-clip-text">
            Customers Testimonials
        </h1>

        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-14 mx-auto place-items-center'>
            {
                testimonialsData.map((review, index) => {
                    return (
                        <div key={index} className='bg-white rounded-xl drop-shadow-md p-5 m-auto max-w-lg'>
                            <p className='text-gray-500'>{review.text}</p>
                            <div className="flex items-center gap-3 mt-6">
                                <img src={review.image} className='w-9 rounded-full' />
                                <div>
                                    <p className='text-sm font-bold'>{review.author}</p>
                                    <p className='text-sm'>{review.jobTitle}</p>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    </div>
  )
}

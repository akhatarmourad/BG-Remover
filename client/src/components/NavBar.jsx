import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';

export default function NavBar() {

  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();

  return (
    <div className='bg-white flex justify-between items-center mx-4 p-3 lg:mx-40 shadow-md rounded-lg my-6'>
        {/* Logo + Name */}
        <Link to='/' className='flex gap-3 items-center'>
            <img src={assets.logo} alt={assets.logo} className='w-10 sm:w-12' />
            <h1 className='font-bold text-xl bg-gradient-to-r from-indigo-600 to-sky-600 text-transparent bg-clip-text'>BG Remover</h1>
        </Link>

        {/* Button & Profile */}
        { isSignedIn ? (
          <div>
            <UserButton />
          </div>
        ) : (
          <button onClick={() => openSignIn()} className="bg-indigo-500 text-white flex items-center gap-3 px-3 py-2 shadow-sm rounded-lg">
            Get Started <img src={assets.arrow_icon} alt={assets.arrow_icon} className='w-3 sm:w-4' />
          </button>
        )}
    </div>
  )
}

import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

export default function Footer() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-5 mx-4 lg:mx-40 mb-7">
        {/* Logo + Name */}
        <Link to='/' className='flex gap-3 items-center'>
            <img src={assets.logo} alt={assets.logo} className='w-8' />
            <h1 className='font-bold text-xl bg-gradient-to-r from-indigo-600 to-sky-600 text-transparent bg-clip-text'>BG Remover</h1>
        </Link>

        <p className='text-sm text-gray-500'>Akhatar Mourad | Copyright &copy; 2024 | All Rights Reserved</p>

        <div className="flex items-center gap-2">
            <Link to='https://www.instagram.com/devdescom' > <img src={assets.facebook_icon} alt={assets.facebook_icon} className='w-10' /> </Link>
            <Link to='https://www.linkedin.com/in/akhatarmourad' > <img src={assets.twitter_icon} alt={assets.twitter_icon} className='w-10' /> </Link>
            <Link to='https://akhatarmourad.github.io/portfolio/' > <img src={assets.google_plus_icon} alt={assets.google_plus_icon} className='w-10' /> </Link>
        </div>
    </div>
  )
}

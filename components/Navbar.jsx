import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
    const [toggle, setToggle]=useState(false);

    const handleToggle=()=>{
      setToggle(!toggle);
    }
  

    return (
        <>
        <nav className={toggle?'navbar expanded':'navbar'}>
        <h2 className='logo'>
          {/* <span><Image src="/logomark.svg" alt='logo' height={50} width={50}/></span> */}
          <span><Image src="/logo.svg" alt='logo' height={50} width={150}/></span>
          </h2>
        <div className='toggle-icon' onClick={handleToggle}>
          {toggle?
          // <IoMdMenu/>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          :
          // <Icon icon={menu} size={28}/>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
          }
        </div>
        <ul className='links'>
          <li className="cursor-pointer"><Link href="https://solarapp.vercel.app/"> Home</Link></li>
          <li className="cursor-pointer"><Link href="https://myblog-dogomayana.vercel.app/">About </Link></li>
        </ul>
        <div className='md:mt-0 lg:mt-0 mt-32 links flex text-white justify-between'>
          <p className='lg:mr-6 md:mr-6 py-2 px-4 bg-pink-700 rounded-md text-white font-normal text-[16px] lg:text-lg capitalize'>login</p>
          <p className="mt-4 lg:mt-0 md:mt-0 py-2 px-4 bg-black text-white rounded-md font-normal text-[16px] lg:text-lg mr-0 capitalize">sign up</p>
        </div>
    </nav>

        </>
    );
}

export default Navbar;

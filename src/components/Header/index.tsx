import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className='w-full fixed backdrop-blur-md z-[99]'>
      <div className='flex items-center justify-between py-3 bg-transparent pt-5 w-full text-white'>
        <div className='ml-[50px]'>
          <Image src="/Logo.webp" width={50} height={50} alt="Logo" />
        </div>
        <div className='flex items-center text-base gap-5 font-semibold ml-[50px] mr-[50px]'>
          <Link href="/" className='px-5 font-bold'>KYC</Link>
          <div  ref={dropdownRef} className='relative px-5 '>
            <div className='flex items-center'>
              <button onClick={toggleDropdown} className='font-bold'>AUDIT</button>
              <svg
                onClick={toggleDropdown}
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                className="w-4 h-4"
                aria-hidden="true"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
              </svg>
              {isDropdownOpen && (
                <div ref={dropdownRef} className='absolute top-full left-0 w-[200px] rounded-2xl pt-2 z-0 bg-white shadow-md'>
                  <Link onClick={toggleDropdown} href="/" className='block px-5 py-2 text-gray-800 rounded-2xl hover:bg-gray-200'>Audit Page</Link>
                  <Link onClick={toggleDropdown} href="/" className='block px-5 py-2 text-gray-800 rounded-2xl hover:bg-gray-200'>Audit Details</Link>
                  <Link onClick={toggleDropdown} href="/" className='block px-5 py-2 text-gray-800 rounded-2xl hover:bg-gray-200'>Audit Report</Link>
                </div>
              )}
            </div>
          </div>
          <Link href="/" className='px-5 font-bold'>CERTIFICATE</Link>
          <Link href="/" className='px-5 font-bold'>PROJECTS</Link>
          <Link href="/Contactus" className='px-5 font-bold'>CONTACT US</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;


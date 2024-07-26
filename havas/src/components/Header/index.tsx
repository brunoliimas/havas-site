'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
// import { FiMenu } from "react-icons/fi";
import { RiCloseLargeFill } from "react-icons/ri";


const navItems = [
  { name: 'Cases', href: '/cases' },
  { name: 'Prêmios', href: '/premios' },
  { name: 'Serviços', href: '/servicos' },
  { name: 'Fale Conosco', href: '/fale-conosco' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    // Add or remove no-scroll class based on isOpen state
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Cleanup function to remove class when component unmounts
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);


  return (
    <header className="w-full text-white absolute top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-semibold z-50">
          <Link href="/">
            <Image
              src='/images/havas-life.png'
              height={100}
              width={245}
              alt='Havas Life'
            />
          </Link>
        </div>
        <button
          className="lg:hidden z-50"
          onClick={toggleMenu}
        >
          {isOpen ? <RiCloseLargeFill size={48} /> : <RiCloseLargeFill size={48} />}

        </button>
        <nav className={`lg:flex lg:items-center lg:gap-7 hidden`}>
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="block lg:inline-block px-4 py-2 rounded uppercase">
              {item.name}
            </Link>
          ))}
        </nav>
        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-[0px] left-0 w-full bg-black bg-opacity-80 p-4 pt-32 z-40 transition-transform transform ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="flex flex-col items-start space-y-4">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="block px-4 py-2 rounded uppercase text-white">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

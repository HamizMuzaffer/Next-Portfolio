import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    
    <footer className="bg-gray-800 text-gray-300 py-8 " id='contact'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-white">Company Name</h3>
            <p className="text-gray-400">1234 Street Name, City, State 56789</p>
            <p className="text-gray-400">Email: info@company.com</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
          </div>
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link href="https://www.facebook.com" passHref>
              <FaFacebook className="text-gray-400 hover:text-white cursor-pointer" size={24} />
            </Link>
            <Link href="https://www.twitter.com" passHref>
              <FaTwitter className="text-gray-400 hover:text-white cursor-pointer" size={24} />
            </Link>
            <Link href="https://www.instagram.com" passHref>
              <FaInstagram className="text-gray-400 hover:text-white cursor-pointer" size={24} />
            </Link>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <Link href="#home">
              <span className="text-gray-400 hover:text-white cursor-pointer">Home</span>
            </Link>
            <Link href="#about">
              <span className="text-gray-400 hover:text-white cursor-pointer">About</span>
            </Link>
            <Link href="#services">
              <span className="text-gray-400 hover:text-white cursor-pointer">Services</span>
            </Link>
            <Link href="#contact">
              <span className="text-gray-400 hover:text-white cursor-pointer">Contact</span>
            </Link>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-400">© {new Date().getFullYear()} Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
    
  );
};

export default Footer;

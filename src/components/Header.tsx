import { Search } from 'lucide-react';
import Link from 'next/link';
import { memo } from 'react';

const Header = memo(() => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md p-4">
      <div className="flex justify-between items-center">
        <div>
          <Link href="/">
            <h1 className="text-4xl text-gray-900 font-black">Poke Search</h1>
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative flex items-center group">
            <Search className="absolute left-3 size-5 text-gray-400 group-focus-within:text-blue-500 duration-300 transition-colors" />
            <input
              type="search"
              aria-label="Search Pokemon"
              placeholder="Search..."
              className="pl-10 py-1.5 px-3 rounded-md border w-48 border-gray-400 bg-transparent text-sm font-medium placeholder:text-gray-400 focus:outline-none focus:ring focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <div>
            <Link
              href="#"
              className="bg-blue-500 text-base text-white font-semibold py-2 px-5 rounded-full shadow-sm transition-opacity duration-300 hover:opacity-75"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
});

export default Header;

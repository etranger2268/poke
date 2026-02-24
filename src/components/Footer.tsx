import { Github } from 'lucide-react';
import { memo } from 'react';

const Footer = memo(() => {
  return (
    <footer className="bg-slate-800 py-4 border-t border-gray-200 text-gray-50 text-sm">
      <div className="flex justify-center items-center gap-10">
        <div className="flex items-center gap-6">
          <p className="font-semibold">Poke Search</p>
          <a
            href="https://pokeapi.co/"
            target="_blank"
            rel="noreferrer"
            className="font-medium transition-colors duration-300 hover:text-blue-400 hover:underline"
          >
            PokeAPI
          </a>
        </div>
        <div>
          <a
            href="https://github.com/etranger2268/poke"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-blue-400"
            aria-label="GitHub Repository"
          >
            <Github className="size-5" />
          </a>
        </div>
        <div>
          <p className="text-gray-200 text-xs">&copy; 2026 etranger2268. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
});

export default Footer;

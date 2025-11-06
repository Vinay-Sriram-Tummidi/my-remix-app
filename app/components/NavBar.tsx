import { Link } from '@remix-run/react';
import { useState } from 'react';

export default function NavBar()  {

    const[mobileOpen,setMobileOpen]=useState(false);
    return (
        <>
           <header className="w-full bg-white/60 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-[#4B5945] w-10 h-10 flex items-center justify-center text-white font-bold">
              P
            </div>
            <Link to="/" className="text-lg font-semibold">
              PickleCo
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/products" className="text-sm text-gray-700 hover:text-gray-900">
              Products
            </Link>
            <Link to="/recipes" className="text-sm text-gray-700 hover:text-gray-900">
              Recipes
            </Link>
            <a
              href="#features"
              className="text-sm text-gray-700 hover:text-gray-900"
            >
              Why Pickles
            </a>
            <Link
              to="/products"
              className="ml-4 bg-[#4B5945] text-white px-4 py-2 rounded-lg text-sm shadow-sm hover:opacity-95"
            >
              Shop Pickles
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((s) => !s)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </nav>

        {mobileOpen && (
          <div className="md:hidden bg-white shadow-sm border-t">
            <div className="px-6 py-4 flex flex-col gap-3">
              <Link to="/products" onClick={() => setMobileOpen(false)} className="text-gray-700">
                Products
              </Link>
              <Link to="/recipes" onClick={() => setMobileOpen(false)} className="text-gray-700">
                Recipes
              </Link>
              <a href="#features" onClick={() => setMobileOpen(false)} className="text-gray-700">
                Why Pickles
              </a>
              <Link
                to="/products"
                onClick={() => setMobileOpen(false)}
                className="mt-2 bg-[#4B5945] text-white px-4 py-2 rounded-lg text-sm text-center"
              >
                Shop Pickles
              </Link>
            </div>
          </div>
        )}
      </header>
        </>
       
    );
}


import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Search, Home, Info, User } from 'lucide-react';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white shadow-lg">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-purple-700 font-bold text-xl hover:opacity-25">R</span>
          </div>
          <h1 className="font-bold text-xl">
            <span className="text-gray-200">Roy</span>
            <span className="text-white">Estate</span>
          </h1>
        </Link>

        <form
          onSubmit={handleSubmit}
          className="bg-white/10 p-2 rounded-full flex items-center flex-1 max-w-md mx-4"
        >
          <input
            type="text"
            placeholder="Search properties..."
            className="bg-transparent placeholder-gray-300 text-white focus:outline-none w-full px-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="text-white p-1">
            <Search size={20} />
          </button>
        </form>

        <nav className="flex items-center space-x-4">
          
          <Link to="/about" className="hover:text-gray-300 transition-colors">
            <Info size={20} />
          </Link>
          <Link to="/profile" className="hover:text-gray-300 transition-colors">
            {currentUser ? (
              <img
                className="rounded-full h-8 w-8 object-cover border-2 border-white"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <User size={20} />
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
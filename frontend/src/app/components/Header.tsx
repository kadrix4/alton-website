'use client';

import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';

export default function Header() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://picsum.photos/50/50?random=1"
            alt="Alton Logo"
            width={50}
            height={50}
            className="mr-2 rounded"
          />
          <h1 className="text-2xl font-bold">Alton</h1>
        </div>
        <nav className="flex items-center">
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/portfolio" className="hover:underline">Portfolio</a></li>
            <li><a href="/design" className="hover:underline">Design AI</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            {user && user.role === 'admin' && (
              <li><a href="/admin" className="hover:underline">Admin</a></li>
            )}
          </ul>
          <div className="ml-6">
            {user ? (
              <button
                onClick={handleLogout}
                className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100"
              >
                Logout
              </button>
            ) : (
              <a href="/login" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100">
                Login
              </a>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
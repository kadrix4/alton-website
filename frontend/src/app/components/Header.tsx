import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="https://via.placeholder.com/50?text=Alton"
            alt="Alton Logo"
            width={50}
            height={50}
            className="mr-2"
          />
          <h1 className="text-2xl font-bold">Alton</h1>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/portfolio" className="hover:underline">Portfolio</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
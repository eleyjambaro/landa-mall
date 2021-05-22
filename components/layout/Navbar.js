import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-white">
      <div className="container-sm">
        <Link href="/">
          <a className="navbar-brand">
            <Image
              src="/landa-mall.png"
              alt="L&A Mall Logo"
              width={180}
              height={40}
            />
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

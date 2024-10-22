import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src="/assets/logo.jpeg" alt="سیپان هاوس" />
          <h1>سیپان هاوس</h1>
        </div>
        <ul className="nav-links">
          <li><Link href="#menu">مێنیو</Link></li>
          <li><Link href="#about">دەربارە</Link></li>
          <li><Link href="#contact">پەیوەندی</Link></li>
        </ul>
        <button className="lang-toggle"><i className="fas fa-language fa-spin"></i></button>
      </nav>
    </header>
  );
};

export default Header;

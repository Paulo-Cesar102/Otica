import Logo from '../../assents/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import estilos from '@/src/components/Header/Header.module.css';

export default function Header() {
  return (
   <header className={estilos.headerContainer}>
  <nav className={estilos.nav}>

    <div className={estilos.logo}>
      <Image 
        src={Logo}
        alt="Ótica Vida Logo"
        width={90}
        height={40}
      />
    </div>

    <ul className={estilos.menu}>
      <li><Link href="#produtos">Produtos</Link></li>
      <li><Link href="#sobre">Sobre</Link></li>
      <li><Link href="#contato">Contato</Link></li>
    </ul>

  </nav>
</header>

     
  );
}
import estilos from '../Hero/Hero.module.css';
import Image from 'next/image';
import capa from '../../assents/capa.png';

export default function Hero() {
  return (
<section id="#sobre">
    <div className={estilos.hero}>
        <h2>Encontre os melhores óculos para você</h2>
        <h1>Óculos de <br />Grau
         e de Sol</h1>
         <h2>Você só encontra aqui!</h2>
    </div>
    </section>
  );
}
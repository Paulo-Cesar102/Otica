import estilo from "./Card.Oculos.module.css";
import Image from "next/image";
import oculos1 from "../../assents/oculos1.png";
import oculos2 from "../../assents/oculos2.png";
import oculos3 from "../../assents/oculos3.png";


export default function CardOculos() {
  return (
    <><section id="produtos">
            <h1 className={estilo.titulo}>Nossos Produtos</h1>
        <div className={estilo.card}>
         
            <ul className={estilo.cardList}>
  <li className={estilo.card}>Produto 1
    <Image src={oculos1} alt="Óculos 1" width={300} height={300}></Image>
    <p>Preço: <span>R$ 150,00</span></p>
  </li>
  <li className={estilo.card}>Produto 2
    <Image src={oculos2} alt="Óculos 2" width={300} height={300}></Image>
    <p>Preço: <span>R$ 200,00</span></p>
  </li>
  <li className={estilo.card}>Produto 3
    <Image src={oculos3} alt="Óculos 3" width={175} height={175}></Image>
    <p>Preço: <span>R$ 250,00</span></p>
  </li>
</ul>
       
    
    </div>
    </section>
    </>
  );}
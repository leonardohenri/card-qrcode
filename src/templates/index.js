
import qrcode from "../images/qrcode.png"
import './styles.css';

const Home = () =>{
 return(
 <div className='body'>
    <div className="container">
      <div className="card">
      <img src={qrcode} alt="qrcode"></img>
        <div className="text">
          <h2>Melhore suas habilidades de front-end criando projetos</h2>
          <p>Escaneie o código QR para visitar o Frontend Mentor e leve suas habilidades de codificação para o próximo nível</p>
        </div>
      </div>
    </div>
  </div>);
}
export default Home;

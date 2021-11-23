import "./footer.css";

export const Footer = () => {

    return (
        <ul className="footerNav">
        <h5>Desarrollado por P&B e Hijos ©</h5>
        <li className="footerLink">
          <a
            className="footerA"
            href="www.linkedin.com/in/edgardo-palacios-full-stack-java"
          >
            <img className="imgLink" src={require(`../asset/img/linkedin.png`).default} alt="" />
          </a>
        </li>
      </ul>

    )
}
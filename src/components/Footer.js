import { GoMail } from "react-icons/go";

function Footer() {
  return (
    <footer>
      <div className="contact">NETALON Biofalatka Kft.</div>
      {/* <div className="contact">email: ugyfelszolgalat@okosbazar.hu</div> */}
      <div className="developer">
        Copyright © 2021 Bagdány Zoltán, frontend fejlesztő
      </div>
      <div className="developer">
        <a href="mailto: bgzoltan@gmail.com">
          <GoMail className="icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

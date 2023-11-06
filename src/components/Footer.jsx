import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
const Footer = () => {
  return (
    <div className="footer" id="foot">
      <div className="footerDetails">
        <div className="footerInfo">
          <h1>Self Made Solutions</h1>
          <p>
            We are a company based in Addis Ababa, mainly focused on bringing
            accessible technologies to the society in all regards.
            <em>
              "Our main goal is to provide accissible problem solving
              technologies, both in software and hardware, to facilitate
              automation and efficiency."
            </em>
          </p>
        </div>
        <div className="footerInfo">
          <h1>Useful Links</h1>
          <p>
            <li>
              <AiOutlineRight />
              <Link
                className="redirectLink"
                to="/"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <AiOutlineRight />
              <HashLink className="redirectLink" to="/#service">
                Services
              </HashLink>
            </li>
            <li>
              <AiOutlineRight />
              <HashLink
                className="redirectLink"
                to="/#product"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Product
              </HashLink>
            </li>

            <li>
              <AiOutlineRight />
              <Link
                className="redirectLink"
                to="/project"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Projects
              </Link>
            </li>
            <li>
              <AiOutlineRight />
              <Link
                className="redirectLink"
                to="/contact"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Contact
              </Link>
            </li>
          </p>
        </div>

        <div className="footerInfo">
          <h1>Contact Us</h1>
          <p>
            <li>
              G&B Building 3rd Floor 307, Addis Ababa, Gurd Shola Ethiopia
            </li>

            <li>
              <LocalPhoneIcon className="icon" />
              <p> +251 922 825 445</p>
            </li>
            <li>
              <LocalPhoneIcon className="icon" />
              <p>+251 947 407 806</p>
            </li>
            <li>
              <MailIcon className="icon" />
              <p>earaldtradinginfo@gmail.com</p>
            </li>
            <li>
              <MailIcon className="icon" />
              <p>info@earaldtradinget.com</p>
            </li>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

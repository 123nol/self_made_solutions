import { FaEnvelope } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import Chat from "../components/Chat.jsx";
const Footer = () => {
  return (
    <div className="footer">
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
              <Link className="redirectLink" to="/">
                Home
              </Link>
            </li>
            <li>
              <AiOutlineRight />
              <Link className="redirectLink" to="/about">
                About
              </Link>
            </li>
            <li>
              <AiOutlineRight />
              <Link className="redirectLink" to="/services">
                Services
              </Link>
            </li>
            <li>
              <AiOutlineRight />
              <Link className="redirectLink" to="/project">
                Projects
              </Link>
            </li>
            <li>
              <AiOutlineRight />
              <Link className="redirectLink" to="/contact">
                Contact
              </Link>
            </li>
          </p>
        </div>
        <div className="footerInfo">
          <h1>Affiliates</h1>
          <p>
            <li>
              <AiOutlineRight />
              Nebret Property Management
            </li>
            <li>
              <AiOutlineRight />
              Kasma Coffee
            </li>
            <li>
              <AiOutlineRight />
              Vital Heart Ethiopia
            </li>
            <li>
              <AiOutlineRight />
              Vital Heart Tour and Travel
            </li>
            <li>
              <AiOutlineRight />
              Berana Audiobooks
            </li>
            <li>
              <AiOutlineRight />
              Design Rush
            </li>
          </p>
        </div>
        <div className="footerInfo">
          <h1>Contact Us</h1>
          <p>
            <li>G&B Building 3rd Floor,307 Addis Ababa,</li>
            <li>Gurd Shola Ethiopia</li>
            <li>
              <BsFillTelephoneFill />
              +251 922 825 445
            </li>
            <li>
              <BsFillTelephoneFill />
              +251 947 407 806
            </li>
            <li>
              <FaEnvelope />
              earaldtradinginfo@gmail.com
            </li>
            <li>
              <FaEnvelope />
              info@earaldtradinget.com
            </li>
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;

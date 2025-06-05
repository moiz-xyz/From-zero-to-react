import React from 'react';
import footerApi from "../api/Footerapi.json";
import { CiLocationOn } from 'react-icons/ci';
import { IoCallSharp } from 'react-icons/io5';
import { SiGmail } from 'react-icons/si';

const Footer = () => {
  const footerIcons = {
    CiLocationOn: <CiLocationOn />,
    IoCallSharp: <IoCallSharp />,
    SiGmail: <SiGmail />,
  };

  return (
    <footer className="footer">
      {footerApi.map((data, index) => {
        const { icon, title, label, detail } = data;
        return (
          <div className="footer-box" key={index}>
            <div className="footer-icon">{footerIcons[icon]}</div>
            <h3>{title}</h3>
            <p>{label}</p>
            <p>{detail}</p>
          </div>
        );
      })}
    </footer>
  );
};

export default Footer;

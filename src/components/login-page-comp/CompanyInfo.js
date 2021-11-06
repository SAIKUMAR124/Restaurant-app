import React from "react";
import "./CompanyInfo.css";

const CompanyInfo = () => {
  return (
      <section className='info-sec'>
    <div className="company-info">
      <div className="info-head">
        <p>COMPANY</p>
        <ul>
          <li>
            <p>About us</p>
          </li>
          <li>
            <p>Team</p>
          </li>
          <li>
            <p>Careers</p>
          </li>
          <li>
            <p>Swigyy Blog</p>
          </li>
          <li>
            <p>Bug Bounty</p>
          </li>
          <li>
            <p>Swigyy Super</p>
          </li>
          <li>
            <p>Swigyy Corporate</p>
          </li>
          <li>
            <p>Swigyy Instamart</p>
          </li>
        </ul>
      </div>
      <div className="info-head">
        <p>CONTACT</p>
        <ul>
          <li>
            <p>Help & Support</p>
          </li>
          <li>
            <p>Partner with us</p>
          </li>
          <li>
            <p>Ride with us</p>
          </li>
        </ul>
      </div>
      <div className="info-head">
        <p>LEGAL</p>
        <ul>
          <li>
            <p>Teams & Conditions</p>
          </li>
          <li>
            <p>Refund & Cancellation</p>
          </li>
          <li>
            <p>Privacy Policy</p>
          </li>
          <li>
            <p>Cookie Policy</p>
          </li>
          <li>
            <p>Offer Terms</p>
          </li>
          <li>
            <p>Phishing & Fraud</p>
          </li>
        </ul>
      </div>
    </div>
    <div className='info-underline'></div>
    </section>
  );
};

export default CompanyInfo;

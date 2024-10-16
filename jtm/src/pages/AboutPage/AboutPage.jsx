import React, { useState } from "react";
import "./AboutPage.css";
import banner from "../../assets/images/about.png";
import image1 from "../../assets/images/about1.png";
import image2 from "../../assets/images/about2.png";
import image3 from "../../assets/images/about3.png";
import team1 from "../../assets/images/team1.png";
import team2 from "../../assets/images/team2.png";
import team3 from "../../assets/images/team3.png";
import icon from "../../assets/images/Linkedin.png";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Footer from "../../components/Footer/Footer";

export default function AboutPage() {
  //Table
  const renderTable = () => {
    const rows = 8;
    const columns = 5;

    return (
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr style={{ backgroundColor: "#333", color: "#fff" }}>
          <th style={{ padding: "10px" }}>Shows</th>
          <th style={{ padding: "10px" }}>Description</th>
          <th style={{ padding: "10px" }}>Day</th>
          <th style={{ padding: "10px" }}>Time</th>
          <th style={{ padding: "10px" }}>Host</th>
          </tr>
        </thead>
        <tbody>
        {showsData.map((show, index) => (
          <tr key={index}>
            <td style={{ padding: "10px", border: "1px solid #ddd", backgroundColor: "#FABC52" }}>
              {show.title}
            </td>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>
              {show.description}
            </td>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>
              {show.day}
            </td>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>
              {show.time}
            </td>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>
              {show.host}
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    );
  };

  //Table Data
  const showsData = [
    {
      title: "Faith Talks",
      description: "Discussions on faith and spirituality.",
      day: "Monday",
      time: "6:00 PM",
      host: "John Doe",
    },
    {
      title: "Music for the Soul",
      description: "Uplifting Christian music.",
      day: "Tuesday",
      time: "7:00 PM",
      host: "Jane Smith",
    },
    {
      title: "Inspirational Stories",
      description: "Sharing powerful testimonies.",
      day: "Wednesday",
      time: "5:00 PM",
      host: "Mike Johnson",
    },
    {
      title: "Prayer Hour",
      description: "Time for community prayer.",
      day: "Thursday",
      time: "8:00 PM",
      host: "Sarah Lee",
    },
    {
      title: "Bible Study",
      description: "In-depth study of the Scriptures.",
      day: "Friday",
      time: "7:30 PM",
      host: "Emily Davis",
    },
    {
      title: "Youth Connect",
      description: "Engaging discussions for the youth.",
      day: "Saturday",
      time: "3:00 PM",
      host: "Chris Brown",
    },
    {
      title: "Sunday Service",
      description: "Weekly church service.",
      day: "Sunday",
      time: "10:00 AM",
      host: "Pastor Steve",
    },
    {
      title: "Mission Spotlight",
      description: "Updates on mission work.",
      day: "Every Other Sunday",
      time: "1:00 PM",
      host: "Alice White",
    },
  ];

  // FAQ
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is The Jesus Talks Media?",
      answer:
        "The Jesus Talks Media is a Christian Media Company driven by a profound vision: to anchor individuals deeply in their faith through the transformative power of media. Founded during the pandemic, our mission is to provide a platform for believers to immerse themselves in uplifting, inspiring, and clean Christian media content anytime.",
    },
    {
      question: "What services does The Jesus Talks Media offer?",
      answer:
        "We offer a range of services, including:\n- **Interviews**: We conduct interviews with Christian artists and creatives to share their stories and insights with our audience.\n- **Press Releases**: We create and distribute press releases to help promote your music, events, or announcements.\n- **Music Promotions**: We promote Christian music through our radio shows, playlists, and social media channels to help artists reach a wider audience.\n- **Social Media Promotions**: We provide targeted social media campaigns to increase your visibility and engage with your audience effectively.",
    },
    {
      question: "How can I get my project featured on The Jesus Talks Media? ",
      answer: "Yes, we offer international shipping to select countries.",
    },
    {
      question: " Can I request an interview on The Jesus Talks Media?",
      answer:
        "We accept Visa, MasterCard, PayPal, and other major payment methods.",
    },
    {
      question: "  What is included in your music promotion services?",
      answer:
        "We accept Visa, MasterCard, PayPal, and other major payment methods.",
    },
    {
      question: " How can I promote my event through The Jesus Talks Radio?",
      answer:
        "You can promote your event through our press release and social media promotion services. We’ll help you craft a compelling press release and distribute it across our platforms, ensuring your event reaches the right audience.",
    },
    {
      question: " How do your social media promotion services work?",
      answer:
        "You can promote your event through our press release and social media promotion services. We’ll help you craft a compelling press release and distribute it across our platforms, ensuring your event reaches the right audience.",
    },
    {
      question: " What is the “Faith-God-Life Podcast”?",
      answer:
        "You can promote your event through our press release and social media promotion services. We’ll help you craft a compelling press release and distribute it across our platforms, ensuring your event reaches the right audience.",
    },
    {
      question: " How can I stay updated with The Jesus Talks Media?",
      answer:
        "You can promote your event through our press release and social media promotion services. We’ll help you craft a compelling press release and distribute it across our platforms, ensuring your event reaches the right audience.",
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      <div className="about">
        <div className="about-banner">
          <img src={banner} alt="banner" />
          <div className="banner-overlay">
            <div className="banner-header">
              <h2>About Us</h2>
              <p>
                We exist to provide you with strategies and ways that will
                elevate your brand without going to the extreme
              </p>
            </div>
          </div>
        </div>
        <div className="about-sections">
          <div className="about-section1">
            <div className="section-left">
              <h3>About Us</h3>
              <p>
                We are a Christian Media Company driven by a profound vision: to
                anchor individuals deeply in their faith through the
                transformative power of media. At the core of our mission lies
                our unwavering commitment to people. We aspire to make a
                meaningful impact on lives by delivering edifying Christian
                content. Join us on this faith-filled journey as we use the
                power of media to deepen connections with Christ and positively
                impact lives.
              </p>
            </div>
            <div className="section-right">
              <img src={image1} alt="" />
            </div>
          </div>

          <div className="about-section1">
            <div className="section-left">
              <h3>Our Mission</h3>
              <p>
                To impact people’s lives by delivering edifying Christian
                content - through media. 
              </p>
            </div>
            <div className="section-right">
              <img src={image2} alt="" />
            </div>
          </div>
          <div className="about-section1">
            <div className="section-left">
              <h3>Our Vision</h3>
              <p>
                To see all men come to know Christ Jesus by using media to share
                the Gospel
              </p>
            </div>
            <div className="section-right">
              <img src={image3} alt="" />
            </div>
          </div>
        </div>
        <div className="programs">
          <h2>Our shows and programmes</h2>
          <div className="programs-table">
          {renderTable()}
          </div>
        </div>
        <div className="team">
          <h3>
            Meet the team unlocking new possibilities for the promotion of
            gospel contents
          </h3>
          <div className="team-card">
            <div className="card1">
              <img className="team-img" src={team1} alt="" />
              <div className="card1-content">
                <div className="card1-text">
                  <p>Daniel Mary</p>
                  <p>Admin Manager</p>
                </div>
                <div className="card1-icon">
                  <Link to="">
                    {" "}
                    <img src={icon} alt="" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="card1">
              <img className="team-img" src={team2} alt="" />
              <div className="card1-content">
                <div className="card1-text">
                  <p>Daniel John</p>
                  <p>Admin Manager</p>
                </div>
                <div className="card1-icon">
                  <Link to="">
                    {" "}
                    <img src={icon} alt="" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="card1">
              <img className="team-img" src={team3} alt="" />
              <div className="card1-content">
                <div className="card1-text">
                  <p>Daniel Mary</p>
                  <p>Admin Manager</p>
                </div>
                <div className="card1-icon">
                  <Link to="">
                    {" "}
                    <img src={icon} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="faq">
          <div className="faq-container">
            <p className="brand-text">Frequently Asked Questions</p>
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div
                  className="faq-question"
                  onClick={() => toggleAnswer(index)}
                >
                  <span>{faq.question}</span>
                  {openIndex === index ? (
                    <FaChevronUp className="chevron-icon" />
                  ) : (
                    <FaChevronDown className="chevron-icon" />
                  )}
                </div>
                {openIndex === index && (
                  <div className="faq-answer">
                    <hr />
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

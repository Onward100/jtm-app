import React from "react";
import image from "../../assets/images/bg-image.png";
import { Link } from "react-router-dom";
import "./HomePage.css";
import image2 from "../../assets/images/know-us.png";
import image3 from "../../assets/images/mail-picture.png";
import image4 from "../../assets/images/radio-picture.png";
import image5 from "../../assets/images/social-media-picture.png";
import image6 from "../../assets/images/podcast-picture.png";
import image7 from "../../assets/images/video.png";
import image8 from "../../assets/images/yellow-blog.png";
import image9 from "../../assets/images/person1.png";
import image10 from "../../assets/images/person2.png";
import icon1 from "../../assets/images/yellow-icon1.png";
import icon2 from "../../assets/images/yellow-icon2.png";
import icon3 from "../../assets/images/checkmark.png";
import Footer from "../../components/Footer/Footer";
import { FaPlay } from "react-icons/fa";
import radio from '../../assets/images/radio.png'
import podcast from '../../assets/images/podcast.png'
import tv from '../../assets/images/tv.png'
import vector from '../../assets/images/Vector.png'
import email from '../../assets/images/email.png'

export default function HomePage() {
  
  return (
    <div>
      <div className="homePage">
        <div className="background">
          <div className="background-left">
            <div className="left-content">
              <h2>We promote gospel contents</h2>
              <p>
                We are here to promote your Christian contents through any
                social media of your choice
              </p>
              <button>
                <Link className="bg-btn" to="/featured">
                  Get Featured
                </Link>
              </button>
            </div>
          </div>
          <div className="background-right">
            <img src={image} alt="background image" />
          </div>
        </div>
        <div className="background-bottom">
          <div className="express">
            <p>Our Expressions</p>
            <p><img src={radio} alt="" /> The Jesus Radio</p>
            <p><img src={tv} alt="" /> Our Youtube</p>
            <p><img src={podcast} alt="" /> Life Podcast</p>
            <p><img src={email} alt="" /> The Yellow Mail</p>
            <p><img src={vector} alt="" /> The Yellow Blog</p>
          </div>
        </div>
        <div className="know-us">
          <div className="know-us-left">
            <img src={image2} alt="image" />
          </div>
          <div className="know-us-right">
            <h3>Get to know us</h3>
            <p>
              We are a Christian Media Company driven by a profound vision: to
              anchor individuals deeply in their faith through the
              transformative power of media; and our different expressions which
              include: Jesus talks radio, Jesus talks Tv, The yellow blog and
              The yellow email
            </p>
            <p>
              We are a Christian Media Company driven by a profound vision: to
              anchor individuals deeply in their faith through the
              transformative power of media; and our different expressions which
              include: Jesus talks radio, Jesus talks Tv, The yellow blog and
              The yellow email
            </p>
            <button>
              <Link className="bg-btn" to="/about">
                Read more
              </Link>
            </button>
          </div>
        </div>
        <div className="yellow-mail">
          <div className="yellow-mail-content">
            <div className="yellow-mail-right">
              <img src={image3} alt="image" />
            </div>
            <div className="yellow-mail-left">
              <h3>The Yellow Mail</h3>
              <p>
                The Yellow Mail is our weekly newsletter that provides
                Christians with edifying written content and brings
                representation to all aspects of their lives.{" "}
              </p>
              <button>
                <Link className="bg-btn" to="">
                  Subscribe
                </Link>
              </button>
            </div>
          </div>
          <div className="yello-mail-bottom">
            <div className="yellow-mail-bottom-card">
              <div className="yellow-mail-icon">
                <img src={icon2} alt="icon" />
              </div>
              <div className="yellow-mail-text">
                <p>
                  Get the most recent information about our shows, including
                  when they air and how they are planned
                </p>
              </div>
            </div>

            <div className="yellow-mail-bottom-card">
              <div className="yellow-mail-icon">
                <img src={icon1} alt="icon" />
              </div>
              <div className="yellow-mail-text">
                <p>
                  Discover the juicy "behind the scenes" details from our
                  conversations with the creatives you love
                </p>
              </div>
            </div>

            <div className="yellow-mail-bottom-card">
              <div className="yellow-mail-icon">
                <img src={icon1} alt="icon" />
              </div>
              <div className="yellow-mail-text">
                <p>
                  Discover the juicy "behind the scenes" details from our
                  conversations with the creatives you love
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="radio">
          <div className="radio-right">
            <img src={image4} alt="image" />
          </div>
          <div className="radio-left">
            <h3>The Jesus Talks Radio+</h3>
            <p>
              We spread the gospel of spirit-filled and edifying Jesus music
              through our radio broadcasts.
            </p>
            <p>
              Listen to and engage in insightful conversations about
              Christianity, music, and everyday life on our radio shows
            </p>
            <button>
              <Link className="bg-btn" to="">
                Listen now
              </Link>
            </button>
          </div>
        </div>
        <div className="social-media">
          <div className="social-media-left">
            <h3>We match faith with modern media</h3>
            <div className="social-lists">
              <p>
                <img src={icon3} alt="checkmark" />
                Interviews
              </p>
              <p>
                <img src={icon3} alt="checkmark" />
                Music promotions
              </p>
              <p>
                <img src={icon3} alt="checkmark" />
                Press release
              </p>

              <p>
                <img src={icon3} alt="checkmark" />
                Social media promotions
              </p>
            </div>
            <button>
              <Link className="bg-btn" to="">
                Contact us
              </Link>
            </button>
          </div>
          <div className="social-media-right">
            <img src={image5} alt="image5" />
          </div>
        </div>
        <div className="youtube">
          <div className="youtube-up">
            <h3>Our Youtube</h3>
            <p>
              We are here to see all men rooted deeply in the love and knowledge
              of Christ Jesus by experiencing the message of Christ Jesus
              through our captivatving visual content
            </p>
            <div className="youtube-btn">
              <button className="btn1">
                <Link className="link-btn1">Watch now</Link>
              </button>
              <button className="btn2">
                <Link className="link-btn2">See all</Link>
              </button>
            </div>
          </div>
          <div className="youtube-down">
            <img src={image7} alt="image" />
            <div className="play">
              <Link to='' className="play-icon"><FaPlay/></Link>
            </div>
          </div>
        </div>
        <div className="social-media">
          <div className="social-media-left">
            <h3>Faith, God, Life Pod </h3>
            <p>
              Dive into the intersection of Faith,God, and everyday life through
              our enriching podcast.
            </p>
            <div className="social-lists">
              <p>
                <img src={icon3} alt="checkmark" />
                Faith Struggles
              </p>
              <p>
                <img src={icon3} alt="checkmark" />
                Christian events & highlights
              </p>
              <p>
                <img src={icon3} alt="checkmark" />
                Christian songs & playlists
              </p>
            </div>
            <button>
              <Link className="bg-btn" to="">
                Take a listen
              </Link>
            </button>
          </div>
          <div className="social-media-right">
            <img src={image6} alt="image5" />
          </div>
        </div>
        <div className="yellow-blog">
          <h3>The Yellow Blog</h3>
          <p className="blog-intro">
            Subscribe to our blog where we provide Christians with edifying
            written Christian content that brings representation to all aspects
            of their lives.
          </p>
          <div className="yellow-blog-content">
            <div className="yellow-blog-left">
              <img src={image8} alt="image" />
              <h3>Thriving in a new work place</h3>
              <p>
                The Jesus Talks Radio is a Christian radio station that
                broadcasts with the goal of bringing men to a deeper
                understanding of Christ Jesus and envisioning all mankind as
                being firmly anchored in Him.
              </p>
            </div>
            <div className="yellow-blog-right">
              <div className="right1">
                <img src={image8} alt="image" />
                <div className="right1-text">
                  <h3>The Effect of Christian Music on New Converts</h3>
                  <p>
                    The Jesus Talks Radio is a Christian radio station that
                    broadcasts with the goal of bringing men to a deeper
                    understanding of Christ Jesus and envisioning all mankind as
                    being firmly
                  </p>
                  <Link className="blog-link" to="">
                    Read more
                  </Link>
                </div>
              </div>
              <div className="right2">
                <img src={image8} alt="image" />
                <div className="right2-text">
                  <h3>
                    Exploring the Evolution of Contemporary and Alternative
                    Gospel Music
                  </h3>
                  <p>
                    The Jesus Talks Radio is a Christian radio station that
                    broadcasts with the goal of bringing men to a deeper
                    understanding of Christ Jesus and envisioning all mankind as
                    being firmly
                  </p>
                  <Link className="blog-link" to="">
                    Read more
                  </Link>
                </div>
              </div>
              <div className="right3">
                <img src={image8} alt="image" />
                <div className="right3-text">
                  <h3>Aigbeh Dgong’s Upcoming Single ‘Sandalili’ </h3>
                  <p>
                    {" "}
                    A Joyful Fusion of Childhood Memories and Divine Love The
                    Jesus Talks Radio is a Christian radio station that
                    broadcasts with the goal of bringing men to a deeper
                    understanding of Christ Jesus and envisioning all mankind as
                    being firmly
                  </p>
                  <Link className="blog-link" to="">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Link to="/blog" className="blog-link see-more">
            See all
          </Link>
        </div>
        <div className="wots">
          <h3>Word on the street</h3>
         <div className="wots-content">
         <div className="wots-left">
            <img src={image9} alt="person" />
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to{" "}
            </p>
          </div>
          <div className="wots-right">
            <img src={image10} alt="" />
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to{" "}
            </p>
          </div>
         </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import { FaFacebookSquare, FaGithubSquare, FaLinkedinIn } from "react-icons/fa";
import { RxResume } from "react-icons/rx";

/* eslint-disable react/no-unescaped-entities */
const Footer = () => {
  return (
    <div>
      <footer className="footer p-2 mt-5 md:mt-0 md:p-10 bg-base-200 text-base-content">
        <aside>
          <h2 className="text-4xl font-bold text-gray-800">myTask</h2>
          <p>
            Join millions of people who organize <br /> work and life with Todoist.
          </p>
        </aside>
        <footer className="grid md:grid-cols-4 grid-cols-2">
          <nav className="font-medium menu">
            <header className="footer-title text-xl">Features</header>
            <a className="link link-hover">How it's Works</a>
            <Link to="forTeam">
              <a className="link link-hover">For Team</a>
            </Link>
            <Link to="pricing">
              <a className="link link-hover">Pricing</a>
            </Link>
            <Link to="/">
              <a className="link link-hover">Templates</a>
            </Link>
          </nav>
          <nav className="font-medium menu">
            <header className="footer-title text-xl">Resources</header>
            <a className="link link-hover">Download Apps</a>
            <a className="link link-hover">Help Center</a>
            <a className="link link-hover">Productivity Methods</a>
            <a className="link link-hover">Integrations</a>
            <a className="link link-hover">Developer API</a>
            <a className="link link-hover">Status</a>
          </nav>
          <nav className="font-medium menu">
            <header className="footer-title text-xl">Company</header>
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Inspiration Hub</a>
            <a className="link link-hover">Press</a>
            <a className="link link-hover">Twist</a>
          </nav>
          <nav>
            <header className="footer-title text-xl">Social</header>
            <div className=" flex gap-3 items-center text-3xl">
              <a className=" text-[#0C63BC]" href="https://www.linkedin.com/in/naymhossen1b">
                <FaLinkedinIn />
              </a>
              <a className=" text-[#1d1a1a]" href="https://github.com/naymhossen1b">
                <FaGithubSquare />
              </a>
              <a className=" text-[#3b5998]" href="https://www.facebook.com/naymhossen1b">
                <FaFacebookSquare />
              </a>
              <a className=" text-[#255565]" href="https://naymhossen1b.netlify.app/">
                <RxResume />
              </a>
            </div>
            <div className="hidden md:join mt-10 -ml-16">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </nav>
        </footer>
      </footer>
    </div>
  );
};

export default Footer;

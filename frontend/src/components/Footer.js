import React from 'react';
import '../styles/footer.css';

function Footer() {
  return (
    <footer>
      <section>
        <div id="containerFooter">
          <div id="webFooter">
            <h1>Contact us</h1>
            <br />
            <p>IIIT Allahabad</p>
            <p>CC3</p>
            <p>1234567890</p>
            <p>PeerPath@gmail.com</p>
          </div>

          <div id="webFooter">
            <h1>Helpful Links</h1>
            <br />
            <p><a href="/login">Login</a></p>
            <p><a href="/signup">Sign In</a></p>
            <p><a href="/profile">My Account</a></p>
          </div>

          <div id="webFooter">
            <h1>PeerPath</h1>
            <br />
            <p><a href="/CP">CP</a></p>
            <p><a href="/DEVELOPMENT">Development</a></p>
            <p><a href="/ACADEMICS">Academics</a></p>
            <p><a href="/OTHERS">Others</a></p>
          </div>

          <div id="webFooter">
            <h1>Team</h1>
            <br />
            <p>About</p>
            <p>Blog</p>
            <p>Devfolio</p>
            <p>Contact</p>
          </div>
        </div>
      </section>

      <div id="credit">
        © 2025 <a href="/">PeerPath</a>. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

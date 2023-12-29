import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container">
          <img className="footer__logo--main" src="/sns/github.png" alt="github" />
          <ul>
            <li><a href="https://twitter.com/github"><img src="/sns/x.svg" /></a></li>
            <li><a href="https://github.com/"><img src="/sns/github-mark.svg" /></a></li>
            <li><a href="https://www.linkedin.com/company/github"><img src="/sns/linkedin.svg" /></a></li>
            <li><a href="https://www.youtube.com/github"><img src="/sns/youtube.svg" /></a></li>
            <li><a href="https://www.facebook.com/GitHub"><img src="/sns/facebook.svg" /></a></li>
            <li><a href="https://www.twitch.tv/github"><img src="/sns/twitch.svg" /></a></li>
            <li><a href="https://www.tiktok.com/@github"><img src="/sns/tiktok.svg" /></a></li>
            <li><a href="https://www.instagram.com/github"><img src="/sns/instagram.svg" /></a></li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
       <div className="container">
        <p>© 2023 GitHub. All rights reserved.</p>
        <ul>
          <li><Link to="https://github.com/pricing">Try GitHub for free</Link></li>
          <li><Link to="https://github.com/enterprise">Enterprise</Link></li>
          <li><Link to="https://docs.github.com/site-policy/github-terms/github-terms-of-service">Terms</Link></li>
          <li><Link to="https://docs.github.com/site-policy/privacy-policies/github-privacy-statement">Privacy</Link></li>
          <li><Link to="mailto:events@github.com">Email us</Link></li>
        </ul>
       </div>
      </div>
    </footer>
  )
}
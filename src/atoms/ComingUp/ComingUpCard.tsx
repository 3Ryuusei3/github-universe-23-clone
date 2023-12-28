import { Link } from "react-router-dom";

export function ComingUpCard() {
  return (
    <div className="comingup__card">
      <div className="comingup__card--info">
        <h2>Universe 2024,<br />coming right up.</h2>
        <p>October 29-30, 2024 - Fort Mason, San Francisco</p>
        <p>Registration opens soon! Be the first to know by signing up for our email list.</p>
      </div>
      <div className="comingup__card--subscribe">
        <div className="field-input">
          <label>Your work email address *</label>
          <input type="email" />
        </div>
        <button className="btn btn-primary arrow-btn">Subscribe</button>
        <div className="checkbox-input">
          <input type="checkbox" />
          <label htmlFor="">Yes please, I’d like GitHub and affiliates to use my information for personalized communications, targeted advertising, and campaign effectiveness. See the <Link to="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement#how-github-uses-your-information"> GitHub Privacy Statement</Link> for more details.</label>
        </div>
      </div>
    </div>
  )
}
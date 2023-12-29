// ComingUpCard.tsx
import { Link } from "react-router-dom";
import { useContext, useState } from 'react';
import { ToastContext } from "../../context/ToastContext";

export function ComingUpCard() {
  const { setToastMessage } = useContext(ToastContext);
  const [email, setEmail] = useState('');
  const [checked, setChecked] = useState(false);

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      setToastMessage('Please enter a valid email address', 'error');
    } else {
      if (checked) {
        setToastMessage('Subscription successful and information updated!', 'success');
        setChecked(false);
      } else {
        setToastMessage('Subscription successful!', 'success');
        setEmail('');
      }
    }
  };

  const handleCheckboxChange = ({ target: { checked } }: { target: { checked: boolean } }) => {
    setChecked(checked);
  };

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
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button className="btn btn-primary" onClick={handleSubscribe}><span className="arrow-btn">Subscribe</span></button>
        <div className="checkbox-input">
          <input type="checkbox" checked={checked} onChange={handleCheckboxChange} />
          <label htmlFor="">Yes please, I’d like GitHub and affiliates to use my information for personalized communications, targeted advertising, and campaign effectiveness. See the <Link to="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement#how-github-uses-your-information"> GitHub Privacy Statement</Link> for more details.</label>
        </div>
      </div>
    </div>
  )
}
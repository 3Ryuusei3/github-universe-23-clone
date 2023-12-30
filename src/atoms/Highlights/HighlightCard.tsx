import { Link } from "react-router-dom";

type HighlightCardProps = {
  data: {
    title: string;
    description: string;
    link: string;
    image: string;
  };
};

export const HighlightCard = ({ data }: HighlightCardProps) => {
  const truncateDescription = (description: string, maxWords: number) => {
    const words = description.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    } else {
      return description;
    }
  };

  return (
    <div className="highlight__card">
      <div className="highlight__card--img">
        <img src={data.image} alt="Preview of the session" />
      </div>
      <div className="highlight__card--body">
        <h2>{data.title}</h2>
        <p>{truncateDescription(data.description, 40)}</p>
        <Link className="arrow-btn" to={data.link}><span>View Session</span></Link>
      </div>
    </div>
  )
}
import { Link } from "react-router-dom";

import PlayIcon from "../../components/Icons/PlayIcon";

export function HeroImg() {
  return (
    <div className="hero__img">
      <img src="/imgs/hero-main.jpg" alt="Github logo ilustration" />
      <Link to="https://www.youtube.com/watch?v=jVa1qCkcfp8" className="hero__img--button">
        <PlayIcon />
        <span>Universe 2023 recap</span>
      </Link>
    </div>
  )
}
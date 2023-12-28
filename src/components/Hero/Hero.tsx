import { HeroBento } from "../../atoms/Hero/HeroBento";
import { HeroDescription } from "../../atoms/Hero/HeroDescription";
import { HeroImg } from "../../atoms/Hero/HeroImg";
import { HeroMetrics } from "../../atoms/Hero/HeroMetrics";
import { HeroTitle } from "../../atoms/Hero/HeroTitle";

export function Hero() {
  return (
    <section className="hero__container container">
      <HeroImg />
      <HeroTitle />
      <HeroDescription />
      <HeroBento />
      <HeroMetrics />
    </section>
  )
}
import { HighlightCard } from "../../atoms/Highlights/HighlightCard";
import highlightData from "../../data/highlightsData.json"

export function Highlights() {
  return (
    <section className="highlights__container container">
      <h1>Highlighted sessions</h1>
      {highlightData.map((data, index) => (
        <HighlightCard key={index} data={data} />
      ))}
    </section>
  )
}
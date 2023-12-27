import AiIcon from "../../components/Icons/AiIcon"
import DeveloperIcon from "../../components/Icons/DeveloperIcon"
import SecurityIcon from "../../components/Icons/SecurityIcon"

export function HeroDescription() {
  return (
    <div className="hero__description">
      <p>Universe 23 was about <AiIcon fill="var(--clr-purple)"/> AI, <SecurityIcon fill="var(--clr-blue)" /> security, and the <DeveloperIcon fill="var(--clr-pink)" /> developer experience. about how to spark innovation, stay in the flow, optimize collaboration, and prevent vulnerabilities with AI-powered security.</p>
    </div>
  )
}
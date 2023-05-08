import { type Component, createSignal } from "solid-js"

import { FirstQuote } from "./components/FirstQuote"
import { Footer } from "./components/Footer"
import { Info } from "./components/Info"
import { Navbar } from "./components/Navbar"
import { Posts } from "./components/Posts"
import { SecondQuote } from "./components/SecondQuote"
import { Socials } from "./components/Socials"
import { Techs } from "./components/Techs"
import { ThirdQuote } from "./components/ThirdQuote"

const App: Component = () => {
  const [dark, setDark] = createSignal(true)

  return (
    <div class={`${dark() ? "frappe" : "latte"}`}>
      <div class="min-h-screen bg-base text-text">
        <Navbar dark={dark} setDark={setDark} />
        <Info />
        <FirstQuote />
        <Techs />
        <SecondQuote />
        <Socials />
        <ThirdQuote />
        <Posts />
        <Footer />
      </div>
    </div>
  )
}

export default App

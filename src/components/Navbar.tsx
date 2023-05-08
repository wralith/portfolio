import { IconMoon, IconSun } from "@tabler/icons-solidjs"
import { Accessor, Component, createEffect, createSignal, For, Show } from "solid-js"

const iconSize = 20
const Links: { href: string; title: string }[] = [
  { href: "#home", title: "Home" },
  { href: "#techs", title: "Techs" },
  { href: "#socials", title: "Socials" },
  { href: "#posts", title: "Posts" },
]

type Props = {
  dark: Accessor<boolean>
  setDark: (v: boolean) => void
}

export const Navbar: Component<Props> = (props) => {
  const [prevScrollPos, setPrevScrollPos] = createSignal(0)
  const [visible, setVisible] = createSignal(true)

  const handleScroll = () => {
    const currScrollPos = window.scrollY

    if (currScrollPos > prevScrollPos()) {
      setVisible(false)
    } else {
      setVisible(true)
    }

    setPrevScrollPos(currScrollPos)
  }

  createEffect(() => {
    window.addEventListener("scroll", handleScroll)
  })

  return (
    <div
      class={`sticky z-50 flex h-20 w-full items-center justify-between border-b border-surface1 bg-base/50 px-4 backdrop-blur-lg transition-all md:justify-around ${
        visible() ? "top-0" : "-top-20"
      }`}
    >
      <span class="text-flamingo md:text-2xl">Wralith</span>
      <nav class="flex items-center gap-4">
        <For each={Links}>
          {(link) => (
            <a href={link.href} class="flex gap-2 hover:text-yellow">
              {link.title}
            </a>
          )}
        </For>
        <button onClick={() => props.setDark(!props.dark())}>
          <Show when={props.dark()}>
            <IconSun size={iconSize} class="text-peach" />
          </Show>
          <Show when={!props.dark()}>
            <IconMoon size={iconSize} class="text-blue" />
          </Show>
        </button>
      </nav>
    </div>
  )
}

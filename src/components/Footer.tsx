import { Component, For } from "solid-js"

import { PageWrapper } from "./PageWrapper"

const links: { text: string; href: string }[] = [
  { text: "GitHub", href: "https://github.com/wralith" },
  { text: "Twitter", href: "https://twitter.com/wralith" },
  { text: "LinkedIn", href: "https://www.linkedin.com/in/ayberkcaliskan/" },
]

export const Footer: Component = () => {
  return (
    <div class="flex h-full flex-col bg-crust">
      <div class="flex h-16 items-center justify-around">
        <span class="text-red">Wralith</span>
        <div>
          <ul class="flex gap-2">
            <For each={links}>
              {(link) => (
                <li class="hover:underline">
                  <a href={link.href} target="_blank">
                    {link.text}
                  </a>
                </li>
              )}
            </For>
          </ul>
        </div>
      </div>
    </div>
  )
}

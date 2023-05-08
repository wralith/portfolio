import { IconBrandGolang, IconBrandTypescript, IconCoin, IconSql } from "@tabler/icons-solidjs"
import { Component, createSignal, For, JSX, Match, Switch } from "solid-js"

import { PageWrapper } from "./PageWrapper"

type Techs = "Go" | "TypeScript" | "Java" | "SQL"
const techs: { icon: JSX.Element; title: Techs; color: string }[] = [
  { icon: <IconBrandGolang />, title: "Go", color: "text-blue" },
  { icon: <IconBrandTypescript />, title: "TypeScript", color: "text-sapphire" },
  { icon: <IconCoin />, title: "Java", color: "text-yellow" },
  { icon: <IconSql />, title: "SQL", color: "text-sky" },
]

// TODO: This seems unnecessary, if i want to say something to add I will just plain HTML.
const prompts = {
  go: "I love Go! Simple and awesome what a lovely age to be a programmer. But lack of pattern matching...",
  ts: "I don't love TS that much but you know, there are few ways to speak with browser and TypeScript seems way better than Ja*aScript or any WASM alternatives.",
  java: "Am I allowed to use Java icon? Am I allowed to use Java at all?",
  sql: "Superior declarative query language, basically any backend related project I have uses SQL because why not?",
}

export const Techs: Component = () => {
  const [selectedTech, setSelectedTech] = createSignal<Techs | undefined>()

  return (
    <PageWrapper bg="bg-base" fill="fill-sky" id="techs">
      <div class="flex h-full flex-col lg:justify-center">
        <h2 class="pb-12 text-2xl font-bold text-text">Techs and Projects</h2>
        <div class="flex w-full flex-col gap-12 text-text lg:flex-row lg:gap-4">
          <ul class="w-full lg:w-1/4">
            <For each={techs}>
              {(tech) => (
                <li
                  class={`flex cursor-pointer items-center gap-4 text-xl hover:underline ${tech.color}`}
                  onClick={() => setSelectedTech(tech.title)}
                >
                  {tech.icon}
                  {tech.title}
                </li>
              )}
            </For>
          </ul>
          {/* <div class="border" /> */}
          <div class="w-full lg:w-3/4">
            <Switch>
              <Match when={selectedTech() == "Go"}>
                <p>{prompts.go}</p>
              </Match>
              <Match when={selectedTech() == "TypeScript"}>
                <p>{prompts.ts}</p>
              </Match>
              <Match when={selectedTech() == "Java"}>
                <p>{prompts.java}</p>
              </Match>
              <Match when={selectedTech() == "SQL"}>
                <p>{prompts.sql}</p>
              </Match>
              <Match when={!selectedTech()}>
                <p>
                  Select a tech a tech to see what I think about those and relevant personal
                  projects, <span class="text-pink">Yeah!</span> I use those here and there and kind
                  of familiar with them. If you want to learn how familiar I am, then you can ask
                  me.
                </p>
              </Match>
            </Switch>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

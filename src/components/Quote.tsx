import { Component, Show } from "solid-js"

type Props = {
  children: string
  author?: string
  /** Tailwind Color */
  color?: string
}

export const Quote: Component<Props> = (props) => {
  return (
    <div class="flex w-fit flex-col gap-8">
      <p
        class={`font-[caveat] text-4xl lg:text-8xl ${props.color ? props.color : "text-flamingo"}`}
      >
        {props.children}
      </p>
      <Show when={props.author}>
        <span class="self-end">{props.author}</span>
      </Show>
    </div>
  )
}

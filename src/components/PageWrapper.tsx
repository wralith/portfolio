import { Component, JSX } from "solid-js"

type Props = {
  id?: string
  bg: string
  fill: string
  children: JSX.Element
}

export const PageWrapper: Component<Props> = (props) => {
  return (
    <div
      id={props.id}
      class={`relative flex h-screen w-full justify-center p-12 text-base ${props.bg}`}
    >
      <div class="w-full lg:w-1/2">{props.children}</div>
      <div class={`absolute bottom-0 w-full ${props.fill} ${props.bg}`}>
        <svg viewBox="0 0 502.70832 13.229167" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0s167.309 6.615 251.354 6.615C335.4 6.615 502.708 0 502.708 0v13.23H0z" />
        </svg>
      </div>
    </div>
  )
}

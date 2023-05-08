import { Component } from "solid-js"

import { PageWrapper } from "./PageWrapper"
import { Quote } from "./Quote"

export const SecondQuote: Component = () => {
  return (
    <PageWrapper bg="bg-sky" fill="fill-base">
      <div class="flex h-full w-full items-center justify-center">
        <Quote color="text-mantle" author="Jean-Jacques Rousseau">
          “Nature made me happy and good, and if I am otherwise, it is society's fault.”
        </Quote>
      </div>
    </PageWrapper>
  )
}

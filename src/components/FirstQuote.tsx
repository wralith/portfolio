import { Component } from "solid-js"

import { PageWrapper } from "./PageWrapper"
import { Quote } from "./Quote"

export const FirstQuote: Component = () => {
  return (
    <PageWrapper bg="bg-yellow" fill="fill-base">
      <div class="flex h-full w-full items-center justify-center">
        <Quote color="text-mantle" author="Charles Baudelaire">
          “Extract the eternal from the ephemeral.”
        </Quote>
      </div>
    </PageWrapper>
  )
}

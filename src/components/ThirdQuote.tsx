import { Component } from "solid-js"

import { PageWrapper } from "./PageWrapper"
import { Quote } from "./Quote"

export const ThirdQuote: Component = () => {
  return (
    <PageWrapper bg="bg-maroon" fill="fill-base">
      <div class="flex h-full w-full items-center justify-center">
        <Quote color="text-mantle" author="Michael Foucault">
          “Maybe the target nowadays is not to discover what we are but to refuse what we are.”
        </Quote>
      </div>
    </PageWrapper>
  )
}

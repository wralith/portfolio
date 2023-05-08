import { IconBackhoe } from "@tabler/icons-solidjs"
import { Component } from "solid-js"

import { PageWrapper } from "./PageWrapper"

export const Posts: Component = () => {
  return (
    <PageWrapper id="posts" bg="bg-base" fill="fill-crust">
      <div class="flex h-full flex-col text-text">
        <h2 class="pb-12 text-2xl font-bold text-text">Posts</h2>
        <div class="flex h-full flex-col items-center justify-center text-yellow">
          <IconBackhoe size={60} />
          <p>This page is under construction.</p>
        </div>
      </div>
    </PageWrapper>
  )
}

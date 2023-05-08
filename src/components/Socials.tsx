import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandMedium,
  IconBrandTwitter,
  IconBrandYoutube,
  IconMail,
} from "@tabler/icons-solidjs"
import { Component, JSX } from "solid-js"

import { PageWrapper } from "./PageWrapper"

type SocialButtonProps = {
  text: string
  icon: JSX.Element
  link: string
}

const SocialButton: Component<SocialButtonProps> = (props) => {
  return (
    <a href={props.link} target="_blank" class="flex items-center text-teal hover:drop-shadow-md">
      <div class="group flex w-full cursor-pointer items-center gap-4 rounded-lg bg-mantle pr-4 transition-all hover:-translate-y-2 hover:bg-crust hover:text-peach md:w-fit">
        <span class="rounded-md border-crust p-4 group-hover:bg-peach group-hover:text-crust">
          {props.icon}
        </span>
        <span class="text-2xl md:text-4xl">{props.text}</span>
      </div>
    </a>
  )
}

//
export const Socials: Component = () => {
  return (
    <PageWrapper id="socials" bg="bg-base" fill="fill-maroon">
      <h2 class="pb-8 text-4xl font-bold text-text md:pb-24 md:text-center">Socials</h2>
      <div class="flex h-full flex-col content-start gap-4 text-text md:flex-row md:flex-wrap md:justify-center">
        <SocialButton
          text="GitHub"
          link="https://github.com/wralith"
          icon={<IconBrandGithub size="48" />}
        />
        <SocialButton
          text="Twitter"
          link="https://twitter.com/wralith"
          icon={<IconBrandTwitter size="48" />}
        />
        <SocialButton
          text="LinkedIn"
          link="https://www.linkedin.com/in/ayberkcaliskan/"
          icon={<IconBrandLinkedin size="48" />}
        />
        <SocialButton
          text="Medium"
          link="https://medium.com/@wralith"
          icon={<IconBrandMedium size="48" />}
        />
        <SocialButton
          text="YouTube"
          link="https://www.youtube.com/@wralith"
          icon={<IconBrandYoutube size="48" />}
        />
        <SocialButton
          text="Email"
          link="mailto:ayberk.clsk@gmail.com"
          icon={<IconMail size="48" />}
        />
      </div>
    </PageWrapper>
  )
}

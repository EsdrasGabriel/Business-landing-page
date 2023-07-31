import { TryForFree } from "../TryForFreeButton"

export function First() {
  return (
    <div id="Home" className="relative z-0 flex flex-col h-auto gap-16 mx-5 text-white mb-[30rem] 2xl:mb-[35rem]">
      <div className="flex flex-col items-center gap-12 pt-10 mx-3 my-16">
        <h2 className="text-5xl text-center font-regular md:text-7xl md:font-bold md:w-[50rem]">The best products start with Figma</h2>
        <h4 className="text-2xl text-center font-regular w-60 md:text-3xl md:w-[55rem]">Most calendars are designed for teams. Slate is designed for freelancers</h4>
      </div>

      <TryForFree></TryForFree>
    </div>
  )
}
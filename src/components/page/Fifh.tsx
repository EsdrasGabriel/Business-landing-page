import { Partners } from "../Partners"
import { TryForFree } from "../TryForFreeButton"

export function Fifh() {
  return (
    <div className="flex flex-col items-center justify-center gap-20 my-12 xl:pt-20">
      <div className="flex flex-col gap-3 text-center xl:gap-7">
        <h2 className="text-5xl font-regular text-zinc-800">Partners</h2>
        <h4 className="text-xl font-regular text-zinc-600 xl:w-[25rem] px-2">Most calendars are designed for teams. Slate is designed for freelancers</h4>
      </div>

      <div className="flex flex-col gap-8 my-5">
        <Partners></Partners>
      </div>

      <div>
        <TryForFree></TryForFree>
      </div>
    </div>
  )
}
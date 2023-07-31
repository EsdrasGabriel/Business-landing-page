import { Features } from "../Features"

export function Second() {
  return (
    <div id="Product" className="flex flex-col items-center justify-center gap-12">
      <div className="flex flex-col text-center gap-7">
        <h2 className="text-5xl font-regular text-zinc-800">Features</h2>
        <div className="flex flex-col px-5 w-76">
          <h3 className="text-3xl font-regular text-zinc-600 ">Most calendars are designed for teams.</h3>
          <h3 className="text-3xl font-regular text-zinc-600 max-md:hidden">Slate is designed for freelancers</h3>
        </div>
      </div>

      <div className="flex flex-col-reverse items-center w-full gap-12 md:flex-col xl:gap-20">
        <div>
          <Features></Features>
        </div>

        <div className="flex items-center justify-center w-full h-full">
          <video width={386} height={216} controls className="md:hidden rounded-2xl">
            <source src="https://www.youtube.com/watch?v=tJCHjsgZ_QA" type="video/mp4" />
          </video>
          <video width={686} height={516} controls className="rounded-2xl max-md:hidden xl:hidden">
            <source src="https://www.youtube.com/watch?v=tJCHjsgZ_QA" type="video/mp4" />
          </video>
          <video width={986} height={816} controls className="max-xl:hidden rounded-2xl">
            <source src="https://www.youtube.com/watch?v=tJCHjsgZ_QA" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  )
}
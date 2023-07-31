import { Selling } from "../Selling"

export function Seventh() {
  return (
    <div id="Pricing" className="flex flex-col items-center justify-center gap-20 py-20 bg-slate-800">
      <div className="flex flex-col text-center text-white gap-7">
        <h2 className="text-5xl font-regular">Pricing</h2>
        <div>
          <h4 className="text-3xl font-regular">Most calendars are designed for teams. </h4>
          <h4 className="text-3xl font-regular max-xl:hidden">Slate is designed for freelancers</h4>
        </div>
      </div>

      <div>
        <Selling></Selling>
      </div>
    </div>
  )
}
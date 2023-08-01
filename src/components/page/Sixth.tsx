import Image from "next/image"
import Link from "next/link"

export function Sixth() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-20 my-24">
      <div>
        <h2 className="text-5xl font-regular text-zinc-800">Testimonials</h2>
      </div>

      <div className="flex flex-col items-center justify-center w-full px-3 my-3 gap-14">
        <Image
          src="assets/ibmIcon.svg"
          alt="Icone da IBM"
          width={127}
          height={51}
        />

        <h4 className="text-base font-bold text-center text-zinc-500 w-full xl:text-xl xl:font-extralight xl:w-[47.5rem]">Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</h4>

        <div className="flex gap-3 my-2">
          <Image
            src="assets/DesignerImg.svg"
            alt="Imagem da Designer"
            width={62}
            height={62}
          />

          <div className="flex flex-col items-start justify-center">
            <h6 className="text-base font-bold text-zinc-600">Organize Across</h6>
            <Link href={"#"} className="text-lg font-regular text-zinc-600">UI Designer</Link>
          </div>
        </div>

        <button className="px-12 py-4 text-xl font-bold text-white bg-blue-500 rounded-full">More Testimonials</button>

      </div>
    </div>
  )
}
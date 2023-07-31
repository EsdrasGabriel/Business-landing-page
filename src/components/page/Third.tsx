import { TryForFree } from "../TryForFreeButton"
import Image from "next/image"

export function Third() {
  return (
    <div id="About" className="flex flex-col items-center justify-center w-full my-40">
      <div className='flex flex-col items-center justify-center my-14'>
        <div className="flex flex-col gap-16 xl:flex-row">
          <div className="flex flex-col items-center px-4 gap-7 xl:items-start xl:justify-center">
            <h2 className="text-5xl text-center font-regular text-zinc-800 xl:text-start lg:w-96">Fastest way to organize</h2>
            <div className='w-full'>
              <h3 className="text-3xl text-center font-regular text-zinc-600 xl:text-start">Most calendars are designed for teams.</h3>
              <h3 className="text-3xl font-regular text-zinc-600 max-xl:hidden">Slate is designed for freelancers</h3>
            </div>
            <TryForFree></TryForFree>
          </div>


          <div className="flex items-center justify-center m-0">
            <Image
              className="m-0 xl:hidden"
              src="assets/macbookPro.svg"
              alt="imagem de um Macbook Pro"
              width={377}
              height={212}
            />
            <Image
              className="m-0 max-xl:hidden"
              src="assets/macbookPro.svg"
              alt="imagem de um Macbook Pro"
              width={577}
              height={412}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
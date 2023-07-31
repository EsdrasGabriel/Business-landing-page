import Image from "next/image"

export function Fourth() {
  return (
    <div className="flex flex-col items-center justify-center gap-16 my-20 xl:flex-row-reverse xl:gap-36 xl:px-8">
      <div className="flex flex-col gap-5 text-center xl:text-start">
        <h3 className="text-xl font-bold text-zinc-950">At your fingerstips</h3>
        <h2 className="text-5xl text-zinc-800 font-regular xl:hidden">Newsletter</h2>
        <h2 className="text-5xl text-zinc-800 font-regular xl:w-96 max-xl:hidden">Lightning fast prototyping </h2>
        <h4 className="px-2 text-xl text-zinc-600 font-regular xl:hidden">Most calendars are designed for teams. Slate is designed for freelancers</h4>

        <div>
          <div className="flex flex-col gap-3 text-center xl:text-start max-xl:hidden">
            <h3 className="text-xl font-bold text-zinc-800">Subscribe to your Newsletter</h3>
            <p className="text-lg text-zinc-600 font-regular">Available exclusivery on Figmaland</p>
          </div>

          <div className="px-10 py-10 xl:px-0">
            <form action="" className='flex flex-col gap-3 xl:flex-row'>
              <input type="email" placeholder='Your Email' className="py-5 border-2 rounded-full px-9 border-zinc-200 placeholder:text-zinc-600 xl:px-12" />
              <button type="submit" className="py-5 text-xl text-white bg-blue-500 rounded-full px-9 font-regular">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div>
        <Image
          className="xl:hidden"
          src="assets/manAndMailIcon.svg"
          alt="Ilustração de um homem caminhando e uma carta"
          width={389}
          height={295}
        />
        <Image
          className="max-xl:hidden"
          src="assets/manAndMailIcon.svg"
          alt="Ilustração de um homem caminhando e uma carta"
          width={689}
          height={595}
        />
      </div>

      <div className="xl:hidden">
        <div className="flex flex-col gap-3 text-center">
          <h3 className="text-xl font-bold text-zinc-800">Subscribe to your Newsletter</h3>
          <p className="text-lg text-zinc-600 font-regular">Available exclusivery on Figmaland</p>
        </div>

        <div className="py-10">
          <form action="" className='flex flex-col gap-3'>
            <input type="email" placeholder='Your Email' className="py-5 border-2 rounded-full px-9 border-zinc-200 placeholder:text-zinc-600" />
            <button type="submit" className="px-32 py-5 text-xl text-white bg-blue-500 rounded-full font-regular">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  )
}
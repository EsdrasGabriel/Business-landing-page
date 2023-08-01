import Image from "next/image"
import { social } from "@/mocks/social"

export function Eighth() {
  return (
    <div id="ContactUs" className="flex flex-col items-center justify-center py-20">
      <div className="flex flex-col items-center justify-center gap-20 py-12">
        <div className="flex flex-col gap-8 text-center">
          <h2 className="text-5xl font-regular text-zinc-800">Contact Us</h2>
          <div>
            <h4 className="text-3xl font-regular text-zinc-600 w-80 xl:w-[40rem]">Most calendars are designed for teams. </h4>
            <h4 className="text-3xl font-regular text-zinc-600 w-80 xl:w-[40rem] max-xl:hidden">Slate is designed for freelancers</h4>
          </div>
        </div>

        <div className="flex flex-col gap-20 xl:">
          <div className="flex justify-center gap-7">
            {social.map((link) => (
              <Image
                className='fill-blue-500'
                key={link.id}
                src={link.icon}
                alt={link.alt}
                width={44}
                height={44}
              />
            ))}
          </div>

          <div className="flex flex-col items-start w-full gap-16 px-3 text-base font-regular text-zinc-600 xl:flex-row-reverse">
            <div className="flex flex-col gap-16">
              <div className="flex flex-col gap-4 xl:flex-row">
                <div className="flex gap-3 xl:flex-col xl:items-center xl:w-full">
                  <Image
                    src="assets/localIcon.svg"
                    alt="Icone de localização"
                    width={26}
                    height={32}
                  />
                  <div className="xl:w-96 xl:text-center">
                    <address className='not-italic'>6386 Spring St undefined Anchorage, Georgia 12473 United States</address>
                  </div>
                </div>
                <div className="flex gap-4 xl:flex-col xl:items-center xl:w-full">
                  <Image
                    src="assets/phoneIcon.svg"
                    alt="Icone de Telefone"
                    width={21}
                    height={34}
                  />
                  <div>
                    <span>(843) 555-0130</span>
                  </div>
                </div>
                <div className="flex gap-3 xl:flex-col xl:items-center xl:w-full xl:gap-6">
                  <Image
                    src="assets/mailIcon.svg"
                    alt="Icone de Carta"
                    width={27}
                    height={22}
                  />
                  <span>willie.jennings@example.com</span>
                </div>
              </div>
              <div className="">
                <Image
                  className="w-full max-xl:hidden"
                  src="assets/map.svg"
                  alt='mapa'
                  width={516}
                  height={323}
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center border shadow-xl w-80 px-9 rounded-3xl py-14 gap-11">
              <h4 className="text-2xl font-bold text-zinc-800">Contact Us</h4>

              <form action="" className="flex flex-col items-center justify-center gap-9 drop-shadow-md xl:items-start">
                <input type="name" placeholder='Your Name' className="px-5 py-5 border rounded-full bg-zinc-50 border-zinc-200 placeholder:text-zinc-600 xl:w-full" />
                <input type="email" placeholder='Your E-mail' className="px-5 py-5 border rounded-full bg-zinc-50 border-zinc-200 placeholder:text-zinc-600 xl:w-full" />
                <textarea name="" id="" placeholder='Your Message' className="h-48 p-6 border rounded-3xl w-72 bg-zinc-50 placeholder:text-zinc-600"></textarea>
                <button type='submit' className="px-12 py-5 text-xl text-white bg-blue-500 rounded-full shadow-sm font-regular">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
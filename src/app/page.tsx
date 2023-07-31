'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { HamburguerMenu } from '@/components/HamburguerMenu'
import { Features } from '@/components/Features'
import { TryForFree } from '@/components/TryForFreeButton'
import { Partners } from '@/components/Partners'
import { Selling } from '@/components/Selling'
import { social } from '@/mocks/social'
import { footerInfo } from '@/mocks/footerInfo'

export default function Home() {
  
  const router = useRouter()

  return (
      <>
      <div className="absolute z-0 w-full h-full bg-fixed bg-center bg-no-repeat bg-cover" style={{backgroundImage: "url('assets/background.svg')"}}></div>

      <header className='sticky top-0 z-50 w-full'>
        <div className="absolute z-0 flex items-center justify-center w-full h-[100%] bg-zinc-400" ></div>
        <div className="flex flex-col w-screen">
          <nav className='z-50 flex items-center justify-between mx-8'>
              <div>
                <Image 
                className='m-3'
                src="assets/logo.svg"
                alt='Logo da pagina'
                width={186}
                height={58}
                />
              </div>

              <div className="flex text-white max-md:hidden">
                <ul className="flex gap-6">
                  <li>Home</li>
                  <li>Product</li>
                  <li>Pricing</li>
                  <li>About</li>
                  <li>Coontact</li>
                </ul>
              </div>

              <div className="flex items-center justify-center mr-4 gap-7 max-md:hidden">
              {social.map((link) => (
                  <Image
                  key={link.id}
                  src={link.iconWhite}
                  alt={link.alt}
                  width={44}
                  height={44}
                  />
                ))}
              </div>

              <HamburguerMenu />
            </nav>  
        </div>
      </header>

      <div className="relative z-0 flex flex-col h-auto gap-16 mx-5 text-white mb-[30rem] 2xl:mb-[35rem]">
        <div className="flex flex-col items-center gap-12 mx-3 my-12">
          <h2 className="text-5xl text-center font-regular md:text-7xl md:font-bold">The best products start with Figma</h2>
          <h4 className="text-2xl text-center font-regular w-60 md:text-3xl md:w-96">Most calendars are designed for teams. Slate is designed for freelancers</h4>
        </div>

        <TryForFree></TryForFree>
      </div>

      <div className="flex flex-col items-center justify-center gap-12">
        <div className="flex flex-col text-center gap-7">
          <h2 className="text-5xl font-regular text-zinc-800">Features</h2>
          <div className="flex flex-col w-76">
            <h3 className="text-3xl font-regular text-zinc-600">Most calendars are designed for teams.</h3>
            <h3 className="text-3xl font-regular text-zinc-600 max-md:hidden">Slate is designed for freelancers</h3>
          </div>
        </div>

        <div className="flex flex-col-reverse items-center w-full gap-12 md:flex-col xl:gap-20">
          <div>
            <Features></Features>
          </div>

          <div className="flex items-center justify-center w-full h-full"> 
            <video width={386} height={216} controls className="md:hidden rounded-2xl">
              <source src="https://www.youtube.com/watch?v=tJCHjsgZ_QA" type="video/mp4"/>
            </video>
            <video width={686} height={516} controls className="rounded-2xl max-md:hidden xl:hidden">
              <source src="https://www.youtube.com/watch?v=tJCHjsgZ_QA" type="video/mp4"/>
            </video>
            <video width={986} height={816} controls className="max-xl:hidden rounded-2xl">
              <source src="https://www.youtube.com/watch?v=tJCHjsgZ_QA" type="video/mp4"/>
            </video>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full my-40">
          <div className='flex flex-col items-center justify-center my-14'>
            <div className="flex flex-col gap-16 xl:flex-row">
              <div className="flex flex-col items-center gap-7 xl:items-start xl:justify-center">
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

      <div className="flex flex-col items-center justify-center gap-16 my-20 xl:flex-row-reverse xl:gap-36 xl:px-8">
        <div className="flex flex-col gap-5 text-center xl:text-start">
          <h3 className="text-xl font-bold text-zinc-950">At your fingerstips</h3>
          <h2 className="text-5xl text-zinc-800 font-regular xl:hidden">Newsletter</h2>
          <h2 className="text-5xl text-zinc-800 font-regular xl:w-96">Lightning fast prototyping </h2>
          <h4 className="text-xl text-zinc-600 font-regular xl:hidden">Most calendars are designed for teams. Slate is designed for freelancers</h4>

          <div>
            <div className="flex flex-col gap-3 text-center xl:text-start">
              <h3 className="text-xl font-bold text-zinc-800">Subscribe to your Newsletter</h3>
              <p className="text-lg text-zinc-600 font-regular">Available exclusivery on Figmaland</p>
            </div>

            <div className="px-10 py-10 xl:px-0">
              <form action="" className='flex flex-col gap-3 xl:flex-row'>
                <input type="email" placeholder='Your Email' className="py-5 border-2 rounded-full px-9 border-zinc-200 placeholder:text-zinc-600 xl:px-12"/>
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
              <input type="email" placeholder='Your Email' className="py-5 border-2 rounded-full px-9 border-zinc-200 placeholder:text-zinc-600"/>
              <button type="submit" className="px-32 py-5 text-xl text-white bg-blue-500 rounded-full font-regular">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-20 my-12 xl:pt-20">
        <div className="flex flex-col gap-3 text-center xl:gap-7">
          <h2 className="text-5xl font-regular text-zinc-800">Partners</h2>
          <h4 className="text-xl font-regular text-zinc-600 xl:w-[25rem]">Most calendars are designed for teams. Slate is designed for freelancers</h4>
        </div>

        <div className="flex flex-col gap-8 my-5">
          <Partners></Partners>
        </div>

        <div>
          <TryForFree></TryForFree>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-20 my-24">
        <div>
          <h2 className="text-5xl font-regular text-zinc-800">Testimonials</h2>
        </div>

        <div className="flex flex-col items-center justify-center my-3 gap-14">
          <Image
          src="assets/ibmIcon.svg"
          alt="Icone da IBM"
          width={127}
          height={51}
          />

          <h4 className="text-base font-bold text-center text-zinc-500 w-[23rem] xl:text-xl xl:font-extralight xl:w-[47.5rem]">Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</h4>

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

      <div className="flex flex-col items-center justify-center gap-20 py-20 bg-slate-800">
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

      <div className="flex flex-col items-center justify-center py-20">
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

            <div className="flex flex-col items-start gap-16 px-3 text-base w-96 font-regular text-zinc-600 xl:flex-row-reverse xl:w-full">
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
              <div className="flex flex-col items-center justify-center border shadow-xl px-9 rounded-3xl py-14 gap-11">
                  <h4 className="text-2xl font-bold text-zinc-800">Contact Us</h4>

                  <form action="" className="flex flex-col items-center justify-center gap-9 drop-shadow-md xl:items-start">
                    <input type="name" placeholder='Your Name' className="px-5 py-5 border rounded-full bg-zinc-50 border-zinc-200 placeholder:text-zinc-600 xl:w-full"/>
                    <input type="email" placeholder='Your E-mail' className="px-5 py-5 border rounded-full bg-zinc-50 border-zinc-200 placeholder:text-zinc-600 xl:w-full"/>
                    <textarea name="" id="" placeholder='Your Message' className="h-48 p-6 border rounded-3xl w-72 bg-zinc-50 placeholder:text-zinc-600"></textarea>
                    <button type='submit' className="px-12 py-5 text-xl text-white bg-blue-500 rounded-full shadow-sm font-regular">Send</button>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center gap-20 px-16 py-20 bg-slate-800 xl:flex-row'>
        <div className="flex flex-col items-center justify-center gap-16 md:flex-row md:flex-wrap xl:flex-nowrap">
          {footerInfo.map((link) => (
            <div key={link.id} className="flex flex-col items-center justify-center gap-4 text-white">
              <h3 className="text-xl font-bold">{link.title}</h3>
              <ul className="flex flex-col items-center justify-center gap-2">
                {link.list.map(({id, content}) => (
                  <li key={id} className="text-sm font-regular">{content}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 px-8">
          <div className="flex items-center gap-3">
            <Image 
            src="assets/localIconWhite.svg"
            alt="Icone de localização"
            width={46}
            height={46}
            />
            <address className="text-base not-italic text-white font-regular">7480 Mockingbird Hill undefined</address>
          </div>
          <div className="flex items-center gap-3 px-1"  >
            <Image 
            src="assets/phoneIconWhite.svg"
            alt="Icone de telefone"
            width={35}
            height={35}
            />
            <span className="pl-1 text-base text-white font-regular">(239) 555-0108</span>
          </div>
          <div>
          <div className="flex items-center justify-center gap-7 ">
          {social.map((link) => (
              <Image
              key={link.id}
              src={link.iconWhite}
              alt={link.alt}
              width={44}
              height={44}
              />
            ))}
          </div>
          </div>
        </div>
      </div>
      </>
    
  )
}

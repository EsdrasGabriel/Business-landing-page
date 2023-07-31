'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { HamburguerMenu } from '@/components/HamburguerMenu'
import { social } from '@/mocks/social'
import { First } from '@/components/page/First'
import { Second } from '@/components/page/Second'
import { Third } from '@/components/page/Third'
import { Fourth } from '@/components/page/fourth'
import { Fifh } from '@/components/page/Fifh'
import { Sixth } from '@/components/page/Sixth'
import { Seventh } from '@/components/page/Seventh'
import { Eighth } from '@/components/page/Eighth'
import { Nineth } from '@/components/page/Nineth'


export default function Home() {

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
                  <li><a href="#Home">Home</a></li>
                  <li><a href="#Product">Product</a></li>
                  <li><a href="#Pricing">Pricing</a></li>
                  <li><a href="#About">About</a></li>
                  <li><a href="#ContactUs">Contact</a></li>
                </ul>
              </div>

              <div className="flex items-center justify-center mr-4 gap-7 max-md:hidden">
              {social.map((link) => (
                  <Link key={link.id} href={"#"} className="cursor-pointer">
                    <Image
                    src={link.iconWhite}
                    alt={link.alt}
                    width={44}
                    height={44}
                    />
                  </Link>
                ))}
              </div>

              <HamburguerMenu />
            </nav>  
        </div>
      </header>

      <main>
        <First></First>
        <Second></Second>
        <Third></Third>
        <Fourth></Fourth>
        <Fifh></Fifh>
        <Sixth></Sixth>
        <Seventh></Seventh>
        <Eighth></Eighth>
        <Nineth></Nineth>
      </main>
      </>
    
  )
}

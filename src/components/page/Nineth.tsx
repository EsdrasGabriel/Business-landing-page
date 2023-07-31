import Image from "next/image"
import { footerInfo } from "@/mocks/footerInfo"
import { social } from "@/mocks/social"

export function Nineth() {
  return (
    <div className='flex flex-col items-center justify-center gap-20 px-16 py-20 bg-slate-800 xl:flex-row'>
      <div className="flex flex-col items-center justify-center gap-16 md:flex-row md:flex-wrap xl:flex-nowrap">
        {footerInfo.map((link) => (
          <div key={link.id} className="flex flex-col items-center justify-center gap-4 text-white">
            <h3 className="text-xl font-bold">{link.title}</h3>
            <ul className="flex flex-col items-center justify-center gap-2">
              {link.list.map(({ id, content }) => (
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
  )
}
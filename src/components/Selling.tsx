import Image from "next/image";
import { selling } from "@/mocks/selling";

export function Selling() {
    return (
        <div className="flex flex-col gap-8 xl:flex-row xl:gap-16">
            {selling.map((link) => (
                <div key={link.id} className={`bg-${link.bgColor} flex flex-col justify-center items-center gap-8 px-10 py-10 rounded-xl `}>
                    <div className="flex flex-col gap-2 text-center w-36">
                        <h3 className={`text-${link.titleColor} text-xl font-bold`}>{link.title}</h3>
                        <h6 className={`text-${link.descriptionColor} text-base font-regular`}>{link.description}</h6>
                    </div>
                    <Image 
                    src={link.price}
                    alt={link.alt}
                    width={link.width}
                    height={link.height}
                    />
                    <ul className={`flex flex-col gap-3 text-${link.listColor}`}>
                        {link.list.map(({id, value}) => {
                            return (
                                <li key={id} className="text-base">{value}</li>
                            )
                        })}
                    </ul>
                    <button className={`px-20 py-5 bg-${link.bgButton} rounded-full text-${link.ButtonTextColor}`}>{link.buyNow}</button>
                </div>
            ))}
        </div>
    )
}
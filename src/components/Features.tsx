import { featureStructure } from "@/mocks/feature"
import Image from "next/image"

export function Features() {
    return (
        <div className="flex flex-col flex-wrap justify-center w-full gap-16 md:flex-row">
            {featureStructure.map((link) => (
                <div className="flex flex-col items-center gap-4 text-center w-72" key={link.id}>
                    <Image
                        src={link.icon}
                        alt="imagem ilustrativa de cilindros"
                        width={56}
                        height={56}
                    />
                    <h3 className="text-2xl font-bold text-zinc-800">{link.title}</h3>
                    <p className="text-lg text-zinc-600 font-regular">{link.description}</p>
                </div>
            ))}
        </div>
    )
}
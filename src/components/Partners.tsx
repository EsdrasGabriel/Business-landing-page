import Image from "next/image";
import { partners } from "@/mocks/partners";

export function Partners() {
    return (
        <div className="flex flex-col gap-8 xl:flex-row">
            {partners.map((link) => (
                <div key={link.id} className="flex flex-col gap-4">
                    <button type="button" className="flex flex-col items-center gap-3 px-10 py-6 text-center border cursor-pointer">
                        <h6 className="text-lg font-regular text-zinc-600">{link.name}</h6>
                        <Image
                            src={link.img}
                            alt={link.alt}
                            width={link.width}
                            height={link.height}
                        />
                    </button>
                </div>
            ))}
        </div>
    )
}
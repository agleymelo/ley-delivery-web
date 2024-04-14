import { Coffee, ShoppingBag, Timer } from "lucide-react";
import { BenefitItems } from "./benefit-item";

import HeroImage from '~/assets/hero/hero-01.png'
import Image from "next/image";

export function Hero() {
  return (
    <section className="mx-auto mt-24 grid max-h-80 max-w-6xl grid-cols-2 gap-4">
      <div className="flex h-full w-full flex-col items-start p-4">
        <div className="flex h-full w-full flex-col justify-between p-1">
          <div className="">
            <h1 className="mb-4 font-sans text-2xl font-extrabold text-primary">
              O café perfeito para qualquer hora do dia.
            </h1>
            <span className="text-base text-primary/80">
              Você recebe o nosso café em qualquer lugar que estiver.
            </span>
          </div>

          <div className="mt-auto grid grid-cols-2">
            <BenefitItems
              icon={ShoppingBag}
              description="Compra simples e segura"
            />
            <div />
            <div />
            <BenefitItems
              icon={Timer}
              description="Entrega rápida e rastreavel"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Image src={HeroImage} alt="" width={256} height={256} className="object-cover" />
        {/* <Coffee className="h-64 w-64 origin-center rotate-6" /> */}
      </div>
    </section>
  );
}

"use client";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";

import Image from "next/image";
import CarouselImgOne from "~/assets/carousel/carousel-1.jpg";
import CarouselImgTwo from "~/assets/carousel/carousel-2.jpg";
import CarouselImgThree from "~/assets/carousel/carousel-3.jpg";

export function CarouselHome() {
  return (
    <Carousel
      className="mx-auto mt-8 max-h-96 max-w-6xl px-4"
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 4000 })]}
    >
      <CarouselContent>
        <CarouselItem>
          <Image
            src={CarouselImgOne}
            alt=""
            width={1920}
            height={320}
            className="rounded-sm md:h-96 md:object-cover"
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src={CarouselImgTwo}
            alt=""
            width={1920}
            height={320}
            className="rounded-sm md:h-96 md:object-cover"
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            src={CarouselImgThree}
            alt=""
            width={1920}
            height={320}
            className="rounded-sm md:h-96 md:object-cover"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}

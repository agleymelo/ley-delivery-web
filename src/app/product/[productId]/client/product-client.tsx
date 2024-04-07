import Image, { type StaticImageData } from "next/image";
import { Button } from "~/components/ui/button";

type ProductClientProps = {
  title: string;
  description: string;
  price: number;
  images: StaticImageData[];
};

export function ProductClient({
  title,
  description,
  price,
  images,
}: ProductClientProps) {
  return (
    <div className="mx-auto my-8 grid w-full max-w-6xl grid-cols-2 gap-8">
      <div>
        <Image src={images[0]!} alt={title} className="object-cover" />
      </div>

      <main className="flex flex-col gap-4 ">
        <div className="flex flex-col gap-4">
          <h1 className="font-sans text-3xl tracking-tight">{title}</h1>
        </div>

        <div className="space-y-2">
          <span className="text-sm text-foreground/50">Detalhe</span>
          <p className="text-lg text-foreground">{description}</p>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <p className="mt-4 text-2xl font-bold">R$ {price.toFixed(2)}</p>
          </div>

          <Button>Comprar</Button>
        </div>
      </main>
    </div>
  );
}

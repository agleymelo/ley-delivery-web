import Image, { type StaticImageData } from "next/image";
import { Button } from "../ui/button";

type ProductCardProps = {
  title: string;
  description: string;
  price: number;
  image_url: string | StaticImageData;
};

export function ProductCard({
  title,
  description,
  price,
  image_url,
}: ProductCardProps) {
  return (
    <div className="rounded-sm border ">
      <Image
        src={image_url}
        alt={title}
        className="h-36 w-screen rounded-t-sm object-cover"
      />
      <div className="flex flex-col items-start justify-start gap-2 p-4">
        <h3 className="font-sans text-lg font-normal text-foreground/90">
          {title}
        </h3>
        <span className="line-clamp-2 text-sm text-secondary-foreground/70">
          {description}
        </span>
      </div>
      <div className="flex flex items-center justify-between p-4">
        <span>Preço: {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price)}</span>

        <div>
          <Button>Adicionar eu Carrinho</Button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { Pagination } from "~/components/Pagination";

import productOne from "~/assets/product/product-example.jpg";
import { ProductCard } from "~/components/ProductCard";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { api } from "~/lib/axios";

type GetProductByCategoryReply = {
  products: Array<{
    id: string;
    name: string;
    description: string;
    price: number;
    image_url: string;
  }>;
  meta: {
    total: number;
    perPage: number;
    currentPage: number;
  };
};

type CategoryPageProps = {
  categoryId: string;
  pageIndex: number;
};

export function CategoryPage({ categoryId, pageIndex }: CategoryPageProps) {
  // console.log(categoryId);

  // const searchParams = useSearchParams()




  // function handlePageChange(page: number) {
  //   console.log(pageIndex + 1);
  // }

  

  // useEffect(() => {
  //   async function getProductByCategory (categoryId: string, pageIndex: number) {
  //     try {
  //       // const response = await api.get<GetProductByCategoryReply>(`/products?categoryId=${categoryId}&pageIndex=${pageIndex}`)

  //       // console.log(resposse.data)
    
  //       // return response.data
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }

  //   getProductByCategory
  // }, [])

  return (
    <div className="mx-auto my-8 max-w-6xl gap-4">
      <div className="mt-8">
        <h1 className="font-sans text-3xl font-medium tracking-tight">
          Produtos da categoria - Café
        </h1>
      </div>

      <main className="my-4 mt-6 grid grid-cols-3 gap-8">
        {Array.from({ length: 12 }).map((_, index) => {
          return (
            <ProductCard
              key={index}
              title="Sanduiche muito legal"
              description="saunduiche crocante e natural"
              price={9}
              image_url={productOne}
            />
          );
        })}
      </main>

      <Pagination pageIndex={4} totalCount={105} perPage={10}  onPageChange={() => {}} />
    </div>
  );
}

import { api } from "~/lib/axios";
import { Pagination } from "~/components/Pagination";
import { ProductCard } from "~/components/ProductCard";

type GetProductByCategoryReply = {
  products: Array<{
    id: string;
    name: string;
    description: string;
    priceInCents: number;
    images: string;
  }>;
  meta: {
    pageIndex: number;
    perPage: number;
    total: number;
  };
};

async function getProductByCategory(categoryId: string, pageIndex: number) {
  try {
    const response = await api.get<GetProductByCategoryReply>(
      `/products?categoryId=${categoryId}&pageIndex=${pageIndex}`,
    );

    return response.data;
  } catch (err) {
    console.log(err);
  }
}

type PageProps = {
  params: {
    categoryId: string;
  };
  searchParams: Record<string, string | string[] | undefined>;
};

export default async function Page({ params, searchParams }: PageProps) {
  let page = searchParams.page ? parseInt(searchParams.page as string) : 1;
  page = !page || page < 1 ? 1 : page;

  const results = await getProductByCategory(params.categoryId, page - 1);

  const prevPage = page - 1 > 0 ? page - 1 : 1;
  const nextPage = page + 1;

  return (
    <>
      <div className="mx-auto my-8 max-w-6xl gap-4">
        <div className="mt-8">
          <h1 className="font-sans text-3xl font-medium tracking-tight">
            Produtos da categoria - Café
          </h1>
        </div>

        <main className="my-4 mt-6 grid grid-cols-3 gap-8">
          {results?.products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                title={product.name}
                description={product.description}
                price={product.priceInCents}
                image_url={product.images[0]!}
              />
            );
          })}
        </main>

        {results?.meta && (
          <Pagination
            pageIndex={results.meta.pageIndex}
            totalCount={results?.meta.total}
            perPage={results?.meta.perPage}
            prevPage={prevPage}
            nextPage={nextPage}
          />
        )}
      </div>
    </>
  );
}

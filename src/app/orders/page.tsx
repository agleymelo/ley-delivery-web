import { cookies } from "next/headers";
import { Pagination } from "~/components/Pagination";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { api } from "~/lib/axios";
import { OrderTableRow } from "./order-table-row";
import { OrderTableFilters } from "./order-table-filters";

type GetOrdersReply = {
  orders: Array<{
    id: string;
    created_at: string;
    status: "pending" | "processing" | "delivering" | "delivered" | "cancelled";
    totalInCents: number;
  }>;
  meta: {
    pageIndex: number;
    perPage: number;
    total: number;
  };
};

async function getOrders(pageIndex: number) {
  const token = cookies().get("@ley-delivery-web:token")?.value;

  api.defaults.headers.common.Accept = `Bearer ${token}`;

  try {
    const response = await api.get<GetOrdersReply>(
      `/orders?pageIndex=${pageIndex}`,
    );

    return response.data;
  } catch (err) {
    // console.log(err);
  }
}

type PageProps = {
  searchParams: Record<string, string | string[] | undefined>;
};

export default async function Page({ searchParams }: PageProps) {
  let page = searchParams.page ? parseInt(searchParams.page as string) : 1;
  page = !page || page < 1 ? 1 : page;

  const results = await getOrders(page - 1);

  const prevPage = page - 1 > 0 ? page - 1 : 1;
  const nextPage = page + 1;

  let status = searchParams.status as string


  status = "20"

  console.log(status)

  return (
    <div className="mx-auto my-8 flex w-full flex-col gap-4 px-10">
      <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>

      <div className="space-y-2.5">
        {/* <OrderTableFilters /> */}

        <div className="mt-6 rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[64px]"></TableHead>
                <TableHead className="w-[140px]">ID</TableHead>
                <TableHead className="w-[180px]">Realizado há</TableHead>
                <TableHead className="w-[140px]">Status</TableHead>
                <TableHead className="w-[140px]">Total do pedido</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {results?.orders.map((order) => (
                <OrderTableRow key={order.id} order={order} />
              ))}
            </TableBody>
          </Table>
        </div>

        {results?.meta && (
          <Pagination
            pageIndex={results.meta.pageIndex}
            totalCount={results.meta.total}
            perPage={results.meta.perPage}
            prevPage={prevPage}
            nextPage={nextPage}
          />
        )}
      </div>
    </div>
  );
}

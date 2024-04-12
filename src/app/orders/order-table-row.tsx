import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { Search } from "lucide-react";
import { Button } from "~/components/ui/button";
import { TableCell, TableRow } from "~/components/ui/table";

import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { OrderStatus } from "./order-status";

type OrderTableRowProps = {
  order: {
    id: string;
    status: 'pending' | 'processing' | 'delivering' | 'delivered' | 'cancelled';
    totalInCents: number;
    created_at: string;
  };
};

export function OrderTableRow({ order }: OrderTableRowProps) {
  return (
    <TableRow>
      <TableCell>
        {/* <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>

          <OrderDetails open={isDetailsOpen} orderId={order.orderId} />
        </Dialog> */}
      </TableCell>

      <TableCell className="font-mono text-xs font-medium">
        {order.id}
      </TableCell>
      <TableCell className="font-medium">
        {formatDistanceToNow(order.created_at, {
          locale: ptBR,
          addSuffix: true,
        })}
      </TableCell>
      <TableCell>
        <OrderStatus status={order.status} />
      </TableCell>
      <TableCell className="font-medium">
        {(order.totalInCents / 100).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </TableCell>
    </TableRow>
  );
}

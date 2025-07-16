import { useGetTickets } from "../hooks/useGetTickets";
import { ReloadButton } from "./ReloadButton";
import { useDeleteTicket } from "../hooks/useDeleteTicket";
import { TicketEditModal } from "./TicketEditModal";
import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { STATE_LABELS, PRIORITY_LABELS } from "../const/ticket.translation";
import type { Ticket } from "../interfaces";
import { PRIORITY_CLASSES } from "../const/ticket.styles";

export const TicketTable = () => {
  const { getTickets } = useGetTickets();
  const { deleteMutation } = useDeleteTicket();
  const [editingTicket, setEditingTicket] = useState<Ticket | null>(null);

  if (getTickets.isLoading) return <p>Cargando tickets...</p>;
  if (getTickets.isError) return <p>Error cargando tickets</p>;

  return (
    <div className="p-4">
      <ReloadButton />

      <table className="w-full mt-4 border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2">Título</th>
            <th className="p-2">Estado</th>
            <th className="p-2">Prioridad</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {getTickets.data?.map((ticket) => (
            <tr key={ticket.id} className="border-t">
              <td className="p-2">{ticket.title}</td>
              <td className={`p-2 ${PRIORITY_CLASSES[ticket.priority] || ""}`}>
                {STATE_LABELS[ticket.state] || ticket.state}
              </td>
              <td className={`p-2 ${PRIORITY_CLASSES[ticket.priority] || ""}`}>
                {PRIORITY_LABELS[ticket.priority] || ticket.priority}
              </td>
              <td className="p-2 flex gap-2">
                <button
                  onClick={() => setEditingTicket(ticket)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Pencil size={18} />
                </button>
                <button
                  onClick={() => deleteMutation.mutate(ticket.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editingTicket && (
        <TicketEditModal
          ticket={editingTicket}
          isOpen={!!editingTicket}
          onClose={() => setEditingTicket(null)}
        />
      )}
    </div>
  );
};

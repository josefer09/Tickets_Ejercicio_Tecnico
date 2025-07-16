import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { useUpdateTicket } from "../hooks/useUpdateTicket";
import type { Ticket } from "../interfaces";
import { PRIORITY_LABELS, STATE_LABELS } from "../const/ticket.translation";

interface Props {
  ticket: Ticket;
  isOpen: boolean;
  onClose: () => void;
}

export const TicketEditModal: React.FC<Props> = ({
  ticket,
  isOpen,
  onClose,
}) => {
  const { updateMutation } = useUpdateTicket();

  const [title, setTitle] = useState(ticket.title);
  const [state, setState] = useState(ticket.state);
  const [priority, setPriority] = useState(ticket.priority);

  const handleUpdate = () => {
    updateMutation.mutate({ ...ticket, title, state, priority });
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white p-6 rounded text-black w-full max-w-md">
          <Dialog.Title className="text-xl font-bold mb-4">
            Editar Ticket
          </Dialog.Title>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-2 mb-2"
            placeholder="Título"
          />

          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="w-full border p-2 mb-2"
          >
            <option value="">Selecciona un estado</option>
            {Object.entries(STATE_LABELS).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full border p-2 mb-2"
          >
            <option value="">Selecciona una prioridad</option>
            {Object.entries(PRIORITY_LABELS).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
          <div className="flex justify-end gap-2">
            <button onClick={onClose} className="px-4 py-2 bg-gray-400 rounded">
              Cancelar
            </button>
            <button
              onClick={handleUpdate}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Guardar cambios
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

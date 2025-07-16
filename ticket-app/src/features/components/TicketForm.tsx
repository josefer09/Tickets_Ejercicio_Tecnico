import React, { useState } from "react";
import { useCreateTicket } from "../hooks/useCreateTicket";
import { toast } from "react-toastify";
import { PRIORITY_LABELS, STATE_LABELS } from "../const/ticket.translation";

export const TicketForm: React.FC = () => {
  const { createMutation } = useCreateTicket();

  const [title, setTitle] = useState("");
  const [state, setState] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !state || !priority) {
      return toast.warning("Todos los campos son obligatorios", {
        toastId: "form-ticket",
      });
    }

    createMutation.mutate({ title, state, priority });

    setTitle("");
    setState("");
    setPriority("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex flex-col gap-2 max-w-md">
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-2 border border-gray-600 rounded"
      />

      <select
        value={state}
        onChange={(e) => setState(e.target.value)}
        className="p-2 border border-gray-600 rounded"
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
        className="p-2 border border-gray-600 rounded"
      >
        <option value="">Selecciona una prioridad</option>
        {Object.entries(PRIORITY_LABELS).map(([key, label]) => (
          <option key={key} value={key}>
            {label}
          </option>
        ))}
      </select>

      <button
        type="submit"
        disabled={createMutation.isPending}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
      >
        {createMutation.isPending ? "Creando..." : "Crear Ticket"}
      </button>
    </form>
  );
};

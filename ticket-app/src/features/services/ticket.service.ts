import { api } from "../../libs/axios.adapter";
import type { Ticket } from "../interfaces";

export const fetchTickets = async (): Promise<Ticket[]> => {
  try {
    const { data } = await api.get("/ticket");
    return data.data;
  } catch (error) {
    console.error("Error fetching tickets", error);
    throw error;
  }
};

export const createTicket = async (
  ticket: Partial<Ticket>
): Promise<Ticket> => {
  try {
    const { data } = await api.post("/ticket", ticket);
    return data.data;
  } catch (error) {
    console.error("Error creating ticket", error);
    throw error;
  }
};

export const refetchTickets = async () => {
  try {
    const { data } = await api.post("/ticket/seed");
    return data.data;
  } catch (error) {
    console.error("Error refetching tickets", error);
    throw error;
  }
};

export const deleteTicket = async (id: string): Promise<{ id: string }> => {
  try {
    const { data } = await api.delete(`/ticket/${id}`);
    return data.data;
  } catch (error) {
    console.error("Error deleting ticket", error);
    throw error;
  }
};

export const updateTicket = async (ticket: Ticket): Promise<Ticket> => {
  try {
    const { id, ...bodyUpdate } = ticket;
    const { data } = await api.patch(`/ticket/${id}`, bodyUpdate);
    return data.data;
  } catch (error) {
    console.error("Error updating ticket", error);
    throw error;
  }
};

import { useQuery } from '@tanstack/react-query'
import { fetchTickets } from '../services/ticket.service';

export const useGetTickets = () => {

  const getTickets = useQuery({
    queryKey: ['tickets'],
    queryFn: fetchTickets
  });


  return { getTickets }
}

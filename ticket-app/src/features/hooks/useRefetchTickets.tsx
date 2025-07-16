// hooks/useRefetchTickets.ts
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { refetchTickets } from '../services/ticket.service'
import { toast } from 'react-toastify'

export const useRefetchTickets = () => {
  const queryClient = useQueryClient()

  const refetchMutation = useMutation({
    mutationFn: refetchTickets,
    onSuccess: () => {
      toast.success('Tickets regenerados')
      queryClient.invalidateQueries({ queryKey: ['tickets'] })
    },
    onError: () => {
      toast.error('Error al regenerar los tickets')
    },
  })

  return { refetchMutation }
}

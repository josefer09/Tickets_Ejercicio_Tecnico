import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createTicket } from '../services/ticket.service'
import { toast } from 'react-toastify'

export const useCreateTicket = () => {
  const queryClient = useQueryClient()

  const createMutation = useMutation({
    mutationKey: ['new-ticket'],
    mutationFn: createTicket,
    onSuccess: () => {
      toast.success('Ticket creado exitosamente')
      queryClient.invalidateQueries({ queryKey: ['tickets'] })
    },
    onError: () => {
      toast.error('Error al crear ticket')
    },
  })

  return { createMutation }
}

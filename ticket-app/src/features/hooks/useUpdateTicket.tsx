import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateTicket } from '../services/ticket.service'
import { toast } from 'react-toastify'

export const useUpdateTicket = () => {
  const queryClient = useQueryClient()

  const updateMutation = useMutation({
    mutationFn: updateTicket,
    onSuccess: () => {
      toast.success('Ticket actualizado')
      queryClient.invalidateQueries({ queryKey: ['tickets'] })
    },
    onError: () => {
      toast.error('Error al actualizar ticket')
    },
  })

  return { updateMutation }
}

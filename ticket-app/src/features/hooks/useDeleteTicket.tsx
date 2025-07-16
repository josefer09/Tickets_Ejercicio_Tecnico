import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteTicket } from '../services/ticket.service'
import { toast } from 'react-toastify'

export const useDeleteTicket = () => {
  const queryClient = useQueryClient()

  const deleteMutation = useMutation({
    mutationFn: deleteTicket,
    onSuccess: () => {
      toast.success('Ticket eliminado')
      queryClient.invalidateQueries({ queryKey: ['tickets'] })
    },
    onError: () => {
      toast.error('Error al eliminar ticket')
    },
  })

  return { deleteMutation }
}

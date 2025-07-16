import { useRefetchTickets } from '../hooks/useRefetchTickets'

export const ReloadButton = () => {
  const { refetchMutation } = useRefetchTickets()

  return (
    <button
      onClick={() => refetchMutation.mutate()}
      disabled={refetchMutation.isPending}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
    >
      {refetchMutation.isPending ? 'Cargando...' : 'Recargar datos'}
    </button>
  )
}

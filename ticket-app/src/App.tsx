import { TicketForm } from './features/components/TicketForm'
import { TicketTable } from './features/components/TicketTable'
import reactLogo from './assets/reactjs-icon.svg'
import nestLogo from './assets/nestjs-icon.svg'

function App() {
  return (
    <div className="container mx-auto p-4 text-white bg-gray-900 min-h-screen">
      
      <div className="flex flex-col items-center mb-6">
        <div className="flex items-center gap-4">
          <img src={reactLogo} alt="React Logo" className="w-12 h-12 animate-spin-slow" />
          <h1 className="text-4xl font-bold">Gestor de Tickets</h1>
          <img src={nestLogo} alt="NestJS Logo" className="w-12 h-12" />
        </div>
        <p className="text-gray-400 mt-2">React + NestJS Fullstack App</p>
          <h2 className='text-gray-400 mt-2'>Fernando Hernandez</h2>
      </div>

      <div className="flex justify-center mb-6">
        <TicketForm />
      </div>

      <TicketTable />
    </div>
  )
}

export default App

import { ProductTable } from "./components/product-table"

function App() {
  
  return (
    <main className="min-h-screen bg-gray-100">
      <h1 className='text-3xl text-center'>Vite + React</h1>
      <div className="py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <ProductTable />
      </div>
    </main>
  )
}

export default App

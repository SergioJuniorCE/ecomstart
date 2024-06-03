import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { api } from './lib/api'

function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const res = await api.products.$get()
      const data = await res.json()
      return data;
    }
    setIsLoading(true)
    fetchData().then((data) => {
      setProducts(data)
    }).catch((err) => {
      console.log(err)
    }).finally(() => {
      setIsLoading(false)
    })

  }, [])

  return (
    <main className="min-h-screen bg-gray-100">
      <h1 className='text-3xl text-center'>Vite + React</h1>
      <div className='flex flex-wrap justify-center'>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
      {isLoading && <p>Loading...</p>}
      {!isLoading && products.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

    </main>
  )
}

export default App

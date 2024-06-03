import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState<{id: number, name: string, price: number}[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.error(err)
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

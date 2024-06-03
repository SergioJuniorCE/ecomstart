import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { api } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'

async function getProducts() {
  const res = await api.products.$get()
  if (!res.ok) {
    throw new Error('Failed to fetch products')
  }
  const data = await res.json()
  return data
}


export const ProductTable = () => {
  const { isPending, data, error, isFetching } = useQuery({
    queryKey: ['get-products'],
    queryFn: getProducts,
  })

  if (isPending || isFetching) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  if (!data) return <p>No data</p>

  return (
    <Table>
      <TableCaption>All current products.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead className="text-right">Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium">{product.id}</TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell className="text-right">{product.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
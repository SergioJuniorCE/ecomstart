import { createFileRoute } from '@tanstack/react-router'

async function fetchProductsByCategory(category: string) {
  return fetch(`https://fakestoreapi.com/products?category=${category}`).then((res) => res.json())
}

export const Route = createFileRoute('/products/$category/')({
  loader: ({ params }) => fetchProductsByCategory(params.category),
  component: ProductCategories
})

function ProductCategories() {
  const { category } = Route.useParams()
  return (
    <div>
      {category}
    </div>
  )
}
import AsideComponent from '@/components/common/aside'
import ProductDetail from '@/components/products/product-detail'
import products from '@/data/products.json'
import { notFound } from 'next/navigation'

type ProductsPageProps = {
  params: {
    id: string
  }
}

export default function ProductsPage({ params }: ProductsPageProps) {
  const product = products.find(p => p.id === params.id)

  if (!product) return notFound()

  return (
    <div className="grid lg:grid-cols-5 gap-4 w-full">
      <div className="lg:col-span-4">
        <ProductDetail product={product} />
      </div>

      <AsideComponent />
    </div>
  )
}

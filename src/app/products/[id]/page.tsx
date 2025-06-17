import AsideComponent from '@/components/common/aside'
import ProductDetail from '@/components/products/product-detail'
import products from '@/data/products.json'
import { Product } from '@/types/product'
import { notFound } from 'next/navigation'

type ProductsPageProps = {
  params: Promise<{
    id: string
  }>
}

async function getProductById(id: string) {
  return products.find((p: Product) => p.id === id) ?? null
}

export default async function ProductsPage(props: ProductsPageProps) {
  const params = await props.params;
  const product = await getProductById(params.id)

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

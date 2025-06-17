import AsideComponent from '@/components/common/aside'
import ProductDetail from '@/components/products/product-detail'
import products from '@/data/products.json'
import { Product } from '@/types/product'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProductById((await params).id)

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'This product does not exist.'
    }
  }

  return {
    title: `nitec. | ${product.name}`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image]
    }
  }
}

async function getProductById(id: string): Promise<Product | null> {
  return products.find((p: Product) => p.id === id) ?? null
}

export default async function ProductsPage({ params }: Props) {
  const product = await getProductById((await params).id)

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

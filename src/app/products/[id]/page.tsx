import AsideComponent from '@/components/common/aside'
import ProductDetail from '@/components/products/product-detail'
import products from '@/data/products.json'
import { Product } from '@/types/product'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProductById(params.id)

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
      images: [product.image] // URL da imagem
    }
  }
}

type ProductsPageProps = {
  params: Promise<{
    id: string
  }>
}

async function getProductById(id: string) {
  return products.find((p: Product) => p.id === id) ?? null
}

export default async function ProductsPage(props: ProductsPageProps) {
  const params = await props.params
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

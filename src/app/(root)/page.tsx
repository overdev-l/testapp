import CardProductParent from "@/components/CardProductParent"
import Product from "@/components/Product"
export default function Home() {
  return (
    <div className="w-full h-full">
      <CardProductParent>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </CardProductParent>
      <CardProductParent>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </CardProductParent>
      <CardProductParent>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </CardProductParent>
    </div>
  )
}

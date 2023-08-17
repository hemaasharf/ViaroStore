import { useEffect, useState, useCallback } from 'react'
import { ProductCard } from '../../../components/'
import { getFeaturedProducts } from '../../../services/'
import { useSession } from '../../../context/sessionContext'
export const FeatureProducts = () => {
  const [proudcts, setProducts] = useState([])
  const { fetchingError } = useSession()
  const fetchProducts = useCallback(async () => {
    try {
      const response = await getFeaturedProducts()
      setProducts(response.data)
    }
    catch (error) {
      fetchingError("Error Fetching Featured_Products From The Server")
    }
  }, [fetchingError])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  return (

    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured eBooks</h1>
      <div className="flex flex-wrap justify-center lg:flex-row">
        {proudcts.map((item) => {
          return <ProductCard key={item.id} item={item} />
        })}
      </div>
    </section>
  )
}

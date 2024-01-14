import CardLoading from '@/components/CardLoading'
import ProductCard from '@/components/ProductInfoCard'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function page() {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4  g-2 g-lg-3">
      <div className='col '>
        <div className="rounded shadow-sm  mb-5 bg-body-tertiary">
          <CardLoading />
        </div>
      </div>
      <div className='col '>
        <div className="rounded shadow-sm  mb-5 bg-body-tertiary">
          <ProductCard />
        </div>
      </div>
      <div className='col '>
        <div className="rounded shadow-sm  mb-5 bg-body-tertiary">
          <ProductCard />
        </div>
      </div>
      <div className='col'>
        <div className="rounded shadow-sm  mb-5 bg-body-tertiary">
          <ProductCard />
        </div>
      </div>
    </div>
  )
}

export default page
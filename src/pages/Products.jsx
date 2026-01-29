import ProductRow from '../components/ProductRow'

const Product = () => {
  return (
    <div className='product-page flex justify-center w-full pt-10'>

      <div className="product-table w-11/12 bg-white rounded-xl pb-10">
        <div className="top flex justify-between items-center py-5 px-15">
          <p className='text-xl font-medium'>All Products</p>
          <button className='bg-green-500 py-2 px-5 rounded-lg cursor-pointer hover:bg-green-600'>Add Product</button>
        </div>

        <div className="sub-top flex px-15 border-b">
          <div className="product-name text-lg font-medium text-[#757575] p-5 pl-0 w-full">
            Product Name
          </div>
          <div className="price text-lg font-medium text-[#757575] p-5 pl-0 w-full">
            Price
          </div>
          <div className="stock text-lg font-medium text-[#757575] p-5 pl-0 w-full">
            Stock
          </div>
          <div className="actions text-lg font-medium text-[#757575] p-5 pl-0 w-full">
            Actions
          </div>
        </div>

        <div className="products-container px-15 overflow-y-scroll max-h-[60vh]">
        </div>

      </div>

    </div>
  )
}

export default Product
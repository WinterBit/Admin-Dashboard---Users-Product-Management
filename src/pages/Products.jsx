import { useEffect, useState } from 'react'
import ProductRow from '../components/ProductRow'

const Product = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("products")) || []
    setProducts(data)
  }, [])

  function editProduct(id, newValues) {
    setProducts((prev) => {
      const updated = prev.map((item) => item.id === id ? { ...item, name:newValues.ProductName, price:Number(newValues.price), stock:Number(newValues.stock) } : item)
      localStorage.setItem("products",JSON.stringify(updated));
      return updated
    })
  }

  function deleteProduct(id) {
    setProducts((prev) => {
      const updated = prev.filter(item => item.id !== id);
      localStorage.setItem("products", JSON.stringify(updated));
      return updated
    })
  }

  return (
    <div className='product-page flex justify-center w-full pt-10'>

      <div className="product-table w-11/12 bg-white rounded-xl pb-10">
        <div className="top flex justify-between items-center py-5 px-15">
          <p className='text-xl font-medium'>All Products</p>
          <button className='bg-green-500 py-2 px-5 rounded-lg cursor-pointer text-lg text-white font-medium hover:bg-green-600'>Add Product</button>
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
          {
            products.length === 0 ?
              (<div className="user-row flex border-b p-5">
                <p className='text-red-500'>No Products are Avaliable</p>
              </div>) :
              (products.map((product) => (
                <ProductRow key={product.id} product={product} deleteProduct={deleteProduct} editProduct={editProduct} />
              )))
          }
        </div>

      </div>

    </div>
  )
}

export default Product
import { useEffect, useState } from 'react'
import ProductRow from '../components/ProductRow'
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

const Product = () => {
  const [products, setProducts] = useState([])
  const [newProduct, setNewProduct] = useState({ "productName": "", "price": 1, "stock": 0 })
  const [errors, setErrors] = useState({})
  const [add, setAdd] = useState(false)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("products")) || []
    setProducts(data)
  }, [])

  function handleChange(e) {
    const { name, value } = e.target;

    setNewProduct((prev) => (
      {
        ...prev,
        [name]: value
      }
    ))
  }

  function toggleAdd() {
    setAdd(!add)
  }

  function handleCancel() {
    setNewProduct({ "productName": "", "price": 1, "stock": 0 })
    setAdd(!add)
    setErrors({})
  }

  function validate(newProduct) {
    const errors = {}

    if (newProduct.productName === "") {
      errors.productName = "Product name is required"
    }

    if (newProduct.price < 1) {
      errors.price = "Mininum price is ₹ 1"
    }

    if (newProduct.stock < 0 || newProduct.stock === "") {
      errors.stock = "Mininum stock value is 0"
    }

    return errors
  }

  function handleAddProduct(e) {
    e.preventDefault();

    const isValid = Object.keys(validate(newProduct)).length === 0;

    if (!isValid) {
      setErrors(validate(newProduct))
      return
    }

    else {
      setProducts((prev) => {
        const product = [
          ...prev,
          { id: crypto.randomUUID(), name: newProduct.productName, price: Number(newProduct.price), stock: Number(newProduct.stock) }
        ]
        localStorage.setItem("products", JSON.stringify(product))
        return product
      })
      setNewProduct({ "productName": "", "price": 1, "stock": 0 })
      setErrors({})
      setAdd(!add)
    }
  }


  function editProduct(id, newValues) {
    setProducts((prev) => {
      const updated = prev.map((item) => item.id === id ? { ...item, name: newValues.ProductName, price: Number(newValues.price), stock: Number(newValues.stock) } : item)
      localStorage.setItem("products", JSON.stringify(updated));
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
          {
            add ?
              <form className='flex space-x-3' onSubmit={handleAddProduct}>
                <div className="addProductName w-full flex flex-col justify-center text-lg font-medium">
                  <p className='text-[#757575] pl-1'>Product Name</p>
                  <input type="text" name="productName" value={newProduct.productName} placeholder='enter product name' className='product-name-input bg-[#DEE4E7] px-4 py-2 rounded-lg' onChange={handleChange} />
                  {errors.productName && <p className="text-red-500 text-center">{errors.productName}</p>}
                </div>

                <div className="addProductPrice w-full flex flex-col justify-center text-lg font-medium">
                  <p className='text-[#757575] pl-1'>Price</p>
                  <input type="number" min={1} name="price" value={newProduct.price} placeholder='enter product price' className='price-input bg-[#DEE4E7] px-4 py-2 rounded-lg' onChange={handleChange} />
                  {errors.price && <p className="text-red-500 text-center">{errors.price}</p>}
                </div>

                <div className="addProductStock w-full flex flex-col justify-center text-lg font-medium">
                  <p className='text-[#757575] pl-1'>Stock</p>
                  <input type="number" min={0} name="stock" value={newProduct.stock} placeholder='enter product stock' className='stock-input bg-[#DEE4E7] px-4 py-2 rounded-lg' onChange={handleChange} />
                  {errors.stock && <p className="text-red-500 text-center">{errors.stock}</p>}
                </div>

                <div className="actions w-full h-full text-lg font-medium flex justify-center flex-col">
                  <p className='text-[#757575] pl-1'>Actions</p>

                  <div className="btns flex items-center space-x-3 py-2">
                    <FaCheckCircle className="fill-green-500 size-7 cursor-pointer hover:fill-green-600" onClick={handleAddProduct} />
                    <FaCircleXmark className="fill-red-500 size-7 cursor-pointer hover:fill-red-600" onClick={handleCancel} />
                  </div>
                </div>

              </form> :
              <button className='bg-green-500 py-2 px-5 rounded-lg cursor-pointer text-lg text-white font-medium hover:bg-green-600' onClick={toggleAdd}>Add Product</button>
          }
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
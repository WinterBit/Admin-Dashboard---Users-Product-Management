import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

const ProductRow = ({ product, deleteProduct }) => {
  const [values, setValues] = useState({ "ProductName": product.name, "price": product.price, "stock": product.stock })

  const [edit, setEdit] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target;

    setValues((prev) => (
      {
        ...prev,
        [name]: value,
      }
    ))
  }

  function handleEdit() {
    setEdit(!edit)
  }

  function handleDelete() {
    deleteProduct(product.id)
  }

  return (
    <form className="product-row flex border-b">
      <div className="product-name w-full p-5 pl-0 flex items-center text-lg font-medium">
        {
          !edit ? (product.name) :
            (
              <input type="text" name="ProductName" value={values.ProductName} onChange={handleChange} className='product-name-input bg-[#DEE4E7] px-4 py-2 rounded-lg' />
            )
        }
      </div>
      <div className="pirce w-full p-5 pl-0 flex items-center text-lg font-medium">
        ₹ {
          !edit ? (product.price) :
            (
              <input type="number" min={1} name="price" value={values.price} onChange={handleChange} className='price-input bg-[#DEE4E7] px-4 py-2 rounded-lg' />
            )
        }
      </div>
      <div className="stock w-full p-5 pl-0 flex items-center text-lg font-medium">
        {
          !edit ? (product.stock) :
            (
              <input type="number" min={0} name="stock" value={values.stock} onChange={handleChange} className='stock-input bg-[#DEE4E7] px-4 py-2 rounded-lg select-none' />
            )
        }
      </div>
      {!edit ?
        (<div className="actions w-full p-5 pl-0 flex items-center space-x-3">
          <FaRegEdit className="fill-yellow-500 size-7 cursor-pointer hover:fill-yellow-600" onClick={handleEdit} />
          <RiDeleteBin6Line className="fill-red-500 size-7 cursor-pointer hover:fill-red-600" onClick={handleDelete} />
        </div>) :

        (<div className="actions w-full p-5 pl-0 flex items-center space-x-3">
          <FaCheckCircle className="fill-green-500 size-7 cursor-pointer hover:fill-green-600" onClick={handleEdit} />
          <FaCircleXmark className="fill-red-500 size-7 cursor-pointer hover:fill-red-600" onClick={handleEdit} />
        </div>)
      }
    </form>
  )
}

export default ProductRow
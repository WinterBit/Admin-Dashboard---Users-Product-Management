import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

const ProductRow = ({ product, deleteProduct, editProduct }) => {
  const [values, setValues] = useState({ "ProductName": product.name, "price": product.price, "stock": product.stock });
  const [errors, setErrors] = useState({});
  const [edit, setEdit] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setValues((prev) => (
      {
        ...prev,
        [name]: value,
      }
    ))
  }

  function toggleEdit() {
    setEdit(!edit)
  }

  function validate(values) {
    const errors = {};

    if (values.ProductName.length === 0) {
      errors.ProductName = "Name is Required"
    }

    if (values.price < 1) {
      errors.price = "Mininum price is ₹ 1"
    }

    if (values.stock < 0) {
      errors.stock = "Mininum stock value is 0"

    }

    return errors
  }


  function submitEdit(e) {
    e.preventDefault()
    const isValid = Object.keys(validate(values)).length === 0;

    if (isValid) {
      editProduct(product.id, values)
      setEdit(!edit)
      setErrors({})
    }

    else {
      setErrors(validate(values))
      return;
    }
  }

  function handleCancel() {
    setErrors({})
    setValues({ "ProductName": product.name, "price": product.price, "stock": product.stock })
    setEdit(!edit)
  }

  function handleDelete() {
    deleteProduct(product.id)
  }

  return (
    <form className="product-row flex border-b" >
      <div className="product-name w-full p-5 pl-0 flex flex-col justify-center text-lg font-medium">
        {
          !edit ? (product.name) :
            (
              <input type="text" name="ProductName" value={values.ProductName} onChange={handleChange} className='product-name-input bg-[#DEE4E7] px-4 py-2 rounded-lg' />
            )
        }
        {errors.ProductName && <p className="text-red-500 text-center pt-2">{errors.ProductName}</p>}
      </div>
      <div className="pirce w-full p-5 pl-0 flex flex-col justify-center text-lg font-medium">
        {
          !edit ? (product.price) :
            (
              <input type="number" min={1} name="price" value={values.price} onChange={handleChange} className='price-input bg-[#DEE4E7] px-4 py-2 rounded-lg' />
            )
        }

        {errors.price && <p className="text-red-500 text-center pt-2">{errors.price}</p>}

      </div>
      <div className="stock w-full p-5 pl-0 flex flex-col justify-center text-lg font-medium">
        {
          !edit ? (product.stock) :
            (
              <input type="number" min={0} name="stock" value={values.stock} onChange={handleChange} className='stock-input bg-[#DEE4E7] px-4 py-2 rounded-lg select-none' />
            )
        }
        {errors.stock && <p className="text-red-500 text-center pt-2">{errors.stock}</p>}

      </div>
      {!edit ?
        (<div className="actions w-full p-5 pl-0 flex items-center space-x-3">
          <FaRegEdit className="fill-yellow-500 size-7 cursor-pointer hover:fill-yellow-600" onClick={toggleEdit} />
          <RiDeleteBin6Line className="fill-red-500 size-7 cursor-pointer hover:fill-red-600" onClick={handleDelete} />
        </div>) :

        (<div className="actions w-full p-5 pl-0 flex items-center space-x-3">
          <FaCheckCircle className="fill-green-500 size-7 cursor-pointer hover:fill-green-600" onClick={submitEdit} />
          <FaCircleXmark className="fill-red-500 size-7 cursor-pointer hover:fill-red-600" onClick={handleCancel} />
        </div>)
      }
    </form>
  )
}

export default ProductRow
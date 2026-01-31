import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const ProductRow = ({product,deleteProduct}) => {

  function handleDelete(){
    deleteProduct(product.id)
  }

  return (
    <div className="product-row flex border-b">
      <div className="product-name w-full p-5 pl-0 flex items-center text-lg font-medium">
        {product.name}
      </div>
      <div className="pirce w-full p-5 pl-0 flex items-center text-lg font-medium">
        {product.price}
      </div>
      <div className="stock w-full p-5 pl-0 flex items-center text-lg font-medium">
        {product.stock}
      </div>
      <div className="actions w-full p-5 pl-0 flex items-center space-x-3">
        <FaRegEdit className="fill-yellow-500 size-7 cursor-pointer hover:fill-yellow-600"/>
        <RiDeleteBin6Line className="fill-red-500 size-7 cursor-pointer hover:fill-red-600" onClick={handleDelete}/>
      </div>
    </div>
  )
}

export default ProductRow
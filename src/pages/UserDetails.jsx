import { useParams } from "react-router-dom"
import { fetchUsersByID } from "../api/User"
import { useEffect, useState } from "react"

const UserDetails = () => {
  const { id } = useParams()
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    const controller = new AbortController()

    async function loadUserbyId() {
      setLoading(true)
      try {
        const data = await fetchUsersByID(id, controller.signal);
        setUser(data);
      } catch (err) {
        if (err.name !== "AbortError") setErrors(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadUserbyId()

    return () => {
      controller.abort()
    }
  }, [id])

  if(errors) return(
    <div className="error-page justify-center items-center w-full h-full flex p-10">
      <div className="error card bg-white w-11/12 rounded-xl p-15 text-red-500">
        {errors}
      </div>
    </div>
  )

   else return (

    <div className="user-details-page justify-center items-center w-full h-full flex p-10">

      <div className="user-details-card bg-white w-11/12 rounded-xl py-5">

        <div className="user-top px-10">
          <p className="name-top text-2xl font-semibold">{loading ? 'Loading...' : user.name}</p>
          <p className="user-name-top text-sm font-semibold text-[#757575]">{loading ? 'Loading...' : user.username}</p>
        </div>

        <div className="user-details py-10">
          <p className="subtop text-lg font-medium px-10 py-2 border-b">Personal details</p>

          <div className="full-name border-b border-dotted flex">
            <p className="left w-1/4 text-lg font-medium text-[#757575] px-10 py-2 border-r border-dotted border-black">Full Name: </p>
            <p className="right w-full text-lg font-medium text-[#757575] px-10 py-2">{loading ? 'Loading...' : user.name}</p>
          </div>

          <div className="user-name border-b border-dotted flex">
            <p className="left w-1/4 text-lg font-medium text-[#757575] px-10 py-2 border-r border-dotted border-black">User Name: </p>
            <p className="right w-full text-lg font-medium text-[#757575] px-10 py-2">{loading ? 'Loading...' : user.username}</p>
          </div>

          <div className="email border-b border-dotted flex">
            <p className="left w-1/4 text-lg font-medium text-[#757575] px-10 py-2 border-r border-dotted border-black">Email: </p>
            <p className="right w-full text-lg font-medium text-[#757575] px-10 py-2">{loading ? 'Loading...' : user.email}</p>
          </div>

          <div className="address border-b border-dotted flex">
            <p className="left w-1/4 text-lg font-medium text-[#757575] px-10 py-2 border-r border-dotted border-black">Address: </p>
            {loading ? <p className="right w-full text-lg font-medium text-[#757575] px-10 py-2 flex space-x-1">Loading...</p> :
              <div className="right w-full text-lg font-medium text-[#757575] px-10 py-2 flex space-x-1">
                <p>{user.address.street},</p>
                <p>{user.address.suite},</p>
                <p>{user.address.city},</p>
                <p>{user.address.zipcode}</p>
              </div>
            }
          </div>

          <div className="phone-number border-b border-dotted flex">
            <p className="left w-1/4 text-lg font-medium text-[#757575] px-10 py-2 border-r border-dotted border-black">Phone Number: </p>
            <p className="right w-full text-lg font-medium text-[#757575] px-10 py-2">{loading ? 'Loading...' : user.phone}</p>
          </div>


          <div className="website border-b border-dotted flex">
            <p className="left w-1/4 text-lg font-medium text-[#757575] px-10 py-2 border-r border-dotted border-black">Website: </p>
            <p className="right w-full text-lg font-medium text-[#757575] px-10 py-2">{loading ? 'Loading...' : user.website}</p>
          </div>

          <div className="company border-b border-dotted flex">
            <p className="left w-1/4 text-lg font-medium text-[#757575] px-10 py-2 border-r border-dotted border-black">Company: </p>
            {loading ? <p className="right w-full text-lg font-medium text-[#757575] px-10 py-2 flex space-x-1">Loading...</p> :
              <div className="right w-full text-lg font-medium text-[#757575] px-10 py-2 flex space-x-1">
                <p>{user.company.name},</p>
                <p>{user.company.catchPhrase},</p>
                <p>{user.company.bs}</p>
              </div>
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default UserDetails
import { useEffect, useState } from 'react';
import UserRow from '../components/UserRow'
import { CiSearch } from "react-icons/ci";
import { fetchUsers } from '../api/User';

const Users = () => {

  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController();

    async function loadUsers() {
      try {
        const response = await fetchUsers({ signal: controller.signal });
        setUsers(response);
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadUsers()

    return () => {
      controller.abort();
    }
  }, [])

  return (
    <div className='user-page flex justify-center w-full pt-10'>

      <div className="user-table w-11/12 bg-white rounded-xl pb-10">

        <div className="top flex justify-between items-center py-5 px-15">

          <p className='text-xl font-medium'>All Users</p>
          <form className='search flex justify-center items-center space-x-1.5 bg-[#DEE4E7] px-4 py-2 rounded-lg'>
            <CiSearch size={"1.5rem"} color='#757575' />
            <input className='border-none outline-none' type="text" placeholder='search for users' />
          </form>

        </div>

        <div className="sub-top flex px-15 border-b">

          <div className="user-name text-lg font-medium text-[#757575] p-5 pl-0 w-full">
            User Name
          </div>
          <div className="email text-lg font-medium text-[#757575] p-5 pl-0 w-full">
            Email
          </div>
          <div className="city text-lg font-medium text-[#757575] p-5 pl-0 w-full">
            City
          </div>
          <div className="actions text-lg font-medium text-[#757575] p-5 pl-0 w-full">
            Actions
          </div>

        </div>

        <div className="users-container px-15 overflow-y-scroll max-h-[60vh]">
          {error &&
            <div className="user-row flex border-b p-5 text-red-500">
              {error}
            </div>
          }

          {loading &&
            <div className="user-row flex border-b p-5">
              Loading...
            </div>
          }

          {!loading && !error &&
            users.map((user) => (
              <UserRow user={user} key={user.id} />
            ))
          }
        </div>

      </div>

    </div>
  )
}

export default Users
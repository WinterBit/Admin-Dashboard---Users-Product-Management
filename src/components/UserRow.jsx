
const UserTable = ({user}) => {
  return (
    <div className="user-row flex border-b">
      <div className="user-name w-full p-5 pl-0 flex items-center text-lg font-medium">
        {user.name}
      </div>
      <div className="email w-full p-5 pl-0 flex items-center text-lg font-medium">
        {user.email}
      </div>
      <div className="city w-full p-5 pl-0 flex items-center text-lg font-medium">
        {user.address.city}
      </div>
      <div className="actions w-full p-5 pl-0 flex items-center">
        <button className="bg-green-500 text-white px-3 py-1 rounded-lg text-lg font-medium cursor-pointer hover:bg-green-600">view</button>
      </div>
    </div>
  )
}

export default UserTable
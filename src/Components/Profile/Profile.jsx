import React from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("isRegistered");
    localStorage.removeItem("user");
    alert("Logout Successful");
    navigate("/login");
  };
  return (
    <div className="min-h-screen flex justify-center items-center p-5">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <img src={user?.photoURL || 
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}
              alt="Profile" 
              className="w-24 h-24 rounded-full mb-4" />
          <h2 className="text-3xl font-bold mt-4">
            {user?.displayName || "User Name"}
          </h2>
          <p className="text-gray-500">
            {user?.email || "user@example.com"}
          </p>
          <div className="divider"></div>
          <button 
            onClick={handleLogout}
            className="btn btn-error w-full mt-4">
              Logout
            </button>
        </div>
      </div>
    </div>
  )
}

export default Profile
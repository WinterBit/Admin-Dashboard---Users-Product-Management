import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MainLogo from '../assets/MainLogo.svg'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

import { AuthContext } from '../context/AuthContext';
import { Authenticate } from '../server/Server';

const Login = () => {

    const auth = useContext(AuthContext);
    const [visible, setVisible] = useState(false);
    const [form, setForm] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({})

    const isValid = Object.keys(validate(form)).length === 0;
    const navigate = useNavigate()

    function handleChange(e) {
        const { name, value } = e.target;

        setForm((prev) => (
            {
                ...prev,
                [name]: value,
            }
        ))
    }

    function validate(form) {
        const errors = {};

        if (form.email.length === 0) {
            errors.email = "Email is required";
        }

        else if (!form.email.endsWith(".com")) {
            errors.email = "Invalid email"
        }

        if (form.password.length === 0) {
            errors.password = "password is required"
        }

        else if (form.password.length < 6) {
            errors.password = "password is too short"
        }
        return errors
    }

    function handleSubmit(e) {
        e.preventDefault()

        if (!isValid) {
            setErrors(validate(form))
            return;
        }

        else {
            const admin = Authenticate(form)

            if (Object.keys(admin).length === 0) {
                alert("Incorrect Email or Password")
                setErrors({})
                return;
            }

            setErrors({})
            setForm({ email: "", password: "" })
            auth.setLoggedIn(true)
            navigate('/dashboard/users/')
        }
    }

    return (
        <div className="bg-[#DEE4E7] Login-Page min-h-screen min-w-screen flex justify-center items-center">

            <form className="Login-Card bg-white w-105 p-5 flex flex-col justify-centr items-center rounded-xl" onSubmit={handleSubmit}>
                <div className="logo p-2">
                    <img src={MainLogo} alt="Dashboard Logo" />
                </div>
                <p className="greet text-center p-2">
                    Welcom back, Admin
                    <br />
                    Sign in to your dashboard
                </p>

                <div className="email p-2 w-full">
                    <p className='p-2 font-semibold'>Your email</p>
                    <div className="email-input h-11 border border-gray-500 rounded-xl">
                        <input
                            type="email"
                            name='email'
                            placeholder='Enter your email'
                            className='h-full w-full px-5 border-none outline-none rounded-xl'
                            value={form.email}
                            onChange={handleChange}
                        />
                    </div>
                    <p className='text-red-500 p-1 text-center'>{errors.email}</p>
                </div>

                <div className="password p-2 w-full">
                    <p className='p-2 font-semibold'>Password</p>
                    <div className="password-input h-11 border border-gray-500 rounded-xl flex flex-row justify-center items-center">
                        <input
                            type={!visible ? "password" : "text"}
                            name='password'
                            placeholder='Enter your password'
                            className='h-full w-full px-5  outline-none border-none rounded-xl'
                            value={form.password}
                            onChange={handleChange}
                        />
                        <div className='Eye w-1/6 flex justify-center items-center cursor-pointer'
                            onClick={() => { setVisible((prev) => !prev) }}
                        >
                            {!visible ? <FaEye size={"1.5rem"} /> : <FaEyeSlash size={"1.5rem"} />}
                        </div>
                    </div>
                    <p className='text-red-500 p-1 text-center'>{errors.password}</p>
                </div>

                <div className="submit-btn w-full p-2 mt-10">
                    <button className='bg-[#5A32E9] text-white h-11 w-full rounded-md cursor-pointer hover:bg-[#5a32e9e1] font-semibold'>Login</button>
                </div>
            </form>

        </div>
    )
}

export default Login
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TfiLinkedin } from "react-icons/tfi";
import registerImg from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
const Login = () => {

const {signIn} = useContext(AuthContext)

const toastify = () => toast.success("Successfully Login")

  const handleInLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);

    signIn(email, password)
    .then(result => {
      const user = result.user;
      form.reset()
      toastify()
      console.log(user);

    })
    .catch(error => console.error(error))

  }


    return (
        <div className="my-24">
      <div className="card lg:card-side bg-base-100">
        <figure className="w-1/2 mx-auto">
          <img src={registerImg} alt="Album" className="w-96" />
        </figure>
        <div className="card-body w-1/2 mx-auto">
          <h2 className="text-3xl font-bold ml-9 lg:ml-16 mb-7">Login</h2>
          <form onSubmit={handleInLogin}>
            <div>
              <div className="">
                <label className="font-semibold ml-3">Email</label> <br />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="input input-bordered input-md w-full max-w-xs mt-3"
                  required
                />
              </div>
              <div className="">
                <label className="font-semibold ml-3">Comfirm Password</label>{" "}
                <br />
                <input
                  type="password"
                  name="password"
                  placeholder="Type password"
                  className="input input-bordered input-md w-full max-w-xs mt-3"
                  required
                />
              </div>
              <button className="btn bg-red-500 hover:bg-red-500 text-white input-bordered  w-full max-w-xs mt-3">
                Login
              </button>
            </div>
          </form>
          <div className="ml-6 lg:ml-24">
            <p className=" text-sm mt-3">OR login with you</p>
          </div>
          <div className="lg:flex ml-16 lg:ml-24  mt-5">
            <FcGoogle className="text-2xl text-sky-900 cursor-pointer" />
            <FaFacebookF className="text-2xl my-3 lg:my-0 lg:mx-9 text-sky-900 cursor-pointer" />
            <TfiLinkedin className="text-2xl text-indigo-700 cursor-pointer" />
          </div>
          <div>
            <p className="ml-6 lg:ml-12 mt-0 lg:mt-5 cursor-pointer">Have an account? <Link to='/register' className="text-red-500 ml-6 lg:ml-0 font-bold">Register</Link></p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Login;
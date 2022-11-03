import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [error, setError] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        // console.log(email, password, confirm);

        if (password !== confirm) {
            setError("password didn't match")
        }
        if (password.length < 6) {
            setError('password should be in 6 characters')
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => setError(error.message))
      }


    return (
        <div className="hero min-h-screen w-[60%] mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now !</h1>
            <p className="py-6"> Register in <Link className='hover:underline' to='/'>ema john shopping</Link> website for better experiences. Happy browsing !!</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form  onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Confirm</span>
                </label>
                <input type="password" name='confirm' placeholder="password" className="input input-bordered" required />
                            <p className='text-red-500 font-semibold'><small>{ error}</small></p>
                <label className="label">
                  <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-blue-500 hover:bg-blue-700 border-0">Register</button>
              </div>
            <div className="text-center">
                <Link><button className='btn btn-xs btn-success'>Google</button></Link>
                <Link><button className='btn btn-xs btn-success mx-2'>Github</button></Link>
                <Link><button className='btn btn-xs btn-success'>Facebook</button></Link>
            </div>
            <div>
                <p><small>Have'nt any account ? Please</small> <Link className='hover:underline font-semibold' to='/login'>Login</Link></p>
            </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;
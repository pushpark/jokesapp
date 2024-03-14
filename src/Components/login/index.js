import Cookies from 'js-cookie'
import {useState} from 'react'
import {Navigate} from 'react-router-dom'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const LoginComponent=()=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [unValid, setUnvalid] = useState(false);
    const [error, setError] = useState('error');
    const [authorized,setAuth]=useState(false)
    const jwtToken = Cookies.get('jwt_token')

    const onChangeUsername = event => {
        setUsername(event.target.value)
      }
    
      const onChangePassword = event => {
        setPassword(event.target.value)
      }
    
      const onClickSubmit = event => {
        event.preventDefault()
        if (username === ""){
            setUnvalid(true)
            setError("Please enter Username")
        }
        else if (password === ""){
            setUnvalid(true)
            setError("Please enter Password")
        }
        else if (username !=="jokesapp"){
            setUnvalid(true)
            setError("Invalid Username and Password")
        }
        else if (password !== "123456"){
            setUnvalid(true)
            setError("Invalid Password")
        }
        else{
            Cookies.set('jwt_token', 'jwtToken', {
                expires: 30,
                path: '/',
              })
            setAuth(true)
        }
       
      }
      if (jwtToken !== undefined || authorized){
        return <Navigate to="/" />
      }
      return (
        <div className="container bg-light background ">
          <div className='row'>
              <h1 className='col-11 col-md-6 col-lg-4 m-auto mt-5 text-center login-text'>Login</h1>
          </div>
          <div className="row" onSubmit={onClickSubmit}>
          <form className='col-11 col-md-6 col-lg-4 m-auto mt-5 border shadow p-4 rounded-2'>
              <div className="mb-3">
                  <label htmlFor="Username" className="form-label">Username</label>
                  <input onChange={onChangeUsername} type="text" className="form-control" id="Username" aria-describedby="emailHelp" value={username}/>
              </div>
              <div className="mb-3">
                  <label html="exampleInputPassword1" className="form-label">Password</label>
                  <input onChange={onChangePassword} type="password" className="form-control" id="exampleInputPassword1" value={password}/>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
              {unValid&&<p className='fs-6 text-danger mt-2'>{error}</p>}
          </form>
          </div>
          <div className='row '>
              <div className='col-11 col-md-6 col-lg-4 m-auto mt-5 text-center login-text'>
                  <h1 className='h2 text-primary-emphasis'>Login Credentials</h1>
                  <p className='fs-5 text-primary-emphasis'>username : jokesapp</p>
                  <p className='fs-5 text-primary-emphasis'>password : 123456</p>
              </div>
          </div>
        </div>
      )
}


export default LoginComponent
import Cookies from 'js-cookie'
import {useState,useEffect} from 'react'
import {Navigate} from 'react-router-dom'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const HomeComponent=()=>{
    const [list,setList]=useState([])
    const[unAuthoried,setAuth]=useState(false)
    const jwtToken = Cookies.get('jwt_token')

    useEffect(() => {
        fetch('https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10')
          .then(response => response.json())
          .then(data => {
            console.log(data)
            setList(data.jokes)
          });
      }, []);


     const onClickLogout=()=>{
        Cookies.remove('jwt_token')
        setAuth(true)
      }
    if (jwtToken === undefined || unAuthoried){
        return <Navigate to="/login" />
      }
    return <div className='container bg-primary bg-opacity-10 p-3'>
        <div className='row m-auto'>
            <h1 className='col-11 col-md-6 col-lg-4 m-auto mt-5 text-center text-primary-emphasis'>Jokes Appliction</h1>
        </div>
       
        <div className='row m-auto'>
        <table className="mt-5 table  table-secondery table-bordered m-auto">
            <thead>
                <tr>
                <th scope="col">Category</th>
                <th scope="col">Joke</th>
                </tr>
            </thead>
            <tbody>
                {list.map(each=><tr key={each.id}>
                        <th>{each.category}</th>
                        <th>{each.joke}</th>
                </tr>)}
            </tbody>
        </table>
        </div>
        <div className='row m-auto'>
        <button type="submit" className="col-6 col-md-4 col-lg-2 mt-5 btn btn-primary m-auto" onClick={onClickLogout}>Logout</button>
        </div>
    </div>
}

export default HomeComponent
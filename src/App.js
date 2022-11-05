import Home from "./pages/Home";
import {Route ,Routes, BrowserRouter as Router ,Navigate} from 'react-router-dom';
import Login from "./pages/Login";
import {useState,useEffect} from 'react'
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import {axiosAuth,axiosJWT} from './axios'
import jwt_decode from 'jwt-decode'


function App() {
  const token = sessionStorage.getItem('accessToken')
  const [authorized , setAuthorized] = useState(token ? true : false)


  const refresh =async ()=>{
    try{
     const response = await axiosJWT.post('/refresh',{token : sessionStorage.getItem('refreshToken')})
      sessionStorage.setItem('refreshToken', response.data.refreshToken)
      sessionStorage.setItem('accessToken', response.data.accessToken)
    }catch(err){
      console.log('refresh' , err.message)   
     }
  }
  axiosAuth.interceptors.request.use(
    async (config)=>{

      let currentDate = new Date();
     const decodedToken = jwt_decode(sessionStorage.getItem('accessToken'))
      if(decodedToken.exp * 1000 < currentDate.getTime()){
        await refresh()
        config.headers['x-access-token'] = sessionStorage.getItem('accessToken')

      }
      return config ;
    },
    (error)=>{
      return Promise.reject(error)
    }

  )
  axiosAuth.interceptors.request.use(
    async (config)=>{
      if(authorized){
        config.headers['x-access-token'] = sessionStorage.getItem('accessToken')
      }
      return config;
    },(error)=>{
      return Promise.reject(error)
    }
  )

  useEffect(() => {
    if(!sessionStorage.getItem('accessToken')){
      setAuthorized(false)
    }
  },[])

  return (
    <Router>
    <Routes>
    <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route exact path='/dashboard' element={<Home setAuthorized={setAuthorized} authorized={authorized} />} />
      <Route exact path='/login' element={<Login authorized={authorized}setAuthorized={setAuthorized} />} />
      <Route exact path='/sign-up' element={<SignUp authorized={authorized}setAuthorized={setAuthorized}  />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </Router>
  );
}

export default App;

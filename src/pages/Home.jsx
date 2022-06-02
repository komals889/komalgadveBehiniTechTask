import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { getAllUserAction } from '../actions/user-action';
export default function Home() {
const [users, setusers] = useState("")
 
const dispatch=useDispatch()
const {reduxUser,isLoading} = useSelector(state=>state.users)
    
        const getUser=async(e)=>{
          e.preventDefault()
          dispatch(getAllUserAction(users))
           
        } 
        
   
    
 

  return <div className='container-fluid'>
          <div className="row mt-4">
              <div className="col-sm-12">

                  <div className='bg-dark text-warning'>
                    <h1 className='text-center p-3'>React Challenge</h1>
                  </div>

                  <form onSubmit={getUser}>
                      <div className='d-flex '>
                            <input type="text" onChange={e=>setusers(e.target.value)} required className="form-control" placeholder="What are you looking for?"/>
                            <button type="submit" className="btn btn-primary">
                            <i class="bi bi-search"></i>
                            </button> 
                        </div>
                  </form>

              </div>
      </div>
                <div className="row mt-2">
              {
               reduxUser?.map((item,index)=>(
                  <div className="col-sm-6 col-md-4 col-lg-3" >
                    <div className="card" key={index}>
                      {/* <div className="card-header bg-dark text-warning "><h5 className='card-title'>Title: {item.data.title}</h5></div> */}
                    <div className="card-body">
                      <img src={item.snippet.thumbnails.medium.url} alt="" className='img-fluid' />
                      <ul className="list-group bg-dark text-warning list-group-flush">
                        <li className="list-group-item"> <h5>Title:</h5>{item.snippet.title}  </li>
                        <li className="list-group-item"> <h5>Description:</h5> {item.snippet.title} </li>
                         
                      </ul>
                    </div>
                 </div><br />
              </div>
               ))
              }
              </div> 
  </div>;
}

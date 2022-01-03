import React, {useState, useEffect} from "react";
import propTypes from 'prop-types'
import { Link, Outlet } from "react-router-dom";

const Header = (props) => {
    // console.log("props===",props)

    // const[timer,setTimer] = useState(props.data.timer);

    // useEffect( ()=>{
    //     console.log("without deep=======");

    // },[])

    // useEffect( ()=>{
    //     console.log("with deep----------",timer)
    //   if(timer<100)  setTimer(timer+1)

    // },[timer]) // timer change vayesi trigger hune vayo



    return(
       <> 
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"><Link to="/home">Home</Link></a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#"><Link to="/users">Users</Link></a>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider"></hr></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </li>
                <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
                </li>
            </ul>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
        <Outlet/>
 
        </>)
}



export default Header;


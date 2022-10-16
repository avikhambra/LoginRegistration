import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

import Pic1 from '../../images/e.png';

const Layout = () => {
  return <>

    <CssBaseline />
    <Navbar />
    <Outlet />

    <h1 style={{display:"flex",justifyContent:"center" ,alignItems:"center" , fontWeight: 'bold' , color: '#302344' }} >Welcome In Our India's No.1 Company</h1> 
    

    <div>
        <img src={Pic1} alt="" style={{display:"flex", justifyContent:"center", alignItems:"center" , width:"1142px" , height:"600px", marginLeft: '18.5vw'}} />
    </div>


  </>;
};

export default Layout;

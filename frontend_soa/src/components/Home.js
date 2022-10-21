import React from 'react'
import { StyedIcon, StyledSubTitle, StyledTitle,colors } from './Styles';
import {FcNext} from "react-icons/fc";
import {useNavigate} from "react-router-dom";
const Home = () => {
    const navigaye = useNavigate();
const gotoReg =(e)=>{
    navigaye(`/regester`);
}
const gotoRes =(e)=>{
    navigaye(`/result`);
}
       
    
  return (<div>
    <StyledTitle size={40}>Welcome</StyledTitle>
    <StyledSubTitle size={33} color={colors.grey}><StyedIcon onClick={(e)=>gotoReg(e)}  ><FcNext/></StyedIcon> register in the contest </StyledSubTitle>
    <StyledSubTitle size={33} color={colors.grey}><StyedIcon onClick={(e)=>gotoRes(e)} ><FcNext/></StyedIcon> check the result of the contest </StyledSubTitle>
   
    </div>
  )
}

export default Home
import styled from 'styled-components';
import background from'../assets/bg.png';
export const colors ={
    primary:'#fff',
   theme:"rgb(201, 179, 151)",
    light1:"rgb(201, 179, 151)",
    light2:"#E5E7EB",
    dark1:"rgb(22, 29, 26)",
    dark2:"rgb(71, 99, 87);",
    dark3:"#9CA3AF",
    RGB:"#B2602E",
    grey:"#E5E4E2",
    RBG2:"rgb(201, 179, 151)"
}
export const StyledContainer = styled.div`
margin:0;
min-height:100vh;
display:flex;
background:linear-gradient(0deg, rgba(0,0,0,0.8),rgba(0,0,0,0.5)),url(${background});
background-size:cover;
background-attachment:fixed;
`;
export const StyledTitle= styled.h2`
font-size: ${(props) => props.size}px;
text-align : center;
color: ${(props) => props.color ? props.color:colors.RGB};
padding:5px;
margin: ${(props) => props.marginT ? props.marginT:6}rem 0 2rem ${(props) => props.marginL ? props.marginL:40}rem;
font-family: 'Tangerine', serif;
  font-size: 48px;
  text-shadow: 4px 4px 4px #aaa;
  text-transform: uppercase;
  
`;

export const MainContainer = styled.div`
display:flex;
align-items: center;
flex-direction: column;
height:80vh;
width:70vw;
margin-top:10vh;
margin-left:15vw;
background: rgba(192,192,192,0.4);
box-shadow: 0 8px 32px 0 rgba(31, 38,135,0.37);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  
  letter-spacing:0.4rem ;
`;
export const MainContainer2 = styled.div`
display:flex;
align-items: center;
flex-direction: column;
height:60vh;
width:70vw;
margin-top:20vh;
margin-left:15vw;
background: rgba(192,192,192,0.4);
box-shadow: 0 8px 32px 0 rgba(31, 38,135,0.37);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  
  letter-spacing:0.4rem ;
`;
export const ErrorMsg=styled.div`
font-size:14px;
color:${colors.red};
margin-top: -5px;
margin-bottom:10px;
text-align: left;
`;


export const StyedIcon = styled.button`
color: ${colors.dark1};
border-radius:100px;
background-color : ${colors.primary}; 
border:2px solid ${colors.primary};
width:50px;
padding:10px;
font-size:21px;

top:35px;
${(props) => !props.right && `right:15px;`}
${(props) => props.right && `left:15px;`}

`;
export const StyedIcon2 = styled.button`
color: ${colors.dark1};
border-radius:100px;
background-color : ${colors.RBG2}; 
border:2px solid ${colors.RBG2};
width:70px;
padding:10px;
font-size:21px;
margin-left:-107vh;
top:35px;
${(props) => !props.right && `right:15px;`}
${(props) => props.right && `left:15px;`}

`;
export const StyledSubTitle = styled.p`
font-size: ${(props) => props.size}px;
text-align : left;
color: ${(props) => props.color ? props.color:colors.primary};
padding:5px;

margin: 10rem 3rem 4rem 3rem;
`;
export const StyledTextInput = styled.input`
width:250px;
padding:12px;
font-size:20px;
color:${colors.light1};
background-color : ${colors.dark1};
border:2px solid ${colors.RBG2};
border-radius:25px;
outline :0;
margin:5px auto 10px 10px;
transition: ease-in-out 0.3s;
${(props) => props.invalid && `background-color : ${colors.red}; color : ${colors.primary};` }
&:focus{
    background-color : ${colors.RBG2}; 
    color : ${colors.dark1};
    border:2px solid ${colors.dark1};
}
`;
export const StyledLabel =styled.label`
text-align:center;
margin: 0 0 0 8rem;
font-size:23px;
color : ${colors.RBG2};
text-align: center;
text-shadow: 4px 4px 4px rgb(5, 3, 2);
`;
export const StyledFormArea = styled.div`
background-color : ${props => props.bg || colors.primary } ; 
text-align:center;
padding:45px 55px;
`;
export const  StyledFormButton = styled.button`
padding:10px;
width:170px;
margin-top:2rem;
background-color : transparent;
font-size:20px;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
border:2px solid ${colors.dark1};
border-radius:25px;
color:${colors.dark1};
text-align: center;
text-shadow: 4px 4px 4px ${colors.RBG2};
margin-left:60vh;
transition: ease-in-out 0.3s;

&:hover{
     
    color:${colors.RBG2};
    cursor:pointer;
    border:2px solid ${colors.RBG2};
    text-shadow: 4px 4px 4px rgb(5, 3, 2);
}
`;


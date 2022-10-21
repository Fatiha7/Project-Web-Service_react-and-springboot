import {StyledFormButton, StyledTitle,MainContainer2,StyedIcon2 } from './Styles'
import {Formik, Form} from 'formik';
import { TextInput } from './FormLib';
import etudiantservice from '../service/etudiantservice';
import {FcPrevious} from "react-icons/fc";
import {useNavigate} from "react-router-dom";
function FirstPage() {
  const navigaye = useNavigate();
  const gotoRes =(e)=>{
    navigaye(`/`);
}
  return (
    <div>
    <MainContainer2>
    
    <StyledTitle marginT={3} marginL={1} size={40} > Regester </StyledTitle>
    <Formik
    initialValues={{
        cin:"",
        cne:"", 
    }}
  
    
    onSubmit={(values,{setSubmitting})=>{
      console.log(values.cne) 

    etudiantservice.insert(values.cin,values.cne).then((Response) =>{
      alert(Response.data)
    
  }).catch((error) =>{
    
      navigaye(`/`);
      
  });
    }}
    >
      {() => (
        <Form>
         <TextInput 
         name="cin" 
          type="text"
           label="CIN :" placeholder="JT120798"
          
           />
          
           <TextInput
           name="cne" 
           type="text"
            label="CNE:" placeholder="D125678"
            />
            <StyledFormButton type='submit'>
               Regester
            </StyledFormButton>
        </Form>
      )}  
    </Formik>
    <StyedIcon2 onClick={(e)=>gotoRes(e)} ><FcPrevious/></StyedIcon2> 
    </MainContainer2>
    </div>
  );
}

export default FirstPage;

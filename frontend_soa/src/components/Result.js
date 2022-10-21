import React,{useEffect,useState} from 'react'
import { MainContainer, StyledTitle,StyedIcon2} from './Styles'
import etudiantservice from '../service/etudiantservice';
import SearchBar from "material-ui-search-bar";
import {FcPrevious} from "react-icons/fc";
import './Table.css'
import {useNavigate} from "react-router-dom";
const Result = () => {
  const navigaye = useNavigate();
  const [loading, setLoading] = useState(true);
  const [Etudiants,setEtudiants]=useState(null);
  const [query,setQuery] = useState("");
  const handleChange =(newValue) =>{
    setQuery(newValue.value)
    console.log(query)
  };
  const gotoRes =(e)=>{
    navigaye(`/`);
}
  useEffect(() => {
    const fetchDate = async ()=>{
      setLoading(true);
      try {
          const response = await etudiantservice.getResult();
          setEtudiants(response.data);
          
      }catch(error){
          console.log(error);
      }
      setLoading(false);
    };
    fetchDate();
  }, []);
  return (
    <div>
    <MainContainer>
    <StyledTitle marginT={1} marginL={1}>Result</StyledTitle>
    <SearchBar style={{backgroundColor: "rgb(201, 179, 151)",color:'rgb(22, 29, 26)' }}
    onChange={(newValue) => handleChange({ value: newValue })}
    onCancelSearch={(newValue) => handleChange({ value: "" })}
    ></SearchBar>
    <table >
      <thead>
      
        <tr>
          <th>N</th> 
          <th>Name</th>
          <th>CNE</th>
        </tr>
      </thead>
      {!loading && (
<tbody>
 {Etudiants.filter((Etudiant)=>Etudiant.cne.includes(query)).map((Etudiant) => (
  <tr key={Etudiant.cne}>
  <td>{Etudiant.id}</td>
    <td>{Etudiant.nom}</td>
    <td>{Etudiant.cne}</td>
   
    </tr>))}</tbody>)}
      </table>
      <StyedIcon2 onClick={(e)=>gotoRes(e)} ><FcPrevious/></StyedIcon2> 
        </MainContainer>
    </div>
  )
}

export default Result
import axios from "axios";
const ET_API_BASE_URL ="http://localhost:8082/Etudiant";
const R_API_BASE_URL ="http://localhost:8082/Result";
class etudiantservice {
    insert(CIN,CNE){
        return axios.get(ET_API_BASE_URL+"/"+CIN+"/"+CNE)
    }
        getResult(){
        return axios.get(R_API_BASE_URL)
        }

}
export default new etudiantservice();


   

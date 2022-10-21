import { useField } from 'formik'
import { StyledLabel, StyledTextInput} from './Styles';
export const TextInput = ({...props})=>{
    const [field]= useField(props);
    return(
        
        <span style={{ position:"relative"}}>
        
        <StyledLabel htmlFor={props.name}>
        {props.label}
                </StyledLabel>
        {props.type ==="text" &&
        <StyledTextInput
        {...field}
        {...props}
        />}
        
        </span>
    )
    }
import React,{Fragment} from 'react';
import styled from '@emotion/styled';


const Div = styled.div`

display: flex;
flex-direction: column;

`


const InputComponent = ({input}) => {

   const {type} = input;



    return ( 

    
        <Fragment>
          <Div>
        <label htmlFor={input.name}>{`${input.placeholder} :`}</label>
            <input
              id={input.name}
              type={type}
              placeholder={input.placeholder}
              onChange={input.func}
              name={input.name}
              
             
            />
            </Div>
            
        </Fragment>
     );
}
 
export default InputComponent;
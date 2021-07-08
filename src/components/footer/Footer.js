import React from 'react';
import styled from "@emotion/styled";
import Logo from '../header/Logo';

/*StyledComponents*/

const Footer = styled.footer`

width: 100%;
background-color: #30332e;
margin-top: 100px;
display: flex;
flex-direction: column;
align-items: center;


p{
    color: #FFFBFC;
    text-align: center;
    letter-spacing: 0.08em;




    &:hover{
       text-decoration:underline;
    }
}




`;






const Div = styled.div`

width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 28px;

`;







const A = styled.a`
letter-spacing: 0.08em;
display: table;
color: #FFFBFC;
text-decoration: none;
margin: 5px 0;

&:hover{
    text-decoration: underline;
}
`;



const DivIcons = styled.div`

width: 100%;
display: flex;
justify-content: space-between;

a{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 0;
}
`;











const FooterComponent = () => {
    return ( 
    <Footer>
        <Div>
        <Logo
        clase="logo-footer"
        />
        </Div>
        <A href="#">Terminos y codiciones</A>
        <A href="#">Aviso de privacidad</A>
        <A href="#">Contacto</A>
        <DivIcons>
        <a href="#">
        <svg className="svg-icons-footer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g id="twitter"><path d="M95,22.1A37,37,0,0,1,84.4,25a18.51,18.51,0,0,0,8.11-10.2,37.17,37.17,0,0,1-11.73,4.48A18.47,18.47,0,0,0,48.84,31.9a18.8,18.8,0,0,0,.48,4.21,52.42,52.42,0,0,1-38-19.29A18.49,18.49,0,0,0,17,41.47a18.63,18.63,0,0,1-8.36-2.32v.23a18.48,18.48,0,0,0,14.81,18.1,18.58,18.58,0,0,1-4.87.65,18.07,18.07,0,0,1-3.47-.34A18.48,18.48,0,0,0,32.33,70.61,37,37,0,0,1,9.4,78.5,40,40,0,0,1,5,78.25a52.23,52.23,0,0,0,28.3,8.3c34,0,52.53-28.13,52.53-52.52l-.06-2.39A37,37,0,0,0,95,22.1Z"></path></g></svg>
        </a>
        <a href="#">
        <svg className="svg-icons-footer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g id="instagram"><path d="M73.75,5H26.25A21.27,21.27,0,0,0,5,26.25v47.5A21.27,21.27,0,0,0,26.25,95h47.5A21.27,21.27,0,0,0,95,73.75V26.25A21.27,21.27,0,0,0,73.75,5Zm-8.6,60.13A21.43,21.43,0,1,1,71.44,50,21.4,21.4,0,0,1,65.15,65.13ZM81.9,29.34A7.62,7.62,0,1,1,84.14,24,7.59,7.59,0,0,1,81.9,29.34Z"></path></g></svg>
        </a>
        <a href="#">
        <svg className="svg-icons-footer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g id="facebook"><path d="M57,27.73V38H72.83l-2.09,16H57V95H40.45V53.94H26.62V38H40.45V26.15C40.45,12.46,48.83,5,61,5h0a115.36,115.36,0,0,1,12.34.63V19.94H64.92C58.26,19.94,57,23.1,57,27.73Z"></path></g></svg>
        </a>
        </DivIcons>
        
        <p>Copyright © 2021 online shop. Todos los derechos reservados.</p>
    </Footer>
     );
}
 
export default FooterComponent;


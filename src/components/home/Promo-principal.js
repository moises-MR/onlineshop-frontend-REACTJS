import React from 'react';
import styled from "@emotion/styled";



const Div = styled.div`

width: 100%;
text-align: center;



h2{
    font-size: 20px;
    margin: 30px 0 15px 0;
    color: #010400;
   
}

p{
    font-size: 40px;
    margin: 0;
    color: #010400;
    font-weight: 900;
}

img{
    width: 100%;

}




`;




const A = styled.a`


   

    display: inline-block;
margin-top: 15px;
margin-bottom: 15px;
    color: #06c;
    text-decoration: none;
    letter-spacing: 0.25em;
    &:hover{
        text-decoration: underline;
    }


`

const Button = styled.a`
display: block;
    padding: 10px;
    background-color: #62BBC1 ;
    width: 40%;
    padding: 10px;
    border-radius: 10px;
    color: #FFFBFC;
    margin: 10px auto;
    border: none;
    letter-spacing: 0.35em;
    text-decoration: none;
    text-transform: uppercase;



    &:hover{
        background-color: #72d9e0;  
    }
`;




const ImgDesktop = styled.img`

display: block;
margin-top: 15px;

@media (max-width: 550px) {
   display: none;
  }


`


const ImgMobile = styled.img`
margin-top: 15px;
display: none;

@media (max-width: 550px) {
   display: block;
  }


`










const PromoPrincipal = () => {
    return ( 
<Div>
    <h2>iPhone 12 y iPhone 12 mini</h2>
    <p>Un salto al siguiente nivel.</p>
  <Button href="#">comprar</Button>
  <A href="#">Más información{" >"}</A>
  <ImgMobile src="https://www.apple.com/mx/iphone/home/images/overview/hero/iphone_12__d51ddqcc7oqe_small_2x.jpg"/>
  <ImgDesktop src="https://www.apple.com/mx/iphone/home/images/overview/hero/iphone_12__d51ddqcc7oqe_large.jpg"/>
</Div>


     );
}
 
export default PromoPrincipal;
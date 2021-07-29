import styled from "styled-components";

export const Page = styled.div`
   display: flex;
   justify-content: center;
   position: relative;
   width: 100vw;
   min-height: 100vh;
`

export const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 12vh 5% 0 5%;
   max-width: 600px;
   min-width: 350px;
`

export const Title = styled.h2`
   margin-bottom: 30px;
   color: #767676;
`
export const Form = styled.form`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
`


export const InputWrapper = styled.div`
   width: 100%;
   & > input {
       width: 100%; 
       height: 48px;
       outline: none;
       border: none;
       font-size: 22px;
       letter-spacing: 2px;
       color: var(--primary-color);
       font-weight: bold;
   }
   margin-bottom: 8px;
`

export const Btn = styled.button`
   width: 100%;
   text-align: center;
   height: 44px;
   border: none;
   outline: none;
   background-color: var(--primary-color);
   border-radius: 4px;
   color: white;
   margin-bottom: 30px;
   cursor: pointer;

   &:focus {
      border: 2px solid var(--darker-primary-color);
   }

   &:hover, &:active {
        background-color: var(--darker-primary-color);
   }
`

export const Desc = styled.p`
   width: 100%;
   font-size: 14px;
   color: #a0a0a0;
   text-align: ${({center}) => center && 'center'};
   cursor: ${({center}) => center && 'pointer'};
   min-width: 360px;
`

export const Err = styled.span`
   margin-top: 5px;
   color: var(--primary-color);
   
`

export const Loader = styled.div`
   width: 100vw;
   height: 100vh;
   position: absolute;
   top: 0;
   right: 0;
   background-color: white;
   opacity: 0.7;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;

   & > b {
       margin-top: 10px;
       color: #a0a0a0;
   }
`

export const DigitInputWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   margin-bottom: 10px;
   width: 50%;

   & > input {
      width: calc((100% / 6) - 5px);
      font-size: 20px;
      font-weight: bold;
      height: 44px;
      outline: none;
      color: var(--primary-color);
      border: none;
      border-bottom: 2px solid #a0a0a0;
      text-align: center;

      &:focus {
         border-bottom: 3px solid var(--primary-color);
      }
   }
`
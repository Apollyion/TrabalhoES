import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%; //default : 10px
    scroll-behavior: smooth;
  }

  @media (max-width: 1080px){
    html{
      font-size: 56.25%; // 9px
    }
  }

  @media (max-width: 720px){
    html{
      font-size: 50%; // 8px
    }
  }

  @media (max-width: 720px){
    h2 {
      font-size: 75%; // 12px
    }
  }

  body{
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    font-family: 'Poppins', sans-serif;

    &::-webkit-scrollbar {
      width: 10px;
      background: #E5E4F1;
    }
  
    &::-webkit-scrollbar-track {
      margin-right: 10px;
      border: 3px solid transparent;
      border-radius: 10px;
      width: 50px; 
    }
    
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      width: 50px; 
      background: #BBB8D9;
    }
  }

  body, input, textarea, select, button{
    outline: none;
  }

  input::placeholder { 
    font-weight: 300;
    font-size: 0.9rem;
  }

  button, a{
    cursor: pointer;
  }

  a{
    text-decoration: none;
  }

  svg{
    min-width: 1.5rem;
  }
`;

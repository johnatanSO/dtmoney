import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: rgb(15,15,15);
    --red: #e52e4d;
    --green: #33CC95;
    --blue: #5429cc;

    --blue-light: #6933ff;

    --text-title: rgb(220,220,220);
    --text-body: rgb(180,180,180);

    --shape: rgb(41,41,41);
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    @media (max-width: 1080px){
      font-size: 93.75%;
    }
    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }
  body{
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }
  body,input,textarea,button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1,h2,h3,h4,h5,h6,strong{
    font-weight: 600;
  }



  button{
    cursor: pointer;
  }


  [disable]{
    opacity: 0;
    cursor: not-allowed;
  }

  .react-modal-overlay{
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content{
    width: 100%;
    max-width: 576px;
    background-color: var(--shape);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
    box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15);
    animation: fade-in 0.2s;
    @keyframes fade-in {
      from {
        transform: scale(0.8);
        opacity: 0;
      }
      to {
        transform: scale(1);
        opacity: 1;
      }
    }
  }
  .react-modal-close{
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    border: 0;
    background-color: transparent;
    transition: filter 0.2s;

    &:hover{
      filter: brightness(80%);
    }
  }
`
import { createGlobalStyle } from "styled-components";
import { ITheme } from "./theme";

interface Props {
  theme: ITheme;
}
export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin:0;
    padding:0;
  }
  html,body,#root{
    padding: 0;
    margin: 0;
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
    border: 0;
  }
  #root{
    background-color: ${({ theme }: Props) => theme.bg};
  }
  .btn.btn-info{
    background-color: ${({ theme }: Props) => theme.info.bg};
    color:${({ theme }: Props) => theme.info.fg};
    border-color:${({ theme }: Props) => theme.info.bg};
  }
  .btn.btn-info:hover{
    background-color: ${({ theme }: Props) => theme.info.bg};
    color:${({ theme }: Props) => theme.info.fg};
    border-color:${({ theme }: Props) => theme.info.bg};
    opacity: 0.8;
  }
  
  #root .btn-info:focus, #root .btn-info.focus {
    background-color: ${({ theme }: Props) => theme.info.bg};
    color:${({ theme }: Props) => theme.info.fg};
    border-color:${({ theme }: Props) => theme.info.bg};
    box-shadow: 0 0 0 0.2rem ${({ theme }: Props) => theme.info.bg + "77"};
  }

  #root .btn-info:not(:disabled):not(.disabled):active,#root .btn-info:not(:disabled):not(.disabled).active,
  .show > .btn-info.dropdown-toggle {
    background-color: ${({ theme }: Props) => theme.info.bg};
    color:${({ theme }: Props) => theme.info.fg};
    border-color:${({ theme }: Props) => theme.info.bg};
  }

  #root .btn-info:not(:disabled):not(.disabled):active:focus,#root .btn-info:not(:disabled):not(.disabled).active:focus,
  .show > .btn-info.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem ${({ theme }: Props) => theme.info.bg + "77"};
  }

  #root .text-info{
    color:${({ theme }: Props) => theme.info.bg}!important;
  }
  @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
  @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
  @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
  .rotate{
    -webkit-animation:spin 3s linear infinite;
    -moz-animation:spin 3s linear infinite;
    animation:spin 3s linear infinite;
  }
`;

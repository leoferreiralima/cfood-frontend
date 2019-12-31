import styled from "styled-components";

export const Container = styled.header`
  height: 8vh;
  background-color: rgba(245, 245, 245, 1);
  box-shadow: 1px 1px 3px #22222270;
  max-width: 100%;
  position: sticky;
  border-radius: 2px;
  z-index: 500;
`;

export const Dropdown = styled.div.attrs({
  className: "dropdown-menu"
})`
  background-color: rgb(245, 245, 245);
  box-shadow: 0px 1px 10px #22222255;
`;
export const DropdownItem = styled.button.attrs({
  className: "dropdown-item"
})`
  color: #17a2b8;
  font-weight: 500;
  font-size: 1em;
  :hover {
    color: rgb(245, 245, 245) !important;
    background-color: #17a2b8 !important;
    box-shadow: 1px 1px 8px #22222277 !important;
  }
`;

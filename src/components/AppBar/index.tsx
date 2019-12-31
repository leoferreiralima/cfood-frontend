import React from "react";
import { Container, Dropdown, DropdownItem } from "./styles";
import { FaUserEdit } from "react-icons/fa";

const AppBar: React.FC = () => {
  return (
    <Container className="sticky-top d-flex">
      <div className="d-flex align-items-center mr-2 ml-auto">
        <div>
          <a
            id="user-icon"
            data-toggle="dropdown"
            data-target="user-dropdown"
            role="button"
            aria-expanded="false"
            aria-haspopup="true"
            href="/"
          >
            <FaUserEdit color="blue" size={40} />
          </a>
          <Dropdown id="user-dropdown" aria-labelledby="user-icon">
            <DropdownItem className="dropdown-item" type="button">
              Ação
            </DropdownItem>
            <DropdownItem className="dropdown-item" type="button">
              Another Ação
            </DropdownItem>
            <DropdownItem className="dropdown-item" type="button">
              Something else here
            </DropdownItem>
          </Dropdown>
        </div>
      </div>
    </Container>
  );
};

export default AppBar;

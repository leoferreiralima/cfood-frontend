import React from "react";
import { Container, Dropdown, DropdownItem, IconContainer } from "./styles";
import { FaUserEdit, FaDoorOpen } from "react-icons/fa";
import { ApplicationState } from "../../../store";
import { connect } from "react-redux";
import { IProfile } from "../../../store/ducks/session/types";
import { Dispatch, bindActionCreators } from "redux";

import * as SessionActions from "../../../store/ducks/session/actions";

interface StateProps {
  profile: IProfile | undefined;
}
interface DispatchProps {
  logoutRequest(): void;
}

type Props = StateProps & DispatchProps;
const User: React.FC<Props> = ({ profile, logoutRequest }) => {
  return (
    <Container>
      <IconContainer
        id="user-icon"
        data-toggle="dropdown"
        data-target="user-dropdown"
        role="button"
        aria-expanded="false"
        aria-haspopup="true"
        href="/"
      >
        <FaUserEdit size={30} />
      </IconContainer>
      <Dropdown id="user-dropdown" aria-labelledby="user-icon">
        <DropdownItem
          className="dropdown-item"
          type="button"
          onClick={logoutRequest}
        >
          <FaDoorOpen /> Logout
        </DropdownItem>
      </Dropdown>
    </Container>
  );
};
const mapStateToProps = ({ session: { profile } }: ApplicationState) => ({
  profile
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(SessionActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(User);

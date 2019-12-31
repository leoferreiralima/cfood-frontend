import React from "react";
import { ApplicationState } from "../../store";
import { connect } from "react-redux";
import { SessionState } from "../../store/ducks/session/types";

interface StateProps extends SessionState {}

type Props = StateProps;

const Dashboard: React.FC<Props> = ({ profile }) => {
  return <div className="row col-md-12">{JSON.stringify(profile)}</div>;
};
const mapStateToProps = ({ session: { profile } }: ApplicationState) => ({
  profile
});
export default connect(mapStateToProps)(Dashboard);

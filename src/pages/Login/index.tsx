import React from "react";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Form, Input } from "@rocketseat/unform";

import * as SessionActions from "@ducks/session/actions";
import { SessionState, ILogin } from "@ducks/session/types";

import { ApplicationState } from "@store/index";

import { Container, ContainerFluid, Box } from "./styles";

import { FormGroup, Image, InputGroup } from "react-bootstrap";
import { FaUserAlt, FaLock } from "react-icons/fa";

import Logo from "@assets/img/logo.png";

import Button from "@components/Button";

import { Redirect } from "react-router";
import { Link } from "react-router-dom";

interface StateProps extends SessionState {}

interface DispatchProps {
  loginRequest(data: ILogin): void;
}

type Props = StateProps & DispatchProps;

const Login: React.FC<Props> = ({
  loading,
  error,
  isAuthenticated,
  loginRequest
}) => {
  const handleSubmit = ({ username, password }: any) => {
    loginRequest({ username, password });
  };

  return (
    <Container>
      <ContainerFluid>
        <Box className="col-lg-4 col-md-6 col-sm-9">
          <Form onSubmit={handleSubmit}>
            <FormGroup className="col-md-12">
              <Image
                rounded
                fluid
                srcSet={Logo}
                className="mx-auto d-block"
              ></Image>
            </FormGroup>
            <FormGroup className="col-md-10">
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <FaUserAlt className="text-primary" />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Input
                  name="username"
                  className="form-control"
                  placeholder="Digite seu usuario"
                ></Input>
              </InputGroup>
            </FormGroup>
            <FormGroup className="col-md-10">
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <FaLock className="text-primary" />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Digite sua senha"
                ></Input>
              </InputGroup>
            </FormGroup>
            <div className="col-md-7">
              <div className="col-md-12">
                <Button type="submit" variant="primary" block loading={loading}>
                  Login
                </Button>
              </div>
              <div className="col-md-12 d-flex justify-content-center">
                <Link to="/" className="text-primary font-weight-bold">
                  Esqueci minha senha
                </Link>
              </div>
            </div>
          </Form>
        </Box>
      </ContainerFluid>
      {isAuthenticated && <Redirect to="/dashboard"></Redirect>}
    </Container>
  );
};

const mapStateToProps = ({
  session: { loading, error, isAuthenticated }
}: ApplicationState) => ({
  loading,
  error,
  isAuthenticated
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(SessionActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);

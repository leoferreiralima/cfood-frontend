import styled from "styled-components";

import Loading from "@components/Loading";
import DataTable from "react-data-table-component";
export const Container = styled(DataTable)`
  height: 90%;
  box-shadow: 1px 1px 5px rgba(33, 33, 33, 0.4);
  margin-bottom: 20px;
`;

export const Loader = styled(Loading)`
  height: 20%;
`;

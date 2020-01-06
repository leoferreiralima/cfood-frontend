import React, { useEffect, useState, useMemo } from "react";
import { IDataTableColumn } from "react-data-table-component";

import api from "@services/api";
import { Loader, Container } from "./styles";
import Search from "./Search";
interface OwnProps {
  title?: string;
  columns: IDataTableColumn<any>[];
  url: string;
  defaultSortField: string;
}

type Props = OwnProps;

interface PaginationResponse {
  total: number;
  data: Array<any>;
}

interface Response {
  data: PaginationResponse;
}

const paginationOptions = {
  rowsPerPageText: "Items por página",
  rangeSeparatorText: "de"
};

const Table: React.FC<Props> = ({ title, columns, url, defaultSortField }) => {
  const [data, setData] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState(defaultSortField);
  const [search, setSearch] = useState("");

  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
    false
  );

  useEffect(() => {
    setLoading(true);
    api
      .get(
        `${url}?page=${page}&page_size=${perPage}&ordering=${order}&search=${search}`
      )
      .then(({ data: { total, data } }: Response) => {
        setTotalRows(total);
        setData(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [url, page, perPage, order, search]);

  const subHeaderComponentMemo = useMemo(() => {
    const onSearch = (search: string) => {
      setResetPaginationToggle(!resetPaginationToggle);
      setSearch(search);
    };

    return <Search onSearch={onSearch} search={search} />;
  }, [search, resetPaginationToggle]);

  const handlePerRowsChange = (newPerPage: number, page: number) => {
    setPerPage(newPerPage);
    setPage(page);
  };
  const handlePageChange = (page: number) => {
    setPage(page);
  };
  const handleSort = (column: IDataTableColumn<any>, sortDirection: string) => {
    setOrder(`${sortDirection === "desc" && "-"}${column.selector}`);
  };

  return (
    <Container
      columns={columns}
      data={data}
      title={title}
      persistTableHead
      fixedHeader
      progressPending={loading}
      progressComponent={<Loader />}
      pagination
      paginationComponentOptions={paginationOptions}
      paginationServer
      paginationTotalRows={totalRows}
      paginationResetDefaultPage={resetPaginationToggle}
      onChangeRowsPerPage={handlePerRowsChange}
      onChangePage={handlePageChange}
      sortServer
      onSort={handleSort}
      defaultSortField={defaultSortField}
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
    />
  );
};
export default Table;

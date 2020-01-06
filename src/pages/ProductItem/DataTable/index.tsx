import React from "react";
import Table from "@components/Table";
import { IDataTableColumn } from "react-data-table-component";
import { format } from "date-fns";

const columns: IDataTableColumn<any>[] = [
  {
    name: "ID",
    selector: "id",
    sortable: true
  },
  {
    name: "Nome",
    selector: "name",
    sortable: true
  },
  {
    name: "Criado em",
    selector: "created_at",
    sortable: true,
    format: row => {
      return format(new Date(row.created_at), "dd/MM/yyyy HH:mm");
    }
  }
];

const DataTable: React.FC = () => {
  return (
    <Table
      title="Lista de Ingredientes"
      url="/api/product-items/"
      columns={columns}
      defaultSortField="id"
    />
  );
};

export default DataTable;

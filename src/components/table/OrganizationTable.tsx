import React, { useEffect, useState } from "react";
import { Table, Pagination } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";

import FilterDropdown from "./FilterDropdown";
const OrganizationTable: React.FC = ({
  onChangeParams,
  filters,
  pagination,
  inProgress,
  data,
}: any) => {
  const [sortedInfo, setSortedInfo] = useState<any>({});

  const handleChange = (pagination: any, filters: any, sorter: any) => {
    onChangeParams({
      filters,
      sort: {
        column: sorter.field,
        order: sorter.order === "ascend" ? "ASC" : "DESC",
      },
    });

    setSortedInfo(sorter);

    console.log(sorter);
  };

  const [departmentFilters, setDepartmentFilters] = useState<Array<any>>([]);
  const [parentFilters, setParentFilters] = useState<Array<any>>([]);
  const [levelFilters, setLevelFilters] = useState<Array<any>>([]);

  useEffect(() => {
    setDepartmentFilters(
      filters?.departments.map((filter: any) => ({
        text: filter,
        value: filter,
      }))
    );

    setParentFilters([
      { text: "-", value: "null" },
      ...filters?.parents.map((filter: any) => ({
        text: filter,
        value: filter,
      })),
    ]);

    setLevelFilters(
      filters?.levels.map((filter: any) => ({
        text: filter.toString(),
        value: filter,
      }))
    );
  }, [filters]);

  const columns = [
    {
      title: "División",
      dataIndex: "name",
      key: "name",
      filterDropdown: FilterDropdown,
      filters: departmentFilters,
      filterSearch: true,
      sorter: true,
      sortOrder: sortedInfo.columnKey === "name" ? sortedInfo.order : null,
    },
    {
      title: "División superior",
      dataIndex: "parent_name",
      key: "parent_name",
      render: (parent_name: any, record: any) => parent_name ?? "-",
      filterDropdown: FilterDropdown,
      filters: parentFilters,
      filterSearch: true,
      sorter: true,
      sortOrder:
        sortedInfo.columnKey === "parent_name" ? sortedInfo.order : null,
    },
    {
      title: "Colaboradores",
      dataIndex: "employees",
      key: "employees",
      sorter: true,
      sortOrder: sortedInfo.columnKey === "employees" ? sortedInfo.order : null,
    },
    {
      title: "Nivel",
      dataIndex: "level",
      key: "level",

      filterDropdown: FilterDropdown,
      filters: levelFilters,
      filterSearch: true,
      sorter: true,
      sortOrder: sortedInfo.columnKey === "level" ? sortedInfo.order : null,
    },
    {
      title: "Subdivisiones",
      dataIndex: "children_count",
      key: "children_count",
      sorter: true,
      sortOrder:
        sortedInfo.columnKey === "children_count" ? sortedInfo.order : null,
      render: (children_count: number, record: any) => {
        return (
          <>
            {children_count}
            <PlusCircleFilled className="subdivisions-icon" />
          </>
        );
      },
    },
    {
      title: "Embajadores",
      dataIndex: "ambassador",
      key: "ambassador",
      render: (ambassador: string) => ambassador ?? "-",
    },
  ];

  const handlePaginationChange = (page: number, pageSize: number) => {
    onChangeParams({ perPage: pageSize, page });
  };

  const locale = {
    items_per_page: " / página",
    jump_to: "Ir a",
    jump_to_confirm: "confirmar",
    page: "",
    prev_page: "Página anterior",
    next_page: "Página siguiente",
    prev_5: "Anteriores 5 páginas",
    next_5: "Siguientes 5 páginas",
    prev_3: "Anteriores 3 páginas",
    next_3: "Siguientes 3 páginas",
  };

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record: any) => ({
      name: record.name,
    }),
  };

  return (
    <div>
      <div className="table-container">
        <Table
          rowSelection={{
            type: "checkbox",
            ...rowSelection,
          }}
          rowKey="id"
          loading={inProgress}
          columns={columns}
          dataSource={data}
          onChange={handleChange}
          pagination={false}
        />

        <div className="pagination-container">
          <span className="total-text">
            Total de registros: {pagination.total}
          </span>
          <Pagination
            current={pagination.current_page}
            pageSize={pagination.per_page}
            total={pagination.total}
            onChange={handlePaginationChange}
            onShowSizeChange={handlePaginationChange}
            showSizeChanger
            pageSizeOptions={["10", "20", "50", "100"]}
            className="custom-pagination"
            locale={locale}
          />
        </div>
      </div>
    </div>
  );
};

export default OrganizationTable;

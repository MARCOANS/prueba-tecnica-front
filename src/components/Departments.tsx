/* eslint-disable react-hooks/exhaustive-deps */
import { Radio, Select, Space } from "antd";
import { useEffect, useState } from "react";
import Search from "antd/es/transfer/search";
import { useDebounce } from "hooks/useDebounce";
import OrganizationTable from "./table/OrganizationTable";
import { useList } from "hooks/useList";

const { Option } = Select;
const Departments = () => {
  const [activeInnerTab, setActiveInnerTab] = useState("listado");
  const [searchTerm, setSearchTerm] = useState("");
  const [columnSearch, setColumnSearch] = useState("all");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const { data, inProgress, pagination, onChangeParams, filters } = useList();

  const tableProps: any = {
    onChangeParams,
    filters,
    pagination,
    inProgress,
    data,
  };

  useEffect(() => {
    onChangeParams({ term: debouncedSearchTerm, page: 1 });
  }, [debouncedSearchTerm]);

  useEffect(() => {
    onChangeParams({ columnSearch });
  }, [columnSearch]);
  return (
    <>
      <div className="subtab-header">
        <div className="button-group subtab">
          <Radio.Group value={activeInnerTab}>
            <Radio.Button
              value="listado"
              onClick={() => setActiveInnerTab("listado")}
            >
              Listado
            </Radio.Button>
            <Radio.Button
              value="arbol"
              onClick={() => setActiveInnerTab("arbol")}
            >
              Árbol
            </Radio.Button>
          </Radio.Group>
        </div>

        <div className="subtab-search-container">
          <Space>
            <Select
              placeholder="Seleccionar columnas"
              className="columns-select"
              onChange={(value) => setColumnSearch(value)}
              value={columnSearch}
            >
              <Option value="all">Todas las columnas</Option>
              <Option value="name">División</Option>
              <Option value="parent_name">División superior</Option>
              <Option value="employees">Colaboradores</Option>
              <Option value="level">Nivel</Option>
              <Option value="children_count">Subdivisiones</Option>
              <Option value="ambassador">Embajador</Option>
            </Select>
          </Space>

          <Search
            placeholder="Buscar... (use '-' para buscar valores nulos)"
            value={searchTerm}
            onChange={(e: any) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      {activeInnerTab === "listado" && <OrganizationTable {...tableProps} />}
      {activeInnerTab === "arbol" && <div>Vista de árbol</div>}
    </>
  );
};

export default Departments;

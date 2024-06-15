import { useState } from "react";
import { Input, Button, Checkbox } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const FilterDropdown = ({
  setSelectedKeys,
  selectedKeys,
  confirm,
  clearFilters,
  filters,
}: any) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: any) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const handleCheckboxChange = (e: any, value: any) => {
    if (e.target.checked) {
      setSelectedKeys([...selectedKeys, value]);
    } else {
      setSelectedKeys(selectedKeys.filter((key: any) => key !== value));
    }
  };

  const filteredOptions = filters.filter((option: any) =>
    option.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="custom-filter">
      <div className="custom-filter-search">
        <Input
          placeholder="Buscar"
          suffix={<SearchOutlined />}
          value={searchValue}
          onChange={handleSearch}
        />
      </div>

      <div className="custom-filter-content">
        {filteredOptions.map((option: any) => (
          <li className="custom-filter-option">
            <Checkbox
              key={option.value}
              checked={selectedKeys.includes(option.value)}
              onChange={(e) => handleCheckboxChange(e, option.value)}
            >
              {option.text}
            </Checkbox>
          </li>
        ))}
      </div>

      <div className="filter-footer">
        <Button
          type="link"
          onClick={() => {
            confirm();
          }}
        >
          Ok
        </Button>
        <Button
          onClick={() => {
            clearFilters();
            confirm();
          }}
          type="link"
        >
          Reiniciar
        </Button>
      </div>
    </div>
  );
};

export default FilterDropdown;

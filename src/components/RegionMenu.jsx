/* eslint-disable react/prop-types */
import Select from "react-select";

const options = [
  { value: "all regions", label: "All Regions" },
  { value: "africa", label: "Africa" },
  { value: "america", label: "America" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];
const RegionMenu = ({ countriesList, filterCountriesList }) => {
  const handleRegionChange = (e) => {
    const region = e.label;
    region === "All Regions"
      ? countriesList
      : countriesList.filter((country) => country.region === region);
    filterCountriesList(filterCountriesList);
  };
  return (
    <Select
      defaultValue={options[0]}
      options={options}
      onChange={handleRegionChange}
      className={{
        input: () => "dark:!text-gray-100",
        singleValue: () => "dark:text-gray-100",
        control: () =>
          "flex h-12 items-center justify-between gap-12 rounded-full !border-none pl-4 pr-2 shadow",
        indicatorSeparator: () => "hidden",
        option: () => "hover:!text-gray-800",
        menu: () => "bg-gray-100 dark:bg-gray-800 dark:text-gray-100",
      }}
    />
  );
};

export default RegionMenu;

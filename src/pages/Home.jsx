import CountryList from "../components/CountryList";
import RegionMenu from "../components/RegionMenu";
import SearchInput from "../components/SearchInput";
import ShowMessage from "../components/ShowMessage";
import { useFetchData } from "../useFetchData";

const Home = () => {
  const {
    result,
    filteredCountries,
    isError,
    isLoading,
    setFilteredCountries,
  } = useFetchData();

  return (
    <div className="container mx-auto px-5 md:px-0">
      {isError && <ShowMessage message="Something went wrong!" />}
      {isLoading && <ShowMessage message="Loading countries data...!" />}
      {!isLoading && !isError && (
        <>
          <div className="container mx-auto flex flex-col justify-between gap-10 px-5 md:h-14 md:flex-row md:items-center md:gap-0 md:px-0">
            <SearchInput
              countriesList={result}
              filterCountriesList={setFilteredCountries}
            />
            <RegionMenu
              countriesList={result}
              filterCountriesList={setFilteredCountries}
            />
          </div>
          <CountryList data={filteredCountries} />
        </>
      )}
    </div>
  );
};

export default Home;

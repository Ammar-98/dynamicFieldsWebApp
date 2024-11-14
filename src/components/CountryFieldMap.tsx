import React, { useEffect, useState } from "react";
import { Field, SubField } from "./Types/types";
import { ChevronDown } from "lucide-react";
import evaluateConditions from "./Buttons/EvaluateConditons.tsx";
import MapSubfields from "./MapSubfields.tsx";

type InputFieldProps = {
  field: Field | SubField;
  passedValue: string | null;
};
export default function CountryFieldMap({
  field,
  passedValue,
}: InputFieldProps) {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [openDropdown, setopenDropdown] = useState(false);

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
    console.log("Selected country:", event.target.value);
  };

  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo (Congo-Brazzaville)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czechia (Czech Republic)",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Swaziland",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar (formerly Burma)",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine State",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  const [CountriesList, setCountriesList] = useState([""]);

  const [searchQuery, setsearchQuery] = useState("");

  const handlSearch = (searchItem: string) => {
    console.log("searchQuery", searchItem);
    setsearchQuery(searchItem);
    if (searchItem == "") {
      setCountriesList(countries);

      return;
    }

    let temp = countries.filter((item) =>
      item.toLowerCase().includes(searchItem.toLocaleLowerCase())
    );

    setCountriesList(temp);
  };

  useEffect(() => {
    setCountriesList(countries);
  }, []);

  return (
    <div>
      {evaluateConditions(field.conditions, passedValue) == true ? (
        <div className="  w-full flex flex-col items-center justify-center">
          <div className=" py-4">{field.label}</div>

          <div className=" relative min-w-[200px]">
            <div
              className=" flex justify-between border-2 px-4 py-3 rounded-xl border-slate-500 cursor-pointer"
              onClick={() => setopenDropdown(!openDropdown)}
            >
              {selectedCountry == "" ? "Select a country" : selectedCountry}
              {openDropdown == true ? (
                <ChevronDown className=" duration-500" />
              ) : (
                <ChevronDown className=" duration-500 rotate-180" />
              )}
            </div>
            {openDropdown == true && (
              <div>
                <div className=" w-full bg-white border-2 ">
                  <input
                    value={searchQuery}
                    onChange={(e) => handlSearch(e.target.value)}
                    className=" w-full h-full border px-4"
                    placeholder="Search "
                  />
                </div>
                <div className=" absolute bg-white rounded border-2 w-full max-h-[170px] overflow-y-scroll">
                  {CountriesList.map((item) => (
                    <div
                      onClick={() => [
                        setSelectedCountry(item),
                        setsearchQuery(""),
                        setCountriesList(countries),
                        setopenDropdown(false),
                      ]}
                      className=" hover:bg-slate-300 px-4 py-1 my-1 cursor-pointer"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className=" w-full">
          <div className=" mt-5  ">
            {field.subFields ? (
              <div className=" border-l-2   ml-3 bg-subfields border-slate-500">
                <MapSubfields fields={field.subFields} value={selectedCountry} />
              </div>
            ) : null}
          </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

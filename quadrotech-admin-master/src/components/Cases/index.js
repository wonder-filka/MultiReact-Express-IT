import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import "../../App.css";
import "./index.css";

import { CurrentUserContext } from "../../contexts/currentUser";

export default function Cases() {

  const [currentUserState] = useContext(CurrentUserContext);
  const [cases, setCases] = useState([]);
  const [translations, setTranslations] = useState([]);
  const caseColors = [
    "bg-indigo-100",
    "bg-purple-100",
    "bg-green-100",
    "bg-pink-100",
  ];

  const handleToggle = async (event, id) => {
    event.preventDefault();
    const isChecked = event.target.checked;
    try {
      await axios.patch(`http://localhost:3001/cases/${id}`, {
        visible: isChecked,
      });
      setCases((prevCases) =>
        prevCases.map((caseItem) =>
          caseItem.id === id ? { ...caseItem, visible: isChecked } : caseItem
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const getTranslation = (keyi18n) => {
    const translation = translations.find((t) => t.keyi18n === keyi18n);
    return translation ? translation.value_en : keyi18n;
  };

  const handleDelete = async (id) => {
    try {
      const caseData = cases.find((obj) => obj.id === id);
      const { title, descript, need, result, keysinfo, visible } = caseData;
      console.log(title, descript, need, result, keysinfo, visible);
      await axios.delete(`http://localhost:3001/cases/${id}`);
      await axios.delete("http://localhost:3001/delete-en", {
        data: {
          keyi18n: [title, descript, need, result, keysinfo],
        },
      });
      await axios.delete("http://localhost:3001/delete-de", {
        data: {
          keyi18n: [title, descript, need, result, keysinfo],
        },
      });
      await axios.delete("http://localhost:3001/delete-es", {
        data: {
          keyi18n: [title, descript, need, result, keysinfo],
        },
      });

      setCases(cases.filter((caseItem) => caseItem.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/cases")
      .then((response) => setCases(response.data))
      .catch((error) => console.log(error));
    axios
      .get("http://localhost:3001/en")
      .then((response) => setTranslations(response.data))
      .catch((error) => console.log(error));
  }, []);

  if (currentUserState.isLoggedIn === false) {
    return <Navigate to="/login" />;
  } else {
    return (
      <div className="cases">
        <p className="text-3xl text-gray-700 font-bold m-5 p-5">Cases</p>
        <div className="caseList container w-auto">
          {cases.map((caseItem, index) => (
            <div
              className={`caseItem flex justify-between items-center m-5 p-1 shadow rounded-lg ${
                caseColors[index % caseColors.length]
              }`}
              key={caseItem.id}
            >
              <div className="caseTitle m-5 py-2 font-bold">
                {getTranslation(caseItem.title)}
              </div>

              <div className="justify-items-end flex items-center">
                <label
                  htmlFor={`toggle-${caseItem.id}`}
                  className="flex cursor-pointer select-none items-center"
                >
                  <div className="relative">
                    <input
                      type="checkbox"
                      id={`toggle-${caseItem.id}`}
                      className="sr-only"
                      checked={caseItem.visible}
                      onChange={(event) => handleToggle(event, caseItem.id)}
                    />
                    <div
                      className={`block h-8 w-14 rounded-full transition ${
                        caseItem.visible ? "bg-green-600" : "bg-gray-400"
                      } mr-5`}
                    ></div>
                    <div
                      className={`dot absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition ${
                        caseItem.visible ? "translate-x-6" : ""
                      }`}
                    ></div>
                  </div>
                </label>
                <div>
                  <Link
                    to={`/cases/${caseItem.id}`}
                    className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold m-5 py-2 px-4 rounded"
                  >
                    Change
                  </Link>
                </div>
                <div>
                  <button
                    className="ml-5 bg-red-500 hover:bg-red-600 text-white font-bold m-5 py-2 px-4  rounded"
                    onClick={() => handleDelete(caseItem.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

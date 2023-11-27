import React, { useState, useEffect, useContext } from "react";
import { useParams, Navigate } from "react-router-dom";
import axios from "axios";
import "./index.css";
import Navigation from "../Navigation";
import { CurrentUserContext } from "../../contexts/currentUser";

export default function EditCase() {
  const { id } = useParams();
  const [currentUserState] = useContext(CurrentUserContext);
  const [isSaved, setIsSaved] = useState(false);
  const [caseNubmer, setCaseNumber] = useState("");
  const [newDataEn, setNewDataEn] = useState([
    { keyi18n: "", value: "" },
    { keyi18n: "", value: "" },
    { keyi18n: "", value: "" },
    { keyi18n: "", value: "" },
    { keyi18n: "", value: "" },
  ]);
  const [newDataDe, setNewDataDe] = useState([
    { keyi18n: "", value: "" },
    { keyi18n: "", value: "" },
    { keyi18n: "", value: "" },
    { keyi18n: "", value: "" },
    { keyi18n: "", value: "" },
  ]);
  const [newDataEs, setNewDataEs] = useState([
    { keyi18n: "", value: "" },
    { keyi18n: "", value: "" },
    { keyi18n: "", value: "" },
    { keyi18n: "", value: "" },
    { keyi18n: "", value: "" },
  ]);

  const [imgMainFile, setImgMainFile] = useState(null);
  const [imgCaseFile, setImgCaseFile] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/cases/${id}`).then((response) => {
      const { title, descript, need, result, keysinfo } = response.data;
      setCaseNumber(parseInt(title.match(/\d+/)));
      setNewDataEn((prevData) => [
        { ...prevData[0], keyi18n: title },
        { ...prevData[1], keyi18n: descript },
        { ...prevData[2], keyi18n: need },
        { ...prevData[3], keyi18n: result },
        { ...prevData[4], keyi18n: keysinfo },
      ]);
      setNewDataDe((prevData) => [
        { ...prevData[0], keyi18n: title },
        { ...prevData[1], keyi18n: descript },
        { ...prevData[2], keyi18n: need },
        { ...prevData[3], keyi18n: result },
        { ...prevData[4], keyi18n: keysinfo },
      ]);
      setNewDataEs((prevData) => [
        { ...prevData[0], keyi18n: title },
        { ...prevData[1], keyi18n: descript },
        { ...prevData[2], keyi18n: need },
        { ...prevData[3], keyi18n: result },
        { ...prevData[4], keyi18n: keysinfo },
      ]);
      axios.get(`http://localhost:3001/en`).then((response) => {
        const titleItem = response.data.find(
          (item) => item.keyi18n === title
        )?.value_en;
        const descriptItem = response.data.find(
          (item) => item.keyi18n === descript
        )?.value_en;
        const needItem = response.data.find(
          (item) => item.keyi18n === need
        )?.value_en;
        const resultItem = response.data.find(
          (item) => item.keyi18n === result
        )?.value_en;
        const keysinfoItem = response.data.find(
          (item) => item.keyi18n === keysinfo
        )?.value_en;
        setNewDataEn((prevData) => [
          { ...prevData[0], value: titleItem },
          { ...prevData[1], value: descriptItem },
          { ...prevData[2], value: needItem },
          { ...prevData[3], value: resultItem },
          { ...prevData[4], value: keysinfoItem },
        ]);
      });

      axios.get(`http://localhost:3001/de`).then((response) => {
        const titleItem = response.data.find(
          (item) => item.keyi18n === title
        )?.value_de;
        const descriptItem = response.data.find(
          (item) => item.keyi18n === descript
        )?.value_de;
        const needItem = response.data.find(
          (item) => item.keyi18n === need
        )?.value_de;
        const resultItem = response.data.find(
          (item) => item.keyi18n === result
        )?.value_de;
        const keysinfoItem = response.data.find(
          (item) => item.keyi18n === keysinfo
        )?.value_de;
        setNewDataDe((prevData) => [
          { ...prevData[0], value: titleItem },
          { ...prevData[1], value: descriptItem },
          { ...prevData[2], value: needItem },
          { ...prevData[3], value: resultItem },
          { ...prevData[4], value: keysinfoItem },
        ]);
      });
      axios.get(`http://localhost:3001/es`).then((response) => {
        const titleItem = response.data.find(
          (item) => item.keyi18n === title
        )?.value_es;
        const descriptItem = response.data.find(
          (item) => item.keyi18n === descript
        )?.value_es;
        const needItem = response.data.find(
          (item) => item.keyi18n === need
        )?.value_es;
        const resultItem = response.data.find(
          (item) => item.keyi18n === result
        )?.value_es;
        const keysinfoItem = response.data.find(
          (item) => item.keyi18n === keysinfo
        )?.value_es;
        setNewDataEs((prevData) => [
          { ...prevData[0], value: titleItem },
          { ...prevData[1], value: descriptItem },
          { ...prevData[2], value: needItem },
          { ...prevData[3], value: resultItem },
          { ...prevData[4], value: keysinfoItem },
        ]);
      });
    });
  }, [id]);

  const handleImgMainFileChange = (event) => {
    const file = event.target.files[0];
    setImgMainFile(file);
  };

  const handleImgCaseFileChange = (event) => {
    const file = event.target.files[0];
    setImgCaseFile(file);
  };

  const handleSaveButtonClick = () => {
    const formData = new FormData();
    formData.append(`back_case${caseNubmer}.png`, imgMainFile);
    formData.append(`case${caseNubmer}.png`, imgCaseFile);
    axios
      .post("http://localhost:3001/save-files", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .put("http://localhost:3001/update-en", newDataEn)
      .then((res) => {
        console.log(res.data);
        console.log(newDataEn);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .put("http://localhost:3001/update-de", newDataDe)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .put("http://localhost:3001/update-es", newDataEs)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setIsSaved(true);
  };

  useEffect(() => {
    if (isSaved) {
      setTimeout(() => {
        setIsSaved(false);
      }, 2000); // Устанавливаем время появления/исчезновения блока в 2 секунды
    }
  }, [isSaved]);

  if (currentUserState.isLoggedIn === false) {
    return <Navigate to="/login" />;
  } else {
    return (
      <div className="edit-case bg-white flex min-h-screen">
        {isSaved && (
          <div className="saved bg-white border border-grey-900 rounded-lg shadow font-light">
            Saved
          </div>
        )}
        <Navigation />

        <div className="w-screen">
          <div className="flex justify-between items-center">
            <p className="text-3xl text-gray-700 font-bold m-1 p-5">
              Cases Editor
            </p>
            <button
              onClick={handleSaveButtonClick}
              className="ml-5 bg-blue-400 hover:bg-blue-500 text-white font-bold m-5 py-2 px-4  rounded"
            >
              Save
            </button>
          </div>
          <div className="send-img flex pl-5">
            <div className="">
              <div className="font-bold mb-1">Head image</div>
              <form encType="multipart/form-data" className="flex items-center">
                <input
                  type="file"
                  name="fileHead"
                  onChange={handleImgMainFileChange}
                  className=" py-2 px-3"
                />
              </form>
            </div>
            <div className="ml-3">
              <div className="font-bold  mb-1">Block image</div>
              <form encType="multipart/form-data" className="flex items-center">
                <input
                  type="file"
                  name="fileBlock"
                  onChange={handleImgCaseFileChange}
                  className=" py-2 px-3"
                />
              </form>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5">
            <div className="english shadow bg-purple-200">
              <div className="text-2xl text-gray-500 mt-5 mb-5 text-center">
                English
              </div>
              <div className="field text-gray-400 focus-within:text-purple-600  m-3">
                <label htmlFor="titleEn">Title:</label>
                <input
                  type="text"
                  className="mt-2 px-4 py-2 border rounded "
                  name="titleEn"
                  value={newDataEn[0].value || ""}
                  onChange={(e) => {
                    setNewDataEn((prevData) => [
                      { ...prevData[0], value: e.target.value },
                      { ...prevData[1] },
                      { ...prevData[2] },
                      { ...prevData[3] },
                      { ...prevData[4] },
                    ]);
                  }}
                />
              </div>
              <div className="field text-gray-400 focus-within:text-purple-600  m-3">
                <label htmlFor="descriptionEn">Description:</label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded h-24"
                  name="descriptionEn"
                  value={newDataEn[1].value || ""}
                  onChange={(e) => {
                    setNewDataEn((prevData) => [
                      { ...prevData[0] },
                      { ...prevData[1], value: e.target.value },
                      { ...prevData[2] },
                      { ...prevData[3] },
                      { ...prevData[4] },
                    ]);
                  }}
                />
              </div>
              <div className="field  text-gray-400 focus-within:text-purple-600  m-3">
                <label htmlFor="needEn">Need:</label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded  h-24"
                  name="needEn"
                  value={newDataEn[2].value || ""}
                  onChange={(e) => {
                    setNewDataEn((prevData) => [
                      { ...prevData[0] },
                      { ...prevData[1] },
                      { ...prevData[2], value: e.target.value },
                      { ...prevData[3] },
                      { ...prevData[4] },
                    ]);
                  }}
                />
              </div>
              <div className="field  text-gray-400 focus-within:text-purple-600  m-3">
                <label htmlFor="resultEn">Result:</label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded  h-24"
                  name="resultEn"
                  value={newDataEn[3].value || ""}
                  onChange={(e) => {
                    setNewDataEn((prevData) => [
                      { ...prevData[0] },
                      { ...prevData[1] },
                      { ...prevData[2] },
                      { ...prevData[3], value: e.target.value },
                      { ...prevData[4] },
                    ]);
                  }}
                />
              </div>
              <div className="field  text-gray-400 focus-within:text-purple-600  m-3">
                <label htmlFor="keysinfoEn">Keys:</label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded  h-24"
                  name="keysinfoEn"
                  value={newDataEn[4].value || ""}
                  onChange={(e) => {
                    setNewDataEn((prevData) => [
                      { ...prevData[0] },
                      { ...prevData[1] },
                      { ...prevData[2] },
                      { ...prevData[3] },
                      { ...prevData[4], value: e.target.value },
                    ]);
                  }}
                />
              </div>
            </div>
            <div className="german shadow bg-indigo-200">
              <div className="text-2xl text-gray-500 mt-5 mb-5 text-center">
                German
              </div>
              <div className="field  text-gray-400 focus-within:text-indigo-600  m-3">
                <label htmlFor="titleDe">Title:</label>
                <input
                  type="text"
                  className="mt-2 px-4 py-2 border rounded"
                  name="titleDe"
                  value={newDataDe[0].value || ""}
                  onChange={(e) => {
                    setNewDataDe((prevData) => [
                      { ...prevData[0], value: e.target.value },
                      { ...prevData[1] },
                      { ...prevData[2] },
                      { ...prevData[3] },
                      { ...prevData[4] },
                    ]);
                  }}
                />
              </div>
              <div className="field text-gray-400 focus-within:text-indigo-600  m-3">
                <label htmlFor="descriptionDe">Description:</label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded  h-24"
                  name="descriptionDe"
                  value={newDataDe[1].value || ""}
                  onChange={(e) => {
                    setNewDataDe((prevData) => [
                      { ...prevData[0] },
                      { ...prevData[1], value: e.target.value },
                      { ...prevData[2] },
                      { ...prevData[3] },
                      { ...prevData[4] },
                    ]);
                  }}
                />
              </div>
              <div className="field  text-gray-400 focus-within:text-indigo-600  m-3">
                <label htmlFor="needDe">Need:</label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded  h-24"
                  name="needDe"
                  value={newDataDe[2].value || ""}
                  onChange={(e) => {
                    setNewDataDe((prevData) => [
                      { ...prevData[0] },
                      { ...prevData[1] },
                      { ...prevData[2], value: e.target.value },
                      { ...prevData[3] },
                      { ...prevData[4] },
                    ]);
                  }}
                />
              </div>
              <div className="field  text-gray-400 focus-within:text-indigo-600  m-3">
                <label htmlFor="resultDe">Result:</label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded  h-24"
                  name="resultDe"
                  value={newDataDe[3].value || ""}
                  onChange={(e) => {
                    setNewDataDe((prevData) => [
                      { ...prevData[0] },
                      { ...prevData[1] },
                      { ...prevData[2] },
                      { ...prevData[3], value: e.target.value },
                      { ...prevData[4] },
                    ]);
                  }}
                />
              </div>
              <div className="field  text-gray-400 focus-within:text-indigo-600  m-3">
                <label htmlFor="keysinfoDe">Keys:</label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded  h-24"
                  name="keysinfoDe"
                  value={newDataDe[4].value || ""}
                  onChange={(e) => {
                    setNewDataDe((prevData) => [
                      { ...prevData[0] },
                      { ...prevData[1] },
                      { ...prevData[2] },
                      { ...prevData[3] },
                      { ...prevData[4], value: e.target.value },
                    ]);
                  }}
                />
              </div>
            </div>
            <div className="spain shadow bg-green-200">
              <div className="text-2xl text-gray-500 mt-5 mb-5 text-center">
                Spain
              </div>
              <div className="field  text-gray-400 focus-within:text-green-600  m-3">
                <label htmlFor="titleEs">Title:</label>
                <input
                  type="text"
                  className="mt-2 px-4 py-2 border rounded"
                  name="titleEs"
                  value={newDataEs[0].value || ""}
                  onChange={(e) => {
                    setNewDataEs((prevData) => [
                      { ...prevData[0], value: e.target.value },
                      { ...prevData[1] },
                      { ...prevData[2] },
                      { ...prevData[3] },
                      { ...prevData[4] },
                    ]);
                  }}
                />
              </div>
              <div className="field text-gray-400 focus-within:text-green-600  m-3">
                <label htmlFor="descriptionEs">Description:</label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded  h-24"
                  name="descriptionEs"
                  value={newDataEs[1].value || ""}
                  onChange={(e) => {
                    setNewDataEs((prevData) => [
                      { ...prevData[0] },
                      { ...prevData[1], value: e.target.value },
                      { ...prevData[2] },
                      { ...prevData[3] },
                      { ...prevData[4] },
                    ]);
                  }}
                />
              </div>
              <div className="field  text-gray-400 focus-within:text-green-600  m-3">
                <label htmlFor="needEs">Need:</label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded  h-24"
                  name="needEs"
                  value={newDataEs[2].value || ""}
                  onChange={(e) => {
                    setNewDataEs((prevData) => [
                      { ...prevData[0] },
                      { ...prevData[1] },
                      { ...prevData[2], value: e.target.value },
                      { ...prevData[3] },
                      { ...prevData[4] },
                    ]);
                  }}
                />
              </div>
              <div className="field  text-gray-400 focus-within:text-green-600  m-3">
                <label htmlFor="resultEs">Result:</label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded  h-24"
                  name="resultEs"
                  value={newDataEs[3].value || ""}
                  onChange={(e) => {
                    setNewDataEs((prevData) => [
                      { ...prevData[0] },
                      { ...prevData[1] },
                      { ...prevData[2] },
                      { ...prevData[3], value: e.target.value },
                      { ...prevData[4] },
                    ]);
                  }}
                />
              </div>
              <div className="field  text-gray-400 focus-within:text-green-600  m-3">
                <label htmlFor="keysinfoEs">Keys:</label>
                <textarea
                  type="text"
                  className="mt-2 px-4 py-2 border rounded h-24"
                  name="keysinfoEs"
                  value={newDataEs[4].value || ""}
                  onChange={(e) => {
                    setNewDataEs((prevData) => [
                      { ...prevData[0] },
                      { ...prevData[1] },
                      { ...prevData[2] },
                      { ...prevData[3] },
                      { ...prevData[4], value: e.target.value },
                    ]);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

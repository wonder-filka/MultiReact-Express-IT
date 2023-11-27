import React, { useState, useEffect, useContext } from "react";
import Navigation from "../../components/Navigation";
import { Navigate } from "react-router-dom";
import "../../App.css";
import axios from "axios";
import { CurrentUserContext } from "../../contexts/currentUser";

export const AddCase = () => {
  const [currentUserState] = useContext(CurrentUserContext);
  const [cases, setCases] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  const [imgMainFile, setImgMainFile] = useState(null);
  const [imgCaseFile, setImgCaseFile] = useState(null);
  const nextCaseNumber = cases.length + 1;
  const caseData = {
    title: `${nextCaseNumber} case title`,
    descript: `${nextCaseNumber} case descript`,
    need: `${nextCaseNumber} case need`,
    result: `${nextCaseNumber} case result`,
    keysinfo: `${nextCaseNumber} case keysinfo`,
    imgMain: `http://localhost:3001/back_case${nextCaseNumber}.png`,
    imgCase: `http://localhost:3001/case${nextCaseNumber}.png`,
  };
  const [dataEn, setDataEn] = useState([
    { keyi18n: ``, value: "" },
    { keyi18n: ``, value: "" },
    { keyi18n: ``, value: "" },
    { keyi18n: ``, value: "" },
    { keyi18n: ``, value: "" },
  ]);
  const [dataDe, setDataDe] = useState([
    { keyi18n: ``, value: "" },
    { keyi18n: ``, value: "" },
    { keyi18n: ``, value: "" },
    { keyi18n: ``, value: "" },
    { keyi18n: ``, value: "" },
  ]);
  const [dataEs, setDataEs] = useState([
    { keyi18n: ``, value: "" },
    { keyi18n: ``, value: "" },
    { keyi18n: ``, value: "" },
    { keyi18n: ``, value: "" },
    { keyi18n: ``, value: "" },
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/cases")
      .then((response) => setCases(response.data))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    setDataEn([
      { keyi18n: `${caseData.title}`, value: "" },
      { keyi18n: `${caseData.descript}`, value: "" },
      { keyi18n: `${caseData.need}`, value: "" },
      { keyi18n: `${caseData.result}`, value: "" },
      { keyi18n: `${caseData.keysinfo}`, value: "" },
    ]);
    setDataDe([
      { keyi18n: `${caseData.title}`, value: "" },
      { keyi18n: `${caseData.descript}`, value: "" },
      { keyi18n: `${caseData.need}`, value: "" },
      { keyi18n: `${caseData.result}`, value: "" },
      { keyi18n: `${caseData.keysinfo}`, value: "" },
    ]);
    setDataEs([
      { keyi18n: `${caseData.title}`, value: "" },
      { keyi18n: `${caseData.descript}`, value: "" },
      { keyi18n: `${caseData.need}`, value: "" },
      { keyi18n: `${caseData.result}`, value: "" },
      { keyi18n: `${caseData.keysinfo}`, value: "" },
    ]);
  }, [
    nextCaseNumber,
    caseData.descript,
    caseData.keysinfo,
    caseData.need,
    caseData.result,
    caseData.title,
  ]);

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
    formData.append(`back_case${cases.length + 1}.png`, imgMainFile);
    formData.append(`case${cases.length + 1}.png`, imgCaseFile);
    axios
      .post("http://localhost:3001/save-files", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .post("http://localhost:3001/add-case", {
        caseData,
        dataEn,
        dataDe,
        dataEs,
      })
      .then((response) => {
        console.log(response.data); //
      })
      .catch((error) => {
        console.error(error); //
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
      <div className="AddCase bg-white flex ">
        {isSaved && (
          <div className="saved bg-white border border-grey-900 rounded-lg shadow font-light ">
            Saved
          </div>
        )}
        <Navigation />
        <div className="p-5 w-screen">
          <div className="flex justify-between items-center">
            <p className="text-3xl text-gray-700 font-bold m-1 p-5">Add Case</p>
            <button
              onClick={handleSaveButtonClick}
              className="ml-5 bg-blue-400 hover:bg-blue-500 text-white font-bold m-5 py-2 px-4  rounded"
            >
              Save
            </button>
          </div>
          <div className="send-img flex p-1 pb-3">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            <div className="english shadow bg-purple-200">
              <div className="text-2xl text-gray-500 mt-5 mb-5 text-center">
                English
              </div>
              <div className="field  text-gray-400 focus-within:text-purple-600 m-3">
                <label htmlFor="titleEn">Title:</label>
                <input
                  type="text"
                  className="mt-2 px-4 py-2 border rounded"
                  name="titleEn"
                  placeholder="Title"
                  onChange={(e) => {
                    setDataEn((prevData) => [
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
                  placeholder="Description"
                  onChange={(e) => {
                    setDataEn((prevData) => [
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
                  placeholder="Need"
                  onChange={(e) => {
                    setDataEn((prevData) => [
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
                  placeholder="Result"
                  onChange={(e) => {
                    setDataEn((prevData) => [
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
                  placeholder="Keys"
                  onChange={(e) => {
                    setDataEn((prevData) => [
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
                  placeholder="Title"
                  onChange={(e) => {
                    setDataDe((prevData) => [
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
                  placeholder="Description"
                  onChange={(e) => {
                    setDataDe((prevData) => [
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
                  placeholder="Need"
                  onChange={(e) => {
                    setDataDe((prevData) => [
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
                  placeholder="Result"
                  onChange={(e) => {
                    setDataDe((prevData) => [
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
                  placeholder="Keys"
                  onChange={(e) => {
                    setDataDe((prevData) => [
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
                  placeholder="Title"
                  onChange={(e) => {
                    setDataEs((prevData) => [
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
                  placeholder="Description"
                  onChange={(e) => {
                    setDataEs((prevData) => [
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
                  placeholder="Need"
                  onChange={(e) => {
                    setDataEs((prevData) => [
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
                  placeholder="Result"
                  onChange={(e) => {
                    setDataEs((prevData) => [
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
                  placeholder="Keys"
                  onChange={(e) => {
                    setDataEs((prevData) => [
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

        {/* <div className="add-block justify-items-center content-center">
          <div className="flex flex-wrap justify-center content-center">
            <button class="mr-1 border-b-4 border-black-900  p-8 inline-block py-2 px-4">
              English
            </button>
            <button class="mr-1 border-b-4 border-black-900  p-8 inline-block py-2 px-4">
              German
            </button>
            <button class="border-b-4 border-black-900  p-8 inline-block py-2 px-4">
              Spain
            </button>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-7/12">
              <label
                class="mt-5 block text-gray-700 text-sm font-bold mb-2"
                for="title"
              >
                Title
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                placeholder="Title"
              ></input>
              <label
                class="mt-5 block text-gray-700 text-sm font-bold mb-2"
                for="need"
              >
                Need
              </label>
              <textarea
                class="h-24 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="need"
                type="text"
                placeholder="Need"
              ></textarea>
              <label
                class="mt-5 block text-gray-700 text-sm font-bold mb-2"
                for="result"
              >
                Result
              </label>
              <textarea
                class="h-24 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="result"
                type="text"
                placeholder="Result"
              ></textarea>
              <label
                class="mt-5 block text-gray-700 text-sm font-bold mb-2"
                for="keys"
              >
                Keys
              </label>
              <textarea
                class="h-24 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="keys"
                type="text"
                Keys
                placeholder="Keys"
              ></textarea>
            </div>
          </div>
          <div className="send-img p-3 flex flex-wrap justify-center ml-24">
            <div className="picItem">
              <div className="font-bold mb-1">Add head image</div>
              <form encType="multipart/form-data" className="flex items-center">
                <input type="file" name="fileHead" className=" py-2 px-3" />
              </form>
            </div>
            <div className="picItem">
              <div className="font-bold  mb-1">Add block image</div>
              <form encType="multipart/form-data" className="flex items-center">
                <input type="file" name="fileBlock" className=" py-2 px-3" />
              </form>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
};

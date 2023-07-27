/** @format */

import React, { useState } from "react";
import Sidebar from "../component/Sidebar";
import UploadImage from "../component/upload/UploadImage";
import PersonalInformation from "../component/information/PersonalInformation";
import { Checkbox, Input, Switch } from "antd";
import { RiAddFill } from "react-icons/ri";
import SingleQuestion from "../component/questionsModals/ModalShortAnswer";
import SelectQuestionsModal from "../component/questionsModals/SelectQuestionsModal";
import ModalParagraph from "../component/questionsModals/ModalParagraph";
import ModalShortAnswer from "../component/questionsModals/ModalShortAnswer";
import VideoBasedQuestionsModal from "../component/questionsModals/VideoBasedQuestionsModal";
import DropdownQuestionModal from "../component/questionsModals/DropdownQuestionModal";
import { postUrl } from "../api"; 
import axios from "axios";

function SignUp() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [personalData, setPersonalData] = useState({
    file: "",
    firstName: "",
    email: "",
    lastName: "",
    phone: "",
    nationality: "",
    currentResidence: "",
    idNumber: "",
    dateOfBirth: "",
    gender: "",
    education: "",
    experience: "",
    resume: "",
  });

  const programId= 'y9lu1wqa4bc0w'
  const version = '1.0'

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setPersonalData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async() => {
    console.log("Personal Data:", personalData);
        try {
            let response = await axios.request({
                method: "POST",
                url: postUrl(version, programId),
				data: personalData,
                headers: {
                    "Access-Control-Allow-Origin": "*",
					'Content-Type': 'application/json',
                },
            });
            if (response.data) {
            }
        } catch (err) {
        }
    };

  const [selectQmodal, setSelectQmodal] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (selected) => {
    setSelectedOption(selected.value);
  };

  const renderModal = () => {
    switch (selectedOption) {
      case "Paragraph":
        return <ModalParagraph setSelectedOption={setSelectedOption} />;
      case "Short answer":
        return <ModalShortAnswer setSelectedOption={setSelectedOption} />;
      case "Video question":
        return (
          <VideoBasedQuestionsModal setSelectedOption={setSelectedOption} />
        );
      case "Dropdown":
        return <DropdownQuestionModal setSelectedOption={setSelectedOption} />;
      default:
        return null;
    }
  };

  return (
    <main>
      <div className="flex bg-[#F9FAFF]">
        <Sidebar />
        <main className="flex-1 h-screen overflow-x-hidden overflow-y-scroll">
          <nav className="mt-10 shadow">
            <div className="grid grid-cols-4  bg-white    justify-around">
              <div className="flex justify-center py-10 border-r">
                Program Details
              </div>
              <div className="flex justify-center clip py-10 bg-[#00635B] text-white border-r ">
                Application Form
              </div>
              <div className="flex justify-center py-10 border-r">Workflow</div>
              <div className="flex justify-center py-10 ">Preview</div>
            </div>
          </nav>
          <section className="p-5">
            <UploadImage
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
            />

            <PersonalInformation
              personalData={personalData}
              setPersonalData={setPersonalData}
              handleChangeInput={handleChangeInput}
              setSelectQmodal={setSelectQmodal}
            />

            <div className="bg-white w-2/5 mt-4 shadow rounded-lg overflow-hidden">
              <div className="bg-[#D0F7FA] p-3 py-4">
                <b>Profile</b>
              </div>
              <div className="mt-8 px-6">
                <div className="flex justify-between items-center">
                  <label htmlFor="first_name" className="font-bold ">
                    Education
                  </label>
                  <div className="flex items-center gap-8">
                    <Checkbox>Mandatory</Checkbox>
                    <label htmlFor="hide" className="text-gray-400">
                      {" "}
                      <Switch className="mr-4" />
                      hide
                    </label>
                  </div>
                </div>
                <Input
                  type="text"
                  className="outline-none border-white border-b-[#C4C4C4] rounded-none mb-4 w-full"
                />
                <div className="flex justify-between items-center">
                  <label htmlFor="first_name" className="font-bold ">
                    Experience
                  </label>
                  <div className="flex items-center gap-8">
                    <Checkbox>Mandatory</Checkbox>
                    <label htmlFor="hide" className="text-gray-400">
                      {" "}
                      <Switch className="mr-4" />
                      hide
                    </label>
                  </div>
                </div>
                <Input
                  type="text"
                  className="outline-none border-white border-b-[#C4C4C4] rounded-none mb-4 w-full"
                />
                <div className="flex justify-between items-center">
                  <label htmlFor="first_name" className="font-bold ">
                    Resume
                  </label>
                  <div className="flex items-center gap-8">
                    <Checkbox checked>Mandatory</Checkbox>
                    <label htmlFor="hide" className="text-gray-400">
                      {" "}
                      <Switch className="mr-4" />
                      hide
                    </label>
                  </div>
                </div>
                <Input
                  type="text"
                  className="outline-none border-white border-b-[#C4C4C4] rounded-none mb-4 w-full"
                />

                <button
                  onClick={() => setSelectQmodal(true)}
                  className="flex items-center font-semibold ml-2 mb-5"
                >
                  <RiAddFill className="text-2xl font-bold" />
                  Add a question
                </button>
              </div>
            </div>
            <div className="my-10">
              <button
                type="submit"
                className="bg-[#087B2F] px-4 py-2 text-white rounded-md"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </section>

          {selectQmodal && (
            <SelectQuestionsModal
              handleChange={handleChange}
              setSelectQmodal={setSelectQmodal}
            />
          )}
          {renderModal()}
        </main>
      </div>
    </main>
  );
}

export default SignUp;

/** @format */

import React, { useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import UploadImage from "../component/upload/UploadImage";
import PersonalInformation from "../component/information/PersonalInformation";
import { Checkbox, Input, Switch, message } from "antd";
import { RiAddFill } from "react-icons/ri";
import SingleQuestion from "../component/questionsModals/ModalShortAnswer";
import SelectQuestionsModal from "../component/questionsModals/SelectQuestionsModal";
import ModalParagraph from "../component/questionsModals/ModalParagraph";
import ModalShortAnswer from "../component/questionsModals/ModalShortAnswer";
import VideoBasedQuestionsModal from "../component/questionsModals/VideoBasedQuestionsModal";
import DropdownQuestionModal from "../component/questionsModals/DropdownQuestionModal";
import { v4 as uuidv4 } from "uuid";
import dataService from "../services/appData";
import Profile from "../component/information/Profile";

function SignUp() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
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
  const [payload, setPayload] = useState({});
  const { attributes } = payload;
  console.log("payload", payload);
  console.log("attributes", attributes);

  function generateId() {
    return uuidv4();
  }

  //api all to fetech the available payload record

  const getPayload = async () => {
    try {
      const response = await dataService.getPayload();
      setPayload(response.data);
    } catch (err) {
      //catch the error that occured in this process here.
    }
  };
  const [personalInfoOtherOption, setPersonalInfoOtherOption] = useState(false);
  const [personalInfoOtherOption2, setPersonalInfoOtherOption2] = useState(false);
  console.log("personalInfoOtherOption", personalInfoOtherOption);
  const [question, setQuestion] = useState({
    id: "",
    type: "",
    question: "",
    choices: [""],
    maxChoice: 0,
    disqualify: false,
    other: false,
  });

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setPersonalData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function addQuestion(addedQuestions) {
    if (addedQuestions === "personalQuestions") {
      let question1 = payload.attributes.personalInformation.personalQuestions;
      question1 = [...question1, { ...question, id: generateId() }];
      payload.attributes.personalInformation.personalQuestions = question1;
      setPayload(payload);
    } else if (addedQuestions === "profileQuestions") {
      let question2 = payload.attributes.profile.profileQuestions;
      question2 = [...question2, { ...question, id: generateId() }];
      payload.attributes.profile.profileQuestions = question2;
      setPayload(payload);
    }
  }

  const savePersonalQuest = () => {
    console.log("saveee");
    let PersonalQuest =
      payload.attributes.personalInformation.personalQuestions;
    PersonalQuest = [...PersonalQuest, { ...question, other: true }];
    console.log("PersonalQuest", PersonalQuest);

    setPayload({
      ...payload.attributes.personalInformation.personalQuestions,
      ...PersonalQuest,
    });
  };

  function ValidationImg() {
    if (!payload.attributes.coverImage) {
      return "Please upload an image";
    }
    return;
  }

  const handleSubmit = async () => {
    const validate = ValidationImg();
    if (validate) {
      return message.error(validate);
    }

    setLoading(true);
    try {
      const res = await dataService.upadatePayload(payload);
      message.success("Information captured succesfully");
      console.log("res", res);
    } catch (err) {
      message.error("Oops!, failed");
    }
    setLoading(false);
  };

  const [selectQmodal, setSelectQmodal] = useState(false);
  const [select, setSelect] = useState(false);
  const [selectProfileQuest, setSelectProfileQuest] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedProfileOption, setSelectedProfileOption] = useState("");

  //function that keeps track of the selected question values
  const handleChange = (selected) => {
    setSelectedOption(selected.value);
  };

  const handleChange2 = (selected) => {
    setSelectedProfileOption(selected.value);
  };

  // const renderModal = () => {
  //   switch (selectedOption) {
  //     case "Paragraph":
  //       return <ModalParagraph setSelectedOption={setSelectedOption} />;
  //     case "Short answer":
  //       return <ModalShortAnswer setSelectedOption={setSelectedOption} />;
  //     case "Video question":
  //       return (
  //         <VideoBasedQuestionsModal setSelectedOption={setSelectedOption} />
  //       );
  //     case "Dropdown":
  //       return <DropdownQuestionModal setSelectedOption={setSelectedOption} />;
  //     default:
  //       return null;
  //   }
  // };

  useEffect(() => {
    //call the get method on page load.
    getPayload();
  }, [selectedImage]);

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
              addQuestion={addQuestion}
              payload={payload}
              setPayload={setPayload}
            />

            <PersonalInformation
              personalData={personalData}
              attributes={attributes}
              handleChangeInput={handleChangeInput}
              setSelect={setSelect}
              select={select}
              addQuestion={addQuestion}
              handleChange={handleChange}
              setSelectedOption={setSelectedOption}
              setPayload={setPayload}
              payload={payload}
              setPersonalInfoOtherOption={setPersonalInfoOtherOption}
              savePersonalQuest={savePersonalQuest}
            />

            <Profile
              attributes={attributes}
              setSelectProfileQuest={setSelectProfileQuest}
              selectProfileQuest={selectProfileQuest}
              setSelectedProfileOption={setSelectedProfileOption}
              handleChange2={handleChange2}
              setPersonalInfoOtherOption={setPersonalInfoOtherOption2}
              payload={payload}
              addQuestion={addQuestion}
            />
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

          {/* {selectQmodal && (
            <SelectQuestionsModal
              handleChange={handleChange}
              setSelectQmodal={setSelectQmodal}
            />
          )}
          {renderModal()} */}
        </main>
      </div>
    </main>
  );
}

export default SignUp;

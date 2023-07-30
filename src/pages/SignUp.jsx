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
import { v4 as uuidv4 } from 'uuid';
import dataService from "../services/appData";

function SignUp() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false)
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
  const [payload, setPayload] = useState({})
  const {attributes} = payload
  console.log('payload', payload)
  console.log('attributes', attributes)

  function generateId() {
    return uuidv4();
  }

  //api all to fetech the available payload record

  const getPayload = async()=>{
    try{
      const response = await dataService.getPayload()
      setPayload(response.data)
    }catch(err){
      //catch the error that occured in this process here.
    }
  }

  useEffect(()=>{
    //call the get method on page load.
    getPayload();
  },[])

  const [question, setQuestion] = useState({
    "id": "",
    "type": "",
    "question": "",
    "choices": [""],
    "maxChoice": 0,
    "disqualify": false,
    "other": false
  })

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setPersonalData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function addQuestion(params) {
    if(params == '1'){
      let question0 = payload.attributes.coverImage
      question0 = [...question0, {...question, id: generateId()}];
        payload.attributes.coverImage = question0;
        setPayload(payload);
    }else if(params == '2'){
      let question1 = payload.attributes.personalInformation.personalQuestions
      question1 = [...question1, {...question, id: generateId()}];
        payload.attributes.personalInformation.personalQuestions = question1;
        setPayload(payload);
    }else if(params == '3'){
      let question2 = payload.attributes.profile.profileQuestions
      question2 = [...question2, {...question, id: generateId()}];
        payload.attributes.profile.profileQuestions = question2;
        setPayload(payload);
    }
  }

  function ValidationImg() {
    if (!payload.attributes.coverImage) {
      return "Please upload an image"
    }
    return
  }

  const handleSubmit = async() => {
    const validate = ValidationImg()
    if (validate) {
      return message.error(validate);
    }

    setLoading(true);
    try {
      // const res = await SubmitPayload(payload);
      message.success("Information captured succesfully");
      // console.log("res", res);
      
    } catch (err) {
      message.error("Oops!, failed")
    }
    setLoading(false);
    };

  const [selectQmodal, setSelectQmodal] = useState(false);
  const [select, setSelect] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  console.log('selectedOption', selectedOption)

  //function that keeps track of the selected question values
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
              addQuestion={addQuestion}
            />

            <PersonalInformation
              personalData={personalData}
              attributes={attributes}
              handleChangeInput={handleChangeInput}
              setSelect={setSelect}
              select={select}
              addQuestion={addQuestion}
              handleChange={handleChange}
            />

            <div className="bg-white w-2/5 mt-4 shadow rounded-lg overflow-hidden">
              <div className="bg-[#D0F7FA] p-3 py-4">
              <span className="font-medium">Profile</span>
              </div>
              <div className="mt-8 px-6">
                <div className="flex justify-between items-center">
                  <label htmlFor="first_name" className="font-medium ">
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
                  <label htmlFor="first_name" className="font-medium ">
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
                  <label htmlFor="first_name" className="font-medium ">
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
                  onClick={() => {
                    setSelectQmodal(true)
                    addQuestion(3)
                  }}
                  className="flex items-center font-semibold ml-2 mb-5"
                >
                  <RiAddFill className="text-2xl font-medium" />
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

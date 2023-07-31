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
import CustomizationQuestion from "../component/information/CustomizationQuestions";

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
  console.log('payload', payload)
  const { attributes } = payload;

  //generating the uuid for the new questions added
  function generateId() {
    return uuidv4();
  }

  //api all to fetech the available payload record

  const getPayload = async () => {
    try {
      const response = await dataService.getPayload();
      setPayload(response.data);
    } catch (err) {
      message.error("Oops!, failed to fetch payload");
      //catch the error that occured in this process here.
    }
  };
  const [personalInfoOtherOption, setPersonalInfoOtherOption] = useState(false);
  const [personalInfoOtherOption2, setPersonalInfoOtherOption2] =
    useState(false);
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
    }else if (addedQuestions === "customisedQuestions") {
      let question3 = payload.attributes.customisedQuestions;
      question3 = [...question3, { ...question, id: generateId() }];
      payload.attributes.customisedQuestions = question3;
      setPayload(payload);
    }
  }

  const savePersonalQuest = (id) => {};

  function ValidationImg() {
    if (!payload.attributes.coverImage) {
      return "Please upload an image";
    }
    return;
  }

  const handleSubmit = async () => {
    // const validate = ValidationImg();
    // if (validate) {
    //   return message.error(validate);
    // }

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

  // const [selectQmodal, setSelectQmodal] = useState(false);
  const [select, setSelect] = useState(false);
  const [selectCustomQuest, setSelectCustomQuest] = useState(false);
  const [selectProfileQuest, setSelectProfileQuest] = useState(false);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    //call the get method on page load.
    getPayload();
  }, [selectedImage, refetch]);

  return (
    <main>
      <div className="flex bg-[#F9FAFF]">
        <Sidebar />
        <main className="flex-1 h-screen overflow-x-hidden overflow-y-scroll">
          <nav className="mt-10 shadow zoom">
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
          <section className="p-5 zoom">
            <UploadImage
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
              addQuestion={addQuestion}
              payload={payload}
              setPayload={setPayload}
            />

            <PersonalInformation
              personalData={personalData}
              attributes={payload?.attributes}
              handleChangeInput={handleChangeInput}
              setSelect={setSelect}
              select={select}
              addQuestion={addQuestion}
              setPayload={setPayload}
              payload={payload}
              setPersonalInfoOtherOption={setPersonalInfoOtherOption}
              savePersonalQuest={savePersonalQuest}
              setRefetch={setRefetch}
              refetch={refetch}
              handleSubmit={handleSubmit}
            />

            <Profile
              attributes={attributes}
              setSelectProfileQuest={setSelectProfileQuest}
              selectProfileQuest={selectProfileQuest}
              setPersonalInfoOtherOption={setPersonalInfoOtherOption2}
              payload={payload}
              setPayload={setPayload}
              addQuestion={addQuestion}
              setRefetch={setRefetch}
              handleSubmit={handleSubmit}
              refetch={refetch}
            />

            {!selectCustomQuest ? (
              <>
                {attributes?.customisedQuestions?.length > 0 &&
                  attributes?.customisedQuestions.map(
                    (customisedQuestion, i) => (
                      <CustomizationQuestion
                        setSelect={setSelectCustomQuest}
                        customisedQuestion={customisedQuestion}
                        setPersonalInfoOtherOption={setPersonalInfoOtherOption}
                        payload={payload}
                        setPayload={setPayload}
                        setRefetch={setRefetch}
                        refetch={refetch}
                        handleSubmit={handleSubmit}
                        index={i}
                      />
                    )
                  )}
                <button
                  onClick={() => {
                    setSelectCustomQuest(true);
                    addQuestion("customisedQuestions");
                  }}
                  className="flex items-center font-semibold ml-2 mb-5"
                >
                  <RiAddFill className="text-2xl font-medium" />
                  Add a question
                </button>
              </>
            ) : (
              attributes?.customisedQuestions?.length > 0 &&
              attributes?.customisedQuestions.map((customisedQuestion, i) => (
                <CustomizationQuestion
                  setSelect={setSelectCustomQuest}
                  customisedQuestion={customisedQuestion}
                  setPersonalInfoOtherOption={setPersonalInfoOtherOption}
                  payload={payload}
                  setPayload={setPayload}
                  setRefetch={setRefetch}
                  refetch={refetch}
                  handleSubmit={handleSubmit}
                  index={i}
                />
              ))
            )}

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

        </main>
      </div>
    </main>
  );
}

export default SignUp;

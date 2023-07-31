/** @format */

import { Checkbox, Input, Select, Switch } from "antd";
import React from "react";
import { RiAddFill } from "react-icons/ri";
import SelectQuestion from "../questions/SelectProfileQuestions";

function Profile({
  attributes,
  addQuestion,
  setSelectProfileQuest,
  selectProfileQuest,
  setSelectedProfileOption,
  setPersonalInfoOtherOption,
  setPayload,
  payload,
  setRefetch,
  refetch,
  handleSubmit
}) {
  return (
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
            <Checkbox 
              // checked={attributes?.profile?.education?.mandatory}
              >
              Mandatory
            </Checkbox>
            <label htmlFor="hide" className="text-gray-400">
              {" "}
              <Switch
                className="mr-4"
                // checked={attributes?.profile?.education?.show}
              />
              {attributes?.profile?.education?.show ? "show" : "hide"}
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
            <Checkbox checked={attributes?.profile?.experience?.mandatory}>
              Mandatory
            </Checkbox>
            <label htmlFor="hide" className="text-gray-400">
              {" "}
              <Switch
                className="mr-4"
                checked={attributes?.profile?.experience?.show}
              />
              {attributes?.profile?.experience?.show ? "show" : "hide"}
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
            <Checkbox checked={attributes?.profile?.resume?.mandatory}>
              Mandatory
            </Checkbox>
            <label htmlFor="hide" className="text-gray-400">
              {" "}
              <Switch
                className="mr-4"
                checked={attributes?.profile?.resume?.show}
              />
              {attributes?.profile?.resume?.show ? "show" : "hide"}
            </label>
          </div>
        </div>
        <Input
          type="text"
          className="outline-none border-white border-b-[#C4C4C4] rounded-none mb-4 w-full"
        />
      {!selectProfileQuest ?  
         <>
        {attributes?.profile?.profileQuestions?.length > 0 &&
          attributes?.profile?.profileQuestions.map((profileQuestion, i) => (
            <div className="mb-7">
              <SelectQuestion
                setSelect={setSelectProfileQuest}
                profileQuestion={profileQuestion}
                setPersonalInfoOtherOption={setPersonalInfoOtherOption}
                payload={payload}
                setPayload={setPayload}
                index={i}
                setRefetch={setRefetch}
               refetch={refetch}
               handleSubmit={handleSubmit}
              />
            </div>
          ))}

        <button
          onClick={() => {
            setSelectProfileQuest(true);
            addQuestion("profileQuestions");
          }}
          className="flex items-center font-semibold ml-2 mb-5"
        >
          <RiAddFill className="text-2xl font-medium" />
          Add a question
        </button>
        </> : 
        attributes?.profile?.profileQuestions?.length > 0 &&
        attributes?.profile?.profileQuestions.map((profileQuestion, i) => (
          <div className="mb-7">
            <SelectQuestion
              setSelect={setSelectProfileQuest}
              profileQuestion={profileQuestion}
              setPersonalInfoOtherOption={setPersonalInfoOtherOption}
              payload={payload}
              setPayload={setPayload}
              index={i}
              setRefetch={setRefetch}
               refetch={refetch}
               handleSubmit={handleSubmit}
            />
          </div>
        ))
        }
      </div>
    </div>
  );
}

export default Profile;

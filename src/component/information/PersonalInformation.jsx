/** @format */

import { Checkbox, Input, Select, Switch } from "antd";
import React from "react";
import { RiAddFill } from "react-icons/ri";
import SelectQuestion from "../questions/SelectPersonalInfoQuestions";

function PersonalInformation({
  personalData,
  handleChangeInput,
  setSelect,
  addQuestion,
  attributes,
  select,
  setSelectedOption,
  setPayload,
  payload,
  setPersonalInfoOtherOption,
  personalInfoOtherOption,
  savePersonalQuest,
  setRefetch,
  refetch,
  handleSubmit
}) {
  return (
    <div className="bg-white w-2/5 mt-4 shadow rounded-lg overflow-hidden">
      <div className="bg-[#D0F7FA] mb-4 p-3 py-4">
        <span className="font-medium">Personal Information</span>
      </div>

      <div className="px-6 pb-5">
        <div className="flex justify-between items-center">
          <label htmlFor="first_name" className="font-medium ">
            First Name
          </label>
          <div className="flex items-center gap-8">
            <Checkbox
              checked={attributes?.personalInformation?.firstName?.internalUse}
            >
              Internal
            </Checkbox>
            <label htmlFor="hide" className="text-gray-400">
              {" "}
              <Switch
                className="mr-4"
                checked={attributes?.personalInformation?.firstName?.show}
              />
              {attributes?.personalInformation?.firstName?.show
                ? "show"
                : "hide"}
            </label>
          </div>
        </div>
        <Input
          name="firstName"
          className="outline-none border-white border-b-[#C4C4C4] rounded-none mb-4 w-full"
          value={""}
          onChange={handleChangeInput}
        />
        <div className="flex justify-between items-center">
          <label htmlFor="email" className="font-medium ">
            Email
          </label>
          <div className="flex items-center gap-8">
            <Checkbox
              checked={attributes?.personalInformation?.emailId?.internalUse}
            >
              Internal
            </Checkbox>
            <label htmlFor="hide" className="text-gray-400">
              {" "}
              <Switch
                className="mr-4"
                checked={attributes?.personalInformation?.emailId?.show}
              />
              {attributes?.personalInformation?.emailId?.show ? "show" : "hide"}
            </label>
          </div>
        </div>
        <Input
          value={""}
          onChange={handleChangeInput}
          className="outline-none border-white border-b-[#C4C4C4] rounded-none mb-4 w-full"
        />

        <div className="flex justify-between items-center">
          <label htmlFor="last" className="font-medium ">
            Last Name
          </label>
          <div className="flex items-center gap-8">
            <Checkbox
              checked={attributes?.personalInformation?.lastName?.internalUse}
            >
              Internal
            </Checkbox>
            <label htmlFor="hide" className="text-gray-400">
              {" "}
              <Switch
                className="mr-4"
                checked={attributes?.personalInformation?.lastName?.show}
              />
              {attributes?.personalInformation?.lastName?.show
                ? "show"
                : "hide"}
            </label>
          </div>
        </div>
        <Input
          value={""}
          onChange={handleChangeInput}
          className="outline-none border-white border-b-[#C4C4C4] rounded-none mb-4 w-full"
        />
        <div className="flex justify-between items-center">
          <label htmlFor="first_name" className="font-medium ">
            Phone{" "}
            <span className="font-light text-[11px]">(without dial code)</span>
          </label>
          <div className="flex items-center gap-8">
            <Checkbox
              checked={
                attributes?.personalInformation?.phoneNumber?.internalUse
              }
            >
              Internal
            </Checkbox>
            <label htmlFor="hide" className="text-gray-400">
              {" "}
              <Switch
                className="mr-4"
                checked={attributes?.personalInformation?.phoneNumber?.show}
              />
              {attributes?.personalInformation?.phoneNumber?.show
                ? "show"
                : "hide"}
            </label>
          </div>
        </div>
        <Input
          type="number"
          min={0}
          value={personalData.phone}
          onChange={handleChangeInput}
          className="outline-none border-white border-b-[#C4C4C4] rounded-none mb-4 w-full"
        />
        <div className="flex justify-between items-center">
          <label htmlFor="nationlity" className="font-medium ">
            Nationality
          </label>
          <div className="flex items-center gap-8">
            <Checkbox
              checked={
                attributes?.personalInformation?.nationality?.internalUse
              }
            >
              Internal
            </Checkbox>
            <label htmlFor="hide" className="text-gray-400">
              {" "}
              <Switch
                checked={attributes?.personalInformation?.nationality?.show}
                className="mr-4"
              />
              {attributes?.personalInformation?.nationality?.show
                ? "show"
                : "hide"}
            </label>
          </div>
        </div>
        <Input
          value={""}
          onChange={handleChangeInput}
          className="outline-none border-white border-b-[#C4C4C4] rounded-none mb-4 w-full"
        />
        <div className="flex justify-between items-center">
          <label htmlFor="current_residence" className="font-medium ">
            Current Residence
          </label>
          <div className="flex items-center gap-8">
            <Checkbox
              checked={
                attributes?.personalInformation?.currentResidence?.internalUse
              }
            >
              Internal
            </Checkbox>
            <label htmlFor="hide" className="text-gray-400">
              {" "}
              <Switch
                className="mr-4"
                checked={
                  attributes?.personalInformation?.currentResidence?.show
                }
              />
              {attributes?.personalInformation?.currentResidence?.show
                ? "show"
                : "hide"}
            </label>
          </div>
        </div>
        <Input
          value={""}
          onChange={handleChangeInput}
          className="outline-none border-white border-b-[#C4C4C4] rounded-none mb-4 w-full"
        />
        <div className="flex justify-between items-center">
          <label htmlFor="id_number" className="font-medium ">
            ID Number
          </label>
          <div className="flex items-center gap-8">
            <Checkbox
              checked={attributes?.personalInformation?.idNumber?.internalUse}
            >
              Internal
            </Checkbox>
            <label htmlFor="hide" className="text-gray-400">
              {" "}
              <Switch
                className="mr-4"
                checked={attributes?.personalInformation?.idNumber?.show}
              />
              {attributes?.personalInformation?.idNumber?.show
                ? "show"
                : "hide"}
            </label>
          </div>
        </div>
        <Input
          value={""}
          onChange={handleChangeInput}
          className="outline-none border-white border-b-[#C4C4C4] rounded-none mb-4 w-full"
        />
        <div className="flex justify-between items-center">
          <label htmlFor="dob" className="font-medium ">
            Date of Birth
          </label>
          <div className="flex items-center gap-8">
            <Checkbox
              checked={
                attributes?.personalInformation?.dateOfBirth?.internalUse
              }
            >
              Internal
            </Checkbox>
            <label htmlFor="hide" className="text-gray-400">
              {" "}
              <Switch
                className="mr-4"
                checked={attributes?.personalInformation?.dateOfBirth?.show}
              />
              {attributes?.personalInformation?.dateOfBirth?.show
                ? "show"
                : "hide"}
            </label>
          </div>
        </div>
        <Input
          value={""}
          onChange={handleChangeInput}
          className="outline-none border-white border-b-[#C4C4C4] rounded-none mb-4 w-full"
        />
        <div className="flex justify-between items-center">
          <label htmlFor="gender" className="font-medium ">
            Gender
          </label>
          <div className="flex items-center gap-8">
            <Checkbox
              checked={attributes?.personalInformation?.gender?.internalUse}
            >
              Internal
            </Checkbox>
            <label htmlFor="hide" className="text-gray-400">
              {" "}
              <Switch
                className="mr-4"
                checked={attributes?.personalInformation?.gender?.show}
              />
              {attributes?.personalInformation?.gender?.show ? "show" : "hide"}
            </label>
          </div>
        </div>
        <Input
          value={personalData.gender}
          onChange={handleChangeInput}
          className="outline-none border-white border-b-[#C4C4C4] rounded-none mb-4 w-full"
        />
      </div>
      {!select ?  
      <>
      {attributes?.personalInformation?.personalQuestions?.length > 0 &&
       attributes?.personalInformation?.personalQuestions.map((personalQuestion, i)=>(
        <div className="mb-7 p-4">
          <SelectQuestion
            setSelect={setSelect}
            personalQuestion={personalQuestion}
            setPayload={setPayload}
            payload={payload}
            setPersonalInfoOtherOption={setPersonalInfoOtherOption}
            personalInfoOtherOption={personalInfoOtherOption}
            savePersonalQuest={savePersonalQuest}
            index={i}
            setRefetch={setRefetch}
            refetch={refetch}
            handleSubmit={handleSubmit}
          />
          </div>
       )) 
      }
        <button
          className="flex items-center font-semibold ml-4 mb-5"
          onClick={() => {
            addQuestion('personalQuestions');
            setSelect(true);
          }}
        >
          <RiAddFill className="text-2xl font-medium" />
          Add a question
        </button>
        </>
        :
        attributes?.personalInformation?.personalQuestions?.length > 0 &&
          attributes?.personalInformation?.personalQuestions.map((personalQuestion, i)=>(
           <div className="mb-7 p-4">
             <SelectQuestion
               setSelect={setSelect}
               personalQuestion={personalQuestion}
               setPayload={setPayload}
               payload={payload}
               setPersonalInfoOtherOption={setPersonalInfoOtherOption}
               savePersonalQuest={savePersonalQuest}
               index={i}
               setRefetch={setRefetch}
               refetch={refetch}
               handleSubmit={handleSubmit}
             />
             </div>
          )) 
         }
    </div>
  );
}

export default PersonalInformation;

/** @format */

import { Checkbox, Input, Switch } from "antd";
import React from "react";
import { RiAddFill } from "react-icons/ri";

function PersonalInformation({
  personalData,
  handleChangeInput,
  setSelectQmodal,
}) {
  return (
    <div className="bg-white w-2/5 mt-4 shadow rounded-lg overflow-hidden">
      <div className="bg-[#D0F7FA] mb-4 p-3 py-4">
        <b>Personal Information</b>
      </div>

      <div className="px-6 pb-5">
        <label htmlFor="first_name" className="font-bold">
          First Name
        </label>
        <br />
        <Input
          name="firstName"
          className="outline-none border-white border-b-[#C4C4C4] rounded-none mb-4 w-full"
          value={personalData.firstName}
          onChange={handleChangeInput}
        />
        <label htmlFor="first_name" className="font-bold ">
          Email
        </label>
        <br />
        <Input
          value={personalData.email}
          onChange={handleChangeInput}
          className="outline-none border-white border-b-[#C4C4C4] rounded-none mb-4 w-full"
        />
        <label htmlFor="first_name" className="font-bold ">
          Last Name
        </label>
        <br />
        <Input
          value={personalData.lastName}
          onChange={handleChangeInput}
          className="outline-none border-white border-b-[#C4C4C4] rounded-none mb-4 w-full"
        />
        <div className="flex justify-between items-center">
          <label htmlFor="first_name" className="font-bold ">
            Phone <span className="font-light">(without dial code)</span>
          </label>
          <div className="flex items-center gap-8">
            <Checkbox>Internal</Checkbox>
            <label htmlFor="hide" className="text-gray-400">
              {" "}
              <Switch className="mr-4" />
              hide
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
          <label htmlFor="first_name" className="font-bold ">
            Nationality
          </label>
          <div className="flex items-center gap-8">
            <Checkbox>Internal</Checkbox>
            <label htmlFor="hide" className="text-gray-400">
              {" "}
              <Switch className="mr-4" />
              hide
            </label>
          </div>
        </div>
        <Input
          value={personalData.nationality}
          onChange={handleChangeInput}
          className="outline-none border-white border-b-[#C4C4C4] rounded-none mb-4 w-full"
        />
        <div className="flex justify-between items-center">
          <label htmlFor="first_name" className="font-bold ">
            Current Residence
          </label>
          <div className="flex items-center gap-8">
            <Checkbox>Internal</Checkbox>
            <label htmlFor="hide" className="text-gray-400">
              {" "}
              <Switch className="mr-4" />
              hide
            </label>
          </div>
        </div>
        <Input
          value={personalData.currentResidence}
          onChange={handleChangeInput}
          className="outline-none border-white border-b-[#C4C4C4] rounded-none mb-4 w-full"
        />
        <div className="flex justify-between items-center">
          <label htmlFor="first_name" className="font-bold ">
            ID Number
          </label>
          <div className="flex items-center gap-8">
            <Checkbox>Internal</Checkbox>
            <label htmlFor="hide" className="text-gray-400">
              {" "}
              <Switch className="mr-4" />
              hide
            </label>
          </div>
        </div>
        <Input
          value={personalData.idNumber}
          onChange={handleChangeInput}
          className="outline-none border-white border-b-[#C4C4C4] rounded-none mb-4 w-full"
        />
        <div className="flex justify-between items-center">
          <label htmlFor="first_name" className="font-bold ">
            Date of Birth
          </label>
          <div className="flex items-center gap-8">
            <Checkbox>Internal</Checkbox>
            <label htmlFor="hide" className="text-gray-400">
              {" "}
              <Switch className="mr-4" />
              hide
            </label>
          </div>
        </div>
        <Input
          value={personalData.dateOfBirth}
          onChange={handleChangeInput}
          className="outline-none border-white border-b-[#C4C4C4] rounded-none mb-4 w-full"
        />
        <div className="flex justify-between items-center">
          <label htmlFor="first_name" className="font-bold ">
            Gender
          </label>
          <div className="flex items-center gap-8">
            <Checkbox>Internal</Checkbox>
            <label htmlFor="hide" className="text-gray-400">
              {" "}
              <Switch className="mr-4" />
              hide
            </label>
          </div>
        </div>
        <Input
          value={personalData.gender}
          onChange={handleChangeInput}
          className="outline-none border-white border-b-[#C4C4C4] rounded-none mb-4 w-full"
        />
      </div>

      <button
        className="flex items-center font-semibold ml-4 mb-5"
        onClick={() => setSelectQmodal(true)}
      >
        <RiAddFill className="text-2xl font-bold" />
        Add a question
      </button>
    </div>
  );
}

export default PersonalInformation;

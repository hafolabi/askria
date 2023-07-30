import {
  CloseOutlined,
  PlusOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Checkbox, Input, Select } from "antd";
import React, { useEffect, useState } from "react";

function SelectQuestion({
  handleChange,
  setSelect,
  setSelectedOption,
  personalQuestion,
  setPersonalInfoOtherOption,
  savePersonalQuest,
  setPayload,
  payload,
}) {
    console.log('savePayload', payload)
  const { type, disqualify, id, other, maxChoice, question, choices } = personalQuestion;
  const [check, setCheck] = useState(other);


  const handleCheckbox = () => {
    // const checked = e.target.checked;
    if (!other) {
      setCheck(false);

      // setPayload([...payload, {...personalQuestion, other: e.target.value}])
    } else if (other) {
      setCheck(true);
    }
  };

  useEffect(() => {
    handleCheckbox();
  }, [other]);

  const handleCheckbox2 = async (e, checkboxId) => {
    console.log("checkboxId", checkboxId, check);
    setCheck(!check);
    setPersonalInfoOtherOption(!check)
  };

  return (
    <div className="bg-white w-full mt-4 shadow rounded-lg overflow-hidden mb-0">
      <div className="bg-[#D0F7FA] p-3 py-4 flex justify-between">
        <b>Questions</b>
        <b className="cursor-pointer" onClick={() => setSelect(false)}>
          x
        </b>
      </div>
      <div className="px-6 py-4">
        <label className="font-medium text-sm" htmlFor="">
          Type
        </label>
        <br />
        <Select
          labelInValue
          defaultValue={{
            value: type ?? "select",
            label: type ?? "select",
          }}
          className="w-full mt-2"
          options={[
            {
              value: "Paragraph",
              label: "Paragraph ",
            },
            {
              value: "Short answer",
              label: "Short answer ",
            },
            {
              value: "Yes/No",
              label: "Yes/No ",
            },
            {
              value: "Dropdown",
              label: "Dropdown ",
            },
            {
              value: "Date",
              label: "Date ",
            },
            {
              value: "File upload",
              label: "File upload ",
            },
            {
              value: "Video question",
              label: "Video question ",
            },
          ]}
          onChange={handleChange}
        />

        <div className="mt-5">
          <label className="font-medium text-sm">Question</label>
          <Input
            defaultValue={question}
            placeholder="Type here"
            className=" my-2"
          />
        </div>

        <div className="mt-4">
          <label className="font-medium text-sm mx-10">Choice</label>

          <div className="flex items-center mx-4">
            <UnorderedListOutlined className="text-md font-bold" />
            <Input placeholder="Type here" className=" my-2 mx-2" />
            <PlusOutlined className="text-md font-bold" />
          </div>
        </div>
        <Checkbox checked={check} onChange={(e) => handleCheckbox2(e, id)}>
          Enable “Other” option{" "}
        </Checkbox>
        <div className="mt-5">
          <label className="font-medium text-sm">Max choice allowed</label>
          <Input
            defaultValue={maxChoice}
            placeholder="Type here"
            className=" my-2"
          />
        </div>
        <div className="flex justify-between items-center mt-3">
          {!personalQuestion?.type && (
            <button
              className="text-[#A80000] flex items-center p-3"
              onClick={() => setSelectedOption("")}
            >
              <CloseOutlined className="font-bold text-md  mr-2" />
              Delete question
            </button>
          )}
          <button className="bg-[#087B2F] px-4 py-2 text-white rounded-md"
            onClick={()=>savePersonalQuest}
          >
            save
          </button>
        </div>
      </div>
    </div>
  );
}

export default SelectQuestion;

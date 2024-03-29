import {
  CloseOutlined,
  PlusOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Checkbox, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useEffect, useState } from "react";
import { FiEdit2 } from "react-icons/fi";

function SelectQuestion({
  setSelect,
  personalQuestion,
  setPersonalInfoOtherOption,
  savePersonalQuest,
  setPayload,
  payload,
  index,
  setRefetch,
  refetch,
  handleSubmit,
}) {
  const { type, disqualify, id, other, maxChoice, question, choices } =
    personalQuestion;
  const [check, setCheck] = useState(other);
  const [check2, setCheck2] = useState(disqualify);
  const [selectedOption, setSelectedOption] = useState("");


  //function that keeps track of the inserted choice question
  const handleUpdateChoice = (event, index) => {
    var item1 =
      payload?.attributes?.personalInformation?.personalQuestions[index];
    item1.choices = [event.target.value];
    var item2 = payload?.attributes?.personalInformation?.personalQuestions;
    item2[index] = item1;
    setPayload({ ...payload });
  };

  //function that keeps track of the selected question values
  const handleChange = (selected) => {
    setSelectedOption(selected.value);
    var item1 = payload.attributes.personalInformation.personalQuestions[index];
    item1.type = selected.value;
    var item2 = payload.attributes.personalInformation.personalQuestions;
    item2[index] = item1;
    setPayload({ ...payload });
  };

  //Enable “Other” option functionality nd updates
  const handleCheckbox = async (e, checkboxId) => {
    setCheck(!check);
    setPersonalInfoOtherOption(!check);
    var item1 = payload.attributes.personalInformation.personalQuestions[index];
    item1.other = !check;
    var item2 = payload.attributes.personalInformation.personalQuestions;
    item2[index] = item1;
    setPayload({ ...payload });
  };

  //disqualify option functionality nd updates
  const handleDisqualifyCheckbox = async (e, checkboxId) => {
    setCheck2(!check2);
    setPersonalInfoOtherOption(!check2);
    var item1 = payload.attributes.personalInformation.personalQuestions[index];
    item1.disqualify = !check2;
    var item2 = payload.attributes.personalInformation.personalQuestions;
    item2[index] = item1;
    setPayload({ ...payload });
  };

  const removeAddedQuest = (questionId) => {
    setRefetch(!refetch);
    const filter =
      payload.attributes.personalInformation.personalQuestions.filter(
        (item) => item.id !== questionId
      );
    setPayload([
      ...payload.attributes.personalInformation.personalQuestions.filter(
        (item) => item.id !== questionId
      ),
    ]);
  };

  const [inputText, setInputText] = useState("");
  const [vText, setVText] = useState("");
  const [duration, setDuration] = useState("");
  const [sec, setSec] = useState("");

  const handleVideoChange = (selected) => {
    setSec(selected.value);
  };

  const handleVideo = () => {
    console.log("videoQuestion", inputText, vText, duration, sec);
  };

 
  return (
    <div className="bg-white w-full mt-4 shadow rounded-lg overflow-hidden mb-0">
      <div className="bg-[#D0F7FA] p-3 py-4 flex justify-between">
        <b>Questions</b>
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
              value: "Multiple choice",
              label: "Multiple choice ",
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

        {selectedOption === "Video question" ? '' : <div className="mt-5">
          <label className="font-medium text-sm">Question</label>
          <Input
            defaultValue={question}
            placeholder="Type here"
            className=" my-2"
            onChange={(e) => {
              var item1 =
                payload.attributes.personalInformation.personalQuestions[index];
              item1.question = e.target.value;
              var item2 =
                payload.attributes.personalInformation.personalQuestions;
              item2[index] = item1;
              setPayload({ ...payload });
            }}
          />
        </div>}

        {selectedOption === "Yes/No" && (
          <Checkbox
            checked={check2}
            onChange={(e) => handleDisqualifyCheckbox(e, id)}
          >
            Disqualify candidate if the answer is no
          </Checkbox>
        )}

        {selectedOption === "Video question" ? '' : (selectedOption === "Paragraph" || selectedOption === "Yes/No") ? (
          ""
        ) : (
          <>
            <div className="mt-4">
              <label className="font-medium text-sm mx-10">Choice</label>

              {personalQuestion?.choices?.map((item, i) => (
                <div className="flex items-center mx-4">
                  <UnorderedListOutlined className="text-md font-bold" />
                  <Input
                    defaultValue={item}
                    placeholder="Type here"
                    className=" my-2 mx-2"
                    onChange={(e) => {
                      handleUpdateChoice(e, i);
                    }}
                  />
                  <PlusOutlined className="text-md font-bold" />
                </div>
              ))}
            </div>

            <Checkbox checked={check} onChange={(e) => handleCheckbox(e, id)}>
              Enable “Other” option{" "}
            </Checkbox>
          </>
        )}

        {selectedOption === "Video question" ? '' : selectedOption === "Multiple choice" ? (
          <div className="mt-5">
            <label className="font-medium text-sm">Max choice allowed</label>
            <Input
              defaultValue={maxChoice}
              placeholder="Type here"
              className=" my-2"
              type="number"
              min={1}
              onChange={(e) => {
                var item1 =
                  payload.attributes.personalInformation.personalQuestions[
                    index
                  ];
                item1.maxChoice = +e.target.value;
                var item2 =
                  payload.attributes.personalInformation.personalQuestions;
                item2[index] = item1;
                setPayload({ ...payload });
              }}
            />
          </div>
        ): ''}
        {selectedOption === "Video question" && (
          <>
            <p className="text-gray-400 text-xs mt-7">4 minute</p>
            <br />
            <label
              className="font-semibold border-b text-sm flex justify-between items-center"
              htmlFor=""
            >
              Tell us about yourself?{" "}
              <FiEdit2
                onClick={() => setInputText("Tell us about yourself?")}
              />
            </label>
            <br />
            <label
              className="font-semibold  text-sm flex justify-between items-center"
              htmlFor=""
            >
              Why did you apply for this program?{" "}
              <FiEdit2
                onClick={() =>
                  setInputText("Why did you apply for this program? ")
                }
              />
            </label>
            <br />
            <Input
              addonBefore="Q:"
              placeholder="Tell us about yourself?"
              allowClear
              enterButton=""
              value={inputText}
            />
            <br />
            <TextArea
              rows={4}
              className="mt-4"
              placeholder="Please talk about your achievements, goals and what you worked on as the latest project."
              value={vText}
              onChange={(e) => setVText(e.target.value)}
            />
            <div className="flex gap-4 mt-3">
              <Input
                placeholder="Max duration of video"
                value={duration}
                type="number"
                min={1}
                onChange={(e) => setDuration(e.target.value)}
              />
              <Select
                labelInValue
                defaultValue={{
                  value: "in (sec/min)",
                  label: "in (sec/min)",
                }}
                className="w-full  "
                options={[
                  {
                    value: "1s",
                    label: "1s ",
                  },
                  {
                    value: "2s",
                    label: "2s ",
                  },
                  {
                    value: "3s",
                    label: "3s ",
                  },
                ]}
                onChange={handleVideoChange}
              />
            </div>
          </>
        )}

        <div className="flex justify-between items-center mt-3">
          {!personalQuestion?.type && (
            <button
              className="text-[#A80000] flex items-center p-3"
              onClick={() => {
                removeAddedQuest(personalQuestion.id);
                setSelect(false);
              }}
            >
              <CloseOutlined className="font-bold text-md  mr-2" />
              Delete question
            </button>
          )}
          <button
            className="bg-[#087B2F] px-4 py-2 text-white rounded-md"
            onClick={() => {
              selectedOption === "Video question"
                ? handleVideo()
                : handleSubmit();
            }}
          >
            save
          </button>
        </div>
        {selectedOption === "Video question" && <p className='text-[#A220CF] text-xs mt-8 font-semibold '>+ Add video interview questions</p>}
      </div>
    </div>
  );
}

export default SelectQuestion;

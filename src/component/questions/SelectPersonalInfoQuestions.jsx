import {
  CloseOutlined,
  PlusOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Checkbox, Input, Select } from "antd";
import React, { useEffect, useState } from "react";

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
  handleSubmit
}) {
  const { type, disqualify, id, other, maxChoice, question, choices } =
    personalQuestion;
  const [check, setCheck] = useState(other);
  const [check2, setCheck2] = useState(disqualify);
  const [selectedOption, setSelectedOption] = useState("");

  const handleCheckbox = () => {
    // const checked = e.target.checked;
    if (!other) {
      setCheck(false);
    } else if (other) {
      setCheck(true);
    }
  };

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
  const handleCheckbox2 = async (e, checkboxId) => {
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

  useEffect(() => {
    handleCheckbox();
  }, [other]);

  return (
    <div className="bg-white w-full mt-4 shadow rounded-lg overflow-hidden mb-0">
      <div className="bg-[#D0F7FA] p-3 py-4 flex justify-between">
        <b>Questions</b>
        {/* <b className="cursor-pointer" onClick={() => setSelect(false)}>
          x
        </b> */}
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
        </div>

        {selectedOption === "Yes/No" && (
          <Checkbox
            checked={check2}
            onChange={(e) => handleDisqualifyCheckbox(e, id)}
          >
            Disqualify candidate if the answer is no
          </Checkbox>
        )}

        {selectedOption === "Paragraph" ? (
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
            <Checkbox checked={check} onChange={(e) => handleCheckbox2(e, id)}>
              Enable “Other” option{" "}
            </Checkbox>
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
            onClick={() => handleSubmit()}
          >
            save
          </button>
        </div>
      </div>
    </div>
  );
}

export default SelectQuestion;

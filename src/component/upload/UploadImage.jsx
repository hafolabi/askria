/** @format */

import { message } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { RiCloseFill } from "react-icons/ri";

const UploadImage = ({ selectedImage, setSelectedImage, addQuestion, setPayload, payload }) => {
const [uploading, setUploading]= useState(false)
  const handleImageUpload = async(event) => {
    const file = event.target.files[0];
    if (file && (file.size || 0) <= 1024 * 1024) {
      if (file) {
        // const reader = new FileReader();
        // reader.onloadend = () => {
        //   setSelectedImage(reader.result);
        //   setPayload({...payload.attributes, coverImage: reader.result})
        // };
        // reader.readAsDataURL(file);

        //uploading the image into a third party library before setting the returned url to a local state
        try {
          setUploading(true)
           const data = new FormData();
              data.append("file", file)
              data.append("upload_preset", "upload")
              const uploadRes = await axios.post(
                "https://api.cloudinary.com/v1_1/theinsights-dev/image/upload",
                data
              );

              const { url } = uploadRes.data
              setSelectedImage(url);
              setPayload({...payload.attributes, coverImage: url})
              setUploading(false)
        } catch (err) {
        }
      }
    } else {
      message.error("File size must be less or equal to 1MB.");
    }
  };

  const handleDeleteImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="">
      <div className="bg-white overflow-hidden w-2/5 shadow rounded-xl">
        {selectedImage ? (
          <>
            <img
              src={selectedImage}
              alt="Uploaded"
              className="mb-2 w-full bg-cover h-80"
            />
            <div className="flex space-x-4">
              <button
                onClick={handleDeleteImage}
                className="text-[#A80000] flex items-center p-3"
              >
                <RiCloseFill className="font-bold text-2xl " />
                Delete & re-upload
              </button>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
          </>
        ) : (
          <>
            <input
              type="file"
              accept="image/*"
              name="file"
              onChange={handleImageUpload}
              id="upload-image"
              className="hidden"
            />
            <div className="bg-[#D0F7FA] p-3 py-4">
              <span className="font-medium"> Upload cover image</span>
            </div>
            <div className="p-10">
              <label htmlFor="upload-image">
                <div className=" flex flex-col cursor-pointer items-center border-dashed border-2 rounded-md p-5 py-10 justify-center">
                  <img src="/upload.svg" className="w-8" alt="upload" />
                  <span className="font-medium">Upload cover image</span>
                  <p className="text-[#979797] text-xs">
                    16:9 ratio is recommended. Max image size 1mb
                  </p>
                </div>
                {uploading && <span className="text-xs text-red-500">image is uploading...</span>}
              </label>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UploadImage;

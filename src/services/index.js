import axios from "axios";

export async function SubmitPayload(payload) {
  const API_URL = "http://127.0.0.1:4010/api/846.4276247688836/programs/quibusdam/application-form"

  try {
    const response = await axios.put(
      API_URL,
      {data: payload},
      {
        headers : {
          'Content-Type': 'application/json',
        }
      }
    )

    return response.data;
  } catch (error) {
    throw new Error("An error occurred");
  }
} 
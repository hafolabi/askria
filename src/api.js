const baseUrl = "http://127.0.0.1:3100/api/"

export const postUrl = (programId, version) => `${baseUrl}/${version}/programs/${programId}/candidate-applications`
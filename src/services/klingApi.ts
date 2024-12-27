const KLING_API_KEY = "a2c963ac663640fca8cf52f2af7f6614";
const KLING_API_URL = "https://api.kling.ai/v1/try-on";

export interface TryOnRequest {
  modelImage: File;
  garmentImage: File;
}

export const generateOutfit = async (data: TryOnRequest) => {
  const formData = new FormData();
  formData.append("model_image", data.modelImage);
  formData.append("garment_image", data.garmentImage);

  try {
    const response = await fetch(KLING_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${KLING_API_KEY}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to generate outfit");
    }

    const result = await response.blob();
    return URL.createObjectURL(result);
  } catch (error) {
    console.error("Error generating outfit:", error);
    throw error;
  }
};

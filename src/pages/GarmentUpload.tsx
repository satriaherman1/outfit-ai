import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageUploader from "../components/ImageUploader";
import { useUpload } from "../context/UploadContext";
import { generateOutfit } from "../services/klingApi";

function GarmentUpload() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const navigate = useNavigate();
  const { modelImage } = useUpload();
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleGenerate = async () => {
    if (!modelImage || !selectedImage) {
      alert("Please upload both a model and garment image");
      return;
    }

    setIsLoading(true);
    try {
      const result = await generateOutfit({
        modelImage,
        garmentImage: selectedImage,
      });
      setGeneratedImage(result);
    } catch (error) {
      alert("Failed to generate outfit. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const examples = [
    {
      src: "https://placehold.co/300x400?text=Garment+Example+1",
      alt: "Garment Example 1",
    },
    {
      src: "https://placehold.co/300x400?text=Garment+Example+2",
      alt: "Garment Example 2",
    },
  ];

  return (
    <div>
      <ImageUploader
        title="Step 2: Upload Garment Photo"
        description="Upload a photo of the garment. The garment should be on a plain background for best results."
        onUpload={handleUpload}
        previewUrl={previewUrl}
        inputId="garmentUpload"
        examples={examples}
      />

      <div className="mt-6">
        {generatedImage && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Generated Outfit:</h3>
            <img
              src={generatedImage}
              alt="Generated outfit"
              className="max-w-full h-auto rounded-lg"
            />
          </div>
        )}

        <div className="flex justify-between">
          <button
            onClick={() => navigate("/model-upload")}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            Back
          </button>
          <button
            onClick={handleGenerate}
            disabled={isLoading || !selectedImage}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-blue-300"
          >
            {isLoading ? "Generating..." : "Generate Outfit"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default GarmentUpload;

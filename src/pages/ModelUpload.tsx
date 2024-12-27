import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageUploader from "../components/ImageUploader";
import { useUpload } from "../context/UploadContext";

function ModelUpload() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const navigate = useNavigate();
  const { setModelImage } = useUpload();

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setModelImage(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      // Optional: automatically navigate to next step after upload
      // setTimeout(() => navigate("/garment-upload"), 1000);
    }
  };

  const examples = [
    {
      src: "https://placehold.co/300x400?text=Model+Example+1",
      alt: "Model Example 1",
    },
    {
      src: "https://placehold.co/300x400?text=Model+Example+2",
      alt: "Model Example 2",
    },
  ];

  return (
    <div>
      <ImageUploader
        title="Step 1: Upload Model Photo"
        description="Upload a full-body photo of the model. Make sure the pose is clear and the background is simple."
        onUpload={handleUpload}
        previewUrl={previewUrl}
        inputId="modelUpload"
        examples={examples}
      />

      <div className="mt-6 flex justify-between">
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          Back
        </button>
        <button
          onClick={() => navigate("/garment-upload")}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

export default ModelUpload;

import { ChangeEvent } from "react";

interface ImageUploaderProps {
  title: string;
  description: string;
  onUpload: (e: ChangeEvent<HTMLInputElement>) => void;
  previewUrl: string | null;
  inputId: string;
  examples: { src: string; alt: string }[];
}

function ImageUploader({
  title,
  description,
  onUpload,
  previewUrl,
  inputId,
  examples,
}: ImageUploaderProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-1 gap-8">
        <div className="space-y-4">
          <p className="text-gray-600">{description}</p>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <input
              type="file"
              accept="image/*"
              onChange={onUpload}
              className="hidden"
              id={inputId}
            />
            <label
              htmlFor={inputId}
              className="cursor-pointer block p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
            >
              <span className="text-blue-600 font-medium">Upload Photo</span>
              <p className="text-sm text-gray-500 mt-2">
                or drag and drop your photo
              </p>
            </label>
          </div>
          {previewUrl && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Your Upload:</h3>
              <img
                src={previewUrl}
                alt="Preview"
                className="max-w-full h-auto rounded-lg"
              />
            </div>
          )}
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Example Photos:</h3>
          <div className="grid grid-cols-2 gap-4">
            {examples.map((example, index) => (
              <img
                key={index}
                src={example.src}
                alt={example.alt}
                className="rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageUploader;

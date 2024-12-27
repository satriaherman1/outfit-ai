import GarmentUpload from "./GarmentUpload";
import ModelUpload from "./ModelUpload";

function Home() {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <p className="text-xl">Welcome to the Outfit Mask Generator</p>
        <p className="text-gray-600">
          Follow these steps to generate your outfit:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">1. Upload Model Photo</h2>
          <p className="text-gray-600">
            Start by uploading a full-body photo of the model
          </p>

          <ModelUpload />
        </div>

        <div className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold mb-2">
            2. Upload Garment Photo
          </h2>
          <p className="text-gray-600">
            Then upload the garment you want to try on
          </p>

          <GarmentUpload />
        </div>
      </div>
    </div>
  );
}

export default Home;

import { createContext, useContext, useState } from "react";

interface UploadContextType {
  modelImage: File | null;
  setModelImage: (file: File | null) => void;
}

const UploadContext = createContext<UploadContextType | undefined>(undefined);

export function UploadProvider({ children }: { children: React.ReactNode }) {
  const [modelImage, setModelImage] = useState<File | null>(null);

  return (
    <UploadContext.Provider value={{ modelImage, setModelImage }}>
      {children}
    </UploadContext.Provider>
  );
}

export function useUpload() {
  const context = useContext(UploadContext);
  if (context === undefined) {
    throw new Error("useUpload must be used within a UploadProvider");
  }
  return context;
}

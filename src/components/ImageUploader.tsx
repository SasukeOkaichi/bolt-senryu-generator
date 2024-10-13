import React from 'react'
import { Upload } from 'lucide-react'

interface ImageUploaderProps {
  onImageUpload: (file: File) => void
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      onImageUpload(file)
    }
  }

  return (
    <div className="flex flex-col items-center">
      <input
        type="file"
        id="fileInput"
        accept="image/jpeg,image/png"
        onChange={handleFileChange}
        className="hidden"
      />
      <label
        htmlFor="fileInput"
        className="flex items-center justify-center w-64 h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-indigo-500 transition duration-300"
      >
        <div className="flex flex-col items-center">
          <Upload className="text-gray-400 mb-2" size={32} />
          <span className="text-sm text-gray-500">クリックして画像をアップロード</span>
        </div>
      </label>
    </div>
  )
}

export default ImageUploader
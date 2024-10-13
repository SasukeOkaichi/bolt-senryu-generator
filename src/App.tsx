import React, { useState } from 'react'
import { Upload, FileText, Share2 } from 'lucide-react'
import ImageUploader from './components/ImageUploader'
import HaikuDisplay from './components/HaikuDisplay'
import { analyzeImage, generateHaiku } from './utils/haikuGenerator'

function App() {
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [haiku, setHaiku] = useState<string | null>(null)

  const handleImageUpload = async (file: File) => {
    const url = URL.createObjectURL(file)
    setImageUrl(url)
    
    try {
      const imageAnalysis = await analyzeImage(file)
      const generatedHaiku = await generateHaiku(imageAnalysis)
      setHaiku(generatedHaiku)
    } catch (error) {
      console.error('Error generating haiku:', error)
      // TODO: エラー処理を追加
    }
  }

  const handleShare = () => {
    // TODO: 共有機能を実装
    alert('共有機能は現在開発中です。')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-indigo-800 mb-8">画像から川柳ジェネレーター</h1>
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full">
        <div className="flex flex-col items-center space-y-6">
          <ImageUploader onImageUpload={handleImageUpload} />
          {imageUrl && (
            <img src={imageUrl} alt="Uploaded" className="max-w-full h-auto rounded-lg shadow-md" />
          )}
          {haiku && <HaikuDisplay haiku={haiku} />}
          <div className="flex space-x-4">
            <button
              className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
              onClick={() => document.getElementById('fileInput')?.click()}
            >
              <Upload className="mr-2" size={20} />
              画像をアップロード
            </button>
            <button
              className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
              onClick={handleShare}
            >
              <Share2 className="mr-2" size={20} />
              共有する
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
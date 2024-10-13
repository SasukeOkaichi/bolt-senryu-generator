import React from 'react'

interface HaikuDisplayProps {
  haiku: string
}

const HaikuDisplay: React.FC<HaikuDisplayProps> = ({ haiku }) => {
  const lines = haiku.split('\n')

  return (
    <div className="bg-indigo-50 p-6 rounded-lg shadow-inner">
      <div className="writing-vertical text-xl font-serif text-indigo-800 h-48">
        {lines.map((line, index) => (
          <p key={index} className="mb-4">{line}</p>
        ))}
      </div>
    </div>
  )
}

export default HaikuDisplay
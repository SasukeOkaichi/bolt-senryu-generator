// TODO: 実際の画像解析とAI生成のロジックを実装する
export const analyzeImage = async (file: File): Promise<string> => {
  // 仮の実装: 実際にはここで画像解析APIを呼び出す
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('春の風景')
    }, 1000)
  })
}

export const generateHaiku = async (theme: string): Promise<string> => {
  // 仮の実装: 実際にはここで川柳生成APIを呼び出す
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('春風や\n花びら舞う\n山の道')
    }, 1000)
  })
}
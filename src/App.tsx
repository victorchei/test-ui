import { Input } from '@mui/material'
import React from 'react'
import ControlledTreeView from './components/ControlledTreeView'
import './style/index.css'
import { check } from './validator'
import { ErrorsType } from './validator/src/errors'

import { GlobalWorkerOptions } from 'pdfjs-dist'
GlobalWorkerOptions.workerSrc = '//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.js'

export default function App() {
  const [loading, setLoading] = React.useState(false)
  const [errorsData, setErrorsData] = React.useState<ErrorsType>({})

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true)
    const inputElement = e.target as HTMLInputElement
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0]

      const reader = new FileReader()
      const fileData = await new Promise<ArrayBuffer>((resolve, reject) => {
        reader.onload = () => resolve(reader.result as ArrayBuffer)
        reader.onerror = reject
        reader.readAsArrayBuffer(file)
      })

      const data = await check(fileData)
      setErrorsData(data)
    }
    setLoading(false)
  }

  return (
    <div className="App">
      <Input type="file" onChange={onChange} />
      {loading ? <div>Loading...</div> : <ControlledTreeView errorsData={errorsData} />}
    </div>
  )
}

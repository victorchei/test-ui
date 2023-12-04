import { Input, Stack } from '@mui/material'
import { GlobalWorkerOptions } from 'pdfjs-dist'
import React, { useEffect, useState } from 'react'
import { groupsConfig } from 'src/config/groupsConfig'
import { StartConfig, getStartConfig } from 'src/helpers/getStartConfig'
import { ErrorsType } from 'src/validator/src/types'
import { check } from '../validator'
import { Authors } from './Authors'
import ControlledTreeView from './ControlledTreeView'
import { Feedback } from './Feedback'
import { Settings } from './Settings'
import { TopInfo } from './TopInfo'
import '../style/index.css'
GlobalWorkerOptions.workerSrc = '//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.js'

export default function App() {
  const [loading, setLoading] = useState(false)
  const [errorsData, setErrorsData] = useState<ErrorsType>({})
  const isMasterDefault = true
  const [config, setConfig] = useState<StartConfig>(getStartConfig(isMasterDefault, groupsConfig[0]))
  const ref = React.useRef<HTMLInputElement>(null)

  const validate = async (inputElement: HTMLInputElement, currentConfig: StartConfig) => {
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0]

      const reader = new FileReader()
      const newFileData = await new Promise<ArrayBuffer>((resolve, reject) => {
        reader.onload = () => resolve(reader.result as ArrayBuffer)
        reader.onerror = reject
        reader.readAsArrayBuffer(file)
      })

      const { isFrame, frameConfig, ...rest } = currentConfig
      const newConfig = isFrame ? { ...rest, frameConfig } : rest

      const data = await check(newFileData, newConfig)
      setErrorsData(data)
    }
  }

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true)
    const inputElement = e.target as HTMLInputElement
    await validate(inputElement, config)
    setLoading(false)
  }

  useEffect(() => {
    if (ref.current) {
      validate(ref.current, config)
    }
  }, [config])

  return (
    <Stack direction="column" justifyContent="space-between" className="App">
      <div>
        <TopInfo />
        <Settings isMasterDefault={isMasterDefault} config={config} setConfig={setConfig} />
        <Stack direction="column" justifyContent="center" alignItems="center" sx={{ mb: 2 }}>
          <label htmlFor="file-input" style={{ marginBottom: '11px' }}>
            Завантажте дипломну роботу у форматі ПДФ
          </label>
          <Input inputRef={ref} sx={{ maxWidth: 360 }} id="file-input" type="file" onChange={onChange} />
        </Stack>

        {loading ? <div>Loading...</div> : <ControlledTreeView errorsData={errorsData} />}

        <Feedback />
      </div>
      <Authors />
    </Stack>
  )
}

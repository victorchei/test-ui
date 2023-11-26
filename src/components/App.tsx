import { Button, Input, Stack, Typography } from '@mui/material'
import { GlobalWorkerOptions } from 'pdfjs-dist'
import React, { useState } from 'react'
import '../style/index.css'
import { check } from '../validator'
import { ErrorsType } from '../validator/src/errors'
import ControlledTreeView from './ControlledTreeView'
import { StartConfig, startConfig } from './SettingsForm'
import { SettingsModal } from './SettingsModal'
GlobalWorkerOptions.workerSrc = '//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.js'

export default function App() {
  const [loading, setLoading] = useState(false)
  const [errorsData, setErrorsData] = useState<ErrorsType>({})
  const [config, setConfig] = useState<StartConfig>(startConfig)

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

      const { isFrame, frameConfig, ...rest } = config
      const newConfig = isFrame ? { ...rest, frameConfig } : rest

      const data = await check(fileData, newConfig)
      setErrorsData(data)
    }
    setLoading(false)
  }

  return (
    <div className="App">
      <Typography variant="h1" sx={{ textAlign: 'center', fontSize: '4rem', m: 2, mb: 4 }}>
        Сервіс для перевірки дипломних робіт
      </Typography>

      <SettingsModal config={config} setConfig={setConfig} />

      <Stack direction="column" justifyContent="center" alignItems="center" sx={{ mb: 2 }}>
        <label htmlFor="file-input" style={{ marginBottom: '11px' }}>
          Завантажте дипломну роботу у форматі ПДФ
        </label>
        <Input sx={{ maxWidth: 360 }} id="file-input" type="file" onChange={onChange} />
      </Stack>

      {loading ? <div>Loading...</div> : <ControlledTreeView errorsData={errorsData} />}

      <Typography sx={{ textAlign: 'center', m: '5% auto 2%', mb: 4, maxWidth: '500px' }}>
        Якщо Ви знайшли баги в нашому сервісі або у Вас є пропозиції щодо його вдосконалення, будь ласка, заповніть
        форму зворотнього зв'язку
      </Typography>

      <Typography sx={{ textAlign: 'center', fontSize: '2rem', m: 2, mb: 4 }}>
        <Button
          variant="contained"
          target="_blank"
          href="https://docs.google.com/forms/d/16xVuAHBVKhGZUYt_PlRCJFbGpmtUr8iG_eYY0cCm-rM/edit"
        >
          Форма зворотнього зв'язку
        </Button>
      </Typography>

      <div className="authors" style={{ margin: '70px 50px' }}>
        <h3>Автори:</h3>
        <p>Желізко Віктор Вікторович</p>
        <p>Кучерук Ольга Віталіївна</p>
        <p>Версія від: 25.11.2023</p>
      </div>     
    </div>
  )
}

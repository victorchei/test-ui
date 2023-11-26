import { Button, Input, Stack, Typography } from '@mui/material'
import { GlobalWorkerOptions } from 'pdfjs-dist'
import React, { useEffect, useState } from 'react'
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
        <Typography
          variant="h1"
          sx={{
            fontSize: '4rem',
            textAlign: 'center',
            m: 2,
            mb: 4,
            '@media (max-width: 900px)': {
              fontSize: '3rem',
            },
            '@media (max-width: 600px)': {
              fontSize: '2rem',
            },
          }}
        >
          Сервіс для перевірки дипломних робіт
        </Typography>
        <Typography sx={{ margin: '0 32px', textAlign: 'center' }}>
          Даний сервіс розроблено для валідації магістерських і бакалаврських робіт в форматі ПДФ.
          <br />
          Реалізловані сервіси перевірки змісту, списку літератури, посилання на літературу, технічних рамок.
          <br />
          Очікується додавання пеервірки підписів рисунків та таблиць.
        </Typography>
        <Typography sx={{ margin: '0 32px', textAlign: 'center' }} color="error">
          УВАГА! При наявності рамки ОБОВ'ЯКОВО!!! потрібно запонити налаштування перевірки рамок.
          <br />
          (Зайдіть в НАЛАШТУВАННЯ ПЕРЕВІРКИ).
        </Typography>

        <SettingsModal config={config} setConfig={setConfig} />

        <Stack direction="column" justifyContent="center" alignItems="center" sx={{ mb: 2 }}>
          <label htmlFor="file-input" style={{ marginBottom: '11px' }}>
            Завантажте дипломну роботу у форматі ПДФ
          </label>
          <Input inputRef={ref} sx={{ maxWidth: 360 }} id="file-input" type="file" onChange={onChange} />
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
      </div>
      <div className="authors" style={{ margin: 'auto 50px 50px 50px' }}>
        <Typography component="h3">Автори:</Typography>
        <Typography variant="body1">Желізко Віктор Вікторович</Typography>
        <Typography variant="body1">Кучерук Ольга Віталіївна</Typography>
        <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
          Версія від: 26.11.2023
        </Typography>
      </div>
    </Stack>
  )
}

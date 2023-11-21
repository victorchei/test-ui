// import { yupResolver } from '@hookform/resolvers/yup'
import { Button, FormControlLabel, Stack, Switch, TextField } from '@mui/material'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { CheckConfig } from 'src/validator/src/config/mainConfig'
// import * as yup from 'yup'

export const SettingsForm = ({
  config,
  setConfig,
}: {
  config: CheckConfig
  setConfig: React.Dispatch<React.SetStateAction<CheckConfig>>
}) => {
  const {
    refListMinLen = 0,
    isChapterConclusionRequired = false,
    chapterSize: [chapterSizeMin, chapterSizeMax] = [0, 0],
    mainFramePageNum = 0,
    profCode = '',
  } = config

  const defaultValues = {
    refListMinLen,
    isChapterConclusionRequired,
    chapterSizeMin,
    chapterSizeMax,
    isFrame: !!profCode,
    profCode,
    mainFramePageNum,
  }

  const { control, handleSubmit, watch } = useForm({
    mode: 'onChange',
    defaultValues: defaultValues as Required<typeof defaultValues>,
  })

  const showFrameConfig = watch('isFrame')

  const onSubmit = async (data: typeof defaultValues) => {
    setConfig((state) => {
      return {
        ...state,
        refListMinLen: data.refListMinLen,
        isChapterConclusionRequired: data.isChapterConclusionRequired,
        chapterSize: [data.chapterSizeMin, data.chapterSizeMax],
        profCode: data.isFrame ? data.profCode : undefined,
        mainFramePageNum: data.isFrame ? data.mainFramePageNum : undefined,
      }
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="column" spacing="6px">
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <div>Мін к-сть літ. джерел</div>
          <div>
            <Controller
              control={control}
              name="refListMinLen"
              render={({ field }) => <TextField inputProps={{ min: 0 }} type="number" autoFocus {...field} />}
            />
          </div>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <div>Мін к-сть літ. підрозділів</div>
          <div>
            <Controller
              control={control}
              name="chapterSizeMin"
              render={({ field }) => <TextField inputProps={{ min: 0 }} type="number" {...field} />}
            />
          </div>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <div>Макс к-сть літ. підрозділів</div>
          <div>
            <Controller
              control={control}
              name="chapterSizeMax"
              render={({ field }) => <TextField inputProps={{ min: 0 }} type="number" {...field} />}
            />
          </div>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <div>Обовязкові висновки до підрозділу?</div>
          <div>
            <Controller
              control={control}
              name="isChapterConclusionRequired"
              render={({ field }) => {
                console.log(field)
                return (
                  <FormControlLabel
                    sx={{ ml: 2 }}
                    control={<Switch {...field} checked={field.value} />}
                    label={field.value?.toString()}
                  />
                )
              }}
            />
          </div>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <div>Чи є рамка?</div>
          <div>
            <Controller
              control={control}
              name="isFrame"
              render={({ field }) => {
                return (
                  <FormControlLabel
                    sx={{ ml: 2 }}
                    control={<Switch {...field} checked={field.value} />}
                    label={field.value?.toString()}
                  />
                )
              }}
            />
          </div>
        </Stack>
        {showFrameConfig && (
          <>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <div>Номер сторінки великої рамки</div>
              <div>
                <Controller
                  control={control}
                  name="mainFramePageNum"
                  render={({ field }) => <TextField inputProps={{ min: 0 }} type="number" {...field} />}
                />
              </div>
            </Stack>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <div>Проф. код</div>
              <div>
                <Controller
                  control={control}
                  name="profCode"
                  render={({ field }) => <TextField fullWidth {...field} />}
                />
              </div>
            </Stack>
          </>
        )}
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="center" sx={{ p: 2 }}>
        <Button type="submit">Застосувати</Button>
      </Stack>
    </form>
  )
}

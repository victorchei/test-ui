import { Button, FormControlLabel, Stack, Switch, TextField } from '@mui/material'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { CheckConfig } from 'src/validator/types'

export type StartConfig = {
  isFrame: boolean
  refListMinLen: number
  chapterSize: [number, number]
  isChapterConclusionRequired: boolean
  frameConfig: {
    mainFramePageNum: number
    maidField1: boolean
    maidField2: boolean
    maidField3: boolean
    maidField4: boolean
    maidField5: boolean
    maidField6: string
    maidField7: boolean
    maidField8: boolean
    maidField9: boolean
    maidField10: boolean
    smallField1: boolean
    smallField2: boolean
    smallField3: boolean
    smallField4: boolean
  }
}

export const startConfig: StartConfig = {
  refListMinLen: 0,
  chapterSize: [1, 7],
  isChapterConclusionRequired: true,
  isFrame: false,
  frameConfig: {
    mainFramePageNum: 2,
    maidField1: true,
    maidField2: false,
    maidField3: true,
    maidField4: false,
    maidField5: false,
    maidField6: 'ДУ «Житомирська політехніка».23.121.12.000 - ПЗ',
    maidField7: true,
    maidField8: true,
    maidField9: true,
    maidField10: true,
    smallField1: true,
    smallField2: true,
    smallField3: true,
    smallField4: true,
  },
}

export const SettingsForm = ({
  config,
  setConfig,
}: {
  config: StartConfig
  setConfig: React.Dispatch<React.SetStateAction<CheckConfig>>
}) => {
  const {
    refListMinLen,
    isChapterConclusionRequired,
    chapterSize: [chapterSizeMin, chapterSizeMax] = [0, 0],
    isFrame,
    frameConfig,
  } = config

  const defaultValues = {
    refListMinLen,
    isChapterConclusionRequired,
    chapterSizeMin,
    chapterSizeMax,
    isFrame,
    ...frameConfig,
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
        isFrame: data.isFrame,
        frameConfig: {
          mainFramePageNum: data.isFrame ? +data.mainFramePageNum : +startConfig.frameConfig.mainFramePageNum,
          maidField1: data.isFrame ? data.maidField1 : startConfig.frameConfig.maidField1,
          maidField2: data.isFrame ? data.maidField2 : startConfig.frameConfig.maidField2,
          maidField3: data.isFrame ? data.maidField3 : startConfig.frameConfig.maidField3,
          maidField4: data.isFrame ? data.maidField4 : startConfig.frameConfig.maidField4,
          maidField5: data.isFrame ? data.maidField5 : startConfig.frameConfig.maidField5,
          maidField6: data.isFrame ? data.maidField6 : startConfig.frameConfig.maidField6,
          maidField7: data.isFrame ? data.maidField7 : startConfig.frameConfig.maidField7,
          maidField8: data.isFrame ? data.maidField8 : startConfig.frameConfig.maidField8,
          maidField9: data.isFrame ? data.maidField9 : startConfig.frameConfig.maidField9,
          maidField10: data.isFrame ? data.maidField10 : startConfig.frameConfig.maidField10,
          smallField1: data.isFrame ? data.smallField1 : startConfig.frameConfig.smallField1,
          smallField2: data.isFrame ? data.smallField2 : startConfig.frameConfig.smallField2,
          smallField3: data.isFrame ? data.smallField3 : startConfig.frameConfig.smallField3,
          smallField4: data.isFrame ? data.smallField4 : startConfig.frameConfig.smallField4,
        },
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
              <div>Поле 1 має бути заповненим?</div>
              <div>
                <Controller
                  control={control}
                  name="maidField1"
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
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <div>Поле 2 має бути заповненим?</div>
              <div>
                <Controller
                  control={control}
                  name="maidField2"
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
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <div>Поле 3 має бути заповненим?</div>
              <div>
                <Controller
                  control={control}
                  name="maidField3"
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
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <div>Поле 4 має бути заповненим?</div>
              <div>
                <Controller
                  control={control}
                  name="maidField4"
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
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <div>Поле 5 має бути заповненим?</div>
              <div>
                <Controller
                  control={control}
                  name="maidField5"
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
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <div>Значення обовязкового поля 6 проф. код</div>
              <div>
                <Controller
                  control={control}
                  name="maidField6"
                  render={({ field }) => <TextField fullWidth {...field} />}
                />
              </div>
            </Stack>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <div>Поле 7 має бути заповненим?</div>
              <div>
                <Controller
                  control={control}
                  name="maidField7"
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
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <div>Поле 8 має бути заповненим?</div>
              <div>
                <Controller
                  control={control}
                  name="maidField8"
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
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <div>Поле 9 має бути заповненим?</div>
              <div>
                <Controller
                  control={control}
                  name="maidField9"
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
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <div>Поле 10 має бути заповненим?</div>
              <div>
                <Controller
                  control={control}
                  name="maidField10"
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
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <div>Поле малої рамки 1 має бути заповненим?</div>
              <div>
                <Controller
                  control={control}
                  name="smallField1"
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
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <div>Поле малої рамки 2 має бути заповненим?</div>
              <div>
                <Controller
                  control={control}
                  name="smallField2"
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
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <div>Поле малої рамки 3 має бути заповненим?</div>
              <div>
                <Controller
                  control={control}
                  name="smallField3"
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
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <div>Поле малої рамки 4 має бути заповненим?</div>
              <div>
                <Controller
                  control={control}
                  name="smallField4"
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
          </>
        )}
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="center" sx={{ p: 2 }}>
        <Button type="submit">Застосувати</Button>
      </Stack>
    </form>
  )
}

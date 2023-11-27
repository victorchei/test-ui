import { FormControlLabel, Stack, Switch, TextField } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'

type Props = {
  label: string
  name: string
  control: any
  type: 'number' | 'text' | 'switch'
}

export const FormInput = (props: Props) => {
  const { label, control, name, type } = props

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <div>{label}</div>
      <div>
        <Controller
          control={control}
          name={name}
          render={({ field }) => {
            return type === 'switch' ? (
              <FormControlLabel
                sx={{ ml: 2 }}
                control={<Switch {...field} checked={field.value} />}
                label={field.value ? 'так' : 'ні'}
              />
            ) : type === 'number' ? (
              <TextField size="small" inputProps={{ min: 0 }} type="number" sx={{ width: 75 }} autoFocus {...field} />
            ) : (
              <TextField size="small" fullWidth {...field} sx={{ minWidth: 250 }} />
            )
          }}
        />
      </div>
    </Stack>
  )
}

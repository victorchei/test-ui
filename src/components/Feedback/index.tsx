import { Button, Typography } from '@mui/material'
import React from 'react'

export const Feedback = () => {
  return (
    <div>
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
  )
}

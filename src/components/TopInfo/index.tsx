import { Typography } from '@mui/material'
import React from 'react'

export const TopInfo = () => {
  return (
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
        Даний сервіс розроблено для валідації магістерських і бакалаврських робіт у форматі <b>ПДФ.</b>
        <br />
        Реалізовані сервіси перевірки змісту, списку літератури, посилання на літературу, технічних рамок.
        <br />
        Очікується додавання перевірки підписів до рисунків і таблиць.
      </Typography>
      <Typography sx={{ margin: '8px 32px', textAlign: 'center' }}>
        Для базової перевірки достатньо вказати кваліфікацію.
      </Typography>
    </div>
  )
}

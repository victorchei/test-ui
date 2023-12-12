import { Typography } from '@mui/material'
import React from 'react'

export const Authors = () => {
  return (
    <div className="authors" style={{ margin: 'auto 50px 50px 50px' }}>
      <Typography component="h3">Автори:</Typography>
      <Typography variant="body1">Желізко Віктор Вікторович</Typography>
      <Typography variant="body1">Кучерук Ольга Віталіївна</Typography>
      <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
        Версія від: 12.12.2023
      </Typography>
    </div>
  )
}

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import React from 'react'
import { SettingsForm, StartConfig } from './SettingsForm'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '90vw',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  maxHeight: '90vh',
  overflowY: 'auto',
  overflowX: 'hidden',
  paddingTop: '0',
}

export const SettingsModal = ({
  config,
  setConfig,
}: {
  config: StartConfig
  setConfig: React.Dispatch<React.SetStateAction<StartConfig>>
}) => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const setConfigHandler = (config: StartConfig) => {
    setConfig(config)
    handleClose()
  }

  return (
    <div>
      <Typography sx={{ textAlign: 'center', fontSize: '2rem', m: 2, mb: 4 }}>
        <Button variant="contained" onClick={handleOpen}>
          Налаштування перевірки
        </Button>
      </Typography>
      {open && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <SettingsForm config={config} setConfig={setConfigHandler} />
          </Box>
        </Modal>
      )}
    </div>
  )
}

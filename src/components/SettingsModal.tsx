import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { CheckConfig } from 'src/validator/src/config/mainConfig'
import { SettingsForm } from './SettingsForm'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export const SettingsModal = ({
  config,
  setConfig,
}: {
  config: CheckConfig
  setConfig: React.Dispatch<React.SetStateAction<CheckConfig>>
}) => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const setConfigHandler = (config: CheckConfig) => {
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

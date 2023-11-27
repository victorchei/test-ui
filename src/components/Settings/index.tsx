import { Switch } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import React from 'react'
import { StartConfig, getStartConfig } from 'src/helpers/getStartConfig'
import { SettingsForm } from './SettingsForm'

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

export const Settings = ({
  config,
  setConfig,
  isMasterDefault,
}: {
  isMasterDefault: boolean
  config: StartConfig
  setConfig: React.Dispatch<React.SetStateAction<StartConfig>>
}) => {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState(isMasterDefault)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const setConfigHandler = (config: StartConfig) => {
    setConfig(config)
    handleClose()
  }

  const onChangeHandler = (_: any, checked: boolean) => {
    setConfig(getStartConfig(checked))
    setValue(checked)
  }

  return (
    <div>
      
      <Typography sx={{ margin: '0 32px', textAlign: 'center' }} color="error">
        (для більш гнучкого встановлення вимог до перевірки натисніть
        <Button onClick={handleOpen}>Налаштування перевірки</Button>
        ).
      </Typography>
      <Typography sx={{ margin: '16px', textAlign: 'center' }}>
        Виберіть кваліфікацію:
        <br />
        Бакалавр
        <Switch onChange={onChangeHandler} checked={value} />
        Магістр
      </Typography>
      {open && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <SettingsForm startConfig={getStartConfig(value)} config={config} setConfig={setConfigHandler} />
          </Box>
        </Modal>
      )}
    </div>
  )
}

import { AnimatePresence, /*motion*/ } from 'framer-motion'
import { /*IconButton,*/ useColorMode, useColorModeValue, Switch } from '@chakra-ui/react'
// import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()
  const isLight = useColorModeValue('light') ? true : false
  console.log(isLight)

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      
      {/* <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      > */}
        <Switch size='md' key={useColorModeValue('light', 'dark')} colorScheme={'yellow'} onChange={toggleColorMode} isChecked={isLight} />
        {/* <IconButton
          aria-label="Toggle theme"
          colorScheme={useColorModeValue('purple', 'orange')}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
        ></IconButton> */}
      {/* </motion.div> */}
    </AnimatePresence>
  )
}

export default ThemeToggleButton

import './App.css';
import Display from './components/Display';
import Navbar from './components/Navbar';
import {
  ChakraProvider,
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from '@chakra-ui/react'


const { Button } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
  },
})



// => Partially completed will be completed after 3 4 days
// => Frontend is left Backend Donee...
function App() {
  return (
    <ChakraProvider>
    <ChakraBaseProvider theme={theme}>
      <Navbar />
    </ChakraBaseProvider>
    </ChakraProvider>
  );
}

export default App; 
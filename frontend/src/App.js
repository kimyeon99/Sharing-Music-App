
import { Button, ButtonGroup } from '@chakra-ui/react';
import './App.css';
import Header from './Header';
import { ChakraProvider } from '@chakra-ui/react';
import Sidebar from './Sidebar';
import Post from './Post';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Sidebar></Sidebar>
      </div>
  </ChakraProvider>
  );
}

export default App;

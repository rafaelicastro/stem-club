import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
			<HashRouter>
			{/* <BrowserRouter> */}
				<App />
			{/* </BrowserRouter> */}
			</HashRouter>
		</ChakraProvider>
  </React.StrictMode>
);
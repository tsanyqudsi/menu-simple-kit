import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';

import '@assets/fonts/roboto';

createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<CssBaseline />
		<Router>
			<App />
		</Router>
	</StrictMode>
);

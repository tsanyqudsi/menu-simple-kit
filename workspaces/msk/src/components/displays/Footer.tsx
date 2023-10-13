import { AppBar, Box, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const Footer = () => {
	return (
		<>
			<AppBar
				sx={{
					zIndex: 1,
					color: 'primary',
					position: 'fixed',
					top: 'auto',
					bottom: 0,
				}}
			>
				<Toolbar
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Box>
						|
						<Link to={'/detail'}>
							<Button sx={{ color: 'white' }}>Order</Button>
						</Link>
						|
						<Link to={'/staff'}>
							<Button sx={{ color: 'white' }}>Bill</Button>
						</Link>
						|<Button sx={{ color: 'white' }}>Help</Button>|
					</Box>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</>
	);
};

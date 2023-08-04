import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
// import { Box, Button } from '@mui/material';

// export const Footer = () => {
// 	return (
// 		<Box
// 			sx={{
// 				display: 'flex',
// 				justifyContent: 'center',
// 				alignItems: 'center',
// 				height: '60px',
// 				backgroundColor: 'primary.main',
// 				padding: '0 15px 0 15px',
// 			}}
// 		>
// 			<Box sx={{ width: '49.5%' }}>
// 				<Button
// 					sx={{
// 						width: '100%',
// 						color: 'white',
// 						backgroundColor: 'primary.main',
// 					}}
// 				>
// 					Order
// 				</Button>
// 			</Box>
// 			<Box
// 				sx={{
// 					width: '1%',
// 					backgroundColor: 'white',
// 					color: 'white',
// 					borderRadius: '50%',
// 				}}
// 			>
// 				|
// 			</Box>
// 			<Box sx={{ width: '49.5%' }}>
// 				<Button
// 					sx={{
// 						width: '100%',
// 						color: 'white',
// 						backgroundColor: 'primary.main',
// 					}}
// 				>
// 					Bill
// 				</Button>
// 			</Box>
// 		</Box>
// 	);
// };

export const Footer = () => {
	return (
		<AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
			<Toolbar>
				<IconButton color="inherit" aria-label="open drawer">
					<MenuIcon />
				</IconButton>
				<Box sx={{ flexGrow: 1 }} />
				<IconButton color="inherit">
					<SearchIcon />
				</IconButton>
				<IconButton color="inherit">
					<MoreIcon />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};

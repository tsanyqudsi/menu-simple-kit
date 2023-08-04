import { Box, Button } from '@mui/material';

export const Footer = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '60px',
				backgroundColor: 'primary.main',
				padding: '0 15px 0 15px',
			}}
		>
			<Box sx={{ width: '49.5%' }}>
				<Button
					sx={{
						width: '100%',
						color: 'white',
						backgroundColor: 'primary.main',
					}}
				>
					Order
				</Button>
			</Box>
			<Box
				sx={{
					width: '1%',
					backgroundColor: 'white',
					color: 'white',
					borderRadius: '50%',
				}}
			>
				|
			</Box>
			<Box sx={{ width: '49.5%' }}>
				<Button
					sx={{
						width: '100%',
						color: 'white',
						backgroundColor: 'primary.main',
					}}
				>
					Bill
				</Button>
			</Box>
		</Box>
	);
};

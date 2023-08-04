import { ReactNode } from 'react';
import { Grid } from '@mui/material';

interface MenuListProps {
	children: ReactNode;
}

export const MenuList = (props: MenuListProps) => {
	return (
		// <ul
		// sx={{
		// 	paddingLeft: 0,
		// 	display: 'flex',
		// 	flexDirection: 'column',
		// 	gap: '2rem',
		// }}
		// >
		// </ul>
		<Grid container>{props.children}</Grid>
	);
};

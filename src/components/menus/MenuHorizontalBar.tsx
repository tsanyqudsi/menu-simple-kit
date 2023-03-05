import { Box } from '@mui/material';

interface MenuHorizontalBarProps {
	categories: string;
}

export const MenuHorizontalBar = (props: MenuHorizontalBarProps) => {
	return <Box>{props.categories}</Box>;
};

import { ReactNode } from 'react';

interface MenuListProps {
	children: ReactNode;
}

export const MenuList = (props: MenuListProps) => {
	return (
		<ul
			style={{
				paddingLeft: 0,
				display: 'flex',
				flexDirection: 'column',
				gap: '2rem',
			}}
		>
			{props.children}
		</ul>
	);
};

import { IconButton, Box } from '@mui/material';
import { GridViewSharp } from '@mui/icons-material';
import { List } from '@mui/icons-material';
import { useState } from 'react';
import { BaseLayout } from '@layouts';
import { useAtomValue } from 'jotai';
import { menuAtom } from '@store';
import { Menu } from '@components';

export default function Home() {
	const menu = useAtomValue(menuAtom);
	const [disp, setDisp] = useState(0);

	if (menu) {
		return (
			<BaseLayout>
				<IconButton
					onClick={() => {
						if (disp === 0) {
							setDisp(1);
						} else {
							setDisp(0);
						}
					}}
					sx={{
						zIndex: 99,
						backgroundColor: 'white',
						position: 'fixed',
						top: 'auto',
						bottom: 70,
						boxShadow: '4px 4px 3px rgba(0, 0, 0, .4)',
					}}
				>
					{disp === 1 ? (
						<GridViewSharp sx={{ color: 'primary.main' }} />
					) : (
						<List sx={{ color: 'primary.main' }} />
					)}
				</IconButton>
				{Object.keys(menu).map((value, index) => {
					return (
						<Menu
							disp={disp}
							data={menu[value]}
							title={Object.keys(menu)[index]}
							key={`${menu[index]}-${index}`}
						/>
					);
				})}
				<Box sx={{ height: '36px' }} />
			</BaseLayout>
		);
	}
	return null;
}

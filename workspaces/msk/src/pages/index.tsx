import { IconButton, Box, Link } from '@mui/material';
import { GridViewSharp } from '@mui/icons-material';
import { List } from '@mui/icons-material';
import { ArrowDropUp } from '@mui/icons-material';
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
				<Box
					sx={{
						position: 'fixed',
						top: 'auto',
						right: 70,
						bottom: 90,
						zIndex: 99,
					}}
				>
					<Box sx={{ display: 'block', paddingTop: '.25rem' }} />
					<Link href="#">
						<IconButton
							sx={{
								backgroundColor: 'white',
								boxShadow: '4px 4px 3px rgba(0, 0, 0, .4)',
							}}
						>
							<ArrowDropUp sx={{ color: 'primary.main' }} />
						</IconButton>
					</Link>
				</Box>
				<IconButton
					onClick={() => {
						if (disp === 0) {
							setDisp(1);
						} else {
							setDisp(0);
						}
					}}
					sx={{
						backgroundColor: 'primary.main',
					}}
				>
					{disp === 1 ? (
						<GridViewSharp sx={{ color: 'white' }} />
					) : (
						<List sx={{ color: 'white' }} />
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

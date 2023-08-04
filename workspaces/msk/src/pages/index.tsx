import { Button } from '@mui/material';
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
				<Button
					onClick={() => {
						if (disp == 0) {
							setDisp(1);
						} else {
							setDisp(0);
						}
					}}
				>
					qwerty
				</Button>
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
			</BaseLayout>
		);
	}
	return null;
}

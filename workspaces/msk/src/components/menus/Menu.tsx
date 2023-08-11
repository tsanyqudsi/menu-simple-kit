import { MenuContentProps } from '@api';
import { MenuElementGrid } from './MenuElementGrid';
import { MenuElementList } from './MenuElementList';
import { MenuHorizontalBar } from './MenuHorizontalBar';
import { MenuList } from './MenuList';

interface MenuProps {
	data: MenuContentProps[];
	disp: number;
	title: string;
}

export const Menu = (props: MenuProps) => {
	return (
		<>
			<MenuHorizontalBar categories={props.title} />
			<MenuList>
				{props.data.map((value, index) => {
					if (props.disp === 0) {
						return (
							<MenuElementGrid
								image={value.Gambar}
								title={value['Nama']}
								shortDescription={value['Deskripsi Pendek']}
								longDescription={value['Deskripsi Panjang']}
								price={value.Harga}
								key={`${value['Nama']}-${index}`}
							/>
						);
					} else {
						return (
							<MenuElementList
								image={value.Gambar}
								title={value['Nama']}
								shortDescription={value['Deskripsi Pendek']}
								longDescription={value['Deskripsi Panjang']}
								price={value.Harga}
								key={`${value['Nama']}-${index}`}
							/>
						);
					}
				})}
			</MenuList>
		</>
	);
};

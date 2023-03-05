import { Box, Card, CardMedia, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import placeholderImage from '@assets/images/placeholderImage.jpeg';
import { formatToRupiah } from '@api';
import { Link } from 'react-router-dom';

interface MenuElementProps {
	image: string;
	title: string;
	shortDescription: string;
	longDescription: string;
	price: string;
}

export const MenuElement = (props: MenuElementProps) => {
	const [image, setImage] = useState<string>();
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const getMenuImage = async () => {
			try {
				const response = await import(
					`../../configs/menu/images/${props.image}.jpg`
				);
				setImage(response.default);
			} catch (err) {
				setImage(placeholderImage);
			} finally {
				setLoading(false);
			}
		};
		getMenuImage();
	});

	return (
		<Link to={'/detail'}>
			<Card
				component={'li'}
				sx={{
					width: '100%',
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				{!loading && (
					<CardMedia
						sx={{
							width: '200px',
							height: '200px',
							objectFit: 'cover',
						}}
						component={'img'}
						image={image}
						alt={props.title}
					/>
				)}
				<Box
					sx={{
						paddingRight: '2rem',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'end',
					}}
				>
					<Typography fontWeight={600} fontSize={24}>
						{props.title}
					</Typography>
					<Typography>{formatToRupiah(props.price)}</Typography>
					<Typography>{props.shortDescription}</Typography>
				</Box>
			</Card>
		</Link>
	);
};

import { Container } from '@mui/material';
import { Hero } from '@components';

export type BaseLayoutProps = {
	children: React.ReactNode;
};

export const BaseLayout = (props: BaseLayoutProps) => {
	return (
		<>
			<Hero />
			<Container>{props.children}</Container>
		</>
	);
};

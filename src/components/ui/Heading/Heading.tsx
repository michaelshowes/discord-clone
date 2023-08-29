import scss from './heading.module.scss';

type HeadingProps = {
	type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	children: React.ReactNode;
};

export default function Heading({ type, children }: HeadingProps) {
	return (
		<>
			{type === 'h1' ? (
				<h1 className={scss.h1}>{children}</h1>
			) : type === 'h2' ? (
				<h2 className={scss.h2}>{children}</h2>
			) : type === 'h3' ? (
				<h3 className={scss.h3}>{children}</h3>
			) : type === 'h4' ? (
				<h4 className={scss.h4}>{children}</h4>
			) : type === 'h5' ? (
				<h5 className={scss.h5}>{children}</h5>
			) : type === 'h6' ? (
				<h6 className={scss.h6}>{children}</h6>
			) : (
				<h1 className={scss.h1}>{children}</h1>
			)}
		</>
	);
}

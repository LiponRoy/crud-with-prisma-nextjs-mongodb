import React from 'react';

interface buttonProps {
	type: 'button' | 'submit' | 'reset' | undefined;
	onClick: (event: React.MouseEvent<HTMLElement>) => void;
	title: string;
	myClassName?: string;
}

const Button = ({ type, onClick, title, myClassName }: buttonProps) => {
	return (
		<>
			<button className={myClassName} type={type} onClick={onClick}>
				{title}
			</button>
		</>
	);
};

export default Button;

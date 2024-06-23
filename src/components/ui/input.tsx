import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(
					'nflex nh-10 nw-full nrounded-md nborder nborder-input nbg-background npx-3 npy-2 ntext-sm nring-offset-background file:nborder-0 file:nbg-transparent file:ntext-sm file:nfont-medium placeholder:ntext-muted-foreground focus-visible:noutline-none focus-visible:nring-2 focus-visible:nring-ring focus-visible:nring-offset-2 disabled:ncursor-not-allowed disabled:nopacity-50',
					className
				)}
				ref={ref}
				{...props}
			/>
		);
	}
);
Input.displayName = 'Input';

export { Input };

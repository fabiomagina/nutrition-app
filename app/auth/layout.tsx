const AuthLayout = ({
	children
}: {
	children: React.ReactNode
}) => {
	return (
		<div className="h-full w-full flex items-center justify-center    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-400 to-[#0D736A]">
			{children}
		</div>
	);
};

export default AuthLayout;
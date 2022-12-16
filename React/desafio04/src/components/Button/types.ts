export interface IButtonProps extends React.InputHTMLAttributes<HTMLButtonElement> {
    title: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

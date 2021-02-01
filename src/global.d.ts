declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '@iconscout/react-unicons';
declare module "*.scss"
declare module "*.css"
declare module "*.svg"
declare module "*.png"
declare module "*.jpg"
type ReactNode =
	| ReactChild
	| ReactFragment
	| ReactPortal
	| boolean
	| null
	| undefined

type ButtonProps = {
    type: 'button' | 'submit' ;
    title: string;
    icon?: string;
    variant: string,
    fontSize: string,
}

const Button = (
    {type, title, icon, variant, fontSize} : ButtonProps
) => {
  return (
    <button 
    className={`flexCenter rounded-md ${variant}`}
    type={type}>
        <label className={`${fontSize} py-1  px-2  whitespace-nowrap cursor-pointer`}>
            {title}
        </label>
    </button>
  )
}

export default Button
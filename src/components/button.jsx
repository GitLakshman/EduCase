const CustomButton = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary', // 'primary' | 'secondary' | 'disabled'
  disabled = false,
  className = '',
  ...props
}) => {
  // Base styling for the buttons to match the pixel-perfect design
  const baseStyle = 'w-full py-3 px-4 rounded-[6px] text-sm font-semibold text-center transition-all duration-200 focus:outline-none'

  // Custom styles for each variant
  const variants = {
    primary: 'bg-[#6C25FF] text-white hover:bg-[#5b1ee0] active:bg-[#4d17c5]',
    secondary: 'bg-[#6C25FF4B] text-[#1D2229] hover:bg-[#b8adc9] active:bg-[#a69bb7]',
    disabled: 'bg-[#CBCBCB] text-white cursor-not-allowed',
  }

  // Determine current style based on variant or disabled state
  const currentVariant = disabled ? 'disabled' : variant

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || variant === 'disabled'}
      className={`${baseStyle} ${variants[currentVariant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default CustomButton

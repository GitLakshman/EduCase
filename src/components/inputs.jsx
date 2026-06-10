const CustomInput = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  required = false,
  showAsterisk = false,
  error,
  ...props
}) => {
  return (
    <div className="relative w-full mb-5">
      {/* Container with relative position to anchor the label */}
      <div className="relative">
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`w-full px-4 py-3 text-sm text-[#1D2229] bg-transparent border rounded-[6px] focus:outline-none focus:border-[#6C25FF] transition-colors placeholder:text-gray-400 ${error ? 'border-red-500' : 'border-[#CBC3E3]'
            }`}
          {...props}
        />
        {/* Label positioned on top of the border */}
        <label
          className="absolute left-3 top-0 -translate-y-1/2 bg-[#F7F8FA] px-1 text-xs font-semibold text-[#6C25FF] pointer-events-none"
        >
          {label}
          {showAsterisk && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      </div>
      {error && <span className="text-xs text-red-500 mt-1 block">{error}</span>}
    </div>
  )
}

export default CustomInput

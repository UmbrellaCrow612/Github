interface SearchInputProps {}

export const SearchInput: React.FC<SearchInputProps> = () => {
  return (
    <input
      type="text"
      className="w-full transition-all ease-in-out bg-[#0D1116] h-full px-4 rounded-md shadow-xl text-[#C3C3C5] border-[1px] outline-[0.5px] border-[#30363D] outline-none tracking-wide"
      placeholder="Search or jump to..."
    />
  )
}

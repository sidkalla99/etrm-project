import React from 'react';
import { MdExpandMore } from 'react-icons/md';

type DropdownProps = {
  label: string;
  options: string[];
  selected: string;
  onChange: (val: string) => void;
};

const Dropdown: React.FC<DropdownProps> = ({ label, options, selected, onChange }) => {
  return (
    <div className="border border-black rounded-lg overflow-hidden flex items-stretch text-sm w-full max-w-md">
      <div className="flex-1 bg-white px-4 py-2 flex items-center text-black">
        <span className="text-lg mr-2 text-purple-600">+</span>
        {label}
      </div>
      <select
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        className="bg-gray-300 px-3 py-2 text-black focus:outline-none"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

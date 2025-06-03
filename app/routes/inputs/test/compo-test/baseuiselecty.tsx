// components/BaseUIDropdown.tsx
import React from 'react';
import * as Select from '@base-ui-components/react/select';
import { MdExpandMore } from 'react-icons/md';

type Props = {
    label: string;
    options: string[];
    selected: string;
    onChange: (val: string) => void;
};

const BaseUIDropdown: React.FC<Props> = ({ label, options, selected, onChange }) => {
    return (
        <div className="w-full max-w-md">
            <label className="block text-sm mb-1 font-medium text-black">{label}</label>
            <Select.Root value={selected} onValueChange={onChange}>
                <Select.Trigger className="w-full flex items-center justify-between border border-black rounded-lg px-4 py-2 text-left bg-white">
                    <Select.Value />
                    <Select.Icon>
                        <MdExpandMore />
                    </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                    <Select.Positioner>
                        <Select.Content className="rounded-md border bg-white text-black shadow-md w-full">
                            {options.map((opt) => (
                                <Select.Item
                                    key={opt}
                                    value={opt}
                                    className="px-3 py-2 hover:bg-orange-100 cursor-pointer"
                                >
                                    {opt}
                                </Select.Item>
                            ))}
                        </Select.Content>
                    </Select.Positioner>
                </Select.Portal>
            </Select.Root>
        </div>
    );
};

export default BaseUIDropdown;

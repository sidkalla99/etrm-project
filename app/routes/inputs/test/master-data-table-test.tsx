// pages/MasterDataPage.tsx
import React, { useState } from 'react';
import BaseUIDropdown from './compo-test/baseuiselecty';

const MasterDataPage = () => {
    const [action, setAction] = useState('Add');
    const [method, setMethod] = useState('Manual');
    const [category, setCategory] = useState('Legal Entities');

    const categories = [
        'Business Units', 'Countries', 'Currencies', 'Technologies', 'ISO',
        'Parent Companies', 'Legal Entities', 'Nodes', 'Timezones', 'Units',
        'Assets', 'Ownership', 'Energy Markets', 'Capacity Markets', 'Attribute Markets'
    ];

    return (
        <div className="p-6 space-y-6 text-black max-w-xl">
            <h1 className="text-2xl font-bold text-orange-600">Master Data Table</h1>

            <BaseUIDropdown
                label="What would you like to do?"
                options={['Add', 'View']}
                selected={action}
                onChange={setAction}
            />

            <BaseUIDropdown
                label="Choose Entry Type - Bulk / Manual"
                options={['Manual', 'Bulk']}
                selected={method}
                onChange={setMethod}
            />

            {method === 'Manual' && (
                <BaseUIDropdown
                    label="Select Category"
                    options={categories}
                    selected={category}
                    onChange={setCategory}
                />
            )}

            {method === 'Bulk' && (
                <div className="space-y-2">
                    <label className="font-bold">Bulk Method</label>
                    <div className="bg-gray-100 p-4 rounded-md flex items-center space-x-4">
                        <input
                            type="text"
                            placeholder="Folder path"
                            className="flex-1 px-3 py-2 border rounded-md"
                        />
                        <button className="bg-orange-500 text-white px-4 py-2 rounded-md">
                            Select Folder
                        </button>
                        <button className="bg-orange-600 text-white px-4 py-2 rounded-md">
                            Upload
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MasterDataPage;

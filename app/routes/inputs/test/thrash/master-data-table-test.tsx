import React, { useState } from 'react';
// import BaseUIDropdown from './compo-test/BaseUIDropdown';
import BaseUIDropdown from '../compo-test/baseuiselecty';

const MasterDataPage = () => {
    const [action, setAction] = useState('Add');
    const [method, setMethod] = useState('Manual');
    const [category, setCategory] = useState('Legal Entities');

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
                    options={[
                        'Business Units', 'Countries', 'Currencies', 'Technologies', 'ISO',
                        'Parent Companies', 'Legal Entities', 'Nodes', 'Timezones', 'Units',
                        'Assets', 'Ownership', 'Energy Markets', 'Capacity Markets', 'Attribute Markets'
                    ]}
                    selected={category}
                    onChange={setCategory}
                />
            )}
        </div>
    );
};

export default MasterDataPage;

import React, {useState} from 'react'

const categories = [
    'Business Units', 'Countries', 'Currencies', 'Technologies', 'ISO',
    'Parent Companies', 'Legal Entities', 'Nodes', 'Timezones', 'Units',
    'Assets', 'Ownership', 'Energy Markets', 'Capacity Markets', 'Attribute Markets'
];

const MasterDataTable = () => {

    const [action, setAction] = useState<'add' | 'view'>('add');
    const [method, setMethod] = useState<'manual' | 'bulk'>('manual');
    const [category, setCategory] = useState<string>('Legal Entities');
    const [folder, setFolder] = useState('./');

    return (
        <div className="p-6 space-y-6 text-black">
            <h1 className="text-2xl font-bold text-orange-600">Master Data Table</h1>

            {/* Step 1 */}
            <div className="space-y-1">
                <div className="pb-4"> <label className="font-medium">What would you like to do?</label>
                </div>
                <div className="flex space-x-4">
                    <button
                        onClick={() => setAction('add')}
                        className={`px-4 py-2 rounded-md ${action === 'add' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-black'}`}
                    >
                        Add
                    </button>
                    <button
                        onClick={() => setAction('view')}
                        className={`px-4 py-2 rounded-md ${action === 'view' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-black'}`}
                    >
                        View
                    </button>
                </div>
            </div>

            {/* Step 2 */}
            <div className="space-y-1">
                <div className="pb-4"><label className="font-medium">Choose Entry Type - Bulk / Manual</label></div>
                <div className="flex space-x-4">
                    <button
                        onClick={() => setMethod('manual')}
                        className={`px-4 py-2 rounded-md ${method === 'manual' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-black'}`}
                    >
                        Manual
                    </button>
                    <button
                        onClick={() => setMethod('bulk')}
                        className={`px-4 py-2 rounded-md ${method === 'bulk' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-black'}`}
                    >
                        Bulk
                    </button>
                </div>
            </div>

            {/* Step 3 */}
            {method === 'manual' && (
                <div className="space-y-2">
                    <div className="pr-4"><label className="font-medium">Select Category</label></div>
                    <select
                        className="border p-2 rounded-md text-red-600"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>
            )}

            {method === 'bulk' && (
                <div className="space-y-2">
                    <label className="font-medium">Bulk Method</label>
                    <div className="bg-gray-100 p-4 rounded-md flex items-center space-x-4">
                        <input
                            type="text"
                            placeholder="Folder path"
                            value={folder}
                            onChange={(e) => setFolder(e.target.value)}
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
    )
}
export default MasterDataTable

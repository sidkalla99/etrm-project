// import React, { useState } from 'react';
// import {
//     MdMenu,
//     MdLogout,
//     MdHome,
//     MdAdd,
//     MdVisibility,
//     MdStorage,
//     MdUpload,
//     MdFolder,
// } from 'react-icons/md';
// import type {IconType} from 'react-icons';
// import clsx from 'clsx';
// import { NavLink } from 'react-router';
//
// // ---------------- Types ----------------
// type NavItem = {
//     label: string;
//     href?: string;
//     icon?: IconType;
//     children?: NavItem[];
//     roles?: string[];
// };
//
// // ---------------- Mock User ----------------
// const user = {
//     name: 'Ioritz',
//     role: 'super-user',
//     avatar: '/user-avatar.png',
// };
//
// // ---------------- Navigation Structure ----------------
// const navItems: NavItem[] = [
//     {
//         label: 'Master Data Table',
//         icon: MdHome,
//         children: [
//             { label: 'Add', icon: MdAdd, href: '/inputs/master-data/add' },
//             { label: 'View Existing Data', icon: MdVisibility, href: '/inputs/master-data/view' },
//         ],
//     },
//     {
//         label: 'Assets & PPAs',
//         icon: MdStorage,
//         roles: ['super-user'],
//         children: [
//             { label: 'Assets', icon: MdFolder, href: '/inputs/assets-contracts/view' },
//             { label: 'Contracts', icon: MdFolder, href: '/inputs/assets-contracts/contracts' },
//         ],
//     },
//     {
//         label: 'Market Data',
//         icon: MdUpload,
//         href: '/inputs/market-generation-data',
//     },
//     {
//         label: 'Generation Data',
//         icon: MdUpload,
//         href: '/inputs/generation-data',
//     },
// ];
//
// // ---------------- Component ----------------
// const Sidebar = () => {
//     const [collapsed, setCollapsed] = useState(false);
//
//     const renderNavItem = (item: NavItem, depth = 0) => {
//         if (item.roles && !item.roles.includes(user.role)) return null;
//         const Icon = item.icon;
//
//         return (
//             <div key={item.label} className={`ml-${depth * 4} px-2`}>
//                 <div className="flex items-center gap-2 py-1">
//                     {Icon && <Icon />}
//                     {!collapsed && item.href ? (
//                         <NavLink
//                             to={item.href}
//                             className={({ isActive }) =>
//                                 clsx('hover:text-orange-500', isActive && 'text-orange-400 font-semibold')
//                             }
//                         >
//                             {item.label}
//                         </NavLink>
//                     ) : (
//                         !collapsed && <span>{item.label}</span>
//                     )}
//                 </div>
//                 {!collapsed && item.children && (
//                     <div className="ml-4 space-y-1">
//                         {item.children.map((child) => renderNavItem(child, depth + 1))}
//                     </div>
//                 )}
//             </div>
//         );
//     };
//
//     return (
//         <aside
//             className={clsx(
//                 'h-screen bg-black text-white flex flex-col justify-between transition-all duration-300',
//                 collapsed ? 'w-16' : 'w-64'
//             )}
//         >
//             {/* Top */}
//             <div>
//                 <div className="flex items-center justify-between p-4">
//                     {!collapsed && <span className="text-xl font-bold">Zelestra</span>}
//                     <button onClick={() => setCollapsed((prev) => !prev)} className="text-white">
//                         <MdMenu size={24} />
//                     </button>
//                 </div>
//                 <nav className="text-sm space-y-2">{navItems.map(renderNavItem)}</nav>
//             </div>
//
//             {/* Bottom Profile */}
//             <div className="border-t border-gray-700 px-4 py-3 text-sm">
//                 <div className="flex items-center gap-3">
//                     <img
//                         src={user.avatar}
//                         alt="avatar"
//                         className="h-8 w-8 rounded-full object-cover"
//                     />
//                     {!collapsed && (
//                         <div>
//                             <p>{user.name}</p>
//                             <p className="text-orange-400 capitalize">{user.role}</p>
//                             <button className="text-white mt-1 flex items-center gap-1 hover:text-red-400">
//                                 <MdLogout size={16} />
//                                 Logout
//                             </button>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </aside>
//     );
// };
//
// export default Sidebar;

//
// import React, { useState } from 'react';
// import {
//     MdMenu,
//     MdLogout,
//     MdDataset,
//     MdStorage,
//     MdTimeline,
//     MdBarChart,
//     MdCompare,
//     MdAdd,
//     MdVisibility,
// } from 'react-icons/md';
// import clsx from 'clsx';
//
// const Sidebar = () => {
//     const [collapsed, setCollapsed] = useState(false);
//     const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({
//         master: false,
//         assets: false,
//         scenario: false,
//         output: false,
//     });
//
//     const toggle = (key: string) =>
//         setOpenMenus((prev) => ({ ...prev, [key]: !prev[key] }));
//
//     const navSection = (
//         label: string,
//         icon: React.ReactNode,
//         key: string,
//         links: { label: string; path: string }[]
//     ) => (
//         <div>
//             <button
//                 onClick={() => toggle(key)}
//                 className="flex items-center gap-2 w-full px-4 py-2 hover:text-orange-400"
//             >
//                 {icon}
//                 {!collapsed && <span className="flex-1">{label}</span>}
//                 {!collapsed && (
//                     <span className="text-sm">{openMenus[key] ? '▾' : '▸'}</span>
//                 )}
//             </button>
//             {!collapsed && openMenus[key] && (
//                 <div className="ml-10 text-sm text-orange-300 space-y-1">
//                     {links.map((link) => (
//                         <div key={link.label} className="flex items-center gap-2">
//                             <span className="text-xs">•</span>
//                             <span>{link.label}</span>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
//
//     return (
//         <aside
//             className={clsx(
//                 'h-screen bg-black text-white flex flex-col justify-between transition-all duration-300',
//                 collapsed ? 'w-16' : 'w-64'
//             )}
//         >
//             {/* Header */}
//             <div>
//                 <div className="flex items-center justify-between p-4">
//                     {!collapsed && <span className="text-xl font-bold">Zelestra</span>}
//                     <button
//                         onClick={() => setCollapsed(!collapsed)}
//                         className="text-white"
//                     >
//                         <MdMenu size={24} />
//                     </button>
//                 </div>
//
//                 {/* Main Nav */}
//                 <nav className="space-y-2">
//                     {navSection('Master Data', <MdDataset />, 'master', [
//                         { label: 'Add/Modify', path: '/inputs/master-data/add' },
//                         { label: 'View', path: '/inputs/master-data/view' },
//                     ])}
//
//                     {navSection('Assets & PPAs', <MdStorage />, 'assets', [
//                         { label: 'Add/Modify', path: '/inputs/assets-contracts/add' },
//                         { label: 'View', path: '/inputs/assets-contracts/view' },
//                     ])}
//
//                     {navSection('Scenario Mgt', <MdTimeline />, 'scenario', [
//                         { label: 'Portfolio Add/Edit', path: '/scenario-mgt/portfolio/add-edit' },
//                         { label: 'Portfolio View', path: '/scenario-mgt/portfolio/view' },
//                         { label: 'Runs', path: '/scenario-mgt/runs' },
//                     ])}
//                 </nav>
//             </div>
//
//             {/* Bottom Icons Menu */}
//             <div className="space-y-2 border-t border-gray-700 px-2 pt-4">
//                 <div>
//                     <button
//                         onClick={() => toggle('output')}
//                         className="flex items-center w-full gap-2 px-2 py-1 hover:text-orange-400"
//                     >
//                         <MdBarChart size={20} />
//                         {!collapsed && <span>Output</span>}
//                         {!collapsed && (
//                             <span className="text-sm">{openMenus.output ? '▾' : '▸'}</span>
//                         )}
//                     </button>
//                     {!collapsed && openMenus.output && (
//                         <div className="ml-8 text-sm text-orange-300 space-y-1">
//                             <div className="flex items-center gap-2">
//                                 <MdVisibility size={16} />
//                                 <span>Graphs & KPIs</span>
//                             </div>
//                             <div className="flex items-center gap-2">
//                                 <MdCompare size={16} />
//                                 <span>Compare Runs</span>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//
//                 <div className="flex items-center gap-2 px-2 py-1 text-sm text-white/80">
//                     <MdLogout />
//                     {!collapsed && <button>Logout</button>}
//                 </div>
//             </div>
//         </aside>
//     );
// };
//
// export default Sidebar;

//
// import React, { useState } from 'react';
// import {
//     MdMenu,
//     MdLogout,
//     MdHome,
//     MdAdd,
//     MdVisibility,
//     MdStorage,
//     MdUpload,
//     MdFolder,
//     MdBarChart,
//     MdCompare,
// } from 'react-icons/md';
// import clsx from 'clsx';
// import { Menu } from '@base-ui-components/react/menu';
//
// const Sidebar = () => {
//     const [collapsed, setCollapsed] = useState(false);
//
//     const user = {
//         name: 'Ioritz',
//         role: 'super-user',
//         avatar: '/user-avatar.png',
//     };
//
//     return (
//         <aside
//             className={clsx(
//                 'h-screen bg-black text-white flex flex-col justify-between transition-all duration-300',
//                 collapsed ? 'w-16' : 'w-64'
//             )}
//         >
//             {/* Top Branding + Toggle */}
//             <div>
//                 <div className="flex items-center justify-between p-4">
//                     {!collapsed && <span className="text-xl font-bold">Zelestra</span>}
//                     <button
//                         onClick={() => setCollapsed((prev) => !prev)}
//                         className="text-white hover:text-orange-400"
//                     >
//                         <MdMenu size={24} />
//                     </button>
//                 </div>
//
//                 {/* Navigation Sections */}
//                 <nav className="px-2 text-sm space-y-2">
//                     {/* Master Data */}
//                     <Menu.Root>
//                         <Menu.Trigger className="flex items-center gap-2 w-full px-2 py-1 hover:text-orange-400">
//                             <MdHome />
//                             {!collapsed && <span>Master Data Table</span>}
//                         </Menu.Trigger>
//                         <Menu.Portal>
//                             <Menu.Positioner sideOffset={8}>
//                                 <Menu.Popup className="bg-white text-black rounded-md shadow p-2 w-48">
//                                     <Menu.Item className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100">
//                                         <MdAdd />
//                                         <span>Add/Modify</span>
//                                     </Menu.Item>
//                                     <Menu.Item className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100">
//                                         <MdVisibility />
//                                         <span>View</span>
//                                     </Menu.Item>
//                                 </Menu.Popup>
//                             </Menu.Positioner>
//                         </Menu.Portal>
//                     </Menu.Root>
//
//                     {/* Assets & PPAs */}
//                     {user.role === 'super-user' && (
//                         <Menu.Root>
//                             <Menu.Trigger className="flex items-center gap-2 w-full px-2 py-1 hover:text-orange-400">
//                                 <MdStorage />
//                                 {!collapsed && <span>Assets & PPAs</span>}
//                             </Menu.Trigger>
//                             <Menu.Portal>
//                                 <Menu.Positioner sideOffset={8}>
//                                     <Menu.Popup className="bg-white text-black rounded-md shadow p-2 w-48">
//                                         <Menu.Item className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100">
//                                             <MdAdd />
//                                             <span>Add/Modify</span>
//                                         </Menu.Item>
//                                         <Menu.Item className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100">
//                                             <MdVisibility />
//                                             <span>View</span>
//                                         </Menu.Item>
//                                     </Menu.Popup>
//                                 </Menu.Positioner>
//                             </Menu.Portal>
//                         </Menu.Root>
//                     )}
//
//                     {/* Market Data */}
//                     <div className="flex items-center gap-2 px-2 py-1 hover:text-orange-400">
//                         <MdUpload />
//                         {!collapsed && <span>Market Data Upload</span>}
//                     </div>
//
//                     {/* Generation Data */}
//                     <div className="flex items-center gap-2 px-2 py-1 hover:text-orange-400">
//                         <MdUpload />
//                         {!collapsed && <span>Generation Data Upload</span>}
//                     </div>
//                 </nav>
//             </div>
//
//             {/* Bottom Icons Menu */}
//             <div className="border-t border-gray-700 px-4 py-3 text-sm">
//                 {/* Output Menu */}
//                 <Menu.Root>
//                     <Menu.Trigger className="flex items-center gap-2 w-full px-2 py-1 hover:text-orange-400">
//                         <MdBarChart />
//                         {!collapsed && <span>Output</span>}
//                     </Menu.Trigger>
//                     <Menu.Portal>
//                         <Menu.Positioner sideOffset={8}>
//                             <Menu.Popup className="bg-white text-black rounded-md shadow p-2 w-48">
//                                 <Menu.Item className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100">
//                                     <MdVisibility />
//                                     <span>Graphs & KPIs</span>
//                                 </Menu.Item>
//                                 <Menu.Item className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100">
//                                     <MdCompare />
//                                     <span>Compare Runs</span>
//                                 </Menu.Item>
//                             </Menu.Popup>
//                         </Menu.Positioner>
//                     </Menu.Portal>
//                 </Menu.Root>
//
//                 {/* Logout */}
//                 <div className="flex items-center gap-2 px-2 py-1 mt-4 hover:text-red-400">
//                     <MdLogout />
//                     {!collapsed && <button>Logout</button>}
//                 </div>
//             </div>
//         </aside>
//     );
// };
//
// export default Sidebar;

// # TODO:1
// import {
//     MdLogout,
//     MdHome,
//     MdAdd,
//     MdVisibility,
//     MdStorage,
//     MdFolder,
//     MdUpload,
//     MdOutlineInput,
//     MdManageAccounts,
//     MdTimeline,
//     MdBarChart,
//     MdSettings,
//     MdPerson,
//     MdBolt,
// } from 'react-icons/md';
// import { Menu } from '@base-ui-components/react/menu';
//
// const Sidebar = () => {
//     const user = {
//         name: 'Ioritz',
//         role: 'Super User',
//         avatar: '/user-avatar.png',
//     };
//
//     return (
//         <aside className="w-64 bg-white text-black flex flex-col h-screen border-r border-gray-200">
//             {/* Top Branding */}
//             <div className="p-4 text-2xl font-bold tracking-wider">
//                 <span className="text-black">Zelestra</span>
//             </div>
//
//             {/* Sections */}
//             <nav className="flex-1 overflow-y-auto px-3 text-sm space-y-4">
//                 {/* Inputs Section */}
//                 <div className="bg-orange-50 rounded-xl p-3">
//                     <div className="flex items-center text-sm font-medium text-black mb-2">
//                         <MdOutlineInput className="mr-2 text-lg" />
//                         Inputs
//                     </div>
//
//                     {/* Master Data Table */}
//                     <Menu.Root>
//                         <Menu.Trigger className="flex items-center gap-2 py-1.5 px-2 rounded-md hover:bg-orange-100 text-orange-500 font-medium">
//                             <MdHome className="text-lg" />
//                             <span>Master Data Table</span>
//                         </Menu.Trigger>
//                         <Menu.Portal>
//                             <Menu.Positioner side="right" align="start">
//                                 <Menu.Popup className="bg-white text-black rounded-md shadow-lg p-2 w-48 border border-gray-200">
//                                     <Menu.Item className="flex items-center gap-2 px-2 py-1 hover:bg-orange-100 text-sm rounded-md">
//                                         <MdAdd />
//                                         Add/Modify
//                                     </Menu.Item>
//                                     <Menu.Item className="flex items-center gap-2 px-2 py-1 hover:bg-orange-100 text-sm rounded-md">
//                                         <MdVisibility />
//                                         View
//                                     </Menu.Item>
//                                 </Menu.Popup>
//                             </Menu.Positioner>
//                         </Menu.Portal>
//                     </Menu.Root>
//
//                     {/* Assets & PPAs */}
//                     <div className="mt-3 text-[#4B0082] font-semibold flex items-center gap-2">
//                         <MdStorage />
//                         Assets & PPAs
//                     </div>
//                     <div className="ml-6 text-sm space-y-1 mt-1 text-black">
//                         <div className="flex items-center gap-2">
//                             <MdFolder />
//                             Assets
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <MdFolder />
//                             Contracts
//                         </div>
//                     </div>
//
//                     {/* Market Data */}
//                     <div className="mt-3 flex items-center gap-2">
//                         <MdUpload />
//                         <span>Market Data</span>
//                     </div>
//
//                     {/* Generation Data */}
//                     <div className="flex items-center gap-2">
//                         <MdBolt />
//                         <span>Generation Data</span>
//                     </div>
//                 </div>
//
//                 {/* Scenario Management */}
//                 <div>
//                     <div className="flex items-center text-sm font-medium text-orange-500 mb-1 mt-4">
//                         <MdManageAccounts className="mr-2 text-lg" />
//                         Scenario Management
//                     </div>
//                     <div className="ml-6 text-black space-y-1">
//                         <div className="flex items-center gap-2">
//                             <MdTimeline />
//                             Portfolio
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <MdTimeline />
//                             Runs
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <MdTimeline />
//                             Logs
//                         </div>
//                     </div>
//                 </div>
//
//                 {/* Output & Settings */}
//                 <div className="flex items-center gap-2 mt-4 text-black hover:text-orange-500 cursor-pointer">
//                     <MdBarChart />
//                     Outputs
//                 </div>
//                 <div className="flex items-center gap-2 text-black hover:text-orange-500 cursor-pointer">
//                     <MdSettings />
//                     Settings
//                 </div>
//             </nav>
//
//             {/* Bottom Profile */}
//             <div className="p-4 border-t border-gray-200 text-sm flex items-center gap-4">
//                 <img
//                     src={user.avatar}
//                     alt="Avatar"
//                     className="h-10 w-10 rounded-full object-cover"
//                 />
//                 <div>
//                     <div className="font-semibold">{user.name}</div>
//                     <div className="text-orange-500">{user.role}</div>
//                     <div className="mt-1 flex items-center gap-1 text-black hover:text-red-500 cursor-pointer">
//                         <MdLogout size={16} />
//                         Logout
//                     </div>
//                 </div>
//             </div>
//         </aside>
//     );
// };
//
// export default Sidebar;


import React, { useState } from 'react';
import {
    MdLogout,
    MdHome,
    MdAdd,
    MdVisibility,
    MdStorage,
    MdFolder,
    MdUpload,
    MdOutlineInput,
    MdManageAccounts,
    MdTimeline,
    MdBarChart,
    MdSettings,
    MdBolt,
    MdPerson,
} from 'react-icons/md';
import { Menu } from '@base-ui-components/react/menu';

const Sidebar = () => {
    const user = {
        name: 'Ioritz',
        role: 'Super User',
        avatar: '/user-avatar.png',
    };

    const [expandedSections, setExpandedSections] = useState({
        inputs: true,
    });

    const selectedItem = 'Master Data Table'; // simulate selection state
    const isInputsActive = selectedItem === 'Master Data Table'; // or use router later

    const toggleSection = (section: keyof typeof expandedSections) => {
        setExpandedSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    return (
        <aside className="w-64 bg-white text-black flex flex-col h-screen border-r border-gray-200">
            {/* Logo */}
            <div className="p-4 text-2xl font-bold tracking-wider">
                Zelestra
            </div>

            {/* Main Nav */}
            <nav className="flex-1 overflow-y-auto px-3 text-sm space-y-4">
                {/* INPUTS SECTION */}
                <div
                    className={`rounded-xl p-3 transition ${
                        isInputsActive ? 'bg-orange-50' : ''
                    }`}
                >
                    <button
                        className="flex items-center text-sm font-medium text-black mb-2 w-full"
                        onClick={() => toggleSection('inputs')}
                    >
                        <MdOutlineInput className="mr-2 text-lg" />
                        Inputs
                    </button>

                    {expandedSections.inputs && (
                        <div className="space-y-2 pl-2">
                            {/* Master Data Table with menu */}
                            <Menu.Root>
                                <Menu.Trigger className="flex items-center gap-2 py-1.5 px-2 rounded-md hover:bg-orange-100 w-full text-left font-medium text-orange-500 bg-white shadow-sm">
                                    <MdHome className="text-lg" />
                                    <span>Master Data Table</span>
                                </Menu.Trigger>
                                <Menu.Portal>
                                    <Menu.Positioner side="right" align="start">
                                        <Menu.Popup className="bg-white text-black rounded-md shadow-lg p-2 w-48 border border-gray-200">
                                            <Menu.Item className="flex items-center gap-2 px-2 py-1 hover:bg-orange-100 text-sm rounded-md">
                                                <MdAdd />
                                                Add/Modify
                                            </Menu.Item>
                                            <Menu.Item className="flex items-center gap-2 px-2 py-1 hover:bg-orange-100 text-sm rounded-md">
                                                <MdVisibility />
                                                View
                                            </Menu.Item>
                                        </Menu.Popup>
                                    </Menu.Positioner>
                                </Menu.Portal>
                            </Menu.Root>

                            {/* Assets & PPAs */}
                            <div className="flex items-center gap-2 text-black pl-1">
                                <MdStorage className="text-base" />
                                Assets & PPAs
                            </div>
                            <div className="ml-6 space-y-1 text-black text-sm">
                                <div className="flex items-center gap-2">
                                    <MdFolder className="text-xs" />
                                    Assets
                                </div>
                                <div className="flex items-center gap-2">
                                    <MdFolder className="text-xs" />
                                    Contracts
                                </div>
                            </div>

                            {/* Market Data */}
                            <div className="flex items-center gap-2 text-black pl-1">
                                <MdUpload />
                                Market Data
                            </div>

                            {/* Generation Data */}
                            <div className="flex items-center gap-2 text-black pl-1">
                                <MdBolt />
                                Generation Data
                            </div>
                        </div>
                    )}
                </div>

                {/* SCENARIO MANAGEMENT */}
                <div>
                    <div className="flex items-center text-sm font-medium text-orange-500 mb-1">
                        <MdManageAccounts className="mr-2 text-lg" />
                        Scenario Management
                    </div>
                    <div className="ml-6 text-black space-y-1">
                        <div className="flex items-center gap-2">
                            <MdTimeline />
                            Portfolio
                        </div>
                        <div className="flex items-center gap-2">
                            <MdTimeline />
                            Runs
                        </div>
                        <div className="flex items-center gap-2">
                            <MdTimeline />
                            Logs
                        </div>
                    </div>
                </div>

                {/* OUTPUTS */}
                <div className="flex items-center gap-2 mt-4 text-orange-500">
                    <MdBarChart />
                    Outputs
                </div>

                {/* SETTINGS */}
                <div className="flex items-center gap-2 text-orange-500">
                    <MdSettings />
                    Settings
                </div>
            </nav>

            {/* PROFILE SECTION */}
            <div className="p-4 border-t border-gray-200 text-sm flex items-center gap-4">
                <img
                    src={user.avatar}
                    alt="Avatar"
                    className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                    <div className="font-semibold">{user.name}</div>
                    <div className="text-orange-500">{user.role}</div>
                    <div className="mt-1 flex items-center gap-1 text-black hover:text-red-500 cursor-pointer">
                        <MdLogout size={16} />
                        Logout
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;

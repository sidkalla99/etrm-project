// // src/components/HelpButton.tsx
// import React from 'react';
// import { Popover } from '@base-ui-components/react';
// // PopoverTrigger, PopoverContent
// import { MdHelpOutline } from 'react-icons/md';
//
// const HelpButton = () => {
//     return (
//         <div className="fixed top-4 right-4 z-50">
//             <Popover.Root>
//                 <Popover.Trigger className=" ">
//                     <button
//                         className="bg-black text-white rounded-full p-2 shadow hover:opacity-80 focus:outline-none"
//                         aria-label="Help"
//                     >
//                         <MdHelpOutline size={24} />
//                     </button>
//                 </Popover.Trigger>
//                 <Popover.Description className="text-sm bg-white text-black rounded-md shadow p-4">
//                     Mail us at <a href="mailto:support@zelestra.energy" className="text-[#DC5D00] underline">support@zelestra.energy</a>
//                 </Popover.Description>
//             </Popover.Root>
//         </div>
//     );
// };
//
// export default HelpButton;


import React from 'react';
import { Popover } from '@base-ui-components/react/popover';
import { MdOutlineHelp  } from 'react-icons/md';
import { AiOutlineQuestion } from "react-icons/ai";

const HelpButton = () => {
    return (
        <div className="fixed top-4 right-4 z-50">
            <Popover.Root>
                <Popover.Trigger >
                    {/*className="flex size-10 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-900 select-none hover:bg-gray-100 focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100 data-[popup-open]:bg-gray-100">*/}
                    <button
                        className="bg-black text-white rounded-full p-2 shadow hover:opacity-80 focus:outline-none"
                        aria-label="Help"
                    >
                        {/*<MdOutlineHelp  size={36} />*/}
                        <AiOutlineQuestion size={16} />

                    </button>
                </Popover.Trigger>
                <Popover.Portal>
                    <Popover.Backdrop />
                    <Popover.Positioner sideOffset={8}>
                        <Popover.Popup className="bg-white text-black rounded-md shadow p-4 w-64">
                            <Popover.Arrow />
                            <Popover.Title className="text-lg font-semibold mb-2">
                                Need Help?
                            </Popover.Title>
                            <Popover.Description className="text-sm">
                                Mail us at{' '}
                                <a
                                    href="mailto:support@zelestra.energy"
                                    className="text-[#DC5D00] underline"
                                >
                                    support@zelestra.energy
                                </a>
                            </Popover.Description>
                            <Popover.Close className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                                ×
                            </Popover.Close>
                        </Popover.Popup>
                    </Popover.Positioner>
                </Popover.Portal>
            </Popover.Root>
        </div>
    );
};

export default HelpButton;

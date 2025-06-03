// import React from 'react'
// // import { Form } from 'base-ui/components/form';
// // import { Fieldset } from '@base-ui/components/fieldset';
// // import { Field } from '@base-ui/components/field';
//
// import {Form, Fieldset, Field} from "@base-ui-components/react"
// import { MdEmail, MdLock } from 'react-icons/md';
//
//
// const SignIn = () => {
//
//     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         // TODO: Auth logic
//     };
//
//     return (
//         // <div className="text-xl font-bold text-gray-800">SignIn</div>
//         <Form
//             className="w-full max-w-sm bg-[#f3f3f3] p-6 rounded-xl shadow"
//             onSubmit={handleSubmit}
//         >
//             <div className="mb-6">
//                 <h2 className="text-2xl font-bold text-black">Hello Again!</h2>
//                 <p className="text-sm text-gray-600">Welcome Back</p>
//             </div>
//
//             <Fieldset.Root className="space-y-4">
//                 {/* Email */}
//                 <Field.Root name="email">
//                     <Field.Label className="block mb-1 text-sm font-medium text-gray-900">
//                         User Id
//                     </Field.Label>
//                     <div className="relative">
//             <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
//               {/*<EnvelopeClosedIcon />*/}
//                 <MdEmail/>
//             </span>
//                         <Field.Control
//                             type="email"
//                             placeholder="example@zelestraenergy.com"
//                             required
//                             className="pl-10 pr-3 py-2 w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DC5D00] text-black"
//                         />
//                     </div>
//                 </Field.Root>
//
//                 {/* Password */}
//                 <Field.Root name="password">
//                     <Field.Label className="block mb-1 text-sm font-medium text-gray-900">
//                         Password
//                     </Field.Label>
//                     <div className="relative">
//             <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
//               {/*<LockClosedIcon />*/}
//                 <MdLock />
//             </span>
//                         <Field.Control
//                             type="password"
//                             placeholder="xyz"
//                             required
//                             className="pl-10 pr-3 py-2 w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DC5D00] text-black"
//                         />
//                     </div>
//                 </Field.Root>
//             </Fieldset.Root>
//
//             {/* Sign In Button */}
//             <button
//                 type="submit"
//                 className="mt-6 w-full bg-[#8B4513] text-white py-2 rounded-full font-medium hover:bg-opacity-90 transition"
//             >
//                 Sign in
//             </button>
//
//             {/* Links */}
//             <div className="mt-4 text-center text-sm">
//                 <p className="mb-2">
//                     <a href="#" className="text-black underline">Forgot Password</a>
//                 </p>
//                 <p className="text-black">
//                     Login via{' '}
//                     {/*<span className="text-[#DC5D00] font-semibold">SSO</span>*/}
//                     <a href="/sign-up" className="text-[#DC5D00] font-semibold">SSO</a>
//                 </p>
//                 <p className="mt-1 text-black">
//                     Don’t have an account?{' '}
//                     <a href="/sign-up" className="text-[#8B4513] font-semibold">Signup</a>
//                 </p>
//             </div>
//         </Form>
//     )
// }
// export default SignIn


import React, { useState } from 'react';
import { Form } from '@base-ui-components/react';
import { Fieldset } from '@base-ui-components/react';
import { Field } from '@base-ui-components/react';
import { MdEmail, MdLock, MdVisibility, MdVisibilityOff } from 'react-icons/md';

export default function SignIn() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => setShowPassword(prev => !prev);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // TODO: handle auth
    };

    return (
        <Form
            className="w-full max-w-sm bg-[#f3f3f3] p-6 rounded-xl shadow"
            onSubmit={handleSubmit}
        >
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-black">Welcome back to ETRM App</h2>
                {/*<p className="text-sm text-gray-600">Hello Again!</p>*/}
            </div>

            <Fieldset.Root className="space-y-4">
                {/* Email */}
                <Field.Root name="email">
                    <Field.Label className="block mb-1 text-sm font-medium text-gray-900">
                        User Id
                    </Field.Label>
                    <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <MdEmail />
            </span>
                        <Field.Control
                            type="email"
                            placeholder="Example@zelestra.energy"
                            required
                            className="pl-10 pr-3 py-2 w-full rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DC5D00] text-black"
                        />
                    </div>
                </Field.Root>

                {/* Password with toggle */}
                <Field.Root name="password">
                    <Field.Label className="block mb-1 text-sm font-medium text-gray-900">
                        Password
                    </Field.Label>
                    <div className="relative">
                        {/* Left Icon */}
                        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <MdLock />
            </span>

                        {/* Password Field */}
                        <Field.Control
                            type={showPassword ? 'text' : 'password'}
                            placeholder="xyz"
                            required
                            className="pl-10 pr-10 py-2 w-full rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DC5D00] text-black"
                        />

                        {/* Toggle Button */}
                        <button
                            type="button"
                            onClick={togglePassword}
                            className="absolute inset-y-0 right-3 flex items-center text-gray-400 focus:outline-none"
                            tabIndex={-1}
                        >
                            {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                        </button>
                    </div>
                </Field.Root>
            </Fieldset.Root>

            {/* Submit */}
            <button
                type="submit"
                className="mt-6 w-full bg-[#8B4513] text-white py-2 rounded-2xl font-medium hover:bg-opacity-90 transition"
            >
                Sign in
            </button>

            {/* Links */}
            <div className="mt-4 text-center text-sm">
                <p className="mb-2">
                    <a href="#" className="text-black underline">Forgot Password</a>
                </p>
                <p className="text-black">
                    Login via{' '}
                    {/*<span className="text-[#DC5D00] font-semibold">SSO</span>*/}
                    <a href="/sign-up" className="text-[#DC5D00] font-semibold">SSO</a>
                </p>
                <p className="mt-1 text-black">
                    Don’t have an account?{' '}
                    <a href="/sign-up" className="text-[#8B4513] font-semibold">Signup</a>
                </p>
            </div>
        </Form>
    );
}

// import React from 'react'
//
// const SignUp = () => {
//     return (
//         <div className="text-xl font-bold text-gray-800">Signup</div>
//     )
// }
// export default SignUp


// src/routes/auth/sign-up.tsx
'use client'
import React, { useState } from 'react';
import { Form } from '@base-ui-components/react';
import { Fieldset } from '@base-ui-components/react';
import { Field } from '@base-ui-components/react';
import {MdPerson, MdEmail, MdLock, MdVisibilityOff, MdVisibility} from 'react-icons/md';

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    return (
        <Form
            className="w-full max-w-sm bg-[#f3f3f3] p-6 rounded-xl shadow"
            onSubmit={(e) => {
                e.preventDefault();
                // TODO: Sign-up logic
            }}
        >
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-black">Welcome to ETRM App!</h2>
                <p className="text-sm text-gray-600">Create an account</p>
            </div>

            <Fieldset.Root className="space-y-4">
                {/* User Name */}
                <Field.Root name="name">
                    <Field.Label className="block mb-1 text-sm font-medium text-gray-900">
                        User Name
                    </Field.Label>
                    <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <MdPerson />
            </span>
                        <Field.Control
                            type="text"
                            placeholder="Example@zelestraenergy.com"
                            required
                            className="pl-10 pr-3 py-2 w-full rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DC5D00] text-black"
                        />
                    </div>
                </Field.Root>

                {/* User Id */}
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
                            placeholder="User Name"
                            required
                            className="pl-10 pr-3 py-2 w-full rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DC5D00] text-black"
                        />
                    </div>
                </Field.Root>

                {/* Password */}
                <Field.Root name="password">
                    <Field.Label className="block mb-1 text-sm font-medium text-gray-900">
                        Password
                    </Field.Label>
                    <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <MdLock />
            </span>
                        <Field.Control
                            type={showPassword ? 'text' : 'password'}
                            placeholder="xyz"
                            required
                            className="pl-10 pr-10 py-2 w-full rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DC5D00] text-black"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-3 flex items-center text-gray-400"
                            tabIndex={-1}
                        >
                            {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                        </button>
                    </div>
                </Field.Root>

                {/* Confirm Password */}
                <Field.Root name="confirmPassword">
                    <Field.Label className="block mb-1 text-sm font-medium text-gray-900">
                        Confirm Password
                    </Field.Label>
                    <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <MdLock />
            </span>
                        <Field.Control
                            type={showConfirm ? 'text' : 'password'}
                            placeholder="xyz"
                            required
                            className="pl-10 pr-10 py-2 w-full rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DC5D00] text-black"
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirm(!showConfirm)}
                            className="absolute inset-y-0 right-3 flex items-center text-gray-400"
                            tabIndex={-1}
                        >
                            {showConfirm ?  <MdVisibilityOff /> : <MdVisibility />}
                                {/* '🙈' : '👁️'*/}
                        </button>
                    </div>
                </Field.Root>

                {/* Role (disabled) */}
                <Field.Root name="role" disabled={true}>
                    <Field.Label className="block mb-1 text-sm font-medium text-gray-900">
                        Role
                    </Field.Label>
                    <Field.Control
                        type="text"
                        value="Super User"
                        className="pl-3 pr-3 py-2 w-full rounded-2xl border border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed "
                    />
                </Field.Root>
            </Fieldset.Root>

            {/* Submit */}
            <button
                type="submit"
                className="mt-6 w-full bg-[#8B4513] text-white py-2 rounded-2xl font-medium hover:bg-opacity-90 transition"
            >
                Sign Up
            </button>
        </Form>
    );
}

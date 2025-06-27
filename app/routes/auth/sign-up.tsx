'use client';
import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Form, Fieldset, Field } from '@base-ui-components/react';
import { MdPerson, MdEmail, MdLock, MdVisibility, MdVisibilityOff } from 'react-icons/md';

export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [businessUnit, setBusinessUnit] = useState(''); // Optional: add dropdown if needed
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [error, setError] = useState('');

    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');

        if (!email.endsWith('@zelestra.energy')) {
            setError('Only @zelestra.energy email addresses are allowed.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        try {
            await Auth.signUp({
                username: email,
                password,
                attributes: {
                    email,
                    name,
                    'custom:role': 'Super User',
                    'custom:business_unit': businessUnit || 'default'
                }
            });

            alert('Sign-up successful! Check your email to confirm your account.');
            window.location.href = '/sign-in';
        } catch (err: any) {
            console.error('Sign-up error:', err);
            setError(err.message || 'Sign-up failed.');
        }
    };

    return (
        <Form
            className="w-full max-w-sm bg-[#f3f3f3] p-6 rounded-xl shadow"
            onSubmit={handleSignUp}
        >
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-black">Welcome to ETRM App!</h2>
                <p className="text-sm text-gray-600">Create an account</p>
            </div>

            <Fieldset.Root className="space-y-4">
                {/* Full Name */}
                <Field.Root name="name">
                    <Field.Label className="block mb-1 text-sm font-medium text-gray-900">
                        Full Name
                    </Field.Label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                            <MdPerson />
                        </span>
                        <Field.Control
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="John Doe"
                            required
                            className="pl-10 pr-3 py-2 w-full rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DC5D00] text-black"
                        />
                    </div>
                </Field.Root>

                {/* Email */}
                <Field.Root name="email">
                    <Field.Label className="block mb-1 text-sm font-medium text-gray-900">
                        User ID
                    </Field.Label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                            <MdEmail />
                        </span>
                        <Field.Control
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="example@zelestra.energy"
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="********"
                            required
                            className="pl-10 pr-10 py-2 w-full rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DC5D00] text-black"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-3 flex items-center text-gray-400"
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
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="********"
                            required
                            className="pl-10 pr-10 py-2 w-full rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DC5D00] text-black"
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirm(!showConfirm)}
                            className="absolute inset-y-0 right-3 flex items-center text-gray-400"
                        >
                            {showConfirm ? <MdVisibilityOff /> : <MdVisibility />}
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
                        className="pl-3 pr-3 py-2 w-full rounded-2xl border border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed"
                        disabled
                    />
                </Field.Root>
            </Fieldset.Root>

            {/* Error Display */}
            {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

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

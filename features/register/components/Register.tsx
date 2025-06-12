"use client";

import { useForm } from "@tanstack/react-form";
import { Mail, Lock, User } from "lucide-react";

import React from "react";
import { GoogleRegisterButton } from "./GoogleRegisterButton";

export default function Register() {
  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async ({ value }) => {
      alert("Form submitted successfully:\n" + JSON.stringify(value, null, 2));
      form.reset();
    },
  });

  return (
    <div className=" w-full max-w-md mx-auto bg-[#181E25] rounded-xl shadow-lg p-8 flex flex-col gap-6 mt-8">
      <h2 className="text-2xl font-semibold text-white text-center">
        Register
      </h2>

      <GoogleRegisterButton />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
        className="flex flex-col gap-4"
      >
        <form.Field
          name="username"
          validators={{
            onChange: ({ value }) =>
              !value.trim()
                ? "Username is required"
                : value.length < 3
                ? "Username must be at least 3 characters"
                : undefined,
          }}
        >
          {(field) => (
            <div>
              <label htmlFor={field.name} className="text-gray-300 text-sm">
                Username
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <User size={18} />
                </span>
                <input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  placeholder="Enter your username"
                  className="w-full bg-[#232A36] text-white py-3 pl-10 pr-3 rounded-md outline-none focus:ring-2 focus:ring-[#287EE9]"
                />
              </div>
              {field.state.meta.errors?.[0] && (
                <p className="text-sm text-red-500 mt-1">
                  {field.state.meta.errors[0]}
                </p>
              )}
            </div>
          )}
        </form.Field>

        <form.Field
          name="email"
          validators={{
            onChange: ({ value }) =>
              !value.trim()
                ? "Email is required"
                : !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)
                ? "Invalid email"
                : undefined,
          }}
        >
          {(field) => (
            <div>
              <label htmlFor={field.name} className="text-gray-300 text-sm">
                Email
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Mail size={18} />
                </span>
                <input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  placeholder="Enter your email"
                  className="w-full bg-[#232A36] text-white py-3 pl-10 pr-3 rounded-md outline-none focus:ring-2 focus:ring-[#287EE9]"
                />
              </div>
              {field.state.meta.errors?.[0] && (
                <p className="text-sm text-red-500 mt-1">
                  {field.state.meta.errors[0]}
                </p>
              )}
            </div>
          )}
        </form.Field>

        <form.Field
          name="password"
          validators={{
            onChange: ({ value }) =>
              !value
                ? "Password is required"
                : value.length < 6
                ? "Password must be at least 6 characters"
                : undefined,
          }}
        >
          {(field) => (
            <div>
              <label htmlFor={field.name} className="text-gray-300 text-sm">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Lock size={18} />
                </span>
                <input
                  type="password"
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  placeholder="Enter your password"
                  className="w-full bg-[#232A36] text-white py-3 pl-10 pr-3 rounded-md outline-none focus:ring-2 focus:ring-[#287EE9]"
                />
              </div>
              {field.state.meta.errors?.[0] && (
                <p className="text-sm text-red-500 mt-1">
                  {field.state.meta.errors[0]}
                </p>
              )}
            </div>
          )}
        </form.Field>

        <form.Field
          name="confirmPassword"
          validators={{
            onChange: ({ value }) => {
              const password = form.getFieldValue("password");
              if (!value) return "Please confirm your password";
              if (value !== password) return "Passwords do not match";
            },
          }}
        >
          {(field) => (
            <div>
              <label htmlFor={field.name} className="text-gray-300 text-sm">
                Confirm Password
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Lock size={18} />
                </span>
                <input
                  type="password"
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                  placeholder="Confirm your password"
                  className="w-full bg-[#232A36] text-white py-3 pl-10 pr-3 rounded-md outline-none focus:ring-2 focus:ring-[#287EE9]"
                />
              </div>
              {field.state.meta.errors?.[0] && (
                <p className="text-sm text-red-500 mt-1">
                  {field.state.meta.errors[0]}
                </p>
              )}
            </div>
          )}
        </form.Field>

        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
        >
          {([canSubmit, isSubmitting]) => (
            <button
              type="submit"
              className="bg-[#287EE9] hover:bg-[#1B4D8C] text-white font-semibold py-3 rounded-md mt-2 transition"
              disabled={!canSubmit}
            >
              {isSubmitting ? "Submitting..." : "Register"}
            </button>
          )}
        </form.Subscribe>
      </form>
    </div>
  );
}

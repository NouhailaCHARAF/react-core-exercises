import { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmpassword) {
      setMessage("❌ Passwords do not match!");
    } else {
      setMessage("🎉 Registration Successful!");

      setFormData({
        email: "",
        password: "",
        confirmpassword: "",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg"
      >
        <h2 className="text-3xl font-bold text-center mb-6">
          Registration Form
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Email
          </label>

          <input
            type="email"
            value={formData.email}
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Password
          </label>

          <input
            type="password"
            value={formData.password}
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) =>
              setFormData({
                ...formData,
                password: e.target.value,
              })
            }
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Confirm Password
          </label>

          <input
            type="password"
            value={formData.confirmpassword}
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) =>
              setFormData({
                ...formData,
                confirmpassword: e.target.value,
              })
            }
          />
        </div>

        {message && (
          <p className="text-center font-medium mb-4 text-gray-800">
            {message}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}
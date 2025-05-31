import React, { useState } from "react";
import Button from "./Button";

const ContactCard = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    education: "",
    course: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const courseOptions = [
    { value: "", label: "Select a course" },
    { value: "mbe", label: "Master in Business Engineering (MBE)" },
    { value: "data-science", label: "PG Dip. in Data Science For Logistics" },
    { value: "drones", label: "PG Dip. in Drones Operations- Logistics" },
    {
      value: "supply-chain",
      label: "PG Dip. in Supply Chain And Logistics Mgmt",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.contactNumber.trim()) {
      tempErrors.contactNumber = "Contact number is required";
      isValid = false;
    } else if (
      !/^\d{10,15}$/.test(formData.contactNumber.replace(/[-()\s]/g, ""))
    ) {
      tempErrors.contactNumber = "Please enter a valid contact number";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)
    ) {
      tempErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.education.trim()) {
      tempErrors.education = "Previous education is required";
      isValid = false;
    }

    if (!formData.course) {
      tempErrors.course = "Please select a course";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Get the selected course label
      const selectedCourse = courseOptions.find(
        (option) => option.value === formData.course
      );

      // Create email body
      const emailBody = `
Name: ${formData.name}
Contact Number: ${formData.contactNumber}
Email: ${formData.email}
Previous Education: ${formData.education}
Interested Course: ${selectedCourse ? selectedCourse.label : formData.course}

Message:
${formData.message || "No additional message provided."}
      `;

      // Create mailto link
      const mailtoLink = `mailto:contactus@iilos.org?subject=Course Inquiry from ${
        formData.name
      }&body=${encodeURIComponent(emailBody)}`;

      // Open email client
      window.location.href = mailtoLink;
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Card Container with enhanced styling */}
      <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
        {/* Header section with gradient background */}
        <div className="bg-gradient-to-r from-[#00B5CA] to-[#008999] p-6 md:p-8">
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Get in Touch
          </h3>
          <p className="text-white/80 mt-2">
            Fill out this form to send us an email about our courses
          </p>
        </div>

        {/* Form section with padding */}
        <div className="p-6 md:p-8">
          <form onSubmit={handleSubmit}>
            <div className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.name
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:ring-[#00B5CA]/20 focus:border-[#00B5CA]"
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
                )}
              </div>

              {/* Contact Number */}
              <div>
                <label
                  htmlFor="contactNumber"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Contact Number
                </label>
                <input
                  type="text"
                  id="contactNumber"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.contactNumber
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:ring-[#00B5CA]/20 focus:border-[#00B5CA]"
                  }`}
                />
                {errors.contactNumber && (
                  <p className="mt-1 text-red-500 text-sm">
                    {errors.contactNumber}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Email ID
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.email
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:ring-[#00B5CA]/20 focus:border-[#00B5CA]"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              {/* Previous Education */}
              <div>
                <label
                  htmlFor="education"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Previous Education*
                </label>
                <input
                  type="text"
                  id="education"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.education
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:ring-[#00B5CA]/20 focus:border-[#00B5CA]"
                  }`}
                />
                <p className="mt-1 text-sm text-gray-500">
                  You must have completed a Bachelor's degree.
                </p>
                {errors.education && (
                  <p className="mt-1 text-red-500 text-sm">
                    {errors.education}
                  </p>
                )}
              </div>

              {/* Interested Course */}
              <div>
                <label
                  htmlFor="course"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Interested Course
                </label>
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 appearance-none bg-white ${
                    errors.course
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:ring-[#00B5CA]/20 focus:border-[#00B5CA]"
                  }`}
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")",
                    backgroundPosition: "right 0.5rem center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "1.5em 1.5em",
                    paddingRight: "2.5rem",
                  }}
                >
                  {courseOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.course && (
                  <p className="mt-1 text-red-500 text-sm">{errors.course}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B5CA]/20 focus:border-[#00B5CA] border-gray-300"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <Button type="submit" className="w-full">
                  Email Inquiry to IILOS
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;

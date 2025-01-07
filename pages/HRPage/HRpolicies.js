import React, { useState } from "react";

// Example content for HR Policies
const policies = [
  {
    title: "Leave Policy",
    content: "This policy defines the types of leaves an employee can take, such as annual leave, sick leave, and public holidays."
  },
  {
    title: "Code of Conduct",
    content: "Employees are expected to maintain professional behavior, follow company rules, and show respect toward colleagues and clients."
  },
  {
    title: "Health & Safety Policy",
    content: "This policy outlines the company’s commitment to maintaining a safe working environment and the responsibility of employees to follow safety guidelines."
  },
  {
    title: "Remote Work Policy",
    content: "Employees can work remotely with prior approval from their managers, ensuring they maintain productivity and availability."
  }
];

const HrPolicies = () => {
  // State to manage which policy content is visible
  const [activePolicy, setActivePolicy] = useState(null);

  // Toggle visibility of policy content
  const togglePolicy = (index) => {
    setActivePolicy(activePolicy === index ? null : index); // Toggle the visibility
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">HR Policies</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Company Policies</h2>
        <ul className="space-y-4">
          {policies.map((policy, index) => (
            <li key={index} className="border-b pb-4">
              <div
                onClick={() => togglePolicy(index)}
                className="cursor-pointer text-xl font-semibold text-blue-600 hover:text-blue-800"
              >
                {policy.title}
              </div>
              {activePolicy === index && (
                <p className="mt-2 text-gray-700">{policy.content}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HrPolicies;

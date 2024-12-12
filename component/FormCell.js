const FormCell = ({ label, placeholder, name, type = 'text', value, onChange }) => {
  return (
    <div className="mb-4"> {/* Tailwind margin bottom for spacing between input groups */}
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormCell;

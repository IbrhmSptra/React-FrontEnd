function FillData({ Label, Name, Type, value, Id, Placeholder, onChange }) {
  return (
    <div className="w-full flex flex-col">
      <label htmlFor={Id} className="text-xl mb-2 font-bold">
        {Label}
      </label>
      <input
        type={Type}
        name={Name}
        id={Id}
        value={value}
        placeholder={Placeholder}
        className="border border-primary rounded-md w-full h-14 p-4 font-light outline-none"
        onChange={onChange}
      />
    </div>
  );
}

export default FillData;

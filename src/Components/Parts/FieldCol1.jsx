import React from "react";

const FieldCol1 = ({fieldName, fieldPlace}) => {
  return (
    <div className="self-stretch h-40 flex-col justify-start items-start gap-1.5 inline-flex">
      <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-1.5 flex">
        <label htmlFor="foo" className="text-zinc-700 text-base font-semibold font-['Inter'] leading-tight">
          {fieldName}
        </label>
        <div className="self-stretch grow shrink basis-0 px-3.5 py-3 bg-white rounded-lg shadow border border-gray-900 justify-start items-start gap-2 inline-flex">
          <textarea id="foo" type="text" placeholder={fieldPlace} className="grow shrink basis-0 self-stretch text-zinc-700 text-base font-normal font-['Inter'] leading-normal focus:outline-none"></textarea>
        </div>
      </div>
    </div>
  );
};

export default FieldCol1;

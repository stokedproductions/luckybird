import { ChangeEventHandler } from "react";

interface TextFieldType {
    fieldName: string;
    fieldLabel: string;
    value: string;
    id?: string;
    onChange?: ChangeEventHandler<HTMLInputElement> 
    onBlur?: ChangeEventHandler<HTMLInputElement>;
    touched?: boolean | undefined;
    errors?: string | undefined;
  }
  
interface DropDownFieldType {
    id?: string;
    fieldName: string;
    fieldLabel: string;
    optionsList: string[];          
    value: string;
    onChange?: ChangeEventHandler<HTMLSelectElement> 
    onBlur?: ChangeEventHandler<HTMLSelectElement>
    touched?: boolean | undefined;
    errors?: string | undefined;
}

export const TextImportField:React.FC<TextFieldType> = ({fieldName, fieldLabel, value, id, onChange, onBlur, touched, errors}) => {  
    return (
      <div className="relative mb-16">
        <input
          type="text"
          id={id}
          className={"w-full py-1 transition-colors border-b peer focus:border-b-2 focus:border-blue-500 focus:outline-none"
            + `${touched && errors ? " border-red-500 ": ""}` }
          autoComplete="off"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        <label
          htmlFor={fieldName}
          className={`absolute left-0 text-gray-600 transition-all 
                    cursor-text 
                    top-1
                    peer-focus:-top-4 peer-focus:text-xs
                    peer-focus:text-blue-500 peer-blur:-top-4
                    ${value.length ? " -top-4 text-xs " : "top-1"}
                    `}
        >
          {fieldLabel}
        </label>
        {touched && errors && (<p className='text-sm text-red-500'>Please enter a valid response </p>)}
      </div>
    )
  }
  
export const DropDownField:React.FC<DropDownFieldType> = ({id, fieldName, fieldLabel, 
  optionsList, value, onChange, onBlur, touched, errors}) => {
    return (
      <div className="relative">
        <select
          id={id}
          className="w-full py-1 mb-16 transition-colors border-b peer focus:border-b-2 focus:border-blue-500 focus:outline-none"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        >
          <option></option>
         { optionsList.map((opt) => <option key={opt.trim()} value={opt}>{opt}</option>) }
        </select>
        <label
          htmlFor={fieldName}
          className={`absolute left-0 text-gray-600 transition-all 
            cursor-text 
            top-1
            peer-focus:-top-4 peer-focus:text-xs
            peer-focus:text-blue-500 peer-blur:-top-4
            ${value.length ? " -top-4 text-xs " : "top-1"}
            `}
        >
          {fieldLabel}
        </label>
        {touched && errors && (<p className='text-sm text-red-500'>Please enter a valid response </p>)}
      </div>
    )
  }
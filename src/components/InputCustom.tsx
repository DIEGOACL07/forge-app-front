import { Label, TextInput } from 'flowbite-react';
import { useFormikContext } from 'formik';

interface Props {
  name: string;
  textLabel: string;
  type: 'password' | 'text' | 'number';
}
export const InputCustom = (props: Props) => {
  const { values, handleChange, handleBlur, touched, errors } = useFormikContext<any>();

  return (
    <>
      <div className='mb-2 block'>
        <Label htmlFor={props.name} value={props.textLabel} />
      </div>
      <TextInput type={props.type} name={props.name} value={values[props.name]} id={props.name} onChange={handleChange} onBlur={handleBlur} />
      {(errors[props.name] && touched[props.name]) || (touched[props.name] && values[props.name]) ? <div className='text-red-500'>{errors[props.name] as string}</div> : null}
    </>
  );
};

'use client';

import Button from "@/components/commons/Button";
import SelectField, { SelectFieldOption } from "@/components/commons/SelectField";
import TextField from "@/components/commons/TextField";
import { useFields } from "@/lib/hooks";
import clsx from "clsx";
import { useEffect, useState } from "react";

type Props = React.HTMLAttributes<HTMLFormElement> & {
  onSubmitted?: () => void;
};

function AddressAddForm({
  className,
  onSubmitted,
  ...props
}: Props) {
  // Hooks
  const input = useFields({
    label: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    province: '',
    city: '',
    district: '',
  });

  // States
  const [isSaving, setIsSaving] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  // Effects
  useEffect(() => {
    if (isFinished) {
      setTimeout(() => {
        setIsFinished(false);

        onSubmitted?.();
      }, 2000);
    }
  }, [isFinished, onSubmitted]);

  // Vars
  const handleSubmit = () => {
    if (!input.fields.label) {
      return input.handleErrorShow('label', `Please enter a label`);
    } else if (!input.fields.name) {
      return input.handleErrorShow('name', `Please enter the name`);
    } else if (!input.fields.email) {
      return input.handleErrorShow('email', `Please enter an email`);
    } else if (!input.fields.phone) {
      return input.handleErrorShow('phone', `Please enter the phone number`);
    }

    console.log("Inputs", input.fields);

    setIsSaving(true);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(null);
      }, 1500);
    }).then(() => {
      setIsFinished(true);
    }).finally(() => {
      setIsSaving(false);
    });
  };

  return isFinished ? (
    <div className={clsx([className])}>
      <h3 className="text-lg font-bold text-center">
        {`Address successfully added`}
      </h3>
    </div>
  ) : (
    <form
      className={clsx([className])}
      onSubmit={(e) => {
        e.preventDefault();

        handleSubmit();
      }}
      autoComplete="off"
      {...props}
    >
      <h3 className="text-xl text-center">
        {`Add Address`}
      </h3>

      <div className="mt-4">
        {[{
          label: `Label`,
          field: 'label' as keyof typeof input.fields,
        }, {
          label: `Name`,
          field: 'name' as keyof typeof input.fields,
        }].map((item, index) => {
          return (
            <TextField
              key={item.field}
              className={!index ? '' : "mt-2"}
              label={item.label}
              placeholder={item.label}
              value={input.fields[item.field]}
              onChange={(e) => input.handleFieldChange(item.field, e.target.value)}
              error={input.isFieldError(item.field)}
              message={input.error.message}
            />
          );
        })}
      </div>

      <div className="pt-2 flex flex-wrap -mx-2 -my-1">
        {[{
          label: `Email`,
          field: 'email' as keyof typeof input.fields,
          type: 'email',
        }, {
          label: `Phone`,
          field: 'phone' as keyof typeof input.fields,
        }].map((item, index) => {
          return (
            <div key={item.field} className="basis-1/2 px-2 py-1">
              <TextField
                className="w-full"
                label={item.label}
                placeholder={item.label}
                type={item.type}
                value={input.fields[item.field]}
                onChange={(e) => input.handleFieldChange(item.field, e.target.value)}
                error={input.isFieldError(item.field)}
                message={input.error.message}
              />
            </div>
          );
        })}
      </div>

      <SelectField
        className="mt-2"
        label={`Province`}
        onChange={(e) => input.handleFieldChange('province', e.target.value)}
        error={input.isFieldError('province')}
        message={input.error.message}
      >
        <option>{`-- Select Province ---`}</option>

        {[
          "Aceh", "Bali", "Banten", "Bengkulu", "DI Yogyakarta", "DKI Jakarta", "Gorontalo", "Jambi", "Jawa Barat", "Jawa Tengah", "Jawa Timur",
        ].map((item, index) => (
          <option key={item} value={item}>{item}</option>
        ))}
      </SelectField>

      <div className="pt-2 flex flex-wrap -mx-2 -my-1">
        {[{
          label: `City`,
          field: 'city' as keyof typeof input.fields,
          options: [
            "Kota Magelang", "Kota Pekalongan", "Kota Salatiga", "Kota Semarang", "Kota Surakarta", "Kota Tegal",
          ],
        }, {
          label: `District`,
          field: 'district' as keyof typeof input.fields,
          options: [
            "Banyumanik", "Candisari", "Gajah Mungkur", "Gayamsari", "Genuk", "Gunungpati", "Mijen", "Ngaliyan", "Pedurungan", "Semarang Barat", "Semarang Selatan", "Semarang Tengah", "Semarang Timur", "Semarang Utara", "Tembalang", "Tugu",
          ],
        }].map((item, index) => {
          return (
            <div key={item.field} className="basis-1/2 px-2 py-1">
              <SelectField
                className="w-full"
                label={item.label}
                onChange={(e) => input.handleFieldChange(item.field, e.target.value)}
                error={input.isFieldError(item.field)}
                message={input.error.message}
              >
                <option>{`-- Select ${item.label} ---`}</option>

                {item.options.map((item, index) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </SelectField>
            </div>
          );
        })}
      </div>
      
      <TextField
        className="mt-2"
        label={`Address`}
        placeholder={`Address`}
        value={input.fields.address}
        onChange={(e) => input.handleFieldChange('address', e.target.value)}
        error={input.isFieldError('address')}
        message={input.error.message}
      />

      <Button
        className="w-full mt-4 !rounded-lg"
        color="fucosan-pink"
        loading={isSaving}
      >
        {`Save`}
      </Button>
    </form>
  );
};

export default AddressAddForm;

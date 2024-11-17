import React, { useEffect } from "react";
import { useState } from "react";
import ButtonComp from "../components/Buttons/ButtonComp.tsx";

type Form = {
  id: number;
  name: string;
};

const FieldView = () => {
  return <div></div>;
};

const SectionView = () => {
  return <div>SectionView</div>;
};

const FormView = ({ FormList, setFormList }) => {
  const AddForm = () => {
    const newForm: Form = {
      id: FormList.length > 0 ? FormList[FormList.length - 1].id + 1 : 1, // Increment the last ID or start at 1
      name: "Form",
    };

    setFormList((prevItems) => [...prevItems, newForm]);
  };

  const RemovForm = (id: number) => {
    setFormList((prevItems) => prevItems.filter((form) => form.id !== id));
  };

  const FormItem = ({ Form }) => {
    return (
      <div className="  flex">
        <div>
          {Form.name}
          {Form.id}
        </div>
        <div>
          <ButtonComp
            text="Remove Form"
            className=" bg-red-500 hover:bg-red-700"
            onClick={() => RemovForm(Form.id)}
          />
        </div>
      </div>
    );
  };

  return (
    <div className=" ">
      <div>
        {FormList.map((form) => (
          <div className=" border-black border bg-red-100">
            <FormItem Form={form} />
          </div>
        ))}
      </div>
      <ButtonComp text="Add Form" onClick={() => AddForm()} />
    </div>
  );
};

export default function TestPage() {
  var section=[
    {
      id:1,
      type:'field',
      fieldType:'InputField',
      fields:[]
      

    },
    {
      id:2,
      type:'section',
      // fieldType:'InputField',
      fields:[]

    }
  ]
  var Data = [
    { id: 1, name: "Form", sections: section },
    { id: 2, name: "Form", sections: section },
    { id: 3, name: "Form", sections: [] },
  ];

  const [FormList, setFormList] = useState<Form[]>([]);

  useEffect(() => {
    setFormList(Data);
  }, []);

  return (
    <div>
      <div className=" w-full flex items-center justify-center">
        <FormView FormList={FormList} setFormList={setFormList} />
      </div>
    </div>
  );
}

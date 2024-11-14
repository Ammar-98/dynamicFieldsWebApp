import React, { useRef, useState } from "react";
import { Field, SubField } from "./Types/types";
import evaluateConditions from "./Buttons/EvaluateConditons.tsx";
import MapSubfields from "./MapSubfields.tsx";

type InputFieldProps = {
  field: Field | SubField;
  passedValue: string | null;
};
export default function FileUploadFieldMap({
  field,
  passedValue,
}: InputFieldProps) {

    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [FileName, setFileName] = useState("");
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
          const file = event.target.files[0];
          console.log("Selected file:", file.name);
          setFileName(file.name);
        }
      };

      const handleClick = () => {
        fileInputRef.current?.click();
      };
      const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(true);
      };

      const handleDragLeave = () => {
        setIsDragging(false);
      };

      const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDragging(false);
        const files = event.dataTransfer.files;
        if (files && files.length > 0) {
          const file = files[0];
          console.log("Dropped file:", file.name);
          setFileName(file.name);
        }
      };

  return (
    <div className=" w-full flex flex-col items-start justify-center">
      {/* <div>{String(evaluateConditions(field.conditions, passedValue))}</div> */}

      {evaluateConditions(field.conditions, passedValue) == true ? (
        <div className="  w-full ">
          <div className=" flex flex-col items-center justify-center ">
            <div className=" flex px-2  items-center w-full">
              <div className=" my-2  text-lg">{field.label}</div>
              <div className=" ml-4 text-slate-400 text-sm">
                {field.conditions !== undefined &&
                  `condition (` + field.conditions + `)`}
              </div>
            </div>

            <div
        onClick={() => handleClick()}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={` rounded-xl border-dashed border-2 border-slate-500 flex flex-col cursor-pointer  items-center w-[300px]  h-[80px] justify-center 
            
            ${isDragging ? "bg-blue-100" : ""}
            
            `}
      >
        {FileName !== "" ? (
          <div>{FileName}</div>
        ) : (
          <div className=" flex flex-col items-center justify-center">
            <div className=" text-slate-500 text-lg"> Upload File here</div>
            <div className=" text-slate-500 text-xs">
              Click to upload file or drag and drop
            </div>
          </div>
        )}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
      </div>
          </div>

          <div className=" mt-5 ">
            {field.subFields ? (
              <div className=" border-l-2   ml-3 bg-subfields border-slate-500">
                <MapSubfields fields={field.subFields} value={FileName} />
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}



{/* <div
        onClick={() => handleClick()}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={` rounded-xl border-dashed border-2 border-slate-500 flex flex-col cursor-pointer  items-center w-[300px]  h-[80px] justify-center 
            
            ${isDragging ? "bg-blue-100" : ""}
            
            `}
      >
        {FileName !== "" ? (
          <div>{FileName}</div>
        ) : (
          <div className=" flex flex-col items-center justify-center">
            <div className=" text-slate-500 text-lg"> Upload File here</div>
            <div className=" text-slate-500 text-xs">
              Click to upload file or drag and drop
            </div>
          </div>
        )}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
      </div> */}
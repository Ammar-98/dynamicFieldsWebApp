import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function DatePickerFinal({field}){
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    return(

        <div className="  w-full ">
        <div className=" flex flex-col items-center justify-center ">
          <div className=" flex px-2  items-center w-full">
            <div className=" my-2  text-lg">{field.label}</div>
            <div className=" ml-4 text-slate-400 text-sm">
              {field.conditions !== undefined &&
                `condition (` + field.conditions + `)`}
            </div>
          </div>
          <DatePicker
            selected={selectedDate}
            onChange={(date: Date | null) => setSelectedDate(date)}
            placeholderText={field.placeholder || "Select date"}
            className=" border rounded border-slate-500 flex  text-center"
          />
        </div>

        <div className=" mt-5 ">
          {field.subFields ? (
            <div className=" border-l-2   ml-3 bg-subfields border-slate-500">
              {/* <MapSubfields
                fields={field.subFields}
                value={String(selectedDate)}
              /> */}
            </div>
          ) : null}
        </div>
      </div>

    )
}
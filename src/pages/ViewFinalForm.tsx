import React, { useContext } from "react"
import AppContext from "../AppContext/AppContext"
import MapSectionFinal from "../ViewFinalFormComponents/MapSectionFinal.tsx"
import { Section } from "../components/Types/types.tsx"
export default function ViewFinalForm()
{

    const {Sectiondata}=useContext(AppContext)
    return(
        <div className=" w-full h-[100vh]">
             

{
Sectiondata.map((section:Section)=>(
    <div className=" w-full flex items-center justify-center">
    <MapSectionFinal section={section} />
    </div>
))
}


        </div>
    )
}
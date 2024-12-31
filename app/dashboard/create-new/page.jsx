"use client"
import React, { useState } from 'react'
import ImageSelect from './_components/ImageSelect'
import RoomType from './_components/RoomType'
import DesignType from './_components/DesignType'
import AdditionalReq from './_components/AdditionalReq'
import { Button } from '@/components/ui/button'

function CreateNew() {

   const [formData,setFormData]=useState([]);
   const onHandleInputChange=(value,fieldName)=>{
    setFormData(prev=>({
        ...prev,
        [fieldName]:value
    }))
    console.log(formData);
   }
  return (
    <div>
        <h2 className='font-bold text-4xl text-purple-500 text-center'>Experience the magic of AI to bring reality to your dreams</h2>
        <p className='text-center text-gray-500'>
            Transform any area with a simple click. Select a space, choose a style and observe how AI instantly reimagines your environment.
        </p>
    
        <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-10'>
            {/*Image Selection*/}
            <ImageSelect selectedImage={(value)=>onHandleInputChange(value,'image')}/>

            {/*Form Input Selection*/}

            <div>
                {/*Room type*/}
                <RoomType SelectedRoomType={(value)=>onHandleInputChange(value,'roomType')}/>

                {/*Design type*/}
                <DesignType selectedDesignType={(value)=>onHandleInputChange(value,'designType')} />

                {/*Additional requirement textarea(optional)*/}
                <AdditionalReq additionalRequirementInput={(value)=>onHandleInputChange(value,'additionalReq')}/>

                {/*Button to generate image*/}
                <Button className="w-full mt-5 bg-purple-500">Generate</Button>
                <p className='text-sm text-gray-400 mb-50'>Note: 1 Credit will be charged to generate an image</p>
            </div>
        </div>
    </div>
  )
}

export default CreateNew
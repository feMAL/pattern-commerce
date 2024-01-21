"use client"
import React from 'react'

const CustomButton = ({title, contentStyle, textStyle}: {title: string, contentStyle?: string, textStyle?: string}) => {
  return (
    <div>
        <button className={`${contentStyle} rounded-full mx-5 m-3 px-3 py-3`}>
          <span className={`${textStyle} font-bold `}>
            {title} 
          </span>
        </button>
    </div>
  )
  
}

export default CustomButton
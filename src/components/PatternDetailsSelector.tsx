"use client"

import React, { useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { ProductDetailsVariantSelectionsProps } from "@/types/props";

const PatternDetailsSelector = ({ variants, setItemSelected }: ProductDetailsVariantSelectionsProps) => {

  const [value, setValue] = useState("")

  const setItem = (select: string )=> {
    setValue(select)
    setItemSelected(select)
  }

  return (
    <Select
      items={variants}
      label="Choose an option"
      //errorMessage={isValid || !touched ? "" : "You must select a cat"}
      value={value}
      onChange={(e) => {
        setItem(e.target.value);
      }}
      isRequired
    >
      {
        (variant) => <SelectItem 
          className="w-full"
          key={variant.variant_identification}
          value={variant.color}>{variant.color}
        </SelectItem>
      }
    </Select>
  );
}

export default PatternDetailsSelector
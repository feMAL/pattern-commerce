import React, {useState, useEffect} from 'react'
import { getAboutMe } from '@/services/about.service'
import { AboutState } from '@/types';

export const useFetchAbout = ( aboutme: string ) => {
    const initialData: AboutState = {description: "initial_data", image:"generic.jpg"}
    const [about, setAbout ] = useState<AboutState>(initialData);
    const [isLoading, setIsLoading ] = useState(true)

  const getAbout = async () => {
    const aboutmedata = await getAboutMe(aboutme);
    setAbout(aboutmedata);
    setIsLoading(false);
  }

  useEffect( () => {
    getAbout();
  },[]);
  
    return {
        about,
        isLoading
    }
}
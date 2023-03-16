import React from 'react'
import { useEffect, useState } from "react";
import Preloader from '../components/loader/preloader';
import Landing from './landing';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setIsLoading(true);
    if (document.readyState === "complete") {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    } else {
      setTimeout(handleLoading, 100);
    }
  };

  useEffect(() => {
    handleLoading();
  }, []);
  return (
     <div>
        {
            isLoading ? (
                <Preloader />
            ) : (
                <Landing />
            )
        }
    </div>
  )
}

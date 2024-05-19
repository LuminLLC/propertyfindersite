import React from 'react'
import { useEffect } from "react";
import {useLocation } from "react-router-dom";
import "preline/preline";
import { IStaticMethods } from "preline/preline";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

const PrelineScript = () => {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);
  
  return (
    <div>
      
    </div>
  )
}

export default PrelineScript

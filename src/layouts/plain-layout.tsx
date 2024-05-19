import * as React from 'react'
//import { useAuth } from "@clerk/clerk-react"
import { Outlet} from "react-router-dom"
 
export default function PlainLayout() { 
  return (
    <Outlet />
  )
}
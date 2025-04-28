import React from 'react'
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
      } from "@/components/ui/alert-dialog"
  
type myProps ={
    val:string
    open:boolean;
    setOpen:(value:boolean)=>void
}

const Dailog = ({val,open,setOpen}:myProps) => {
  return (
    <AlertDialog  open={open} onOpenChange={setOpen} >
 
  <AlertDialogContent className='bg-black '>
    <AlertDialogHeader>
      <AlertDialogTitle></AlertDialogTitle>
      <AlertDialogDescription className='text-2xl text-center text-white' >
      {val}
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel className='cursor-pointer'>Cancel</AlertDialogCancel>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

  )
}

export default Dailog

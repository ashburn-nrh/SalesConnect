import React from 'react'
import { Button } from '@/components/ui/button'

const Email = () => {
  return (
    <>
    <div className="grid grid-cols-2 items-center bg-white shadow p-6 h-16">
    <h2 className="flex justify-start font-medium text-xl">Emails</h2>
    </div>
    <div className="flex justify-center items-center h-screen">
  <Button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Add a mailbox</Button>
</div>
    </>
  )
}

export default Email
import React from 'react'
import Image from 'next/image';
import  {Button} from '@/components/ui/button'
function EmptyState() {
  return (
    <div className='mt-14'>
        <Image src={"/empty-state.png"} alt="Empty State" 
        width={400} height={400} className='mx-auto'/>
        <h2 className='text-2xl font-bold text-center mt-4'>No Interviews Yet</h2>
        <p className='text-center text-gray-500 mt-2'>You haven't created any interviews yet. Click the button above to get started!</p>
        <Button className='mt-6 mx-auto block'>Create Interview</Button>
    </div>
  )
}

export default EmptyState
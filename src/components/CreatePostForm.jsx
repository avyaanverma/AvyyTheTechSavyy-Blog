import React from 'react'

const CreatePostForm = ( {closeBtn} ) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center backdrop-blur-sm z-50 bg-olive-200/40 text-olive-950 dark:bg-olive-900/40 ">
      <div className='h-1/2 w-1/2 rounded-3xl bg-olive-950 text-white p-5 '>
        <div className='flex justify-start items-start'>
          <button
          onClick={()=> {
            closeBtn((prev)=>!prev)
          }} 
          className='px-2 rounded-4xl border-2 text-olive-950 bg-white font-semibold cursor-pointer'>
            X
          </button>

          <h1 className='w-full text-center text-2xl font-semibold'>Add Post</h1>
        </div>
        <div className='flex-col mt-4 gap-10'>
          <form action="" className='flex flex-col gap-10'>
            <input type="text" placeholder='Add Post Title' className='p-2 w-1/2 rounded-md bg-white text-olive-950' />
            <input type="text" placeholder='Add Post Description' className='p-2 w-1/2 rounded-md bg-white text-olive-950'/>
            <input type="text" placeholder='Add Post Image' className='p-2 w-1/2 rounded-md bg-white text-olive-950'/>
          </form>
        </div>

      </div>
    </div>
  )
}

export default CreatePostForm

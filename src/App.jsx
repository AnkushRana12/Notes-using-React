import React, { useEffect, useState } from 'react'
import { X } from 'lucide-react';
const App = () => {

const submitform=(e)=>{
e.preventDefault();

if (title.trim() === "" || detail.trim() === "") {
    return;   // just stop here — no empty notes will be added
  }


const copyTask=[...task];
copyTask.push({title,detail})

settask(copyTask)

settitle("");
setdetail("");

}

const[title,settitle]=useState("")

const[detail,setdetail]=useState("")

const[task,settask]=useState([])

const deleteNote=(idx)=>{
  console.log("delete",idx);
  const copyTask=[...task];
copyTask.splice(idx,1);
settask(copyTask)

}

  return (
    <div className='h-screen bg-black flex text-white flex-col  p-10'>
<h1 className='font-bold text-3xl mb-1'>Add Notes</h1>

       <form onSubmit={(e)=>{
        submitform(e);
       }} className='flex items-start  gap-4 justify-between w-full '>



<div className='flex flex-col   gap-3 w-1/2 '>


        <input className='px-5 w-full outline-none py-2 border-2 text-white rounded'
        type="text" placeholder='Enter Notes Heading 'value={title} onChange={(e)=>{
settitle(e.target.value)
        }}/>



<textarea name="" id=""
        className='px-5 w-full outline-none  h-50  py-2 border-2 text-white rounded' type="text" placeholder='Enter Details'  value={detail} onSubmit={submitform} onChange={(e)=>{
          setdetail(e.target.value)
        }}>

        </textarea>


<br />
<button className='bg-white w-full outline-none  py-2 px-5 text-2xl font-bold rounded text-black  '>Add Note</button>

</div>

<img className='h-80' src="https://w7.pngwing.com/pngs/328/129/png-transparent-minion-writing-on-notebook-minions-writing-sticker-minions-heroes-despicable-me-stuart-the-minion-thumbnail.png" alt="" />
      </form>
      <div className='p-10 gap-5 bg-gray-900 h-1000 '>
        <h1 className='text-3xl font-bold'>Your Notes</h1>
     <div className='flex flex-wrap gap-5 mt-5 '>

{task.map(function(elem,idx){

     return <div key={idx} className=' relative h-52 w-40 rounded-2xl bg-[url("https://png.pngtree.com/png-clipart/20220424/original/pngtree-aesthetic-blank-paper-for-sticky-notes-png-image_7557379.png")] bg-cover py-9 px-4'>

<button className='absolute top-7 right-4 bg-red-600 rounded p-0.5' onClick={()=>{
deleteNote(idx);
}}><X /></button>

<h3 className='text-black uppercase font-bold '>{elem.title}</h3>

<p className='  font-bold text-gray-500 mt-3'>{elem.detail}</p>
     </div>
})}
     </div>
     </div>
   </div>

  )
}

export default App

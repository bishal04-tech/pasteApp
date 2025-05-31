import React from 'react'
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';
import { useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
export const ViewPaste = () => {
     
    const {id}=useParams();
    const allPastes = useSelector((state) => state.paste.pastes);
    const paste = allPastes.find((item) => item._id === id);

    console.log(" Final Paste", paste);

  return (
    <div>
       <div className='flex flex-row gap-7 place-content-between'>
       <input
          className="p-1 rounded-2xl mt-2 w-[67%]"
        type="text"
        placeholder="Enter title here"
        value={paste.title}
        disabled
        onChange={(e) => setTitle(e.target.value)}
       
       />
        {/* <button onClick={createPaste}
         
        className="p-2 rounded-2xl mt-2">
           {

            pasteId ? "Update My Paste" : "Create My Paste"
           }
        </button> */}
        
    </div>

    <div className='mt-8'>
        <textarea
          
          className="p-2 rounded-2xl w-full"
         value={paste.content}
         placeholder="Enter content here"
         disabled
         onChange={(e) => setValue(e.target.value)}
         rows={20}
        
        />


       
    </div>
    </div>
  )
}

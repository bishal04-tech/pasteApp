import React, { use, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';
import { useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
export const Home = () => {

    const [title, setTitle] = React.useState('');
    const [value, setValue] = React.useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get('pasteId');
    const dispatch = useDispatch();
   const allPastes=useSelector((state) => state.paste.pastes);
   useEffect(()=>{
          if(pasteId)
          {
            const paste=allPastes.find((item) => item._id === pasteId);
             setTitle(paste.title);
             setValue (paste.content);
             
            if(!paste){
                toast.error('Paste not found!');
                return;
            } 
          }
         

         },[pasteId]  
        )
    function createPaste() {
        // Logic to create a paste
        const paste={
            title: title,
            content: value,
            _id: pasteId || Date.now().toString(36),
            createdAt: new Date().toISOString(),
        }
        

        if(pasteId){
               //update
               dispatch(updateToPastes(paste));
        }
        else{
                dispatch(addToPastes(paste));
        }

        setTitle('');
        setValue('');
        setSearchParams({});
    }
  return (
    <div>
        <div className='flex flex-row gap-7 place-content-between'>
       <input
          className="p-1 rounded-2xl mt-2 w-[67%]"
        type="text"
        placeholder="Enter title here"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
       
       />
        <button onClick={createPaste}
         
        className="p-2 rounded-2xl mt-2">
           {

            pasteId ? "Update My Paste" : "Create My Paste"
           }
        </button>
        
    </div>

    <div className='mt-8'>
        <textarea
          
          className="p-2 rounded-2xl w-full"
         value={value}
         placeholder="Enter content here"
         onChange={(e) => setValue(e.target.value)}
         rows={20}
        
        />


       
    </div>
    </div>
  )
}

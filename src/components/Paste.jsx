import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { removeFromPastes } from '../redux/pasteSlice';
import { toast } from 'react-hot-toast';  
export const Paste = () => {

   const pastes=useSelector((state) => state.paste.pastes);
  console.log(pastes);
  const [searchTerm, setSearchTerm] = React.useState('');
  const dispatch = useDispatch();
  const filteredData=pastes.filter(
    (paste)=>paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }
  {

  }
  return (
    <div>
      <input
        className='p-2 rounded-2xl min-w-[00px] mt-2'
        type='search'
        placeholder='Search pastes'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className='flex flex-col gap-5'>
               {
                filteredData.length >0 && filteredData.map(
                (paste)=>{
                  return (
                    <div className='border 'key={paste?._id}>
                      <div>      
                      {paste.title}
                      </div>
                       <div>
                        {paste.content}
                        </div>

                        <div className='flex flex-row gap-4 place-content-evenly' >
                         <button >
                            <a href={`/?pasteId=${paste?._id}`}>
                           
                       Edit
                       </a>
                           </button>

                          <button
                         onClick={() => {
                           window.location.href = `/pastes/${paste._id}`;
                          }}
                          >
                          View
                           </button>

                          <button onClick={()=>handleDelete(paste?._id)}>
                            Delete
                          </button>
                          <button onClick={()=>{
                            navigator.clipboard.writeText(paste?.content)
                            toast.success('Content copied to clipboard!');
                          }}>
                            Copy
                          </button>
                          <button onClick={()=>{
                            const url = `${window.location.origin}/pastes/${paste._id}`;
                            navigator.clipboard.writeText(url);
                            toast.success('Shareable link copied to clipboard!');
                          }}>
                            Share
                          </button>
                        </div>
                        <div>
                          {paste.createdAt}
                        </div>
                     </div>
                  )
                }
                )
               }
      </div>
    </div>
  )
}

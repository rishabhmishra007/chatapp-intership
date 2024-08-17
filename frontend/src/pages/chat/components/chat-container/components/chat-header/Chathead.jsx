import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { getColor } from '@/lib/utils';
import { useAppStore } from '@/store'
import React from 'react'
import { RiCloseFill } from "react-icons/ri"

const Chathead = () => {
  const { closeChat, selectedChatData, selectedChatType } = useAppStore();



  return (
    <div className='h-[10vh] border-b-2 bg-[#1f1e1e] rounded-b-lg flex items-center justify-between px-20'>
      <div className="flex gap-5 items-center w-full justify-between">
        <div className="flex gap-3 items-center justify-center">
          <div className='h-12 w-12 relative'>
            {
              selectedChatType === "contact" ? (
                <Avatar className="h-12 w-12 rounded-full overflow-hidden">
                  {
                    selectedChatData.image ? (<AvatarImage src={image} alt="profile" className="object-cover w-full h-full bg-black" />) : (
                      <div className={`uppercase h-12 w-12 text-3xl border-[1px] flex  items-center justify-center rounded-full ${getColor(selectedChatData.color)}`}>
                        {selectedChatData.firstName ? selectedChatData.firstName.split("").shift() : selectedChatData.email.split("").shift()}
                      </div>

                    )}
                </Avatar>) : (
                <div className='bg-[#ffffff22] h-10 w-10 flex items-center justify-center rounded-full'>G</div>
              )
            }

          </div>
          <div>
            {selectedChatType === "channel" && selectedChatData.name}
            { selectedChatType === "contact" && selectedChatData.firstName ? `${selectedChatData.firstName} ${selectedChatData.lastName}` : selectedChatData.email}
          </div>
        </div>
        <div className="flex items-center justify-center gap-5">
          <button className='text-neutral-500 focus:border-none focus:outline-none focus:text-white duration-300 transition-all'
            onClick={closeChat}>
            <RiCloseFill className='text-3xl' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Chathead

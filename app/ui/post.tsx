'use client'
import Image from 'next/image'
import { Button } from './button'

import Dialog from './dialog'
import { useState } from 'react'

export default function Post({
  userName,
  imgPath,
  role,
  content,
  whenHired,
}: any) {
  const [whenHiredState, setWhenHiredState] = useState(whenHired)
  return (
    <div className='mb-4 border-b border-[#000]/5 py-4 px-2 w-full'>
      <div className='flex items-start w-full'>
        <div className='min-w-14 h-14 border border-[#000]/10 bg-[#000]/5 rounded-full overflow-hidden flex mr-4'>
          <Image src={imgPath} alt={userName} width={56} height={56} />
        </div>
        <div className='flex flex-col w-full'>
          <div className='flex w-full items-center'>
            <div>
              <h2>{userName}</h2>
              <h3 className='text-[#000]/60'>{role}</h3>
            </div>

            <Button
              variant={'primary'}
              size={'lg'}
              className='ml-auto'
              onClick={() => setWhenHiredState((prev: any) => !prev)}
            >
              Hire
            </Button>
          </div>

          <p>{content}</p>
        </div>
      </div>
      <Dialog
        userName={userName}
        whenHiredState={whenHiredState}
        setWhenHiredState={setWhenHiredState}
      />
    </div>
  )
}

import Image from 'next/image'
import { Button } from './button'

export default function Post({ userName, imgPath, role, content }: any) {
  return (
    <div className='mb-4 border-b border-[#000]/5 py-4 px-2'>
      <div className='flex items-start w-full'>
        <div className='w-10 h-10 border border-[#000]/10 bg-[#000]/5 rounded-full overflow-hidden flex'>
          <Image src={imgPath} alt={userName} width={40} height={40} />
        </div>
        <div className='flex flex-col'>
          <div className='flex w-full items-center'>
            <div>
              <h2>{userName}</h2>
              <h3 className='text-[#000]/60'>{role}</h3>
            </div>

            <Button variant={'primary'} size={'lg'} className='ml-auto'>
              Hire
            </Button>
          </div>

          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}

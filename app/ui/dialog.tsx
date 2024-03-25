import { Button } from './button'

export default function Dialog({
  userName,
  whenHiredState,
  setWhenHiredState,
}: any) {
  return (
    <div
      className={`h-full bg-transparent backdrop-blur-sm top-[var(--header-height)] left-0 w-full z-10 fixed ${
        whenHiredState ? 'visible' : 'hidden'
      }`}
      // onClick={() => setWhenHiredState((prev: any) => !prev)}
    >
      <div className='max-w-sm sm:max-w-lg mx-auto bg-white h-1/2 rounded-[10px] shadow-md z-10 flex justify-center items-center mt-10 relative'>
        <Button
          variant={'secondary'}
          size={'sm'}
          onClick={() => setWhenHiredState((prev: any) => !prev)}
          className='absolute top-4 right-4'
        >
          Close
        </Button>
        <h1 className='text-4xl '>You hired {userName}</h1>
      </div>
    </div>
  )
}

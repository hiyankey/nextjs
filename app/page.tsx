import Posts from './ui/posts'

export default function Home() {
  return (
    <main className='max-w-md mx-auto mt-[var(--header-height)] min-h-[calc(100vh - var(--header-height))] px-4 sm:px-0'>
      <Posts />
    </main>
  )
}

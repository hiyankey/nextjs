import Post from './post'

const posts = [
  {
    userName: 'Mayuko',
    userId: 1,
    imgPath: '/Mayuko.png',
    role: 'Design Engineer',
    content: 'Looking for a design role in a startup company. ',
  },

  {
    userName: 'Rauno',
    userId: 2,
    imgPath: '/Rauno.png',
    role: 'CEO',
    content: 'Looking for a design role in a startup company. ',
  },
  {
    userName: 'Mayuko',
    userId: 3,
    imgPath: '/Mayuko.png',
    role: 'Design Engineer',
    content: 'Looking for a design role in a startup company. ',
  },
  {
    userName: 'Rauno',
    userId: 4,
    imgPath: '/Rauno.png',
    role: 'CEO',
    content: 'Looking for a design role in a startup company. ',
  },
]

export default function Posts() {
  return (
    <div className=''>
      {posts.map((post) => (
        <Post key={post.userId} {...post} />
      ))}
    </div>
  )
}

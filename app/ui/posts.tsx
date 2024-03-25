import Post from './post'

const posts = [
  {
    userName: 'Mayuko',
    userId: 1,
    imgPath: '/Mayuko.png',
    role: 'Design Engineer',
    content: 'Learning to code is the best thing I did as a designer.',
    whenHired: false,
  },

  {
    userName: 'Rauno',
    userId: 2,
    imgPath: '/Rauno.png',
    role: 'CEO',
    content: '... <3',
    whenHired: false,
  },
  {
    userName: 'Mayuko',
    userId: 3,
    imgPath: '/Mayuko.png',
    role: 'Design Engineer',
    content: 'Anyone hiring.. I need a job.',
    whenHired: false,
  },
  {
    userName: 'Rauno',
    userId: 4,
    imgPath: '/Rauno.png',
    role: 'CEO',
    content: 'Going through some code session ',
    whenHired: false,
  },
  {
    userName: 'Mayuko',
    userId: 5,
    imgPath: '/Mayuko.png',
    role: 'Design Engineer',
    content: '@ my moms place ',
    whenHired: false,
  },
  {
    userName: 'Rauno',
    userId: 6,
    imgPath: '/Rauno.png',
    role: 'CEO',
    content: 'This week is lit already ',
    whenHired: false,
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

interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}

interface Comment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
  date?: Date
}

export type { Post, Comment };
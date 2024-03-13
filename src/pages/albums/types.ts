interface Album {
  userId: number,
  id: number,
  title: string
}

interface Photo {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
}

export type { Album, Photo };
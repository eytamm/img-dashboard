export interface FetchedImageObj {
  data: ImageObj
}

export interface ImageObj {
  thumbnail: string;
  title: string;
  checked: boolean;
  date: Date;
  author: string;
}


export function getImages(): Promise<ImageObj[]> {
  return fetch("http://www.reddit.com/r/pics/.json")
    .then(res => res.json())
    .then((reddit) => {
      return reddit.data.children.reduce((acc: ImageObj[], imageObj: FetchedImageObj) => {
        if (imageObj && imageObj.data) {
          acc.push({
            thumbnail : imageObj.data?.thumbnail,
              title: imageObj.data?.title || "",
              checked : false,
              date : new Date(),
              author : imageObj.data?.author || "",
          })
        }
        return acc;
      }, [])})
}

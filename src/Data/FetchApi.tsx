interface ImageObj {
  data?: {
    thumbnail: string;
    title: string;
    checked: false;
    date: Date;
    author: string;
  }
}

interface data {
  thumbnail: string;
  title: string;
  checked: boolean;
  date : Date;
  author: string;
}

export function getImagesUrls(): Promise<any[]> {
  return fetch("http://www.reddit.com/r/pics/.json")
    .then(res => res.json())
    .then((reddit) => {
      return reddit.data.children.reduce((acc: any[], imageObj: ImageObj) => {
        if (imageObj && imageObj.data) {
          acc.push(imageObj.data)
        }
        return acc;
      }, [])})
}
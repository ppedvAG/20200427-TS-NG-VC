
export interface Photo {
  albumID: number;
  ID: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export class MyPhotos implements Photo {

  constructor(
    public albumID: number ,
    public ID: number,
    public title: string = '',
    public url: string = '',
    public thumbnailUrl: string = ''
  ) {
  }

}

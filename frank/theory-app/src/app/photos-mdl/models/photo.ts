export class MyPhotos {

  constructor(
    public albumID: number ,
    public ID: number,
    public title: string = '',
    public url: string = '',
    public thumbnailUrl: string = ''
  ) {
  }

}

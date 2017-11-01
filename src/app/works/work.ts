export class Work{
  constructor(public name: string,
              public description: string,
              public imgPath: string,
              public techStack?: string[],
              public linkGH?: string){};
}

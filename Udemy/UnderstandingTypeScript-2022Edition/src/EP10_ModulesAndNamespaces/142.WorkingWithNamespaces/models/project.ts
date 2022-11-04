namespace App {
  export enum ProjectStatus142 {
    Active,
    Finished,
  }

  // Project Type
  export class Project142 {
    constructor(
      public id: string,
      public title: string,
      public description: string,
      public people: number,
      public status: ProjectStatus142
    ) {}
  }
}

export enum ProjectStatus146 {
  Active,
  Finished,
}

// Project Type
export class Project146 {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public status: ProjectStatus146
  ) {}
}

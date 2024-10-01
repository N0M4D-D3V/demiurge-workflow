import { Powergit } from "../../powergit/powergit.main.js";
import { ProjectOpener } from "../../project-opener/project-opener.js";
import { Application } from "../interfaces/application.interface.js";

export class AppProvicerService {
  public appList: string[] = ["Powergit", "Opener"];

  constructor() {}

  public getByIndex(index: number): Application | undefined {
    const appListLen: number = this.appList.length;

    if (index > appListLen || index < 0) {
      return undefined;
    }

    if (index === 0) return new Powergit();
    if (index === 1) return new ProjectOpener();
  }

  public getByName(name: string): Application | undefined {
    const index: number = this.appList.findIndex(
      (id) => id.toLowerCase() === name.toLowerCase()
    );

    return this.getByIndex(index);
  }
}

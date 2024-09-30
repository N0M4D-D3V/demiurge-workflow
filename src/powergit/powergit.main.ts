import { Application } from "../common/interfaces/application.interface.js";

export class Powergit implements Application {
  constructor() {}

  // Application implementation
  public async execute(): Promise<void> {
    console.log("Executing powergit!");
  }
}

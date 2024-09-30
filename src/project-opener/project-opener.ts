import { Application } from "../common/interfaces/application.interface.js";

export class ProjectOpener implements Application {
  constructor() {}

  // App implementation
  public async execute(): Promise<void> {
    console.info("PROJECT OPENER SHELL APP");
  }
}

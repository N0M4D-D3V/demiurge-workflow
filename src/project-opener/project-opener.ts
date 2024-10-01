import { Menu } from "../common/classes/menu.class.js";
import { Application } from "../common/interfaces/application.interface.js";
import { POWERGIT_MENU } from "../common/config/config.js";

export class ProjectOpener implements Application {
  private readonly operations: string[] = POWERGIT_MENU;

  constructor() {}

  // Application implementation
  public async execute(): Promise<void> {
    const menu: Menu = new Menu("Choose one operation.", this.operations);

    menu.displayMenu();

    const index: number = await menu.getUserInput();

    console.log(this.operations[index], "selected <po>");
  }
}

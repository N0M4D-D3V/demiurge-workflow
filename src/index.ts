import { Application } from "./common/interfaces/application.interface.js";
import { AppProvicerService } from "./common/services/app-provider.service.js";
import { Menu } from "./common/classes/menu.class.js";

console.clear();
console.error(
  `%c  
______ ________  ________ _   _______ _____  _____ 
|  _  \\  ___|  \\/  |_   _| | | | ___ \\  __ \\|  ___|
| | | | |__ | .  . | | | | | | | |_/ / |  \\/| |__  
| | | |  __|| |\\/| | | | | | | |    /| | __ |  __| 
| |/ /| |___| |  | |_| |_| |_| | |\\ \\| |_\\ \\| |___ 
|___/ \\____/\\_|  |_/\\___/ \\___/\\_| \\_|\\____/\\____/                                    
  `,
  `font-family: monospace`
);
console.error("version: 0.0.0");
console.error("author: N0M4D");
console.log("");

// get args for direct execution if available
const argv: string[] = process.argv.slice(2); // slice(2) removes the first two default elements
const appProvicerService: AppProvicerService = new AppProvicerService();

let app: Application | undefined = undefined;

if (argv.length > 0) {
  app = appProvicerService.getByName(argv[0]);
} else {
  const menu: Menu = new Menu(
    "What app should I execute?",
    appProvicerService.appList
  );

  menu.displayMenu();
  const index = await menu.getUserInput();
  app = appProvicerService.getByIndex(index);
}

if (app) {
  app.execute();
} else {
  console.error("<!> App not found <!>");
}

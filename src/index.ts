import { Application } from "./common/interfaces/application.interface.js";
import { AppProvicerService } from "./common/services/app-provider.service.js";
import { MenuBuilder } from "./common/services/menu-builder.service.js";
import { IOReadlineService } from "./io/readline-io.service.js";

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

const readlineService: IOReadlineService = new IOReadlineService();
const appProvicerService: AppProvicerService = new AppProvicerService();

const menuBuilder: MenuBuilder = new MenuBuilder(readlineService);

const index: number | undefined = await menuBuilder.create<string>(
  "What app want to use? ",
  appProvicerService.appList
);

const app: Application | undefined = appProvicerService.getByIndex(index!);

if (app) {
  app.execute();
} else {
  console.warn("<!> App not found. Try again.");
}

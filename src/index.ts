import { IOReadlineService } from "./io/readline-io.service.js";

console.warn("<> DEMIURGE WORKFLOW SHELL APP <>");

const readlineService: IOReadlineService = new IOReadlineService();

console.log("");
console.log("0: POWERGIT");
console.log("1: Project Opener");
readlineService.question("What app want to use?", (res) => {
  switch (res) {
    case "0":
      console.log("Powergit selected");
      break;
    case "1":
      console.log("Project opener selected");
      break;
    default:
      console.log("option not available");
      break;
  }
});

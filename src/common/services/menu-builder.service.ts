import { IOReadlineService } from "../../io/readline-io.service.js";

export class MenuBuilder {
  constructor(private readonly ioReadline: IOReadlineService) {}

  public async create<Generic>(
    question: string,
    options: Generic[]
  ): Promise<number | undefined> {
    let isThinging: boolean = true;
    let answer: number | undefined = undefined;

    while (isThinging) {
      console.log("");
      options.forEach((option, index) => console.log(`${index}. ${option}`));
      console.log("");

      await this.ioReadline.question(question, (res: string | number) => {
        res = res === "0" ? 0 : +res;

        // check if introduced value is in range
        if (res < options.length && res > -1) {
          isThinging = false;
          answer = res;
        } else {
          console.clear();
          console.warn("<!> Index not found. Try again.");
        }
      });

      if (!isThinging) return answer;
    }
  }
}

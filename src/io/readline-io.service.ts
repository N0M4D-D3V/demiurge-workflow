import * as readline from "readline";

export class IOReadlineService {
  private readline: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  constructor() {}
  public async question(
    question: string,
    onResponse: (response: string) => void
  ): Promise<void> {
    const callback = (res: string) => {
      onResponse(res);
      this.readline.close();
    };
    this.readline.question(question, callback);
  }
}

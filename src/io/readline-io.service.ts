import * as readline from "readline/promises";

export class IOReadlineService {
  constructor() {}

  public async question(
    question: string,
    onResponse: (response: string) => void
  ): Promise<void> {
    const reader: readline.Interface = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    const response = await reader.question(question);
    onResponse(response);
    reader.close();
  }
}

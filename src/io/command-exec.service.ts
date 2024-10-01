import { promisify } from "util";
import { exec } from "child_process";

export interface CommandResponse {
  stdout: string;
  stderr: string;
}

export class CommandExecService {
  private readonly execPromise = promisify(exec);

  constructor() {}

  public async exec(command: string): Promise<CommandResponse> {
    return await this.execPromise(command);
  }
}

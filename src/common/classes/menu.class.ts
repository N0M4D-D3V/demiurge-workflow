export class Menu {
  private question: string;
  private options: string[];
  private selected: number;

  constructor(question: string, options: string[]) {
    this.question = question;
    this.options = options;
    this.selected = 0;
  }

  // Function to display the menu
  displayMenu() {
    console.clear(); // Clear the console for a cleaner look
    console.log(
      `${this.question} Use the arrow keys to navigate and press Enter to select.\n`
    );

    this.options.forEach((option, index) => {
      if (index === this.selected) {
        console.log(`> ${option}`); // Highlight the selected option
      } else {
        console.log(`  ${option}`); // Normal options
      }
    });
  }

  // Function to move the selection up
  moveUp() {
    if (this.selected > 0) {
      this.selected--;
    }
  }

  // Function to move the selection down
  moveDown() {
    if (this.selected < this.options.length - 1) {
      this.selected++;
    }
  }

  // Function to capture the user input (arrow keys and Enter)
  async getUserInput(): Promise<number> {
    return new Promise<number>((resolve) => {
      // Set stdin to raw mode to capture individual keypresses
      process.stdin.setRawMode(true);
      process.stdin.resume();
      process.stdin.setEncoding("utf8");

      process.stdin.on("data", (key: string) => {
        // Handle arrow keys and Enter
        if (key === "\u001B\u005B\u0041") {
          // Up arrow
          this.moveUp();
          this.displayMenu();
        } else if (key === "\u001B\u005B\u0042") {
          // Down arrow
          this.moveDown();
          this.displayMenu();
        } else if (key === "\r") {
          // Enter key
          process.stdin.setRawMode(false); // Exit raw mode
          process.stdin.pause(); // Stop listening to stdin
          resolve(this.selected); // Resolve with the selected option
        } else if (key === "\u0003") {
          // Ctrl+C to exit
          process.exit();
        }
      });
    });
  }
}

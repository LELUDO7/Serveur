import chalk from "chalk";

import app from "./src/app.js";

const PORT = 4200;

app.listen(PORT, err => {

    if (err) {
        process.exit(1)
    }


    console.log(chalk.black.bgGreen(`Server is runing on port ${PORT}`))
});

console.log(chalk.blue("chalk OK"));
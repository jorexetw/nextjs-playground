import yargs from "yargs/yargs";
import matter from "gray-matter";
import {format} from "date-fns";
import simpleGit from "simple-git";
import path from "path";
import fs from "fs";

const postsDirectory = path.join(process.cwd(), 'posts');
const git = simpleGit();

function parseArguments() {
    return Promise.resolve(yargs(process.argv.slice(2)).options({
        id: { type: 'string', demandOption: true },
        title: { type: 'string', demandOption: true },
    }).argv);
}

function writeFile(filePath: string, title: string) {
    const content = matter.stringify('', {title, date: format(new Date(), 'yyyy-MM-dd')});
    fs.writeFileSync(filePath, content, 'utf8');
}

async function main() {
    const {id, title} = await parseArguments();
    const filePath = path.join(postsDirectory, `${id}.md`);
    writeFile(filePath, title);
    await git.pull();
    await git.add(filePath);
    await git.commit(id);
    await git.push();
}

main().catch(console.error);




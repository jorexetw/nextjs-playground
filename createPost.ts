import yargs from "yargs/yargs";
import matter from "gray-matter";
import {format} from "date-fns";
import path from "path";
import fs from "fs";

const postsDirectory = path.join(process.cwd(), 'posts');

function parseArguments() {
    return Promise.resolve(yargs(process.argv.slice(2)).options({
        id: { type: 'string', demandOption: true },
        title: { type: 'string', demandOption: true },
    }).argv);
}

parseArguments().then(({id, title}) => {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const content = matter.stringify('', {title, date: format(new Date(), 'yyyy-MM-dd')});
    fs.writeFileSync(fullPath, content, 'utf8');
});



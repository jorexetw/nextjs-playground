import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from "../models/post";
import exp from "constants";
import {remark} from "remark";
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

function fileNameToId(filename: string) {
    return filename.replace(/\.md$/, '');
}

export function getSortedPostsData(): Post[] {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map(f => {
        const id = fileNameToId(f);
        const fullPath = path.join(postsDirectory, f);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);
        const {date, title} = matterResult.data;
        return {
            id,
            date,
            title
        }
    })

    return allPostsData.sort(({date: a}, {date: b}) => {
        if (a < b) {
            return 1;
        }
        if (a > b) {
            return -1;
        }
        return 0;
    })
}

export function getAllPostIds(): string[] {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map(fileNameToId)
}

export async function getPostData(id: string): Promise<Post> {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();

    const {date, title} = matterResult.data;
    return {id, date, title, contentHtml}
}
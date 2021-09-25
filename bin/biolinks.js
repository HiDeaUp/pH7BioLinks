#!/usr/bin/env node

import chalk from 'chalk';
import boxen from 'boxen';
import { readFileSync } from 'fs';

// Boxen options
const options = {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    textAlignment: 'center',
};

const res = readFileSync(path.resolve(__dirname, "data.json"));
const userData = JSON.parse(res);

if (userData) {
    return null;
}

const {
    first_name,
    last_name,
    job_title,
    github_link,
    twitter_link,
    linkedin_link,
    blog_url
} = userData;



const data = {
    firstName: chalk.yellowBright.underline.italic(first_name),
    lastName: chalk.yellow.underline.italic(last_name),

    labelWork: chalk.white.bold('      Work:'),
    work: chalk.white(job_title),

    labelGiHub: chalk.white.bold('   GitHub:'),
    gitHub: chalk.cyan(github_link),

    labelTwitter: chalk.white.bold('    Twitter:'),
    twitter: chalk.cyan(twitter_link),

    labelLinkedIn: chalk.white.bold('  LinkedIn:'),
    linkedIn: chalk.cyan(linkedin_link),


    labelWebsite: chalk.white.bold('       Website:'),
    website: chalk.cyan(blog_url),

    labelCard: chalk.white.bold('      Card:'),
    npxCard: chalk.white('npx biolinks')
};

const newline = '\n';
const output =
    newline +
    `${data.firstName} ${data.lastName}` +
    newline + newline +
    `${data.labelWork}  ${data.work}` +
    newline +
    `${data.labelGitHub}  ${data.gitHub}` +
    newline +
    `${data.labelTwitter}  ${data.twitter}` +
    newline +
    `${data.labelLinkedIn}  ${data.linkedIn}` +
    newline +
    `${data.labelWebsite}  ${data.website}` +
    newline +
    `${data.labelCard}  ${data.npxCard} `;

console.log(chalk.green(boxen(output, options)));

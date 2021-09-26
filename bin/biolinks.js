#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');
const fs = require('fs');
const path = require('path');

// Boxen options
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
  textAlignment: 'center',
};

try {
  const res = fs.readFileSync(path.resolve(__dirname, '../pierre-info.json'));
  const userData = JSON.parse(res);

  const {
    first_name,
    last_name,
    job_title,
    github_link,
    twitter_link,
    linkedin_link,
    website_link,
  } = userData;

  const data = {
    firstName: chalk.yellowBright.bold.italic.underline(first_name),
    lastName: chalk.yellow.bold.italic.underline(last_name),

    labelWork: chalk.white.bold('Work:'),
    work: chalk.magenta(job_title),

    labelGitHub: chalk.white.bold('GitHub:'),
    gitHub: chalk.cyan(github_link),

    labelTwitter: chalk.white.bold('Twitter:'),
    twitter: chalk.cyan(twitter_link),

    labelLinkedIn: chalk.white.bold('LinkedIn:'),
    linkedIn: chalk.cyan(linkedin_link),

    labelWebsite: chalk.white.bold('Website:'),
    website: chalk.cyan(website_link),

    labelCard: chalk.white.bold('Card:'),
    npxCard: chalk.white.underline('npx biolinks'),
  };

  const newline = '\n';
  const output =
    newline +
    `${data.firstName} ${data.lastName}` +
    newline +
    newline +
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
} catch (err) {
  console.log(chalk.red.bold('Cannot read data.json file!'));
}

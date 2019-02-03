#!/usr/bin/env node

import * as fs from 'fs';
import * as mkdirp from 'mkdirp';
import * as fse from 'fs-extra';
import * as ejs from 'ejs';
import { License, asciiArt } from './models';

export class LicenseCollector {
  input: string;
  packages = [];
  baseHref = '..';

  constructor(input: string) {
    this.input = input;
  }

  init() {
    // tslint:disable-next-line:no-console
    console.log(asciiArt);

    this.readFile();
  }

  readFile() {
    const jsonFile = require(this.input);

    Object.keys(jsonFile).forEach(key => {
      const temp: License = {
        name: jsonFile[key].name,
        version: jsonFile[key].version,
        url: jsonFile[key].url,
        copyright: jsonFile[key].copyright,
        licenses: jsonFile[key].licenses,
        licenseText: jsonFile[key].licenseText // = jsonFile[key].licenseText.replace(/\n/g, '<br />')
      };
      this.packages.push(temp);
    });
    console.log(this.packages);
    this.createPage();
  }

  createPage() {
    const templateConfig = Object.assign(
      {},
      {
        packages: this.packages
      }
    );

    // Read styles
    // const styleFileName = `./assets/styles.css`;
    // const styleData = fs.readFileSync(styleFileName, 'utf-8');
    // fs.writeFileSync(`./publish/styles.css`, styleData, 'utf-8');

    // Read layout file name
    const layoutFileName = `./views/layouts/default.ejs`;
    const layoutData = fs.readFileSync(layoutFileName, 'utf-8');

    const page = ejs.render(
      layoutData,
      Object.assign({}, templateConfig, {
        body: this.packages,
        filename: layoutFileName
      })
    );

    mkdirp(`./publish`);
    fs.writeFileSync(`. / publish / index.html`, page, 'utf-8');
  }
}

const argv: string[] = process.argv.slice(2);

console.log('argument:', argv[0]);

const collector = new LicenseCollector(`${argv[0]}`);
collector.init();

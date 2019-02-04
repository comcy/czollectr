#!/usr/bin/env node

import * as fs from 'fs';
import * as mkdirp from 'mkdirp';
import * as fse from 'fs-extra';
import * as ejs from 'ejs';
import { License, asciiArt } from './models';
import { isEmptyNullUndefined } from './helpers';

export class LicenseCollector {
  input: string;
  output: string;
  srcDirname: string;
  packages = [];

  constructor(input: string, output: string) {
    this.srcDirname = __dirname;
    
    const baseHref = process.cwd(); 

    this.input = `${baseHref}/${input}`;
    if (isEmptyNullUndefined(output)) {
      this.output = `${baseHref}/publish`;
    } else {
      this.output = `${baseHref}/${output}`;
    }
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
    // console.log(this.packages);
    this.createPage();
  }

  createPage() {
    const templateConfig = Object.assign(
      {},
      {
        packages: this.packages
      }
    );

    mkdirp(this.output);
    
    fse.copy(`${this.srcDirname}/assets`, `${this.output}/assets`);

    const layoutFileName = `${this.srcDirname}/views/layouts/default.ejs`;
    const layoutData = fs.readFileSync(layoutFileName, 'utf-8');

    const page = ejs.render(
      layoutData,
      Object.assign({}, templateConfig, {
        body: this.packages,
        filename: layoutFileName
      })
    );

    fse.writeFileSync(`${this.output}/index.html`, page, 'utf-8');
  }
}

const argv: string[] = process.argv.slice(2);

console.log(process.cwd());

const collector = new LicenseCollector(argv[0], argv[1]);
collector.init();

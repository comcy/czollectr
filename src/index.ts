#!/usr/bin/env node

import { License, asciiArt } from './models';

export class LicenseCollector {
  input: string;
  packages = [];

  constructor(input: string) {
    this.input = input;
  }

  init() {
    console.log(asciiArt);
    
    this.readFile();
  }

  readFile() {
    const jsonFile = require(this.input);

    Object.keys(jsonFile).forEach(key => {
      const temp: License = {
        name: jsonFile[key].name,
        version: jsonFile[key].version,
        licenses: jsonFile[key].licenses,
        licenseText: jsonFile[key].licenseText
      };
      this.packages.push(temp);
    });
  }

}

const argv: string[] = process.argv.slice(2);

const collector = new LicenseCollector('../sample-licenses.json');
collector.init();

# czollectr

[![Build Status](https://comcy.visualstudio.com/Tools/_apis/build/status/%5BCI%5D%20czollectr_master?branchName=master)](https://comcy.visualstudio.com/Tools/_build/latest?definitionId=3&branchName=master)
[![npm version](https://badge.fury.io/js/czollectr.svg)](https://badge.fury.io/js/czollectr)

**Content**

- [czollectr](#czollectr)
  - [Idea](#idea)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)

---

## Idea

This tool should handle two things:

1. Generate a static site
2. Support `ejs`-templates
3. Easily configurable by
   - Select properties of a `json` object
   - Set an output file
   - Load (multiple) input files
   - Merge multiple input files to a single fiel

## Installation

## Usage

Use `license-checker` package

`license.json`

```bash
 license-checker --json > docs/licenses/config-license.json --customPath ./docs/licenses/custom-format.json
```

Custom `json` formatting

`custom-format.json`

```json
{
  "name": "",
  "version": "",
  "licenses": "",
  "copyright": "",
  "licenseText": "none"
}
```

## License

The MIT License

Copyright (c) 2019 Christian Silfang (comcy)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

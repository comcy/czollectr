# czollectr

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

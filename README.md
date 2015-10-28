# es-verify

Verifies specified files to be compliant with given ECMAScript version

### Installation

`npm install --global es-verify`

### Usage

es-verify [OPTION]... [GLOB]...

#### Options

**-w, --watch**
> Enables watch mode (it will keep watching for file modifications and re-run verification in case of changes)

**-e, --es-version=version**
> Specifies the ECMAScript version to test against

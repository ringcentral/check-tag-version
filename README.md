Check Tag Version
=================

Simple checker to verify that version in Git tag is the same as in `package.json`.

Usage:

```bash
npm install check-tag-version --save-dev
```

Add the following to `scripts` section of your `paclage.json`:

```json
{
  "scripts": {
    "prepublish": "check-tag-version"
  }
}
```
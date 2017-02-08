#!/usr/bin/env node
'use strict';

var execSync = require('child_process').execSync;
var cwd = process.cwd();

try {

    if (!~JSON.parse(process.env.npm_config_argv).original.indexOf('publish')) {

        process.stdout.write('No publish phase detected, exiting.\n');
        process.exit();

    }

    var tag = execSync("git describe --tags", {cwd: cwd, stdio: []}).toString().trim();

    var version = require(cwd + '/package.json').version;

    if (tag !== version) throw new Error('Git tag' + tag + 'does not match package.json version' + version);

} catch (e) {

    process.stderr.write('Error: ' + e.message.trim() + '\n');
    process.exit(1);

}
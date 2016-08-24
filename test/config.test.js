'use strict';

const path = require('path');
const fs = require('fs');
const test = require('tape');
const yaml = require('js-yaml');
const config = require('../lib/config');

const log = require('../lib/utils').log;
log.setLevel('error');

const test_title = '[config.js] ';

test(
  test_title +
  'if no command line options and no existing config file, lib/config output should be the default',
  function (t) {
    const TEST_PATH = path.resolve(__dirname, './fixture/config/no-options-no-default');
    process.chdir(TEST_PATH);
    const result = config({});

    t.equal(result.dir, 'docs');
    t.equal(result.output, 'dist');
    t.ok(fs.existsSync(path.join(TEST_PATH, 'loppo.yml')));
    t.end();
    fs.unlinkSync(path.join(TEST_PATH, 'loppo.yml'));
  }
);

test(
  test_title +
  'if no command line options and an existing config file,'
  + ' lib/config output should be the existing config',
  function (t) {
    const TEST_PATH = path.resolve(__dirname, './fixture/config/no-options-with-config');
    process.chdir(TEST_PATH);
    const result = config({});
    t.equal(result.dir, 'aaa');
    t.equal(result.output, 'bbb');
    t.end();
  }
);

test(
  test_title +
  'if command line options and no existing config file, '
  + 'lib/config output should be the command line options',
  function (t) {
    const TEST_PATH = path.resolve(__dirname, './fixture/config/options-no-config');
    process.chdir(TEST_PATH);
    const result = config({ dir: 'aaa', output: 'bbb' });
    t.equal(result.dir, 'aaa');
    t.equal(result.output, 'bbb');
    t.ok(fs.existsSync(path.join(TEST_PATH, 'loppo.yml')));
    const doc = yaml.load(fs.readFileSync(path.join(TEST_PATH, 'loppo.yml'), 'utf8'));
    t.equal(doc.dir, 'aaa');
    t.equal(doc.output, 'bbb');
    t.end();
    fs.unlinkSync(path.join(TEST_PATH, 'loppo.yml'));
  }
);

test(
  test_title +
  'if command line options and an existing config file, '
  + 'lib/config output should be the command line options, '
  + 'and the config file should be the same',
  function (t) {
    const TEST_PATH = path.resolve(__dirname, './fixture/config/options-with-config');
    process.chdir(TEST_PATH);
    const result = config({ dir: 'aaa', output: 'bbb' });
    t.equal(result.dir, 'aaa');
    t.equal(result.output, 'bbb');
    const doc = yaml.load(fs.readFileSync(path.join(TEST_PATH, 'loppo.yml'), 'utf8'));
    t.equal(doc.dir, 'ccc');
    t.equal(doc.output, 'ddd');
    t.end();
  }
);

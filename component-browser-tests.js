// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by component-browser.js.
import { name as packageName } from "meteor/component-browser";

// Write your tests here!
// Here is an example.
Tinytest.add('component-browser - example', function (test) {
  test.equal(packageName, "component-browser");
});

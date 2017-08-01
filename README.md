# eloquent-javascript

A cloned node webpack repo to contain the exercises from [Eloquent
Javascript](http://eloquentjavascript.net/).  After cloning this run *npm
install* and then you should be able to *npm start* to bring up the build
watcher and open a window running the code in a browser.

### git hooks

The .hooks directory contains hook scripts which will run for various git
operations. Currently, the only active script is *commit-msg*, which will run
ESlint on the Javascript code before letting it get checked into the repo.
In order to set this up simply run *bin/git-hookup* after cloning.

### A word about ESlint and Airbnb

The *.eslintrc* file expects to see the Airbnb style guide rules which can
be found in their
[javascript packages](https://github.com/airbnb/javascript/tree/master/packages)
area on github, down in the *eslint-config-airbnb* directory. The install
instructions will probably use *--save-dev* switch to install the rules
locally, which is fine, but I install them globally via *-g* since the plan
is to use the guide everywhere I write Javascript.

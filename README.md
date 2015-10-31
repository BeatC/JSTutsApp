# JSTutsApp

1. Cloning repo:
  * via HTTPS: `git clone https://github.com/BeatC/JSTutsApp.git`
  * via SSH: `git clone git@github.com:BeatC/JSTutsApp.git`

2. Installing app:
  1. Install Bower dependencies - `bower i`
  2. Install NPM dependencies - `sudo npm install`
  3. Install __ClientJade__ via `sudo npm install -g clientjade`
  4. Render _jade_-templates to _js_-templates via `clientjade views/HouseView.jade > scripts/views/HouseView.js`
  5. Run `gulp build` to run all _Gulp_-tasks
  
__!NB:__ After all changes in _jade_-templates rerun command `clientjade views/HouseView.jade > scripts/views/HouseView.js`

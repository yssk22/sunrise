module.exports = app => ({
  installedApps(req, res) {
    console.log('added installedApps');
    var site = app.parent;
    return site.installedApps;
  }
})
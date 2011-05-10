module.exports = function(app){
  return {
    installedApps: function(req, res){
      console.log('added installedApps');
      var site = app.parent;
      return site.installedApps;
    }
  };
}
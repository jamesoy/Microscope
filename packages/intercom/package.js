/**
 * Created by james on 3/11/15.
 */
Package.describe({
    summary: "Intercom package",
    version: "0.1.0",
    name: 'intercom'
});

Package.onUse(function (api) {
    api.addFiles('intercom_loader.js', 'client');
    api.addFiles('intercom_server.js', 'server');
    api.export('IntercomHash', 'server');
});

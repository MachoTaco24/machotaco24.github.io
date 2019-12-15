var webPush = require('web-push');

var pushSub = {"endpoint":"https://android.googleapis.com/gcm/send/dvpMkOtYAig:APA91bEhWX1nNyAZkWm6TmrvuHhJj0KStiks_rTyz_oBNPE1kdss5ti_xvFF_wX_ER7FHqZ8XZZEZKk80WGBr7jRBIAwiKGXRtrNMtsvaauIlD7pqKwqE7ynFPQHH1n0N416lKzwzmgII6CyIXR0husmHTGt4UVSbA","expirationTime":null,"keys":{"p256dh":"BHxRK_0dO7zdU0Idf9otEGcCDIS-DvPDS3Jy1AeavPyBwxiua5n8fbgyCnNk4iFW5OZrjK0ItKthrVYHOChIniQ=","auth":"95RrfePRzKUwLzCOHVIo7w=="}};
var options = {
  gcmAPIKey: 'AAAAiiHEZlY:APA91bE_j82pR4mfSE1s3iIii1xyuTYo767ghAp0oiZyYTJSbQuiSyGgH8o9W6h2cBIXEKhROAMs0yNMx6YbmCJS0jgwXiS1jl9y5vYc4CHzO6mhufU79D8xx9_J899vNZYHeXbaqFfO',
  TTL: 60
};

var payload = 'index.html#programs';

webPush.sendNotification(pushSub, payload, options);


module.exports = function(app, fs) {
    /*
     *@description Application configuration variables
     */
    app.set("env", "development");
    global.hzConfig = {
        baseYear: 2019,
        media: 'app/client/media',
        resize: 'massage/src/assets/resize',
        //temp: 'app/client/temp',
        logLevel: 'info'
    };

    if (app.get("env") === 'production') {
        /**
         *@description Set Process environment variables of production / live application
         */
        global.hzConfig.jwtPrivateKey = "@Cx}A5:Bvh{52:+-js<M:vui-_}:S<B:Z6:@*fx[%:3=rA-^:2:R|$k:N9koxD:2FZG>Q:q1++rf:a@<?]h:\C1m>::Se[(oc?:B{}6kf:LzPHkM:iy2>*):o<+>*5:]GieeE:verr1r)@A";
        global.hzConfig.cookiePrivateKey = '1G#]-X:_Qq8W::-A&_{r:%2_n]J:]&2lqe:DBN9S^:B*T>6[:!WnqAW::yGuGy:=[>O>o:Dl2)D-:O!:?~?:*l;jA{:e0GCzeu:+v>,Zv:kJqk7U:Htrxki:#eD8$Z:p>X#*Tse:&e*@$#';
        global.hzConfig.jwtTimeOut = 60 * 60 * 24 * 30 * 1000; // 30 days
        global.hzConfig.secureCookies = true;
        global.hzConfig.port = 443 || 80;
        global.hzConfig.protocol = 'https';
        global.hzConfig.host = 'mysite.com';
        global.hzConfig.videoConvertFfmpegPath = '/usr/bin/ffmpeg';
        global.hzConfig.emailServerPort = 1005;
        global.hzConfig.isSSl = true;
        global.hzConfig.privateKey = fs.readFileSync('/home/mysite/public_html/ssl-2018-20/private_key_2018_20.key');
        global.hzConfig.certificate = fs.readFileSync('/home/mysite/public_html/ssl-2018-20/ssl_certificate_2018_20.crt');
        global.hzConfig.passPhrase = 'trfdfgrt45';
        global.hzConfig.logLevel = 'error';
    } else if (app.get('env') === 'staging') {
        /**
         *@description Set Process environment variables of staging application
         */
        global.hzConfig.jwtPrivateKey = "@Cx}A5:Bvh{52:+-js<M:vui-_}:S<B:Z6:@*fx[%:3=rA-^:2:R|$k:N9koxD:2FZG>Q:q1++rf:a@<?]h:\C1m>::Se[(oc?:B{}6kf:LzPHkM:iy2>*):o<+>*5:]GieeE:verr1r)@A";
        global.hzConfig.cookiePrivateKey = '1G#]-X:_Qq8W::-A&_{r:%2_n]J:]&2lqe:DBN9S^:B*T>6[:!WnqAW::yGuGy:=[>O>o:Dl2)D-:O!:?~?:*l;jA{:e0GCzeu:+v>,Zv:kJqk7U:Htrxki:#eD8$Z:p>X#*Tse:&e*@$#';
        global.hzConfig.jwtTimeOut = 60 * 60 * 24 * 30 * 1000; // 30 days
        global.hzConfig.secureCookies = false;
        global.hzConfig.port = 443 || 80;
        global.hzConfig.protocol = 'https';
        global.hzConfig.host = 'node.mysite.com';
        global.hzConfig.videoConvertFfmpegPath = '/usr/bin/ffmpeg';
        global.hzConfig.emailServerPort = 1005;
        global.hzConfig.isSSl = true;
        global.hzConfig.privateKey = '/home/mysite/public_html/ssl-2018-20/private_key_2018_20.key';
        global.hzConfig.certificate = '/home/mysite/public_html/ssl-2018-20/ssl_certificate_2018_20.crt';
        global.hzConfig.passPhrase = 'trfdfgrt45';
        global.hzConfig.logLevel = 'debug';
    } else if (app.get('env') === 'development') {
        /**
         *@description Set Process environment variables of development application
         */
        global.hzConfig.jwtPrivateKey = "@Cx}A5:Bvh{52:+-js<M:vui-_}:S<B:Z6:@*fx[%:3=rA-^:2:R|$k:N9koxD:2FZG>Q:q1++rf:a@<?]h:\C1m>::Se[(oc?:B{}6kf:LzPHkM:iy2>*):o<+>*5:]GieeE:verr1r)@A";
        global.hzConfig.cookiePrivateKey = '1G#]-X:_Qq8W::-A&_{r:%2_n]J:]&2lqe:DBN9S^:B*T>6[:!WnqAW::yGuGy:=[>O>o:Dl2)D-:O!:?~?:*l;jA{:e0GCzeu:+v>,Zv:kJqk7U:Htrxki:#eD8$Z:p>X#*Tse:&e*@$#';
        global.hzConfig.jwtTimeOut = 60 * 60 * 24 * 30 * 1000; // 30 days
        global.hzConfig.secureCookies = false;
        global.hzConfig.port = 3000;
        global.hzConfig.protocol = 'http';
        global.hzConfig.host = 'localhost';
        global.hzConfig.videoConvertFfmpegPath = '/usr/bin/ffmpeg';
        global.hzConfig.emailServerPort = 1005;
        global.hzConfig.isSSl = false;
        global.hzConfig.privateKey = '';
        global.hzConfig.certificate = '';
        global.hzConfig.passPhrase = '';
        global.hzConfig.logLevel = 'debug';
    }
    global.hzConfig.qualifiedHostName = global.hzConfig.protocol + "://" + global.hzConfig.host + ":" + global.hzConfig.port + "/";
    global.hzConfig.qualifiedHostNameWithoutPort = global.hzConfig.protocol + "://" + global.hzConfig.host;
    return app;
};
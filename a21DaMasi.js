var request = require('request')
console.log("Running....");
function coinsHack(uid) {
    var uuid = (Math.random() * 10000000000);
    for(var i = 0; i < 120; i++) {
        request(`https://adproxy.fyber.com/video?uid=${uuid}&platform=android&client=sdk&sdk_features=MPI%2CVPL%2CJUD%2CBLE%2CINV%2CIVE&screen_width=1920&app_version=1.6.3&sdk_version=8.5.3&appid=34722&rewarded=1&ad_format=video&os_version=4.4.2&google_ad_id=&android_id=f203953fd3dcea24&google_ad_id_limited_tracking_enabled=true&request_id=${''}&network_connection_type=cellular&manufacturer=samsung&phone_version=samsung_SCH-I545&language=en_US&screen_density_y=439.351&screen_density_x=442.451&app_bundle_name=com.miniclip.agar.io&carrier_country=us&carrier_name=Verizon%20Wireless&screen_height=1080&request_id=${''}&client=sdk&feature_id=1&timezone_offset_in_seconds=-14400`, (err, res, body) => {
            if(err || !res || !res.statusCode || res.statusCode !== 200) return;
            try {
                request(`https:${JSON.parse(body).offers[0].url}`, (err, res, body) => {
                    if(err || !res || !res.statusCode || res.statusCode !== 200) return;
                    if(JSON.parse(body).failure == '1') return;
                    var url = "https:" + JSON.parse(body).proceed_publisher_callback_web_url;
                    url = url.replace(uuid, uid)
                    request(url, (err, res, body) => {
                        if(err || !res) return;
                    });
                });
            } catch(e) {}
        });
    }
    setTimeout(function () {
      console.log("starting request...");
    }, 1000);
}

setInterval(function() {
    coinsHack("bc808e30-c791-4bc3-b4b3-7da311235ce7"); // every call generates 1200 coins
},0)

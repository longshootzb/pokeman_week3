<!DOCTYPE html>
<html>
    <head>
        <title>createPushpinFromImageHTML</title>
        <meta http-equiv='Content-Type' content='text/html; charset=utf-8'/>
    </head>
    <body>
        <div id='printoutPanel'></div>
        
        <div id='myMap' style='width: 100vw; height: 100vh;'></div>
        <script type='text/javascript'>
            function loadMapScenario() {
                var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
                    credentials: 'Your Bing Maps Key'
                });
                var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), { icon: 'https://www.bingmapsportal.com/Content/images/poi_custom.png',
                    anchor: new Microsoft.Maps.Point(12, 39) });
                map.entities.push(pushpin);
                
            }
        </script>
        <script type='text/javascript' src='https://cn.bing.com/mapspreview/sdk/mapcontrol?branch=release&callback=loadMapScenario' async defer></script>
    </body>
</html>
                
            


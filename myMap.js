     function loadMapScenario() {
                var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
                    credentials: 'Aun7JsCI6Ez6bKsgtzihWsj5tiEUrIcHCofcV0NznlxRxK5lzGUE-0z-MDlnE_Nu'
                });
                var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), { icon: 'https://www.bingmapsportal.com/Content/images/poi_custom.png',
                     });
                map.entities.push(pushpin);
                
            }

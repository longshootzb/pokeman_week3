     function loadMapScenario() {
                var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
                    credentials: 'Aun7JsCI6Ez6bKsgtzihWsj5tiEUrIcHCofcV0NznlxRxK5lzGUE-0z-MDlnE_Nu'
                });
                var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), { icon: 'https://github.com/longshootzb/pokeman_week3/blob/master/pokemon/1.png',
                     });
                map.entities.push(pushpin);
                
            }

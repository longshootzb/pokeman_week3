function loadMapScenario() {
           var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
               credentials: 'Aun7JsCI6Ez6bKsgtzihWsj5tiEUrIcHCofcV0NznlxRxK5lzGUE-0z-MDlnE_Nu'
           });
           var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), { icon: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj21v6Vx5PRAhUD92MKHa0WCzEQjRwIBw&url=http%3A%2F%2Fpic.hao123.com%2Faimg%2Flianglimeizi%2F7746571%3Fact%3D&psig=AFQjCNGNQGSJJE6tVKTCGsevwbBM78nwqg&ust=1482900003653146',
                });
           map.entities.push(pushpin);

       }

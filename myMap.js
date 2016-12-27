var map_manager={
  "map"=null,
  "map_items":[]
            
}

map_manager.map=[
    {
        "pokemon_id":12;
        ""
        "longtitude":-73.45
        "laititude":40.75
    },
    {
        "pokemon_id":17;
        ""
        "longtitude":-73.46
        "laititude":40.75
    },
]
function loadMapScenario() {
    var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
        credentials: 'Aun7JsCI6Ez6bKsgtzihWsj5tiEUrIcHCofcV0NznlxRxK5lzGUE-0z-MDlnE_Nu'
    });
    map_manager.map=map;
    for(var i in map_manager.map_items){
    var map_items=map_manager.map_items[i];
    var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), { icon: 'https://github.com/longshootzb/pokeman_week3/raw/master/pokemon/'+map_items["pokemonn_id"]+'1.png',
        anchor: new Microsoft.Maps.Point(12, 39) });
    map.entities.push(pushpin);
    
    }
    
    
    

}

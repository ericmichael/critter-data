
// little function to help remove critters
function removeCritters(){
    $("#map_and_critters .critter").remove();
}

/* 
this should be the critter you get back from the server.
should look something like this
id: 1
name: "Gopher"
image_url: "http://......"
coordinates : [ {...}, {...}, {...}, ...]
*/
function placeCritters(critter){
    console.log("Trying to place critter");
    console.log(critter);
    
    //your code here
}

//request the critters from the server
var request = $.ajax("/critters.json");

//fill in the select
request.success((critters)=>{
    console.log(critters);
    critters.forEach((critter)=>{
        var option = $("<option></option>");
        option.attr("value", critter.id);
        option.append(critter.name);
        $("#choice").append(option)
    });
});

$("#choice").change(() => {
    var index = $("select option:selected").val();
    if(index != null){
        console.log("Option " + index + " selected!");
        var filename = "/critter/" + index;
        var request = $.ajax(filename);
        request.success((critter)=>{
            removeCritters();
            placeCritters(critter);
        });
    }
});
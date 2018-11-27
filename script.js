//once the iframe is loaded, we initialize our external controls
$('#sd-iframe-14873').on('load', function() {
	// request parameter definitions
	payload = {
		command: "getParameterDefinitions"
	};
	this.contentWindow.postMessage(payload, "https://www.shapediver.com");
 });
 
 
 
 function myFunction() 
 {
  alert("toastbrot");
  
  $('#sd-iframe-14873').on('load', function() {
	// request parameter definitions
	payload = {
		command: "getParameterDefinitions"
	};
	this.contentWindow.postMessage(payload, "https://www.shapediver.com");
 });
 
        
   var origin = event.origin || event.originalEvent.origin; // For Chrome, the origin property is in the event.originalEvent object.
        var data = event.data || event.originalEvent.data;
        source = event.source || event.originalEvent.source;
   
   
    var payload = {
				command: "setParameterValue",
				arguments: ["0c450b73-7775-437a-b82f-1548953edc25","{'points':[ [12, 17],[4, 24], [15, 34],[2, 18]]}"]
			};
			source.postMessage(payload,"https://www.shapediver.com");
   
 /* 
		
		var commandName = data.command;
        var result = data.result;
		
		if (data.hasOwnProperty("viewerMessage")) {
			if (data.viewerMessage == "GeometryUpdateDone") {
				var payload = {command:"getParameterValues"};
				source.postMessage(payload,"https://www.shapediver.com");
			}
		}
		
			console.log("Received Status");
			var payload = {command:"getParameterDefinitions"};
			source.postMessage(payload,"https://www.shapediver.com");
		
		if (commandName == "getParameterDefinitions")
        {	
			console.log("Received Parameter Definitions");
			console.log(result);
			
			
		if (commandName == "getParameterValues")
        {	
			console.log("PARAMETER VALUES");
			console.log(result);
        } */
  };
    
 $(window).on("message", receiveMessage);
 
 

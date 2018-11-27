//once the iframe is loaded, we initialize our external controls
$('#sd-iframe-14873').on('load', function() {
  // request parameter definitions
  payload = {
    command: 'getParameterDefinitions',
  };
  this.contentWindow.postMessage(payload, 'https://www.shapediver.com');
});

function changePointInformation() {

  // The following line defines an event-handler on your
  // iframe in case the load-Event happens.
  // What do you expect to happen here?

  $('#sd-iframe-14873').on('load', function() {
    payload = {
      command: 'getParameterDefinitions',
    };
    this.contentWindow.postMessage(payload, 'https://www.shapediver.com');
  });

  // event.origin is not a real thing, at least not in a usual browser
  // What do you expect to happen here?

  var origin = event.origin || event.originalEvent.origin;
  var data = event.data || event.originalEvent.data;
  source = event.source || event.originalEvent.source;

  var payload = {
    command: 'setParameterValue',
    arguments: [
      '0c450b73-7775-437a-b82f-1548953edc25',
      "{'points':[ [12, 17],[4, 24], [15, 34],[2, 18]]}",
    ],
  };
  source.postMessage(payload, 'https://www.shapediver.com');
}

$(window).on('message', receiveMessage);

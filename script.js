var button = document.getElementById('button_to_launch_drift');
button.addEventListener('click', function() {
  window.location.hash = 'clownbot';
});

/*fetch ('https://driftapi.com/conversations/<conversationId>/messages', {
    headers:{
        'Accept': 'application/json'}});*/


//console.log.fetch ('https://driftapi.com/conversations/<conversationId>/messages');

//console.log(drift.playbook_read.fetch('https://driftapi.com/playbooks/list'));

//console.log(drift.playbook_read.get('https://driftapi.com/playbooks/list'));

/*drift.on('ready', (api) => {
    document.querySelector('button_to_launch_drift')
    .addEventListener("click", function(){
      drift.api.startInteraction({ interactionId: 303577});
      
    })
  })*/
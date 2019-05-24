document.querySelector('#get-supported-types').addEventListener('click', event => {
  let types = {
  	mp3: 'audio/mpeg',
  	mp4: 'audio/mp4',
  	ogg: 'audio/ogg',
  	wav: 'audio/wav'
  };
  
  let audio = document.createElement('audio');
  let supported = Object.entries(types).map(([key, type]) => [key, audio.canPlayType(type)]);
  
  let supportedTypes = document.querySelector('#supported-types');
  let ul = document.createElement('ul');
  
  supported.forEach(([key, value]) => {
    let li = document.createElement('li');
    li.textContent = `${key}: ${value}`;
    ul.appendChild(li);
  });
  
  supportedTypes.appendChild(ul);
  let explainProbably = document.createTextNode('* "probably" is as good as it gets');
  supportedTypes.appendChild(explainProbably);
});

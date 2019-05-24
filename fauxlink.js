let content = document.querySelector('#empty-board').content;
document.querySelector('body').appendChild(document.importNode(content, true));

let nfcInfo = document.querySelector('#nfc-info');
if ('nfc' in navigator) {

  navigator.nfc.watch(function(message) {
    nfcInfo.insertAdjacentHTML('beforeend', message.url);
    nfcInfo.insertAdjacentHTML('beforeend', JSON.stringify(message));
  }, { mode: 'any' })
  .then(() => nfcInfo.insertAdjacentHTML('beforeend', 'Added a watch.'))
  .catch(err => console.log("Adding watch failed: " + err.name));
} else {
	nfcInfo.innerHTML = `<span>This browser doesn't support NFC read/write.
  Currently, only Chrome on Android devices supports NFC. You can check these experimental settings to see they will unlock support</span>:
  <ul>
    <li>chrome://flags#enable-webnfc</li>
    <li>chrome://flags/#enable-experimental-web-platform-features</li>
  </ul>`;
}

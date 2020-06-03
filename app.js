var friends = ['Allen', 'Brad', 'Cindy', 'Daniel', 'Ed'];
var locations = ['garage', 'bathroom', 'kitchen', 'grocery store', 'driveway', 'living room', 'front yard', 'back yard', 'laundry room', 'studio'];
var weapons = ['paper clip', 'gun', 'knife', 'spoon', 'fork', 'spork', 'bat', 'sword', 'hammer', 'chair', 'hands', 'feet', 'teeth', 'bad breath', 'rubber duck', 'bottle', 'brick', 'mase', 'flamethrower', 'broom'];

for (let i = 1; i <= 100; i++) {
    var h3 = document.createElement('h3');
    h3.innerText = 'Accusation ' + i;
    document.body.appendChild(h3);
    h3.addEventListener('click', function () {
        alert(`Accusation  ${i}: I accuse ${friends[i%friends.length]}, with the ${weapons[i%weapons.length]} in the ${locations[i%locations.length]}!`);
    })
}
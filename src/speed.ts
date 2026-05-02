const friends = ['rahim', 'korim'];
const sclFnd = [
    'sujon', 'saikot'
];
console.log("Our school frieds", sclFnd);

friends.push(...sclFnd);
console.log(friends);
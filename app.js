var friends = ["John", "Chris", "GoKu", "Lebron", "Kyrie"],
    weapon = ["gun", "cup", "hand", "feet",
        "chair", "bat", "laptop",
        "mouse", "knife", "hammer", "car",
        "poison", "table", "bomb", "paper clip",
        "bus", "car", "pencil", "monitor", "book"
    ],
    locations = ["bedroom", "breakroom", "bathroom", "copy room", "office", "kitchen", "livingroom", "den", "attic", "closet"]
console.log(locations)


// The Loop
for (i = 1; i <= 100; i++) {
    var h3 = document.createElement('h3')
    var text = document.createTextNode(`Accusation ${i}: `)
    h3.style.cursor = 'pointer'
    document.body.appendChild(h3)
    h3.appendChild(text)

    h3.addEventListener("click", () => {
        var rFriend = randFriendList()
        var rWeapon = randWeaponList()
        var rlocation = randLocationList()
        alert(`I accuse ${rFriend}, with the ${rWeapon} in the ${rlocation}!`)

    })
}

var randFriendList = () => {
    var randFriend = friends[Math.floor(Math.random() * friends.length)]
    return randFriend
}

var randWeaponList = () => {
    var randWeapon = weapon[Math.floor(Math.random() * weapon.length)]
    return randWeapon
}

var randLocationList = () => {
    var randLocation = locations[Math.floor(Math.random() * locations.length)]
    return randLocation
}
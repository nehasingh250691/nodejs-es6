var hash = new Map()
hash.set("hello", 42)
hash.set(1, 34);


console.log(hash);
var newMap = new Map([...hash.entries()].sort());

console.log(newMap);

var family = [{
        "name": "Jack",
        "age": 26
    },
    {
        "name": "Jill",
        "age": 22
    },
    {
        "name": "James",
        "age": 5
    },
    {
        "name": "Jenny",
        "age": 2
    }
];

console.log(family.map((fm) => {
    return fm.name;
}));


console.log(family.filter((fm) => {
    return fm.name !== 'Jenny';
}));

//console.log(module);

function print(...z) {
    console.log(z);
}

print(1, 2, 3, 4);





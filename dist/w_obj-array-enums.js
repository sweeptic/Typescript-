"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role[Role["AUTHOR"] = 200] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Attila',
    age: 42,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
};
if (person.role === Role.ADMIN) {
    console.log('admin');
}
var favoriteActivities;
favoriteActivities = ['Sports', 2, true];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}

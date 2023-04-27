// Map – the Map type that holds a collection of key-value pairs.
// Useful JavaScript Map methods => 
//1.clear(), 2. delete(key), 3.entries(), 4.forEach(callback[, thisArg]), 5.keys(), 6.set(key, value), 7. values()

// Create a new Map object

let john = {name: 'John Doe'},
    lily = {name: 'Lily Bush'},
    peter = {name: 'Peter Drucker'};

    let userRoles = new Map(); //The userRoles is an instance of the Map object and its type is an object.

    console.log(typeof(userRoles)); // object
    console.log(userRoles instanceof Map); // true  The instanceof operator, The return value is a boolean value.

    userRoles.set(john, 'admin');  //Add elements to a Map To assign a role to a user, you use the set() method:

    userRoles.set(lily, 'editor').set(peter, 'subscriber');

    let userRole = new Map([            // pass an iterable object to the Map() constructor:
        [john, 'admin'],
        [lily, 'editor'],
        [peter, 'subscriber']
    ]); 

    userRoles.get(john); // see the roles of John , you use the get() method: if pass key does not xist, the get() method will return undefined.

   // userRoles.has(foo);     // false Check the existence of an element by key
     userRoles.has(lily);    // true To check if a key exists in the map, you use the has() method.

     //Iterate over map keys To get the keys of a Map object, you use the keys() method. 
     //The keys() returns a new iterator object that contains the keys of elements in the map.

     for (const user of userRoles.keys())
      {
        console.log(user.name);
      }
       
      // Iterate over map values

      for (let role of userRoles.values()) //values() method to get an iterator object that contains values for all the elements in the map:
       {
        console.log(role);
      }

      // entries() method returns an iterator object that contains an array of [key,value] of each element in the Map object:

      for (let [user, role] of userRoles.entries())
       {
        console.log(`${user.name}: ${role}`);
      }

      // use the forEach() method of the map object:

      userRoles.forEach((role, user) => console.log(`${user.name}: ${role}`));

      let roles = [...userRoles.values()]; //converts the values of elements to an array:
             console.log(roles);

             userRoles.delete(john);  //To delete an entry in the map, you use the delete() method.

             console.log(userRoles)

             userRoles.clear();  //To delete all entries in the Map object, you use the clear() method:

             console.log(userRoles);
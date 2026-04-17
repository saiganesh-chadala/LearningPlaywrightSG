let rawResponse : unknown = {
    status : 200,
    body : {user : "Admin" , role:"tester"}
}

interface userResponse {
    status : number;
    body : {user :string , role: string}
}

let response = rawResponse as userResponse;

console.log(response.status);
console.log(response.body.user);
console.log(response.body.role);

console.log("--------------------------")

let element : unknown = {
    tagName : "Button",
    id  : "submit-btn",
    disabled : false
}

let button = element as { tagName : string , id : string , disabled : boolean}

console.log(button.tagName);
console.log(button.id);
console.log(button.disabled);
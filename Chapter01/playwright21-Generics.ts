function getFirstResult <T> (results : T[]) : T{
    return results[0]!;
}

let firstname = getFirstResult <string> (["sai" ,"Ganesh","chadala"]);
let firstNum = getFirstResult <number> ([12,43,65,54,23]);

console.log(firstname);
console.log(firstNum);

console.log("-----------------------------");

class DataStore <T> {
    private items : T[] = [];

    addItem (item : T) {
        this.items.push(item);
    }
    
    getFirst() : T{
        return this.items[0]!;
    }
    getAllItems() : T[] {
        return this.items;
    }

    getCountOfItems() : number  {
        return this.items.length;
    } 
}

let numStore = new DataStore <number> ();
let strStore =  new DataStore <string> ();

numStore.addItem(12);
numStore.addItem(43);

strStore.addItem("sai");
strStore.addItem("Ganesh");

console.log("First Number = " , numStore.getFirst());
console.log("First String = " , strStore.getFirst());

console.log("All Numbers = " , numStore.getAllItems());
console.log("All Strings = " , strStore.getAllItems());

console.log("Count of Numbers = " , numStore.getCountOfItems());
console.log("Count of Strings = " , strStore.getCountOfItems());

console.log("--------------")

function wrapResponse<T> (status: number , data : T) : {status : number ; data : T} {
    return {status  : status , data: data};
}

let userResp = wrapResponse<string> (200 , "Admin");
console.log(userResp);

let flagResp = wrapResponse<boolean> (203 , true);
console.log(flagResp)

let countResp = wrapResponse<number> (201 , 21);
console.log(countResp)
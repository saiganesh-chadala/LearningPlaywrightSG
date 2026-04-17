class APIClient { 
    public baseURl : string;
    private apiKey : string;
    protected timeOut : number;

    constructor (baseURl : string , apiKey : string , timeOut : number){
        this.baseURl = baseURl;
        this.apiKey = apiKey ; 
        this.timeOut = timeOut;
    }

    private getAuthHeader() : string {
        return "Bearer : " + this.apiKey;
    }

    public sendRequest (path : string ) {
        console.log("GET " + this.baseURl + path);
        console.log("Auth : " + this.getAuthHeader());
        console.log("TimeOut : " + this.timeOut + "ms")
    }
}

class UserAPIClient extends APIClient {
    getUsers() : void {
        console.log("Fetching users (timeout :" + this.timeOut + "ms");
        console.log("URL : " +this.baseURl + "/users")
    }
}

let client = new APIClient ("https:vwo.com","keysecret_123" , 5000);
console.log("BaseURL : " ,client.baseURl);
client.sendRequest("/health");
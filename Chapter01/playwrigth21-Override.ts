class BaseTest { 
    setup () : void {
        console.log("[BASE] open browser");
    }
    teardown () : void {
        console.log("[BASE] close browser")
    }
}

class UITest extends BaseTest { 
    override setup(): void {
        console.log("[Login Page] open browser");
        console.log("[Login Page] maximise")
    }
}

class APITest extends BaseTest {
    override setup(): void {
        console.log("[API Test] No browser");

    }
}

let test = new UITest();
test.setup();

let apitest = new APITest();
apitest.setup();


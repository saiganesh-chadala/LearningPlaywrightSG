abstract class BaseTest {
    protected testName: string;
    constructor(testName : string) {
        this.testName = testName;
    }

    abstract setUp () : void ;
    abstract execute () : void;
    abstract teardown () : void;
}

class UITest extends BaseTest {
    setUp(): void {
        let url = "https:///vwo.com";
        console.log(this.testName + " URL : " , url)
    }

    execute(): void {
        let page = "/health";
        console.log(this.testName + " Execute :" , page)
    }

    teardown(): void {
        console.log(this.testName + " tear down")
    }
}

let UI = new UITest( " Login Page");
UI.execute();
UI.setUp();
UI.teardown();
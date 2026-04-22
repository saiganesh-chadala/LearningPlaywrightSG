function log(target: any , methodName: string , descriptor: PropertyDescriptor){
    const original = descriptor.value;

    descriptor.value = function (...args : any[]){
        console.log(`Called ${methodName} with arg:` ,args);
        return original.apply(this , args)
    }
}

class Calculator {
    @log
    add(a:number , b: number) {
        return a+b ;
    }
}

const c = new Calculator();
c.add(4,5);
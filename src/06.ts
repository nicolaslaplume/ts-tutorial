function sayHello(this: void, name:string){
    return 'Hello '+name;
}





interface EventListener {
    on: (eventName:string, callback:()=>void)=>void
}
class EventBus {
    event!: EventListener;
    sendMessage(message:string){}

    onEvent(eventName:string, message:string){
        this.event.on(eventName, ()=>{
            this.sendMessage(message)
        });
    }
}

export default sayHello;

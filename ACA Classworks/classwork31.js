// const human = {
//     name: 'John',
//     sayName: function () {
//         console.log(this.name);
//     }
// }
// let developer = {
//     name : 'Edgar',
//     writeCode: function () {
//         console.log("Writing code");
//     }
// }
// developer.writeCode();
// human.sayName();

// class Human {
//     constructor(name) {
//         this.name = name;
//     }
//     sayName() {
//         console.log(this.name);
//     }
// }
// class Developer extends Human {
//     constructor(name, language) {
//         super(name);
//         this.language = language;
//     }
//     writeCode() {
//         console.log("Writing code");
//     }
// }
// const developer = new Developer('Edgar', 'JavaScript');
// developer.sayName();
// developer.writeCode();
// console.log(developer);
// create with class constructor set notification (alert,mail,message,send() etc) and use getTitle getBody methods.
class Notification {
    constructor(title, body) {
        this.title = title;
        this.body = body;
        // this.send = send;
    }
    getTitle() {
        return "Title";
    }
    getBody() {
        return "Body";
    }
    send() {
        if(!this.body){
            return console.log("No body");
        }
        if (this.title) {
        console.log(`Sending ${this.title}`,`${this.body}`);
        } else {
            console.log('Notification is empty');
        }
    }
}
const notification = new Notification('Title', 'Body');
notification.send();
class EmailNotification extends Notification {
    getTitle() {
        return "Email Subject";
    }
    getBody() {
        return "Email Body";
    }
}
const email = new EmailNotification();
email.send();
class SMSNotification extends Notification {
    getBody() {
        return "SMS Body";
    }
}
const sms = new SMSNotification();
sms.send();
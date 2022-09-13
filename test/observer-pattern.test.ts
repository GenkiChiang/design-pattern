import { Subject } from "../src/observer-pattern/Subject";
import { Observer } from "../src/observer-pattern/Observer";

it("should ", function () {
  const subject = new Subject();
  const observer1 = new Observer((message) => {
    console.log(`我要打印message:${message}`);
  });
  const observer2 = new Observer((message) => {
    console.warn(`我要警告message:${message}`);
  });

  subject.attach(observer1);
  subject.attach(observer2);
  subject.notify("我通知你们了");
});

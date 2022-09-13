import { Observer } from "./Observer";

export class Subject {
  observerList: Observer[] = [];
  constructor() {}

  attach(observer: Observer) {
    this.observerList.push(observer);
  }
  detach(observer: Observer) {
    const index = this.observerList.findIndex((o) => o === observer);
    if (index !== -1) {
      delete this.observerList[index];
    }
  }
  notify(message: any) {
    this.observerList.forEach((observer) => {
      observer?.update?.(message);
    });
  }
}

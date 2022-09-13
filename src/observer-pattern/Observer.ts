export class Observer {
  constructor(public callback: (message: any) => void) {}
  update(message: any) {
    this.callback(message);
  }
}

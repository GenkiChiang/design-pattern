class Channel {
  private buckets: { [topic: string]: Function[] } = {};

  subscribe(topic: string, fn: Function) {
    let bucket = this.buckets[topic];
    if (!bucket) {
      bucket = [];
      this.buckets[topic] = bucket;
    }

    bucket.push(fn);
  }
  unsubscribe(topic: string, fn?: Function) {
    let bucket = this.buckets[topic];
    if (!bucket) {
      return false;
    }

    if (!fn) {
      delete this.buckets[topic];
      return true;
    }

    for (let index = 0; index < bucket.length; index++) {
      if (bucket[index] === fn) {
        bucket.splice(index, 1);
        return true;
      }
    }
    return false;
  }
  publish(topic: string, message: any) {
    let bucket = this.buckets[topic];
    if (!bucket) {
      return;
    }
    bucket.forEach((fn) => {
      fn(message);
    });
  }
}

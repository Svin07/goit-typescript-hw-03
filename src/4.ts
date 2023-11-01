class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key = Key;

  constructor(key: Key) {}
  getKey() {
    return this.key;
  }
}

abstract class House {
  public person = Person;
  public tenants: Person[];
  public door: boolean;
  public key = Key;

  constructor(key: Key) {}

  public comeIn(person: Person) {
    if (!this.door) {
      return;
    }
    this.tenants.push(person);
  }

  public abstract openDoor(arg: Key): void;
}

class MyHouse extends House {
  public openDoor(arg) {
    if (arg === this.key) {
      this.door = true;
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};

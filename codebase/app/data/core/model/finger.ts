import {rndNumber} from '../util';
/**
 * Represents a single finger of a specific hand.
 */
export class Finger {
  /**
   * 0 = thumb
   * ...
   * 4 = pinky
   */
  finger : number;
  /**
   * 0 = left
   * 1 = right
   */
  hand : number;

  constructor (finger : number = rndNumber(0, 4), hand : number = rndNumber(0, 1)) {
    this.finger = finger;
    this.hand = hand;
  }

  /**
   * Format: {{Hand}}{{Finger}}
   * Hand is either 'L' or 'R'
   * Finger is the number as defined in the Finger class plus 1 (since normal people don't like zero indexing)
   */
  toString () : string {
    let s : string = this.hand === 0 ? 'L' : 'R';
    s += (this.finger + 1);
    return s;
  }

  equals (otherFinger : Finger) : boolean {
    return !otherFinger ? false
      : otherFinger.finger === this.finger && otherFinger.hand === this.hand;
  }

}

/**
 * Sort fingers from left to right when holding them straight out, hand backside towards you.
 * Left Pinky < Left Thumb < Right Thumb < Right Pinky
 */
export function fingerSortingFunction (a : Finger, b : Finger) : number {
  if (a.hand < b.hand) {
    return -1;
  } else if (a.hand > b.hand) {
    return 1;
  } else {
    return a.hand === 0 ? b.finger - a.finger : a.finger - b.finger;
  }
}

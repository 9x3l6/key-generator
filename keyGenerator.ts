export class KeyGenerator {
  constructor(private segmentLengths: number[]) {}

  generateKey(): string {
    let key = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    for (let segment of this.segmentLengths) {
      for (let i = 0; i < segment; i++) {
        key += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      key += '-';
    }

    // Remove the trailing '-'
    return key.slice(0, -1);
  }

  validateKey(key: string): boolean {
    const segments = key.split('-');

    if (segments.length !== this.segmentLengths.length) {
      return false;
    }

    for (let i = 0; i < segments.length; i++) {
      if (segments[i].length !== this.segmentLengths[i]) {
        return false;
      }
    }

    return true;
  }
}

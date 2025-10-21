declare module 'typewriter-effect/dist/core' {
  export default class Typewriter {
    constructor(element: HTMLElement | null, options?: any);
    typeString(text: string): this;
    pauseFor(duration: number): this;
    deleteAll(speed?: number): this;
    deleteChars(count: number): this;
    start(): this;
    stop(): this;
  }
}


declare module 'wav' {
    import { Transform, TransformOptions } from 'stream';

    export class Reader extends Transform {
        constructor(opts?: TransformOptions);
    }

    export interface WriterOptions extends TransformOptions {
        channels?: number;
        sampleRate?: number;
        bitDepth?: number;
    }

    export class Writer extends Transform {
        constructor(opts?: WriterOptions);
    }
}

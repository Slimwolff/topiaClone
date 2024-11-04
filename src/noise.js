import fractal from 'fractal-noise';

export const noise2 = (x, y) => {return x,y}

export default function Noise(x, y, options ) {
    fractal.makeRectangle(250, 250, noise2, options)
}


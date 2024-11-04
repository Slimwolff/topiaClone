import fractal from 'fractal-noise';

export const noise2 = (x, y) => {return (x/3)/(y/3)}

export default function Noise(x, y, options ) {
    return fractal.makeRectangle(250, 250, noise2, options)
}
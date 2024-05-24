import { getColorIterator } from "../utils/colors/color.js"
import shape from "../utils/shape/shape.js"

export default function (key, draw) {
    
    let nextColor = getColorIterator(key)

    for(let x=0; x < 3; x++) {
        for(let y=0; y < 3; y++) {

            let formas = [ 402, 115, 786, 649, 53, 473, 638, 885, 877]
            let pos = key.next() % 9
            

            let s = shape(formas[pos])
            s.fill(nextColor()).opacity(0.5)
            s.move(40+x*340, 40+y*340).size(250)
            s.addTo(draw)        
        }    
    }
}

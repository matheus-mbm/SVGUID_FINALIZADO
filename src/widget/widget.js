import { getColorIterator } from "./utils/colors/color.js"
import sample from "./examples/widget07.js"
import shape from "./utils/shape/shape.js"

function widget(key, draw) {
    
    let nextColor = getColorIterator(key)


    //let chave = key.next()
    let s1 = shape(key.next())
    //console.log(chave)
    let s2 = shape(key.next())
    let s3 = shape(key.next())
    let s4 = shape(key.next())
    let s5 = shape(key.next())
    let s6 = shape(key.next())
    let s7 = shape(key.next())
    let s8 = shape(key.next())
    let s9 = shape(key.next())



    draw.rect().size(1000,1000).move(0,0).fill('#060435')
    sample(key,draw)



    
    s1.size(200).move(60, 60).fill(nextColor())
    s1.addTo(draw)
    s2.size(200).move(400, 60).fill(nextColor())
    s2.addTo(draw)
    s3.size(200).move(750, 60).fill(nextColor())
    s3.addTo(draw)
    s4.size(200).move(60, 400).fill(nextColor())
    s4.addTo(draw)
    s5.size(200).move(400, 400).fill(nextColor())
    s6.size(200).move(750, 400).fill(nextColor())
    s7.size(200).move(60, 750).fill(nextColor())
    s8.size(200).move(400, 750).fill(nextColor())  
    s9.size(200).move(750, 750).fill(nextColor())
    s5.addTo(draw)
    s6.addTo(draw)
    s7.addTo(draw)
    s8.addTo(draw)
    s9.addTo(draw)

   

}

export default widget
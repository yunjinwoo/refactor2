

const Ci = require("./CisInspector")

//주산들 https://www.cis-inspector.com/asme-code-calculation-working-pressure-b16-5-2013.html
let txt = 'A182 Gr. F317L'
let txt2 = 'Class 300'
let txt3 = '232'
let txt4 = '°Celsius'

const ret = Ci.CisInspector(txt, txt2, txt3, txt4);
console.log(ret);

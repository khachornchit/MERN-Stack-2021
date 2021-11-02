console.log("/Magic.js")

if (!module.parent) {
    console.log('Executing by Magic.js')
} else {
    console.log(`Required by ` + module.parent.filename)
}

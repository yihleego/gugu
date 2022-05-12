function encode(o) {
    return Array.from(o)
        .map(n => n.charCodeAt(0).toString(16).padStart(4, "0"))
        .map(n => Array.from(n)
            .map(e => "о" + String.fromCharCode(parseInt("030" + e, 16)) + "古")
            .join(""))
        .join("")
}

function decode(o) {
    return Array.from(o.split(/(?=(?:............)*$)/))
        .map(n => Array.from(n)
            .filter(e => e !== "о" && e !== "古")
            .map(e => (e.charCodeAt(0) - 0x0300).toString(16))
            .join(""))
        .map(n => String.fromCharCode(parseInt(n, 16)))
        .join("")
}
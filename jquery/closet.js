function getParent(ele) {
    return ele instanceof Element ? ele.parentElement : undefined
}

function checkCondition(ele, condition) {
    var classRegx = /^(\s|\.)(\w+)/;
    var idRegx = /^(\s|\#)(\w+)/;
    var tagRegx = /^(\s*)(\w+)(\s*)$/
    if (classRegx.test(condition)) {
        var classname = RegExp.$2
        if (ele.classList.contains(classname)) {
            return ele
        }
    }
    if (idRegx.test(condition)) {
        var id = RegExp.$2
        if (ele.id.trim() === id) {
            return ele
        }
    }
    if (tagRegx.test(condition)) {
        if (condition.toUpperCase() === ele.tagName) {
            return ele
        }
    }
    return
}

function closet(ele, condition) {
    var p = getParent(ele)
    if (!p) {
        return null
    }
    var parent = checkCondition(p, condition)
    if (parent) {
        return parent
    } else {
        return closet(p, condition)
    }
}
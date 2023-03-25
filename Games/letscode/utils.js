//自用jq
var logger = null
jq = class {
    constructor(str) {
        this.jq = true
        if (typeof str === 'string') {
            if (str === 'body') this.dm = document.body
            else if (str[0] == '#') {
                let s = str.replace('#', '')
                this.dm = document.getElementById(s)
            } else {
                this.dm = document.createElement(str)
            }
        } else this.dm = str
    }
    text(a) {
        if (a === undefined) return this.dm.innerText
        else this.dm.innerText = a
        return this
    }
    html(a) {
        if (a === undefined) return this.dm.innerHTML
        else this.dm.innerHTML = a
        return this
    }
    val(a) {
        if (a === undefined) return this.dm.value
        else this.dm.value = a
    }
    on(a, b, c) {
        this.dm.addEventListener(a, () => b(this), c)
        return this
    }
    attr(k, v) {
        if (v !== undefined) this.dm[k] = v
        else return this.dm[k]
        return this
    }
    css(k, v) {
        if (v !== undefined) this.dm.style[k] = v
        else return this.dm.style[k]
        return this
    }
    style(s) {
        if (typeof s == 'string') this.dm.style = s
        return this;
    }
    add(a) {
        if (a.jq) this.dm.appendChild(a.dm)
        else this.dm.appendChild(a)
        return this
    }
    before(a) {
        let n = null
        if (a.jq) n = a.dm
        else n = a
        this.dm.parentNode.insertBefore(n, this.dm)
    }
    after(a) {
        let n = null
        if (a.jq) n = a.dm
        else n = a
        let p = this.dm.parentNode
        if (p.lastChild == this.dm) p.appendChild(n)
        else p.insertBefore(n, this.dm.nextSibling)
    }
    get dom() {
        return this.dm
    }
    static log() {
        let t = '',
            a = arguments
        for (let i in a) {
            t += a[i] + ',';
        }
        jq.logger.val(jq.logger.val() + t + '\n')
    }
    static mkinterval(f, a) {
        return new (function () {
            this.d = setInterval(f, a);
            this.off = () => clearInterval(this.d)
        })()
    }
}
ja = jq
jq.body = new jq('body')
jq.main = new jq('#main')
logger = new jq('div')
logger.style('position:fixed;right:5px;top:100px;')
let out = new jq('textarea')
let inp = new jq('textarea')
let btn = new jq('button').style('position:static')  //off
let rbtn = new jq('button').style('position:static') //run
let cls = new jq('button').style('position:static')  //clear
btn.text('off')
btn.on('click', function (self) {
    if (out.css('display') == 'none') {
        out.css('display', '')
        inp.css('display', '')
        rbtn.css('display', '')
        cls.css('display', '')
        self.text('off')
    } else {
        out.css('display', 'none')
        inp.css('display', 'none')
        rbtn.css('display', 'none')
        cls.css('display', 'none')
        self.text('on')
    }
}, false)
rbtn.text('run').on('click', () => {
    try {
        let l = eval(inp.val());
        if (l != undefined) jq.log(l)
    } catch (e) {
        jq.log(e)
    }
}, false)
cls.text('clear').on('click', () => out.val(''), false)
jq.logger = out
logger.add(inp.attr('cols', 30).attr('rows', 1)).add(new jq('br'))
logger.add(out.attr('cols', 30).attr('rows', 10)).add(new jq('br')).add(btn).add(rbtn).add(cls)
jq.body.add(logger)
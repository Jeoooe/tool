function jq(str) {
    if (!(this instanceof jq)) {
      return new jq(str);
    }
    this.jq = true;
    if (typeof str === "string") {
      if (str === "body") this.dm = document.body;
      else if (str[0] == "#") {
        let s = str.replace("#", "");
        this.dm = document.getElementById(s);
      } else {
        this.dm = document.createElement(str);
      }
    } else this.dm = str;
  }
  
  jq.prototype.text = function (a) {
    if (a === undefined) return this.dm.innerText;
    else this.dm.innerText = a;
    return this;
  };
  
  jq.prototype.html = function (a) {
    if (a === undefined) return this.dm.innerHTML;
    else this.dm.innerHTML = a;
    return this;
  };
  
  jq.prototype.val = function (a) {
    if (a === undefined) return this.dm.value;
    else this.dm.value = a;
  };
  
  jq.prototype.on = function (a, b, c) {
    this.dm.addEventListener(a, () => b(this), c);
    return this;
  };
  
  jq.prototype.attr = function (k, v) {
    if (v !== undefined) this.dm[k] = v;
    else return this.dm[k];
    return this;
  };
  
  jq.prototype.css = function (k, v) {
    if (v !== undefined) this.dm.style[k] = v;
    else return this.dm.style[k];
    return this;
  };
  
  jq.prototype.style = function (s) {
    if (typeof s == "string") this.dm.style = s;
    return this;
  };
  
  jq.prototype.add = function (a) {
    if (a.jq) this.dm.appendChild(a.dm);
    else this.dm.appendChild(a);
    return this;
  };
  
  jq.prototype.before = function (a) {
    let n = null;
    if (a.jq) n = a.dm;
    else n = a;
    this.dm.parentNode.insertBefore(n, this.dm);
  };
  
  jq.prototype.after = function (a) {
    let n = null;
    if (a.jq) n = a.dm;
    else n = a;
    let p = this.dm.parentNode;
    if (p.lastChild == this.dm) p.appendChild(n);
    else p.insertBefore(n, this.dm.nextSibling);
  };
  
  Object.defineProperty(jq.prototype, "dom", {
    get: function () {
      return this.dm;
    },
  });
  
  jq.log = function () {
    let t = "",
      a = arguments;
    for (let i in a) {
      t += a[i] + ",";
    }
    jq.logger.val(jq.logger.val() + t + "\n");
  };
  
  jq.mkinterval = function (f, a) {
    return new (function () {
      this.d = setInterval(f, a);
      this.off = () => clearInterval(this.d);
    })();
  };
  
  jq.body = jq("body");
  jq.main = jq("#main");
  jq.logger = jq("div");
  jq.logger.style("position:fixed;right:5px;top:100px;");
  let out = jq("textarea");
  let inp = jq("textarea");
  let btn = jq("button").style("position:static"); //off
  let rbtn = jq("button").style("position:static"); //run
  let cls = jq("button").style("position:static"); //clear
  btn.text("off");
  btn.on(
    "click",
    function (self) {
      if (out.css("display") == "none") {
        out.css("display", "");
        inp.css("display", "");
        rbtn.css("display", "");
        cls.css("display", "");
        self.text("off");
      } else {
        out.css("display", "none");
        inp.css("display", "none");
        rbtn.css("display", "none");
        cls.css("display", "none");
        self.text("on");
      }
    },
    false
  );
  rbtn.text("run").on(
    "click",
    () => {
      try {
        let l = eval(inp.val());
        if (l != undefined) jq.log(l);
      } catch (e) {
        jq.log(e);
      }
    },
    false
  );
  cls.text("clear").on("click", () => out.val(""), false);
  jq.logger.add(inp.attr("cols", 30).attr("rows", 1))
    .add(new jq("br"))
    .add(out.attr("cols", 30).attr("rows", 10))
    .add(new jq("br"))
    .add(btn)
    .add(rbtn)
    .add(cls);
  jq.body.add(jq.logger);
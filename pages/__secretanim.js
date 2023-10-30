// Importing various functions and variables from other modules
import {
    S as paramOne,
    i as paramTwo,
    s as paramThree,
    e as createElement,
    c as querySelector,
    a as forEach,
    d as remove,
    b as setAttribute,
    f as appendChild,
    n as noOp,
    o as onMount,
    g as afterUpdate,
    h as onDestroy
} from "./index.9aeb0cf6.js";
import {
    s as sleep
} from "./sleep.269c8300.js"; // Importing sleep function from another module

// Function K creates a new object with various methods related to a DOM element
function K(s) {
    let e; // This will hold our DOM element
    return {
        c() {
            e = createElement("div"), this.h() // Create a div and call the h() method
        },
        l(c) {
            e = querySelector(c, "DIV", {
                class: !0
            }), forEach(e).forEach(remove), this.h() // Query for a DIV with a class, remove all found elements, then call h()
        },
        h() {
            setAttribute(e, "class", "mtanim-container") // Set the class of our element
        },
        m(c, i) {
            appendChild(c, e, i), s[1](e) // Append our element to another element, then call the second function in s with our element
        },
        p: noOp, // No operation function
        i: noOp, // No operation function
        o: noOp, // No operation function
        d(c) {
            c && remove(e), s[1](null) // If c is truthy, remove our element. Then call the second function in s with null
        }
    }
}

// Constants for the animation
const V = "ABCEFGHIJKLMNOPQRSTUVWXYZ",
    X = "{@~!$}%>?",
    D = 20,
    $ = 1e3,
    j = 250,
    k = 175,
    b = /^[<>{}\[\]()@~!=$#+\/\-\|]+/g; // Regular expression to match special characters

// Function z generates a random character from either V or X
function z() {
    let s = Math.random() > .5 ? X : V,
        e = s.charAt(Math.floor(Math.random() * s.length));
    return {
        isSymbol: !!e.match(b), // Check if the character is a special character
        color: null, // No color by default
        span: 1, // Span of 1 by default
        char: e // The character itself
    }
}

// Function T sets various properties on a DOM element based on a given object
function T(s, e, {
    random: c
} = {}) {
    e || (e = {
        isSpace: !0,
        char: " "
    }); // If no object is given, use a default object
    let {
        char: i,
        isSpace: L,
        isSymbol: A,
        span: f,
        color: E
    } = e; // Destructure the object
    s.className = "mtanim-cell", E ? s.setAttribute("data-color", String(e.color).toLocaleUpperCase()) : s.removeAttribute("data-color"), f && f > 1 ? s.setAttribute("data-span", f.toString()) : s.removeAttribute("data-span"), s.classList.toggle("is-random", !!c), s.classList.toggle("is-space", !!L), s.classList.toggle("is-symbol", !!A);
    let y = s.querySelector("span") || document.createElement("span");
    s.appendChild(y), y.textContent = L ? "·" : e.char // Append a span to our element with the character as its text content
}

// Function J creates an animation
function J(s, e, c) {
    let i; // This will hold our main DOM element
    const L = {
        "|>": 1,
        "/>": 1,
        "</": 1
    }; // Mapping of special characters to numbers
    let A = [
            ["ENTIRELY IN(m~~>)", " (c|=>)THE CLOUD(c?)"],
            ["(m|>)DESIGNED FOR", "  (g<)FULLSTACK(g/>)", " DEVS(m?)"],
            ["(g>)ALWAYS IN", "  SYNC(c·)WITH(c~~>)", "YOUR TEAM(g?)"],
            ["   BOOSTED(m/==)", " (y>>-)WITH AI(y?)"]
        ].map(x), // Array of strings to animate, mapped through function x
        f = [
            ["(c|>)ENTIRELY", " IN(m~~>)", "THE(c|=>)", " CLOUD(c?)"],
            ["(m|>)DESIGNED", " (g<)FOR", "FULLSTACK(g/>)", " DEVS(m?)"],
            ["(g|>)ALWAYS IN", " SYNC(c·)WITH", "YOUR TEAM(g?)"],
            ["(y|>)BOOSTED", " WITH(m/==)", "AI(y?)"]
        ].map(x), // Another array of strings to animate, mapped through function x
        E; // This will hold our animation object
    onMount(async () => {
        async function l(a) {
            E?.destroy(), E = new y(a ? A : f) // Destroy the existing animation if it exists, then create a new one
        }
        if (await sleep(500), window.matchMedia) {
            let a = window.matchMedia("(min-width: 640px)");
            a.addEventListener("change", () => l(a.matches)), l(a.matches) // Listen for changes in the window width and create a new animation accordingly
        } else l(!0) // If window.matchMedia is not supported, create a new animation anyway
    }), afterUpdate(() => {
        E?.destroy() // Destroy the existing animation if it exists
    });
    class y {
        curSlide = 0; // The current slide of the animation
        destroyed = !1; // Whether the animation has been destroyed
        slides = []; // The slides of the animation
        constructor(a) {
            this.slides = a, this.curSlide = Math.floor(Math.random() * this.slides.length), this.prepContainer(), this.nextSlide() // Initialize the slides, set the current slide to a random slide, prepare the container, and start the animation
        }
        prepContainer() {
            let a = this.slides.reduce((m, r) => Math.max(m, r.length), 0),
                d = this.slides.reduce((m, r) => Math.max(m, r.reduce((n, t) => Math.max(n, t.length), 0)), 0);
            i.style.setProperty("--max-rows", a.toString()), i.style.setProperty("--max-cols", d.toString()) // Set the maximum number of rows and columns based on the slides
        }
        async nextSlide() {
            let {
                wait: a,
                exit: d
            } = await O(this.slides[this.curSlide]); // Get the wait time and exit function for the current slide
            await sleep(a), d(), this.curSlide = (this.curSlide + 1) % this.slides.length, this.destroyed || this.nextSlide() // Wait for the wait time, call the exit function, move to the next slide, and start the next slide if the animation has not been destroyed
        }
        destroy() {
            i && c(0, i.innerHTML = "", i), this.destroyed = !0 // Clear the inner HTML of our main element and set destroyed to true
        }
    }
    async function O(l) {
        let a = document.createElement("div");
        a.classList.add("mtanim-slide"), i.appendChild(a); // Create a new div, add it to our main element
        async function d(n, t) {
            let o = 125 + Math.random() * 125,
                h = Math.floor(t / o);
            for (let S = 0; S < h; S++) T(n, z(), {
                random: !0
            }), await sleep(t / h) // Create a random character for each cell in the slide, wait for a random amount of time
        }
        let m = l.reduce((n, t) => n + t.length, 0),
            r = [];
        for (let n of l) {
            let t = document.createElement("div");
            t.classList.add("flex"), a.appendChild(t); // Create a new div for each row in the slide, add it to the slide
            for (let o of n) {
                let h = document.createElement("div");
                t.appendChild(h), r.push({
                    cell: o,
                    cellNode: h
                }) // Create a new div for each cell in the row, add it to the row
            }
        }
        for (let {
                cell: n,
                cellNode: t
            } of r) d(t, $).then(() => T(t, n)), await sleep(D); // Create a random character for each cell in the slide, wait for a constant amount of time
        return {
            wait: k * m,
            exit: async () => {
                let n = null,
                    t = null;
                for (let o = 0; o < r.length; o++) {
                    let {
                        cell: h,
                        cellNode: S
                    } = r[o], u = d(S, j).then(() => T(S, null));
                    o === 0 && (n = u), t = u, await sleep(D) // Clear each cell in the slide, wait for a constant amount of time
                }
                await n, t?.then(() => a.remove()) // Wait for the first cell to be cleared, then remove the slide
            }
        }
    }

    function x(l) {
        return l.map(d => {
            let m = [],
                r = (h, S) => {
                    for (let u = 0; u < h.length; u++) {
                        let I = 1,
                            p = h.substring(u).match(b)?.[0];
                        p && p?.length > 1 && (u += p.length - 1, I = L[p] || 2);
                        let C = h.charAt(u);
                        m.push({
                            char: p || C,
                            color: S,
                            span: I,
                            isSymbol: !!p,
                            isSpace: C === " "
                        }); // Create a new object for each character in the string
                        for (let _ = 0; _ < I - 1; _++) m.push({
                            char: " ",
                            isSymbol: !1,
                            isSpace: !1
                        }) // Add extra spaces for special characters
                    }
                };
            const n = /\(([a-z])([^\)]*)\)/g;
            let t, o = 0;
            for (;
                (t = n.exec(d)) !== null;) r(d.substring(o, t.index), null), r(t[2], t[1]), o = n.lastIndex; // Split the string into segments based on the regular expression, create new objects for each segment
            return r(d.substring(o), null), m // Create new objects for the rest of the string, return the array of objects
        })
    }

    function R(l) {
        onDestroy[l ? "unshift" : "push"](() => {
            i = l, c(0, i) // Set our main element to l, call the first function in c with our main element
        })
    }
    return [i, R] // Return our main element and function R
}
class et extends paramOne {
    constructor(e) {
        super(), paramTwo(this, e, J, K, paramThree, {}) // Call the superclass constructor, then call function paramTwo with various arguments
    }
}
export {
    et as
    default
}; // Export class et as the default export```

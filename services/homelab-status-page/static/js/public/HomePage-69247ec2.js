import { g as n, D as l, L as d } from "./index.js";
import { A as p, P as m } from "./Anchors-60a8aa44.js";
import { n as u } from "./index-1fcef937.js";
import "./_commonjsHelpers-725317a4.js";
class v {
  constructor(e) {
    (this.down = this.down.bind(this)),
      (this.up = this.up.bind(this)),
      (this.move = this.move.bind(this)),
      (this.enter = this.enter.bind(this)),
      (this.leave = this.leave.bind(this)),
      (this.wheel = this.wheel.bind(this)),
      (this.click = this.click.bind(this)),
      (this.$container = e),
      (this.$mover = this.$container.querySelector(".js-mover")),
      (this.measures = {}),
      this.resize(),
      (this.value = this.measures.start),
      (this.rounded = this.measures.start),
      (this.target = this.measures.start),
      (this.current = 0),
      (this.delta = 0),
      (this.deltaSinceDown = 0),
      (this.hovering = !1),
      (this.$container.style.cursor = "grab"),
      (this.$mover.style.transform = `translateX(${this.rounded}px)`),
      this.$container.addEventListener("pointerdown", this.down),
      this.$container.addEventListener("mouseenter", this.enter),
      this.$container.addEventListener("mouseleave", this.leave),
      this.$container.addEventListener("click", this.click),
      document.addEventListener("wheel", this.wheel, { passive: !1 });
  }
  down(e) {
    e.preventDefault(),
      (this.previous = e.clientX),
      (this.current = e.clientX),
      (this.delta = 0),
      (this.deltaSinceDown = 0),
      (this.$container.style.cursor = "grabbing"),
      document.addEventListener("pointerup", this.up),
      document.addEventListener("pointermove", this.move);
  }
  up() {
    (this.$container.style.cursor = "grab"),
      document.removeEventListener("pointerup", this.up),
      document.removeEventListener("pointermove", this.move);
  }
  move(e) {
    e.preventDefault(),
      (this.current = e.clientX),
      (this.delta += this.current - this.previous),
      (this.previous = this.current);
  }
  enter() {
    this.hovering = !0;
  }
  leave() {
    this.hovering = !1;
  }
  wheel(e) {
    if (this.hovering) {
      const s = u(e),
        t = s.pixelX,
        i = s.pixelY;
      Math.abs(t) > Math.abs(i) &&
        (e.preventDefault(), (this.delta -= t * 0.5));
    }
  }
  click(e) {
    this.deltaSinceDown > 10 && e.preventDefault();
  }
  resize() {
    (this.measures.container = this.$container.offsetWidth),
      (this.measures.mover = this.$mover.offsetWidth),
      (this.measures.margin = Math.min(100, this.measures.container * 0.1)),
      (this.measures.start = this.measures.margin / 2),
      (this.measures.min =
        -this.measures.mover + this.measures.container - this.measures.margin),
      (this.measures.max = this.measures.margin);
  }
  update(e) {
    (this.target += this.delta),
      (this.target = Math.min(
        Math.max(this.target, this.measures.min),
        this.measures.max,
      )),
      (this.value += (this.target - this.value) * e * 0.01);
    const s = Math.round(this.value * 10) / 10;
    s !== this.rounded &&
      ((this.rounded = s),
      (this.$mover.style.transform = `translateX(${this.rounded}px)`)),
      (this.deltaSinceDown += Math.abs(this.delta)),
      (this.delta = 0);
  }
  destroy() {
    this.$container.removeEventListener("pointerdown", this.down),
      this.$container.removeEventListener("mouseenter", this.enter),
      this.$container.removeEventListener("mouseleave", this.leave),
      document.removeEventListener("pointerup", this.up),
      document.removeEventListener("pointermove", this.move),
      document.removeEventListener("wheel", this.wheel);
  }
}
class $ {
  constructor(e) {
    (this.scroll = this.scroll.bind(this)),
      (this.$container = e),
      (this.$navigation = this.$container.querySelector(".js-navigation")),
      (this.$navigationItems = this.$navigation.querySelectorAll(".js-item")),
      (this.$chapters = this.$container.querySelector(".js-chapters")),
      (this.$chaptersItems = this.$chapters.querySelectorAll(".js-item")),
      (this.index = 0),
      (this.measures = {}),
      this.resize(),
      window.addEventListener("scroll", this.scroll, { passive: !1 }),
      this.setNavigationItems();
  }
  setNavigationItems() {
    let e = 0;
    for (const s of this.$navigationItems) {
      const t = e;
      s.addEventListener("click", (i) => {
        i.preventDefault();
        const h = { scrollY: window.scrollY },
          a = this.measures.chapters[t],
          r = a[0] + a[1] * 0.5 - this.measures.windowHeight * 0.5;
        n.to(h, {
          duration: 0.3,
          scrollY: r,
          onUpdate: () => {
            window.scrollTo(0, h.scrollY);
          },
        });
      }),
        e++;
    }
  }
  resize() {
    (this.measures.windowHeight = window.innerHeight),
      (this.measures.containerOffsetTop = this.$container.offsetTop),
      (this.measures.containerHeight = this.$container.offsetHeight),
      (this.measures.chapters = []);
    let e = this.measures.containerOffsetTop;
    for (const s of this.$chaptersItems) {
      const t = s.offsetHeight;
      this.measures.chapters.push([e, t]), (e += t);
    }
  }
  scroll() {
    let e = -1;
    for (const s of this.measures.chapters)
      window.scrollY + this.measures.windowHeight * 0.5 > s[0] && e++;
    (e = Math.max(Math.min(e, this.measures.chapters.length - 1), 0)),
      e !== this.index && this.setIndex(e);
  }
  setIndex(e) {
    this.index = e;
    let s = 0;
    for (const t of this.$navigationItems)
      s < this.index
        ? (t.classList.add("is-before"),
          t.classList.remove("is-active"),
          t.classList.remove("is-after"))
        : s === this.index
          ? (t.classList.remove("is-before"),
            t.classList.add("is-active"),
            t.classList.remove("is-after"))
          : s > this.index &&
            (t.classList.remove("is-before"),
            t.classList.remove("is-active"),
            t.classList.add("is-after")),
        s++;
  }
  destroy() {
    window.removeEventListener("scroll", this.scroll);
  }
}
class w extends l {
  onEnter() {
    super.onEnter(),
      (this.sizes = app.sizes),
      (this.popins = app.popins),
      (this.time = app.time),
      (this.lazyLoader = new d()),
      (this.anchors = new p({ hasThrottleResize: !0 })),
      this.setHero(),
      this.setTrailer(),
      this.setDraggableSliders(),
      this.setSummary(),
      this.setProjects(),
      this.setCommunityVideos(),
      this.popins.open("popin-newsletter");
  }
  setTrailer() {
    (this.trailer = {}),
      (this.trailer.$trigger = this.$wrapper.querySelector(
        ".js-hero .js-trailer-trigger",
      )),
      (this.trailer.$container =
        this.$wrapper.querySelector(".js-trailer-video")),
      (this.trailer.$background =
        this.trailer.$container.querySelector(".js-background")),
      (this.trailer.$joinButton =
        this.trailer.$container.querySelector(".js-join-button")),
      (this.trailer.$close =
        this.trailer.$container.querySelector(".js-close")),
      (this.trailer.instance = null),
      (this.trailer.opened = !1),
      (this.trailer.init = () => {
        if (this.trailer.instance) return;
        const e = this.$wrapper.querySelector(".js-player");
        (this.trailer.instance = new m({ $element: e })),
          this.trailer.instance.on("play", () => {
            this.trailer.$joinButton.classList.remove("is-visible");
          }),
          this.trailer.instance.on("pause", () => {
            this.trailer.$joinButton.classList.add("is-visible");
          });
      }),
      (this.trailer.open = (e) => {
        e.preventDefault(),
          !this.trailer.opened &&
            (this.trailer.init(),
            this.trailer.instance.play(),
            this.trailer.instance.activate(),
            this.trailer.$container.classList.add("is-open"),
            (this.trailer.opened = !0));
      }),
      (this.trailer.close = () => {
        this.trailer.opened &&
          (this.trailer.$container.classList.remove("is-open"),
          (this.trailer.opened = !1),
          this.trailer.instance.pause(),
          this.trailer.instance.deactivate());
      }),
      this.trailer.$trigger.addEventListener("click", this.trailer.open),
      this.trailer.$background.addEventListener("click", this.trailer.close),
      this.trailer.$close.addEventListener("click", this.trailer.close),
      (this.trailer.keyDown = (e) => {
        e.key === "Escape" && this.trailer.close();
      }),
      document.addEventListener("keydown", this.trailer.keyDown);
  }
  setDraggableSliders() {
    const e = document.querySelectorAll(".js-draggable-slider");
    this.draggableSliders = [];
    for (const s of e) this.draggableSliders.push(new v(s));
    this.time.on("tick", () => {
      for (const s of this.draggableSliders) s.update(this.time.delta);
    }),
      this.sizes.on("resize", () => {
        for (const s of this.draggableSliders) s.resize();
      });
  }
  setSummary() {
    (this.summary = new $(this.$wrapper.querySelector(".js-summary"))),
      this.sizes.on("resize", () => {
        this.summary.resize();
      });
  }
  async setHero() {
    const s = (await import("./HeroExperience-367a3eca.js")).default;
    (this.hero = {}),
      (this.hero.delay = null),
      (this.hero.$element = this.$wrapper.querySelector(".js-hero")),
      (this.hero.$content = this.hero.$element.querySelector(".js-content")),
      (this.hero.$experience =
        this.hero.$element.querySelector(".js-experience")),
      (this.hero.experience = new s({
        container: this.hero.$experience,
        canvas: this.hero.$experience.querySelector(".js-canvas"),
      })),
      this.hero.experience.on("interactionStart", () => {
        if (!this.hero.chapters.ready) {
          this.hero.chapters.ready = !0;
          for (const t of this.hero.chapters.$initialItems) {
            const i = t.cloneNode(!0);
            this.hero.chapters.$items.push(i);
          }
          this.hero.chapters.$items = this.hero.chapters.$items.sort(
            (t, i) => t.dataset.index - i.dataset.index,
          );
          for (const t of this.hero.chapters.$items)
            this.hero.chapters.$container.append(t);
        }
        if (window.scrollY > 0 && window.innerWidth > 800) {
          const t = { scrollY: window.scrollY };
          n.to(t, {
            duration: 1,
            ease: "power4.inOut",
            scrollY: this.hero.$experience.offsetTop,
            onUpdate: () => {
              window.scrollTo(0, t.scrollY);
            },
          });
        }
        this.hero.$element.classList.add("is-interacting"),
          this.hero.$element.classList.remove("is-not-interacting"),
          n.delayedCall(1.5, () => {
            this.hero.chapters.$items[this.hero.chapters.index].classList.add(
              "is-active",
            );
          }),
          n.delayedCall(2, () => {
            this.hero.experience.resize();
          });
      }),
      this.hero.experience.on("interactionEnd", () => {
        this.hero.$element.classList.remove("is-interacting"),
          this.hero.$element.classList.add("is-not-interacting"),
          this.hero.chapters.$items[this.hero.chapters.index].classList.remove(
            "is-active",
          );
      }),
      this.hero.experience.on("levelClick", (t) => {
        this.hero.chapters.goTo(t);
      }),
      (this.hero.chapters = {}),
      (this.hero.chapters.ready = !1),
      (this.hero.chapters.index = 0),
      (this.hero.chapters.$container =
        this.hero.$element.querySelector(".js-container")),
      (this.hero.chapters.$initialItems =
        document.querySelectorAll(".js-chapter")),
      (this.hero.chapters.$items = []),
      (this.hero.chapters.$digits = [
        ...this.hero.$element.querySelectorAll(".js-digits"),
      ]),
      (this.hero.chapters.$previous =
        this.hero.$element.querySelector(".js-previous")),
      (this.hero.chapters.$next = this.hero.$element.querySelector(".js-next")),
      (this.hero.chapters.previous = () => {
        this.hero.chapters.goTo(this.hero.chapters.index - 1);
      }),
      (this.hero.chapters.next = () => {
        this.hero.chapters.goTo(this.hero.chapters.index + 1);
      }),
      (this.hero.chapters.goTo = (t) => {
        if (
          t === this.hero.chapters.index ||
          t < 0 ||
          t > this.hero.chapters.$items.length - 1
        )
          return;
        const i = this.hero.chapters.index;
        this.hero.chapters.index = t;
        const h = this.hero.chapters.$items[i],
          a = this.hero.chapters.$items[this.hero.chapters.index];
        h.classList.remove("is-active");
        for (let r = 0; r < this.hero.chapters.$digits.length; r++) {
          const o = this.hero.chapters.$digits[r];
          r < this.hero.chapters.index
            ? (o.classList.remove("is-current", "is-after"),
              o.classList.add("is-before"))
            : r === this.hero.chapters.index
              ? (o.classList.remove("is-before", "is-after"),
                o.classList.add("is-current"))
              : r > this.hero.chapters.index &&
                (o.classList.remove("is-before", "is-current"),
                o.classList.add("is-after"));
        }
        this.hero.chapters.index === 0
          ? this.hero.chapters.$previous.classList.remove("is-active")
          : this.hero.chapters.$previous.classList.add("is-active"),
          this.hero.chapters.index === this.hero.chapters.$digits.length - 1
            ? this.hero.chapters.$next.classList.remove("is-active")
            : this.hero.chapters.$next.classList.add("is-active"),
          this.hero.experience.goTo(this.hero.chapters.index),
          this.hero.delay && this.hero.delay.kill(),
          (this.hero.delay = n.delayedCall(0.5, () => {
            this.hero.experience.world.navigation.interactions.active &&
              (this.hero.chapters.$container.scrollTo(0, 0),
              (h.style.display = "none"),
              (a.style.display = "flex"),
              window.requestAnimationFrame(() => {
                a.classList.add("is-active");
              }),
              (this.hero.delay = null));
          }));
      }),
      this.hero.chapters.$previous.addEventListener(
        "click",
        this.hero.chapters.previous,
      ),
      this.hero.chapters.$next.addEventListener(
        "click",
        this.hero.chapters.next,
      ),
      (this.hero.$close = this.hero.$element.querySelector(".js-close")),
      this.hero.$close.addEventListener("click", (t) => {
        t.preventDefault(), this.hero.experience.endInteract();
      });
  }
  setProjects() {
    (this.projects = {}),
      (this.projects.$container = this.$wrapper.querySelector(".js-projects")),
      (this.projects.$items =
        this.projects.$container.querySelectorAll(".js-project")),
      (this.projects.video = document.createElement("video")),
      (this.projects.video.loop = !0),
      (this.projects.video.muted = !0),
      this.projects.video.addEventListener("play", () => {
        this.projects.video.classList.add("is-playing");
      }),
      this.projects.video.addEventListener("pause", () => {
        this.projects.video.classList.remove("is-playing");
      });
    for (const e of this.projects.$items) {
      const s = e.querySelector(".js-video-placeholder"),
        t = e.dataset.video;
      e.addEventListener("mouseenter", () => {
        (this.projects.video.src = t),
          this.projects.video.pause(),
          s.append(this.projects.video),
          window.requestAnimationFrame(() => {
            this.projects.video.play();
          });
      }),
        e.addEventListener("mouseleave", () => {
          this.projects.video.pause();
        });
    }
  }
  setCommunityVideos() {
    const s = this.$wrapper
      .querySelector(".js-community")
      .querySelectorAll(".js-has-video");
    for (const t of s) {
      const i = t.querySelector(".js-video");
      t.addEventListener("mouseenter", () => {
        i.play();
      }),
        t.addEventListener("mouseleave", () => {
          i.pause();
        });
    }
  }
  onLeaveCompleted() {
    super.onLeaveCompleted(),
      this.hero.experience && this.hero.experience.destroy(),
      document.removeEventListener("keydown", this.trailer.keyDown),
      this.draggableSlider && this.draggableSlider.destroy(),
      this.sizes.off("resize.program");
  }
}
export { w as default };
//# sourceMappingURL=HomePage-69247ec2.js.map

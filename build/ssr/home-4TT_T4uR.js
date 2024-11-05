import { ref, onMounted, defineComponent, unref, mergeProps, withCtx, renderSlot, createVNode, useSSRContext, createTextVNode, toDisplayString, createCommentVNode, openBlock, createBlock, Fragment, renderList, computed, resolveComponent } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$f } from "./Button-CuuDX7RD.js";
import { c as cn, a as _sfc_main$k } from "./AppLayout-B4AJGgCi.js";
import { ArrowRight, ArrowLeft, Check, Circle, Dot } from "lucide-vue-next";
import { createInjectionState } from "@vueuse/core";
import emblaCarouselVue from "embla-carousel-vue";
import { a as _sfc_main$g, b as _sfc_main$h, _ as _sfc_main$i, c as _sfc_main$j } from "./Card-DyI5RSi3.js";
import Autoplay from "embla-carousel-autoplay";
import { useForwardProps, StepperDescription, StepperTitle, StepperTrigger, StepperSeparator, StepperItem, useForwardPropsEmits, StepperRoot } from "radix-vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const [useProvideCarousel, useInjectCarousel] = createInjectionState(
  ({
    opts,
    orientation,
    plugins
  }, emits) => {
    const [emblaNode, emblaApi] = emblaCarouselVue({
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y"
    }, plugins);
    function scrollPrev() {
      var _a;
      (_a = emblaApi.value) == null ? void 0 : _a.scrollPrev();
    }
    function scrollNext() {
      var _a;
      (_a = emblaApi.value) == null ? void 0 : _a.scrollNext();
    }
    const canScrollNext = ref(false);
    const canScrollPrev = ref(false);
    function onSelect(api) {
      canScrollNext.value = (api == null ? void 0 : api.canScrollNext()) || false;
      canScrollPrev.value = (api == null ? void 0 : api.canScrollPrev()) || false;
    }
    onMounted(() => {
      var _a, _b, _c;
      if (!emblaApi.value)
        return;
      (_a = emblaApi.value) == null ? void 0 : _a.on("init", onSelect);
      (_b = emblaApi.value) == null ? void 0 : _b.on("reInit", onSelect);
      (_c = emblaApi.value) == null ? void 0 : _c.on("select", onSelect);
      emits("init-api", emblaApi.value);
    });
    return { carouselRef: emblaNode, carouselApi: emblaApi, canScrollPrev, canScrollNext, scrollPrev, scrollNext, orientation };
  }
);
function useCarousel() {
  const carouselState = useInjectCarousel();
  if (!carouselState)
    throw new Error("useCarousel must be used within a <Carousel />");
  return carouselState;
}
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "CarouselNext",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    const { orientation, canScrollNext, scrollNext } = useCarousel();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$f), mergeProps({
        disabled: !unref(canScrollNext),
        class: unref(cn)(
          "touch-manipulation absolute h-8 w-8 rounded-full p-0",
          unref(orientation) === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          props.class
        ),
        variant: "outline",
        onClick: unref(scrollNext)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(ssrRenderComponent(unref(ArrowRight), { class: "h-4 w-4 text-current" }, null, _parent2, _scopeId));
              _push2(`<span class="sr-only"${_scopeId}>Next Slide</span>`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(unref(ArrowRight), { class: "h-4 w-4 text-current" }),
                createVNode("span", { class: "sr-only" }, "Next Slide")
              ])
            ];
          }
        }),
        _: 3
        /* FORWARDED */
      }, _parent));
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("inertia/components/ui/carousel/CarouselNext.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "CarouselPrevious",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    const { orientation, canScrollPrev, scrollPrev } = useCarousel();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$f), mergeProps({
        disabled: !unref(canScrollPrev),
        class: unref(cn)(
          "touch-manipulation absolute h-8 w-8 rounded-full p-0",
          unref(orientation) === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          props.class
        ),
        variant: "outline",
        onClick: unref(scrollPrev)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(ssrRenderComponent(unref(ArrowLeft), { class: "h-4 w-4 text-current" }, null, _parent2, _scopeId));
              _push2(`<span class="sr-only"${_scopeId}>Previous Slide</span>`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(unref(ArrowLeft), { class: "h-4 w-4 text-current" }),
                createVNode("span", { class: "sr-only" }, "Previous Slide")
              ])
            ];
          }
        }),
        _: 3
        /* FORWARDED */
      }, _parent));
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("inertia/components/ui/carousel/CarouselPrevious.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "CarouselItem",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    const { orientation } = useCarousel();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        role: "group",
        "aria-roledescription": "slide",
        class: unref(cn)(
          "min-w-0 shrink-0 grow-0 basis-full",
          unref(orientation) === "horizontal" ? "pl-4" : "pt-4",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("inertia/components/ui/carousel/CarouselItem.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "CarouselContent",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    const { carouselRef, orientation } = useCarousel();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "carouselRef",
        ref: carouselRef,
        class: "overflow-hidden"
      }, _attrs))}><div${ssrRenderAttrs(mergeProps({
        class: unref(cn)(
          "flex",
          unref(orientation) === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          props.class
        )
      }, _ctx.$attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("inertia/components/ui/carousel/CarouselContent.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "Carousel",
  __ssrInlineRender: true,
  props: {
    opts: {},
    plugins: {},
    orientation: { default: "horizontal" },
    class: {}
  },
  emits: ["init-api"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { canScrollNext, canScrollPrev, carouselApi, carouselRef, orientation, scrollNext, scrollPrev } = useProvideCarousel(props, emits);
    __expose({
      canScrollNext,
      canScrollPrev,
      carouselApi,
      carouselRef,
      orientation,
      scrollNext,
      scrollPrev
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("relative", props.class),
        role: "region",
        "aria-roledescription": "carousel",
        tabindex: "0"
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {
        canScrollNext: unref(canScrollNext),
        canScrollPrev: unref(canScrollPrev),
        carouselApi: unref(carouselApi),
        carouselRef: unref(carouselRef),
        orientation: unref(orientation),
        scrollNext: unref(scrollNext),
        scrollPrev: unref(scrollPrev)
      }, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("inertia/components/ui/carousel/Carousel.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "why-us",
  __ssrInlineRender: true,
  setup(__props) {
    const plugin = Autoplay({
      delay: 3e3,
      stopOnMouseEnter: true,
      stopOnInteraction: false
    });
    const steps = [
      {
        step: 1,
        title: "Organiser un cadeau sans galère!",
        description: [
          "Fini les discussions sans fin! Ici, chacun peut indiquer ce qu’il compte donner. En un clin d’œil, tout le monde a une idée du budget total!"
        ]
      },
      {
        step: 2,
        title: "Budgetiser sans casser la tirelire!",
        description: ["Tu veux participer mais tu sais pas trop combien mettre ? Pas de souci, tu dis ce que tu peux et on fait le compte ensemble."]
      },
      {
        step: 3,
        title: "Modifier quand tu veux!",
        description: ["Modifies ta particpation quand tu veux : la vie, c'est fait pour changer d'avis !"]
      },
      {
        step: 4,
        title: "Transparence  totale",
        description: [
          "Chaque participant peut suivre en temps réel l'avancement de la collecte et savoir exactement combien a été donné"
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Carousel = _sfc_main$a;
      const _component_CarouselContent = _sfc_main$b;
      const _component_CarouselItem = _sfc_main$c;
      const _component_Card = _sfc_main$i;
      const _component_CardContent = _sfc_main$j;
      const _component_CarouselPrevious = _sfc_main$d;
      const _component_CarouselNext = _sfc_main$e;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-4 w-full max-w-sm mx-auto" }, _attrs))}><h1 class="text-xl font-medium tracking-tight text-primary text-center">Pourquoi utiliser notre plateforme? </h1>`);
      _push(ssrRenderComponent(_component_Carousel, {
        class: "relative",
        plugins: [unref(plugin)],
        onMouseenter: unref(plugin).stop,
        onMouseleave: ($event) => {
          [unref(plugin).reset(), unref(plugin).play(), console.log("Running")];
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CarouselContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(steps, (step, index) => {
                    _push3(ssrRenderComponent(_component_CarouselItem, { key: index }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="p-1"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_Card, { class: "border-0" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_sfc_main$g, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_sfc_main$h, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(step.title)}`);
                                          } else {
                                            return [
                                              createTextVNode(
                                                toDisplayString(step.title),
                                                1
                                                /* TEXT */
                                              )
                                            ];
                                          }
                                        }),
                                        _: 2
                                        /* DYNAMIC */
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(
                                          _sfc_main$h,
                                          null,
                                          {
                                            default: withCtx(() => [
                                              createTextVNode(
                                                toDisplayString(step.title),
                                                1
                                                /* TEXT */
                                              )
                                            ]),
                                            _: 2
                                            /* DYNAMIC */
                                          },
                                          1024
                                          /* DYNAMIC_SLOTS */
                                        )
                                      ];
                                    }
                                  }),
                                  _: 2
                                  /* DYNAMIC */
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_CardContent, { class: "grid gap-2" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!-- <h2 class="text-xl text-justify">{{ step.title }}</h2> --><!--[-->`);
                                      ssrRenderList(step.description, (description) => {
                                        _push6(`<p${_scopeId5}>${ssrInterpolate(description)}</p>`);
                                      });
                                      _push6(`<!--]-->`);
                                    } else {
                                      return [
                                        createCommentVNode(' <h2 class="text-xl text-justify">{{ step.title }}</h2> '),
                                        (openBlock(true), createBlock(
                                          Fragment,
                                          null,
                                          renderList(step.description, (description) => {
                                            return openBlock(), createBlock(
                                              "p",
                                              null,
                                              toDisplayString(description),
                                              1
                                              /* TEXT */
                                            );
                                          }),
                                          256
                                          /* UNKEYED_FRAGMENT */
                                        ))
                                      ];
                                    }
                                  }),
                                  _: 2
                                  /* DYNAMIC */
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(
                                    _sfc_main$g,
                                    null,
                                    {
                                      default: withCtx(() => [
                                        createVNode(
                                          _sfc_main$h,
                                          null,
                                          {
                                            default: withCtx(() => [
                                              createTextVNode(
                                                toDisplayString(step.title),
                                                1
                                                /* TEXT */
                                              )
                                            ]),
                                            _: 2
                                            /* DYNAMIC */
                                          },
                                          1024
                                          /* DYNAMIC_SLOTS */
                                        )
                                      ]),
                                      _: 2
                                      /* DYNAMIC */
                                    },
                                    1024
                                    /* DYNAMIC_SLOTS */
                                  ),
                                  createVNode(
                                    _component_CardContent,
                                    { class: "grid gap-2" },
                                    {
                                      default: withCtx(() => [
                                        createCommentVNode(' <h2 class="text-xl text-justify">{{ step.title }}</h2> '),
                                        (openBlock(true), createBlock(
                                          Fragment,
                                          null,
                                          renderList(step.description, (description) => {
                                            return openBlock(), createBlock(
                                              "p",
                                              null,
                                              toDisplayString(description),
                                              1
                                              /* TEXT */
                                            );
                                          }),
                                          256
                                          /* UNKEYED_FRAGMENT */
                                        ))
                                      ]),
                                      _: 2
                                      /* DYNAMIC */
                                    },
                                    1024
                                    /* DYNAMIC_SLOTS */
                                  )
                                ];
                              }
                            }),
                            _: 2
                            /* DYNAMIC */
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "p-1" }, [
                              createVNode(
                                _component_Card,
                                { class: "border-0" },
                                {
                                  default: withCtx(() => [
                                    createVNode(
                                      _sfc_main$g,
                                      null,
                                      {
                                        default: withCtx(() => [
                                          createVNode(
                                            _sfc_main$h,
                                            null,
                                            {
                                              default: withCtx(() => [
                                                createTextVNode(
                                                  toDisplayString(step.title),
                                                  1
                                                  /* TEXT */
                                                )
                                              ]),
                                              _: 2
                                              /* DYNAMIC */
                                            },
                                            1024
                                            /* DYNAMIC_SLOTS */
                                          )
                                        ]),
                                        _: 2
                                        /* DYNAMIC */
                                      },
                                      1024
                                      /* DYNAMIC_SLOTS */
                                    ),
                                    createVNode(
                                      _component_CardContent,
                                      { class: "grid gap-2" },
                                      {
                                        default: withCtx(() => [
                                          createCommentVNode(' <h2 class="text-xl text-justify">{{ step.title }}</h2> '),
                                          (openBlock(true), createBlock(
                                            Fragment,
                                            null,
                                            renderList(step.description, (description) => {
                                              return openBlock(), createBlock(
                                                "p",
                                                null,
                                                toDisplayString(description),
                                                1
                                                /* TEXT */
                                              );
                                            }),
                                            256
                                            /* UNKEYED_FRAGMENT */
                                          ))
                                        ]),
                                        _: 2
                                        /* DYNAMIC */
                                      },
                                      1024
                                      /* DYNAMIC_SLOTS */
                                    )
                                  ]),
                                  _: 2
                                  /* DYNAMIC */
                                },
                                1024
                                /* DYNAMIC_SLOTS */
                              )
                            ])
                          ];
                        }
                      }),
                      _: 2
                      /* DYNAMIC */
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(
                      Fragment,
                      null,
                      renderList(steps, (step, index) => {
                        return createVNode(
                          _component_CarouselItem,
                          { key: index },
                          {
                            default: withCtx(() => [
                              createVNode("div", { class: "p-1" }, [
                                createVNode(
                                  _component_Card,
                                  { class: "border-0" },
                                  {
                                    default: withCtx(() => [
                                      createVNode(
                                        _sfc_main$g,
                                        null,
                                        {
                                          default: withCtx(() => [
                                            createVNode(
                                              _sfc_main$h,
                                              null,
                                              {
                                                default: withCtx(() => [
                                                  createTextVNode(
                                                    toDisplayString(step.title),
                                                    1
                                                    /* TEXT */
                                                  )
                                                ]),
                                                _: 2
                                                /* DYNAMIC */
                                              },
                                              1024
                                              /* DYNAMIC_SLOTS */
                                            )
                                          ]),
                                          _: 2
                                          /* DYNAMIC */
                                        },
                                        1024
                                        /* DYNAMIC_SLOTS */
                                      ),
                                      createVNode(
                                        _component_CardContent,
                                        { class: "grid gap-2" },
                                        {
                                          default: withCtx(() => [
                                            createCommentVNode(' <h2 class="text-xl text-justify">{{ step.title }}</h2> '),
                                            (openBlock(true), createBlock(
                                              Fragment,
                                              null,
                                              renderList(step.description, (description) => {
                                                return openBlock(), createBlock(
                                                  "p",
                                                  null,
                                                  toDisplayString(description),
                                                  1
                                                  /* TEXT */
                                                );
                                              }),
                                              256
                                              /* UNKEYED_FRAGMENT */
                                            ))
                                          ]),
                                          _: 2
                                          /* DYNAMIC */
                                        },
                                        1024
                                        /* DYNAMIC_SLOTS */
                                      )
                                    ]),
                                    _: 2
                                    /* DYNAMIC */
                                  },
                                  1024
                                  /* DYNAMIC_SLOTS */
                                )
                              ])
                            ]),
                            _: 2
                            /* DYNAMIC */
                          },
                          1024
                          /* DYNAMIC_SLOTS */
                        );
                      }),
                      64
                      /* STABLE_FRAGMENT */
                    ))
                  ];
                }
              }),
              _: 1
              /* STABLE */
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CarouselPrevious, { class: "hidden lg:flex" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CarouselNext, { class: "hidden lg:flex" }, null, _parent2, _scopeId));
            _push2(`<!-- 
      <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
        <div v-for="(_, index) in steps" :key="index" class="size-2  rounded-full border border-muted-foreground">
        </div>
      </div> 
      -->`);
          } else {
            return [
              createVNode(_component_CarouselContent, null, {
                default: withCtx(() => [
                  (openBlock(), createBlock(
                    Fragment,
                    null,
                    renderList(steps, (step, index) => {
                      return createVNode(
                        _component_CarouselItem,
                        { key: index },
                        {
                          default: withCtx(() => [
                            createVNode("div", { class: "p-1" }, [
                              createVNode(
                                _component_Card,
                                { class: "border-0" },
                                {
                                  default: withCtx(() => [
                                    createVNode(
                                      _sfc_main$g,
                                      null,
                                      {
                                        default: withCtx(() => [
                                          createVNode(
                                            _sfc_main$h,
                                            null,
                                            {
                                              default: withCtx(() => [
                                                createTextVNode(
                                                  toDisplayString(step.title),
                                                  1
                                                  /* TEXT */
                                                )
                                              ]),
                                              _: 2
                                              /* DYNAMIC */
                                            },
                                            1024
                                            /* DYNAMIC_SLOTS */
                                          )
                                        ]),
                                        _: 2
                                        /* DYNAMIC */
                                      },
                                      1024
                                      /* DYNAMIC_SLOTS */
                                    ),
                                    createVNode(
                                      _component_CardContent,
                                      { class: "grid gap-2" },
                                      {
                                        default: withCtx(() => [
                                          createCommentVNode(' <h2 class="text-xl text-justify">{{ step.title }}</h2> '),
                                          (openBlock(true), createBlock(
                                            Fragment,
                                            null,
                                            renderList(step.description, (description) => {
                                              return openBlock(), createBlock(
                                                "p",
                                                null,
                                                toDisplayString(description),
                                                1
                                                /* TEXT */
                                              );
                                            }),
                                            256
                                            /* UNKEYED_FRAGMENT */
                                          ))
                                        ]),
                                        _: 2
                                        /* DYNAMIC */
                                      },
                                      1024
                                      /* DYNAMIC_SLOTS */
                                    )
                                  ]),
                                  _: 2
                                  /* DYNAMIC */
                                },
                                1024
                                /* DYNAMIC_SLOTS */
                              )
                            ])
                          ]),
                          _: 2
                          /* DYNAMIC */
                        },
                        1024
                        /* DYNAMIC_SLOTS */
                      );
                    }),
                    64
                    /* STABLE_FRAGMENT */
                  ))
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_CarouselPrevious, { class: "hidden lg:flex" }),
              createVNode(_component_CarouselNext, { class: "hidden lg:flex" }),
              createCommentVNode(' \r\n      <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-1">\r\n        <div v-for="(_, index) in steps" :key="index" class="size-2  rounded-full border border-muted-foreground">\r\n        </div>\r\n      </div> \r\n      ')
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("inertia/components/landing/why-us.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "StepperDescription",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(StepperDescription), mergeProps(unref(forwarded), {
        class: unref(cn)("text-xs text-muted-foreground", props.class)
      }, _attrs), {
        default: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", slotProps, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", slotProps)
            ];
          }
        }),
        _: 3
        /* FORWARDED */
      }, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("inertia/components/ui/stepper/StepperDescription.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "StepperTitle",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(StepperTitle), mergeProps(unref(forwarded), {
        class: unref(cn)("text-md font-semibold whitespace-nowrap", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
        /* FORWARDED */
      }, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("inertia/components/ui/stepper/StepperTitle.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "StepperTrigger",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(StepperTrigger), mergeProps(unref(forwarded), {
        class: unref(cn)("p-2 flex flex-col items-center text-center gap-2 rounded-md", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
        /* FORWARDED */
      }, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("inertia/components/ui/stepper/StepperTrigger.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "StepperSeparator",
  __ssrInlineRender: true,
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(StepperSeparator), mergeProps(unref(forwarded), {
        class: unref(cn)(
          "bg-muted",
          // Disabled
          "group-data-[disabled]:bg-muted group-data-[disabled]:opacity-50",
          // Completed
          "group-data-[state=completed]:bg-accent-foreground",
          props.class
        )
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("inertia/components/ui/stepper/StepperSeparator.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "StepperItem",
  __ssrInlineRender: true,
  props: {
    step: {},
    disabled: { type: Boolean },
    completed: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(StepperItem), mergeProps(unref(forwarded), {
        class: unref(cn)("flex items-center gap-2 group data-[disabled]:pointer-events-none", props.class)
      }, _attrs), {
        default: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", slotProps, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", slotProps)
            ];
          }
        }),
        _: 3
        /* FORWARDED */
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("inertia/components/ui/stepper/StepperItem.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Stepper",
  __ssrInlineRender: true,
  props: {
    defaultValue: {},
    orientation: {},
    dir: {},
    modelValue: {},
    linear: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(StepperRoot), mergeProps({
        class: unref(cn)(
          "flex gap-2",
          props.class
        )
      }, unref(forwarded), _attrs), {
        default: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", slotProps, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", slotProps)
            ];
          }
        }),
        _: 3
        /* FORWARDED */
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("inertia/components/ui/stepper/Stepper.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "how-to",
  __ssrInlineRender: true,
  setup(__props) {
    const steps = [
      {
        step: 1,
        title: "Exprimes ton intention",
        description: [
          "Dis-nous combien tu compte mettre pour cet évènement. Pas de pression, c'est juste pour s'organiser, et sans obligation pour toi !"
        ]
      },
      {
        step: 2,
        title: "Reçois ton récap",
        description: ["Une fois ton intention de participation enregistrée, tu reçois un petit récap’ par email, c’est tout !"]
      },
      {
        step: 3,
        title: "On te tient au courant",
        description: [
          "On te fera un signe avant l’événement, juste pour te rappeler. Tu choisis si et quand tu veux participer pour de vrai !"
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Stepper = _sfc_main$3;
      const _component_StepperItem = _sfc_main$4;
      const _component_StepperSeparator = _sfc_main$5;
      const _component_StepperTrigger = _sfc_main$6;
      const _component_Button = _sfc_main$f;
      const _component_StepperTitle = _sfc_main$7;
      const _component_StepperDescription = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-4" }, _attrs))}><h1 class="text-xl font-medium tracking-tight text-primary text-center">Comment ça marche?</h1>`);
      _push(ssrRenderComponent(_component_Stepper, {
        orientation: "vertical",
        class: "mx-auto flex w-full max-w-md flex-col justify-start gap-10"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(steps, (step) => {
              _push2(ssrRenderComponent(_component_StepperItem, {
                key: step.step,
                class: "relative flex w-full items-start gap-6",
                step: step.step
              }, {
                default: withCtx(({ state }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (step.step !== steps[steps.length - 1].step) {
                      _push3(ssrRenderComponent(_component_StepperSeparator, { class: "absolute left-[18px] top-[38px] block h-[105%] w-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary" }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(ssrRenderComponent(_component_StepperTrigger, { "as-child": "" }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Button, {
                            variant: state === "completed" || state === "active" ? "default" : "outline",
                            size: "icon",
                            class: ["z-10 rounded-full shrink-0", [state === "active" && "ring-2 ring-ring ring-offset-2 ring-offset-background"]]
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                if (state === "completed") {
                                  _push5(ssrRenderComponent(unref(Check), { class: "size-5" }, null, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                if (state === "active") {
                                  _push5(ssrRenderComponent(unref(Circle), null, null, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                if (state === "inactive") {
                                  _push5(ssrRenderComponent(unref(Dot), null, null, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                              } else {
                                return [
                                  state === "completed" ? (openBlock(), createBlock(unref(Check), {
                                    key: 0,
                                    class: "size-5"
                                  })) : createCommentVNode("v-if", true),
                                  state === "active" ? (openBlock(), createBlock(unref(Circle), { key: 1 })) : createCommentVNode("v-if", true),
                                  state === "inactive" ? (openBlock(), createBlock(unref(Dot), { key: 2 })) : createCommentVNode("v-if", true)
                                ];
                              }
                            }),
                            _: 2
                            /* DYNAMIC */
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_Button, {
                              variant: state === "completed" || state === "active" ? "default" : "outline",
                              size: "icon",
                              class: ["z-10 rounded-full shrink-0", [state === "active" && "ring-2 ring-ring ring-offset-2 ring-offset-background"]]
                            }, {
                              default: withCtx(() => [
                                state === "completed" ? (openBlock(), createBlock(unref(Check), {
                                  key: 0,
                                  class: "size-5"
                                })) : createCommentVNode("v-if", true),
                                state === "active" ? (openBlock(), createBlock(unref(Circle), { key: 1 })) : createCommentVNode("v-if", true),
                                state === "inactive" ? (openBlock(), createBlock(unref(Dot), { key: 2 })) : createCommentVNode("v-if", true)
                              ]),
                              _: 2
                              /* DYNAMIC */
                            }, 1032, ["variant", "class"])
                          ];
                        }
                      }),
                      _: 2
                      /* DYNAMIC */
                    }, _parent3, _scopeId2));
                    _push3(`<div class="flex flex-col gap-1"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_StepperTitle, {
                      class: [[state === "active" && "text-primary"], "text-sm font-semibold transition lg:text-base"]
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(step.title)}`);
                        } else {
                          return [
                            createTextVNode(
                              toDisplayString(step.title),
                              1
                              /* TEXT */
                            )
                          ];
                        }
                      }),
                      _: 2
                      /* DYNAMIC */
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_StepperDescription, {
                      class: [[state === "active" && "text-primary"], "text-xs text-muted-foreground text-justify transition md:not-sr-only lg:text-sm pr-4"]
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(step.description, (description) => {
                            _push4(`<p${_scopeId3}>${ssrInterpolate(description)}</p>`);
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(
                              Fragment,
                              null,
                              renderList(step.description, (description) => {
                                return openBlock(), createBlock(
                                  "p",
                                  null,
                                  toDisplayString(description),
                                  1
                                  /* TEXT */
                                );
                              }),
                              256
                              /* UNKEYED_FRAGMENT */
                            ))
                          ];
                        }
                      }),
                      _: 2
                      /* DYNAMIC */
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      step.step !== steps[steps.length - 1].step ? (openBlock(), createBlock(_component_StepperSeparator, {
                        key: 0,
                        class: "absolute left-[18px] top-[38px] block h-[105%] w-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary"
                      })) : createCommentVNode("v-if", true),
                      createVNode(
                        _component_StepperTrigger,
                        { "as-child": "" },
                        {
                          default: withCtx(() => [
                            createVNode(_component_Button, {
                              variant: state === "completed" || state === "active" ? "default" : "outline",
                              size: "icon",
                              class: ["z-10 rounded-full shrink-0", [state === "active" && "ring-2 ring-ring ring-offset-2 ring-offset-background"]]
                            }, {
                              default: withCtx(() => [
                                state === "completed" ? (openBlock(), createBlock(unref(Check), {
                                  key: 0,
                                  class: "size-5"
                                })) : createCommentVNode("v-if", true),
                                state === "active" ? (openBlock(), createBlock(unref(Circle), { key: 1 })) : createCommentVNode("v-if", true),
                                state === "inactive" ? (openBlock(), createBlock(unref(Dot), { key: 2 })) : createCommentVNode("v-if", true)
                              ]),
                              _: 2
                              /* DYNAMIC */
                            }, 1032, ["variant", "class"])
                          ]),
                          _: 2
                          /* DYNAMIC */
                        },
                        1024
                        /* DYNAMIC_SLOTS */
                      ),
                      createVNode("div", { class: "flex flex-col gap-1" }, [
                        createVNode(_component_StepperTitle, {
                          class: [[state === "active" && "text-primary"], "text-sm font-semibold transition lg:text-base"]
                        }, {
                          default: withCtx(() => [
                            createTextVNode(
                              toDisplayString(step.title),
                              1
                              /* TEXT */
                            )
                          ]),
                          _: 2
                          /* DYNAMIC */
                        }, 1032, ["class"]),
                        createVNode(_component_StepperDescription, {
                          class: [[state === "active" && "text-primary"], "text-xs text-muted-foreground text-justify transition md:not-sr-only lg:text-sm pr-4"]
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(
                              Fragment,
                              null,
                              renderList(step.description, (description) => {
                                return openBlock(), createBlock(
                                  "p",
                                  null,
                                  toDisplayString(description),
                                  1
                                  /* TEXT */
                                );
                              }),
                              256
                              /* UNKEYED_FRAGMENT */
                            ))
                          ]),
                          _: 2
                          /* DYNAMIC */
                        }, 1032, ["class"])
                      ])
                    ];
                  }
                }),
                _: 2
                /* DYNAMIC */
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(
                Fragment,
                null,
                renderList(steps, (step) => {
                  return createVNode(_component_StepperItem, {
                    key: step.step,
                    class: "relative flex w-full items-start gap-6",
                    step: step.step
                  }, {
                    default: withCtx(({ state }) => [
                      step.step !== steps[steps.length - 1].step ? (openBlock(), createBlock(_component_StepperSeparator, {
                        key: 0,
                        class: "absolute left-[18px] top-[38px] block h-[105%] w-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary"
                      })) : createCommentVNode("v-if", true),
                      createVNode(
                        _component_StepperTrigger,
                        { "as-child": "" },
                        {
                          default: withCtx(() => [
                            createVNode(_component_Button, {
                              variant: state === "completed" || state === "active" ? "default" : "outline",
                              size: "icon",
                              class: ["z-10 rounded-full shrink-0", [state === "active" && "ring-2 ring-ring ring-offset-2 ring-offset-background"]]
                            }, {
                              default: withCtx(() => [
                                state === "completed" ? (openBlock(), createBlock(unref(Check), {
                                  key: 0,
                                  class: "size-5"
                                })) : createCommentVNode("v-if", true),
                                state === "active" ? (openBlock(), createBlock(unref(Circle), { key: 1 })) : createCommentVNode("v-if", true),
                                state === "inactive" ? (openBlock(), createBlock(unref(Dot), { key: 2 })) : createCommentVNode("v-if", true)
                              ]),
                              _: 2
                              /* DYNAMIC */
                            }, 1032, ["variant", "class"])
                          ]),
                          _: 2
                          /* DYNAMIC */
                        },
                        1024
                        /* DYNAMIC_SLOTS */
                      ),
                      createVNode("div", { class: "flex flex-col gap-1" }, [
                        createVNode(_component_StepperTitle, {
                          class: [[state === "active" && "text-primary"], "text-sm font-semibold transition lg:text-base"]
                        }, {
                          default: withCtx(() => [
                            createTextVNode(
                              toDisplayString(step.title),
                              1
                              /* TEXT */
                            )
                          ]),
                          _: 2
                          /* DYNAMIC */
                        }, 1032, ["class"]),
                        createVNode(_component_StepperDescription, {
                          class: [[state === "active" && "text-primary"], "text-xs text-muted-foreground text-justify transition md:not-sr-only lg:text-sm pr-4"]
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(
                              Fragment,
                              null,
                              renderList(step.description, (description) => {
                                return openBlock(), createBlock(
                                  "p",
                                  null,
                                  toDisplayString(description),
                                  1
                                  /* TEXT */
                                );
                              }),
                              256
                              /* UNKEYED_FRAGMENT */
                            ))
                          ]),
                          _: 2
                          /* DYNAMIC */
                        }, 1032, ["class"])
                      ])
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["step"]);
                }),
                64
                /* STABLE_FRAGMENT */
              ))
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("inertia/components/landing/how-to.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_Link = resolveComponent("Link");
  const _component_Button = _sfc_main$f;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-6 grid gap-6 lg:gap-8" }, _attrs))}><h1 class="text-4xl font-semibold tracking-tight text-center">Exprimes ton soutien,<br> sans engagement.</h1><!-- à des
        initiatives qui vous tiennent à cœur --><div><p class="text-muted-foreground text-center">Partages ton intention de participation sans obligation de paiement immédiat. </p><p class="text-muted-foreground text-center">Idéal pour organiser un budget sans pression.</p></div>`);
  _push(ssrRenderComponent(_component_Link, {
    class: "pt-2 w-full lg:w-1/2 lg:mx-auto",
    href: "/pools/tiffany-birthday"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Button, { class: "w-full h-fit py-3 border-primary text-md" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Je veux participer !`);
            } else {
              return [
                createTextVNode("Je veux participer !")
              ];
            }
          }),
          _: 1
          /* STABLE */
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Button, { class: "w-full h-fit py-3 border-primary text-md" }, {
            default: withCtx(() => [
              createTextVNode("Je veux participer !")
            ]),
            _: 1
            /* STABLE */
          })
        ];
      }
    }),
    _: 1
    /* STABLE */
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("inertia/components/landing/hero-section.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppHead = _sfc_main$k;
  const _component_hero_section = __unplugin_components_1;
  const _component_how_to = _sfc_main$2;
  const _component_why_us = _sfc_main$9;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_AppHead, {
    title: "Alter Gifts",
    description: "Alter Gifts"
  }, null, _parent));
  _push(`<!--  h-[calc(100vh-52px)] --><div class="container flex flex-col gap-20">`);
  _push(ssrRenderComponent(_component_hero_section, null, null, _parent));
  _push(ssrRenderComponent(_component_how_to, null, null, _parent));
  _push(ssrRenderComponent(_component_why_us, null, null, _parent));
  _push(`<!-- <CTA /> --><div class="h-24"></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("inertia/pages/home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const home = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_4 as _
};

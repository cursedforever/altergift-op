import { defineComponent, mergeProps, unref, useSSRContext, withCtx, createCommentVNode, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, Fragment, renderList, computed, renderSlot, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderSlot, ssrRenderClass, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { DateTime } from "luxon";
import { c as cn, b as _sfc_main$c } from "./AppLayout-B4AJGgCi.js";
import { Icon } from "@iconify/vue";
import { TabsContent, useForwardProps, TabsTrigger, TabsList, useForwardPropsEmits, TabsRoot } from "radix-vue";
import { _ as _sfc_main$d } from "./Button-CuuDX7RD.js";
import { toast } from "vue-sonner";
function formatPrice(price) {
  const formatter = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    // These options are needed to round to whole numbers if that's what you want.
    maximumFractionDigits: 0
    // (causes 2500.99 to be printed as $2,501)
  });
  return formatter.format(price);
}
const computeTimeSince = (dateString) => {
  const date = DateTime.fromISO(dateString);
  let diff = DateTime.now().diff(date, "days").days;
  if (diff >= 1) return `il y a ${diff.toFixed(0)} jours`;
  diff = DateTime.now().diff(date, "hours").hours;
  if (diff >= 1) return `il y a ${diff.toFixed(0)} heures`;
  diff = DateTime.now().diff(date, "minutes").minutes;
  return `il y a ${diff.toFixed(0)} minutes`;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "ParticipationMessagesTab",
  __ssrInlineRender: true,
  props: {
    pool: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid gap-4" }, _attrs))}><!--[-->`);
      ssrRenderList(_ctx.pool.gifts, (gift) => {
        _push(`<div class="flex flex-col gap-2"><div><h2 class="text-lg font-semibold">${ssrInterpolate(gift.isAnonymous ? "Anonyme" : gift.username)}</h2><p class="text-xs text-muted-foreground">${ssrInterpolate(unref(computeTimeSince)(gift.createdAt))}</p></div><p>${ssrInterpolate(gift.message)}</p></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("inertia/components/pool/ParticipationMessagesTab.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "TableCell",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<td${ssrRenderAttrs(mergeProps({
        class: unref(cn)(
          "p-4 align-middle [&:has([role=checkbox])]:pr-0",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</td>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("inertia/components/ui/table/TableCell.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "TableRow",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<tr${ssrRenderAttrs(mergeProps({
        class: unref(cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</tr>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("inertia/components/ui/table/TableRow.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "TableBody",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<tbody${ssrRenderAttrs(mergeProps({
        class: unref(cn)("[&_tr:last-child]:border-0", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</tbody>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("inertia/components/ui/table/TableBody.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Table",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full overflow-auto" }, _attrs))}><table class="${ssrRenderClass(unref(cn)("w-full caption-bottom text-sm", props.class))}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</table></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("inertia/components/ui/table/Table.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ParticipationsTab",
  __ssrInlineRender: true,
  props: {
    pool: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Table = _sfc_main$7;
      const _component_TableBody = _sfc_main$8;
      const _component_TableRow = _sfc_main$9;
      const _component_TableCell = _sfc_main$a;
      _push(ssrRenderComponent(_component_Table, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!-- <TableCaption>Merci pour votre participation</TableCaption> --><!-- <TableHeader>
      <TableRow>

      </TableRow>
    </TableHeader> --><!--[-->`);
            ssrRenderList(_ctx.pool.gifts, (gift) => {
              _push2(ssrRenderComponent(_component_TableBody, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_TableRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_TableCell, { class: "flex items-center gap-4" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!-- <Avatar>
            <AvatarFallback class="text-md font-semibold">{{ gift.username.substring(0, 2).toUpperCase() }}
            </AvatarFallback>
          </Avatar> -->`);
                                _push5(ssrRenderComponent(unref(Icon), {
                                  icon: "lucide:user",
                                  class: "w-6 h-6"
                                }, null, _parent5, _scopeId4));
                                _push5(`<span class="text-lg font-medium text-xl"${_scopeId4}>${ssrInterpolate(gift.isAnonymous ? "Anonyme" : gift.username)}</span>`);
                              } else {
                                return [
                                  createCommentVNode(' <Avatar>\r\n            <AvatarFallback class="text-md font-semibold">{{ gift.username.substring(0, 2).toUpperCase() }}\r\n            </AvatarFallback>\r\n          </Avatar> '),
                                  createVNode(unref(Icon), {
                                    icon: "lucide:user",
                                    class: "w-6 h-6"
                                  }),
                                  createVNode(
                                    "span",
                                    { class: "text-lg font-medium text-xl" },
                                    toDisplayString(gift.isAnonymous ? "Anonyme" : gift.username),
                                    1
                                    /* TEXT */
                                  )
                                ];
                              }
                            }),
                            _: 2
                            /* DYNAMIC */
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, { class: "text-right font-bold text-xl" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(gift.isAmountHidden ? "Masqué" : unref(formatPrice)(gift.amount / 100))}`);
                              } else {
                                return [
                                  createTextVNode(
                                    toDisplayString(gift.isAmountHidden ? "Masqué" : unref(formatPrice)(gift.amount / 100)),
                                    1
                                    /* TEXT */
                                  )
                                ];
                              }
                            }),
                            _: 2
                            /* DYNAMIC */
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(
                              _component_TableCell,
                              { class: "flex items-center gap-4" },
                              {
                                default: withCtx(() => [
                                  createCommentVNode(' <Avatar>\r\n            <AvatarFallback class="text-md font-semibold">{{ gift.username.substring(0, 2).toUpperCase() }}\r\n            </AvatarFallback>\r\n          </Avatar> '),
                                  createVNode(unref(Icon), {
                                    icon: "lucide:user",
                                    class: "w-6 h-6"
                                  }),
                                  createVNode(
                                    "span",
                                    { class: "text-lg font-medium text-xl" },
                                    toDisplayString(gift.isAnonymous ? "Anonyme" : gift.username),
                                    1
                                    /* TEXT */
                                  )
                                ]),
                                _: 2
                                /* DYNAMIC */
                              },
                              1024
                              /* DYNAMIC_SLOTS */
                            ),
                            createVNode(
                              _component_TableCell,
                              { class: "text-right font-bold text-xl" },
                              {
                                default: withCtx(() => [
                                  createTextVNode(
                                    toDisplayString(gift.isAmountHidden ? "Masqué" : unref(formatPrice)(gift.amount / 100)),
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
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(
                        _component_TableRow,
                        null,
                        {
                          default: withCtx(() => [
                            createVNode(
                              _component_TableCell,
                              { class: "flex items-center gap-4" },
                              {
                                default: withCtx(() => [
                                  createCommentVNode(' <Avatar>\r\n            <AvatarFallback class="text-md font-semibold">{{ gift.username.substring(0, 2).toUpperCase() }}\r\n            </AvatarFallback>\r\n          </Avatar> '),
                                  createVNode(unref(Icon), {
                                    icon: "lucide:user",
                                    class: "w-6 h-6"
                                  }),
                                  createVNode(
                                    "span",
                                    { class: "text-lg font-medium text-xl" },
                                    toDisplayString(gift.isAnonymous ? "Anonyme" : gift.username),
                                    1
                                    /* TEXT */
                                  )
                                ]),
                                _: 2
                                /* DYNAMIC */
                              },
                              1024
                              /* DYNAMIC_SLOTS */
                            ),
                            createVNode(
                              _component_TableCell,
                              { class: "text-right font-bold text-xl" },
                              {
                                default: withCtx(() => [
                                  createTextVNode(
                                    toDisplayString(gift.isAmountHidden ? "Masqué" : unref(formatPrice)(gift.amount / 100)),
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
                      )
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
              createCommentVNode(" <TableCaption>Merci pour votre participation</TableCaption> "),
              createCommentVNode(" <TableHeader>\r\n      <TableRow>\r\n\r\n      </TableRow>\r\n    </TableHeader> "),
              (openBlock(true), createBlock(
                Fragment,
                null,
                renderList(_ctx.pool.gifts, (gift) => {
                  return openBlock(), createBlock(
                    _component_TableBody,
                    null,
                    {
                      default: withCtx(() => [
                        createVNode(
                          _component_TableRow,
                          null,
                          {
                            default: withCtx(() => [
                              createVNode(
                                _component_TableCell,
                                { class: "flex items-center gap-4" },
                                {
                                  default: withCtx(() => [
                                    createCommentVNode(' <Avatar>\r\n            <AvatarFallback class="text-md font-semibold">{{ gift.username.substring(0, 2).toUpperCase() }}\r\n            </AvatarFallback>\r\n          </Avatar> '),
                                    createVNode(unref(Icon), {
                                      icon: "lucide:user",
                                      class: "w-6 h-6"
                                    }),
                                    createVNode(
                                      "span",
                                      { class: "text-lg font-medium text-xl" },
                                      toDisplayString(gift.isAnonymous ? "Anonyme" : gift.username),
                                      1
                                      /* TEXT */
                                    )
                                  ]),
                                  _: 2
                                  /* DYNAMIC */
                                },
                                1024
                                /* DYNAMIC_SLOTS */
                              ),
                              createVNode(
                                _component_TableCell,
                                { class: "text-right font-bold text-xl" },
                                {
                                  default: withCtx(() => [
                                    createTextVNode(
                                      toDisplayString(gift.isAmountHidden ? "Masqué" : unref(formatPrice)(gift.amount / 100)),
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
                        )
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1024
                    /* DYNAMIC_SLOTS */
                  );
                }),
                256
                /* UNKEYED_FRAGMENT */
              ))
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("inertia/components/pool/ParticipationsTab.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DescriptionTab",
  __ssrInlineRender: true,
  props: {
    pool: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-6" }, _attrs))}><p>${ssrInterpolate(_ctx.pool.description)}</p></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("inertia/components/pool/DescriptionTab.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TabsContent",
  __ssrInlineRender: true,
  props: {
    value: {},
    forceMount: { type: Boolean },
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TabsContent), mergeProps({
        class: unref(cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", props.class)
      }, delegatedProps.value, _attrs), {
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("inertia/components/ui/tabs/TabsContent.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TabsTrigger",
  __ssrInlineRender: true,
  props: {
    value: {},
    disabled: { type: Boolean },
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
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TabsTrigger), mergeProps(unref(forwardedProps), {
        class: unref(cn)(
          "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="truncate"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</span>`);
          } else {
            return [
              createVNode("span", { class: "truncate" }, [
                renderSlot(_ctx.$slots, "default")
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("inertia/components/ui/tabs/TabsTrigger.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TabsList",
  __ssrInlineRender: true,
  props: {
    loop: { type: Boolean },
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TabsList), mergeProps(delegatedProps.value, {
        class: unref(cn)(
          "inline-flex items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
          props.class
        )
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("inertia/components/ui/tabs/TabsList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Tabs",
  __ssrInlineRender: true,
  props: {
    defaultValue: {},
    orientation: {},
    dir: {},
    activationMode: {},
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TabsRoot), mergeProps(unref(forwarded), _attrs), {
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("inertia/components/ui/tabs/Tabs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "show",
  __ssrInlineRender: true,
  props: {
    pool: {}
  },
  setup(__props) {
    const copyLink = () => {
      navigator.clipboard.writeText(window.location.href);
      toast("Lien copié", {
        position: "top-right",
        description: "Vous pouvez maintenant partager le lien de la cagnotte."
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Separator = _sfc_main$c;
      const _component_Link = resolveComponent("Link");
      const _component_Button = _sfc_main$d;
      const _component_TabsList = _sfc_main$2;
      const _component_TabsTrigger = _sfc_main$3;
      const _component_TabsContent = _sfc_main$4;
      const _component_DescriptionTab = _sfc_main$5;
      const _component_ParticipationsTab = _sfc_main$6;
      const _component_ParticipationMessagesTab = _sfc_main$b;
      _push(`<!--[-->`);
      if (_ctx.pool.imageUrl) {
        _push(`<img class="w-full h-64 object-cover"${ssrRenderAttr("src", _ctx.pool.imageUrl)}>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="grid grid-cols-1 gap-2 container"><div class="mt-6 grid gap-4"><h1 class="text-3xl font-semibold tracking-tight">${ssrInterpolate(_ctx.pool.name)}</h1><h2 class="flex gap-2 items-center"><span class="text-2xl font-bold tracking-tight">${ssrInterpolate(unref(formatPrice)(_ctx.pool.$extras.totalGiftAmount))}</span><span class="font-light">récoltés</span></h2><div class="flex gap-2 items-center">`);
      _push(ssrRenderComponent(unref(Icon), { icon: "lucide:users" }, null, _parent));
      _push(`<p class="font-light text-sm">${ssrInterpolate(_ctx.pool.numberOfParticipants)} Participations</p></div>`);
      _push(ssrRenderComponent(_component_Separator, null, null, _parent));
      _push(`</div><div class="grid gap-2 py-6">`);
      _push(ssrRenderComponent(_component_Link, {
        href: `/pools/${_ctx.pool.slug}/participate`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Button, { class: "w-full text-lg font-semibold tracking-wide py-7" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Participer `);
                } else {
                  return [
                    createTextVNode(" Participer ")
                  ];
                }
              }),
              _: 1
              /* STABLE */
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Button, { class: "w-full text-lg font-semibold tracking-wide py-7" }, {
                default: withCtx(() => [
                  createTextVNode(" Participer ")
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
      _push(ssrRenderComponent(_component_Button, {
        variant: "outline",
        class: "w-full text-md font-semibold tracking-wide py-7",
        onClick: copyLink
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:link",
              class: "w-6 h-6"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Copier le lien</span>`);
          } else {
            return [
              createVNode(unref(Icon), {
                icon: "lucide:link",
                class: "w-6 h-6"
              }),
              createVNode("span", null, "Copier le lien")
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(unref(_sfc_main$1), {
        "default-value": "description",
        class: "w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TabsList, { class: "w-full" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TabsTrigger, {
                    class: "w-full",
                    value: "description"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Description`);
                      } else {
                        return [
                          createTextVNode("Description")
                        ];
                      }
                    }),
                    _: 1
                    /* STABLE */
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TabsTrigger, {
                    class: "w-full",
                    value: "participations"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Participations`);
                      } else {
                        return [
                          createTextVNode("Participations")
                        ];
                      }
                    }),
                    _: 1
                    /* STABLE */
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TabsTrigger, {
                    class: "w-full",
                    value: "messages"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Messages`);
                      } else {
                        return [
                          createTextVNode("Messages")
                        ];
                      }
                    }),
                    _: 1
                    /* STABLE */
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_TabsTrigger, {
                      class: "w-full",
                      value: "description"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Description")
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createVNode(_component_TabsTrigger, {
                      class: "w-full",
                      value: "participations"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Participations")
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createVNode(_component_TabsTrigger, {
                      class: "w-full",
                      value: "messages"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Messages")
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ];
                }
              }),
              _: 1
              /* STABLE */
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TabsContent, { value: "description" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_DescriptionTab, { pool: _ctx.pool }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_DescriptionTab, { pool: _ctx.pool }, null, 8, ["pool"])
                  ];
                }
              }),
              _: 1
              /* STABLE */
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TabsContent, { value: "participations" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ParticipationsTab, { pool: _ctx.pool }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ParticipationsTab, { pool: _ctx.pool }, null, 8, ["pool"])
                  ];
                }
              }),
              _: 1
              /* STABLE */
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TabsContent, { value: "messages" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ParticipationMessagesTab, { pool: _ctx.pool }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ParticipationMessagesTab, { pool: _ctx.pool }, null, 8, ["pool"])
                  ];
                }
              }),
              _: 1
              /* STABLE */
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TabsList, { class: "w-full" }, {
                default: withCtx(() => [
                  createVNode(_component_TabsTrigger, {
                    class: "w-full",
                    value: "description"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Description")
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  createVNode(_component_TabsTrigger, {
                    class: "w-full",
                    value: "participations"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Participations")
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  createVNode(_component_TabsTrigger, {
                    class: "w-full",
                    value: "messages"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Messages")
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_TabsContent, { value: "description" }, {
                default: withCtx(() => [
                  createVNode(_component_DescriptionTab, { pool: _ctx.pool }, null, 8, ["pool"])
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_TabsContent, { value: "participations" }, {
                default: withCtx(() => [
                  createVNode(_component_ParticipationsTab, { pool: _ctx.pool }, null, 8, ["pool"])
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(_component_TabsContent, { value: "messages" }, {
                default: withCtx(() => [
                  createVNode(_component_ParticipationMessagesTab, { pool: _ctx.pool }, null, 8, ["pool"])
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
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("inertia/pages/pools/show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_6 as _
};

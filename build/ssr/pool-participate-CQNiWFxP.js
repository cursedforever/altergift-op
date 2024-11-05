import { _ as _sfc_main$6 } from "./Button-CuuDX7RD.js";
import { defineComponent, mergeProps, unref, useSSRContext, computed, withCtx, renderSlot, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { c as cn, b as _sfc_main$3 } from "./AppLayout-B4AJGgCi.js";
import { useVModel } from "@vueuse/core";
import { _ as _sfc_main$4, a as _sfc_main$5 } from "./Label-CuYHo2A0.js";
import { Icon } from "@iconify/vue";
import { useForm } from "@inertiajs/vue3";
import { useForwardPropsEmits, SwitchRoot, SwitchThumb } from "radix-vue";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Textarea",
  __ssrInlineRender: true,
  props: {
    class: {},
    defaultValue: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const modelValue = useVModel(props, "modelValue", emits, {
      passive: true,
      defaultValue: props.defaultValue
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<textarea${ssrRenderAttrs(mergeProps({
        class: unref(cn)("flex min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", props.class)
      }, _attrs), "textarea")}>${ssrInterpolate(unref(modelValue))}</textarea>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("inertia/components/ui/textarea/Textarea.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Switch",
  __ssrInlineRender: true,
  props: {
    defaultChecked: { type: Boolean },
    checked: { type: Boolean },
    disabled: { type: Boolean },
    required: { type: Boolean },
    name: {},
    id: {},
    value: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:checked"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(SwitchRoot), mergeProps(unref(forwarded), {
        class: unref(cn)(
          "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwitchThumb), {
              class: unref(cn)("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "thumb", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "thumb")
                  ];
                }
              }),
              _: 3
              /* FORWARDED */
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SwitchThumb), {
                class: unref(cn)("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5")
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "thumb")
                ]),
                _: 3
                /* FORWARDED */
              }, 8, ["class"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("inertia/components/ui/switch/Switch.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "pool-participate",
  __ssrInlineRender: true,
  props: {
    pool: {}
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      username: "",
      email: "",
      message: "",
      amount: 0,
      isAnonymous: false,
      isAmountHidden: false,
      poolId: props.pool.id
    });
    const goBack = () => {
      window.history.back();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Label = _sfc_main$4;
      const _component_Input = _sfc_main$5;
      const _component_Textarea = _sfc_main$2;
      const _component_Button = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><div class="pb-4">`);
      _push(ssrRenderComponent(unref(Icon), {
        icon: "lucide:move-left",
        class: "w-6 h-6 my-4",
        onClick: goBack
      }, null, _parent));
      _push(`<h2 class="text-lg tracking-tight text-muted-foreground">Participer à la cagnotte</h2><h1 class="text-3xl font-semibold tracking-tight">${ssrInterpolate(_ctx.pool.name)}</h1></div><form class="mt-6 grid gap-4 w-full">`);
      _push(ssrRenderComponent(_component_Label, { class: "grid gap-1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Ma Participation</span>`);
            _push2(ssrRenderComponent(_component_Input, {
              type: "number",
              class: "text-center font-bold text-xl py-2 h-fit",
              modelValue: unref(form).amount,
              "onUpdate:modelValue": ($event) => unref(form).amount = $event,
              disable: unref(form).processing
            }, null, _parent2, _scopeId));
            if (unref(form).errors.amount) {
              _push2(`<div${_scopeId}><span class="text-red-500 text-sm"${_scopeId}>${ssrInterpolate(unref(form).errors.amount)}</span></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("span", null, "Ma Participation"),
              createVNode(_component_Input, {
                type: "number",
                class: "text-center font-bold text-xl py-2 h-fit",
                modelValue: unref(form).amount,
                "onUpdate:modelValue": ($event) => unref(form).amount = $event,
                disable: unref(form).processing
              }, null, 8, ["modelValue", "onUpdate:modelValue", "disable"]),
              unref(form).errors.amount ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode(
                  "span",
                  { class: "text-red-500 text-sm" },
                  toDisplayString(unref(form).errors.amount),
                  1
                  /* TEXT */
                )
              ])) : createCommentVNode("v-if", true)
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(`<!-- Hide ammount -->`);
      _push(ssrRenderComponent(_component_Label, { class: "flex justify-between gap-2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><p${_scopeId}>Masquer le montant</p><p class="text-xs font-light text-muted-foreground"${_scopeId}>Votre montant ne sera pas vu par les autres participants </p></div>`);
            _push2(ssrRenderComponent(unref(_sfc_main$1), {
              modelValue: unref(form).isAmountHidden,
              "onUpdate:modelValue": ($event) => unref(form).isAmountHidden = $event,
              "onUpdate:checked": ($event) => unref(form).isAmountHidden = !unref(form).isAmountHidden,
              disable: unref(form).processing
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", null, [
                createVNode("p", null, "Masquer le montant"),
                createVNode("p", { class: "text-xs font-light text-muted-foreground" }, "Votre montant ne sera pas vu par les autres participants ")
              ]),
              createVNode(unref(_sfc_main$1), {
                modelValue: unref(form).isAmountHidden,
                "onUpdate:modelValue": ($event) => unref(form).isAmountHidden = $event,
                "onUpdate:checked": ($event) => unref(form).isAmountHidden = !unref(form).isAmountHidden,
                disable: unref(form).processing
              }, null, 8, ["modelValue", "onUpdate:modelValue", "onUpdate:checked", "disable"])
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(`<!-- Hide name -->`);
      _push(ssrRenderComponent(_component_Label, { class: "flex justify-between gap-2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><p${_scopeId}>Participer anonymement</p><p class="text-xs font-light text-muted-foreground"${_scopeId}>Votre nom sera remplacé par “Anonyme” sur la cagnotte</p></div>`);
            _push2(ssrRenderComponent(unref(_sfc_main$1), {
              modelValue: unref(form).isAnonymous,
              "onUpdate:modelValue": ($event) => unref(form).isAnonymous = $event,
              "onUpdate:checked": ($event) => unref(form).isAnonymous = !unref(form).isAnonymous,
              disable: unref(form).processing
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", null, [
                createVNode("p", null, "Participer anonymement"),
                createVNode("p", { class: "text-xs font-light text-muted-foreground" }, "Votre nom sera remplacé par “Anonyme” sur la cagnotte")
              ]),
              createVNode(unref(_sfc_main$1), {
                modelValue: unref(form).isAnonymous,
                "onUpdate:modelValue": ($event) => unref(form).isAnonymous = $event,
                "onUpdate:checked": ($event) => unref(form).isAnonymous = !unref(form).isAnonymous,
                disable: unref(form).processing
              }, null, 8, ["modelValue", "onUpdate:modelValue", "onUpdate:checked", "disable"])
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(ssrRenderComponent(unref(_sfc_main$3), { class: "my-6" }, null, _parent));
      _push(ssrRenderComponent(_component_Label, { class: "grid gap-1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Nom</span>`);
            _push2(ssrRenderComponent(_component_Input, {
              type: "text",
              modelValue: unref(form).username,
              "onUpdate:modelValue": ($event) => unref(form).username = $event,
              disable: unref(form).processing
            }, null, _parent2, _scopeId));
            if (unref(form).errors.username) {
              _push2(`<div${_scopeId}><span class="text-red-500 text-sm"${_scopeId}>${ssrInterpolate(unref(form).errors.username)}</span></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("span", null, "Nom"),
              createVNode(_component_Input, {
                type: "text",
                modelValue: unref(form).username,
                "onUpdate:modelValue": ($event) => unref(form).username = $event,
                disable: unref(form).processing
              }, null, 8, ["modelValue", "onUpdate:modelValue", "disable"]),
              unref(form).errors.username ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode(
                  "span",
                  { class: "text-red-500 text-sm" },
                  toDisplayString(unref(form).errors.username),
                  1
                  /* TEXT */
                )
              ])) : createCommentVNode("v-if", true)
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(ssrRenderComponent(_component_Label, { class: "grid gap-1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Email</span>`);
            _push2(ssrRenderComponent(_component_Input, {
              type: "email",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              disable: unref(form).processing
            }, null, _parent2, _scopeId));
            if (unref(form).errors.email) {
              _push2(`<div${_scopeId}><span class="text-red-500 text-sm"${_scopeId}>${ssrInterpolate(unref(form).errors.email)}</span></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("span", null, "Email"),
              createVNode(_component_Input, {
                type: "email",
                modelValue: unref(form).email,
                "onUpdate:modelValue": ($event) => unref(form).email = $event,
                disable: unref(form).processing
              }, null, 8, ["modelValue", "onUpdate:modelValue", "disable"]),
              unref(form).errors.email ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode(
                  "span",
                  { class: "text-red-500 text-sm" },
                  toDisplayString(unref(form).errors.email),
                  1
                  /* TEXT */
                )
              ])) : createCommentVNode("v-if", true)
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(ssrRenderComponent(_component_Label, { class: "grid gap-1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Message</span>`);
            _push2(ssrRenderComponent(_component_Textarea, {
              type: "text",
              modelValue: unref(form).message,
              "onUpdate:modelValue": ($event) => unref(form).message = $event,
              disable: unref(form).processing
            }, null, _parent2, _scopeId));
            if (unref(form).errors.message) {
              _push2(`<div${_scopeId}><span class="text-red-500 text-sm"${_scopeId}>${ssrInterpolate(unref(form).errors.message)}</span></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("span", null, "Message"),
              createVNode(_component_Textarea, {
                type: "text",
                modelValue: unref(form).message,
                "onUpdate:modelValue": ($event) => unref(form).message = $event,
                disable: unref(form).processing
              }, null, 8, ["modelValue", "onUpdate:modelValue", "disable"]),
              unref(form).errors.message ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode(
                  "span",
                  { class: "text-red-500 text-sm" },
                  toDisplayString(unref(form).errors.message),
                  1
                  /* TEXT */
                )
              ])) : createCommentVNode("v-if", true)
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        type: "submit",
        size: "lg",
        class: "w-full text-lg font-semibold py-7",
        disable: unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Participer`);
          } else {
            return [
              createTextVNode("Participer")
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(`</form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("inertia/pages/pools/pool-participate.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_5 as _
};

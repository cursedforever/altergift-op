import { _ as _sfc_main$3, a as _sfc_main$4 } from "./Label-CuYHo2A0.js";
import { defineComponent, computed, mergeProps, withCtx, openBlock, createBlock, toDisplayString, createCommentVNode, createVNode, useSSRContext, resolveComponent, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { Icon } from "@iconify/vue";
import { b as _sfc_main$5, d as _sfc_main$6, c as cn } from "./AppLayout-B4AJGgCi.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "FormInput",
  __ssrInlineRender: true,
  props: {
    label: {},
    id: {},
    type: { default: "text" },
    modelValue: {},
    placeholder: {},
    error: {},
    disabled: { type: Boolean },
    required: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const internalValue = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value)
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Label = _sfc_main$3;
      const _component_Input = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid gap-1 h-fit" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Label, { class: "grid gap-2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.label) {
              _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.label)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_Input, {
              id: _ctx.id,
              type: _ctx.type,
              modelValue: internalValue.value,
              "onUpdate:modelValue": ($event) => internalValue.value = $event,
              placeholder: _ctx.placeholder,
              disabled: _ctx.disabled,
              required: _ctx.required
            }, null, _parent2, _scopeId));
            if (_ctx.error) {
              _push2(`<p class="text-destructive text-xs"${_scopeId}>${ssrInterpolate(_ctx.error)}</p>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              _ctx.label ? (openBlock(), createBlock(
                "span",
                { key: 0 },
                toDisplayString(_ctx.label),
                1
                /* TEXT */
              )) : createCommentVNode("v-if", true),
              createVNode(_component_Input, {
                id: _ctx.id,
                type: _ctx.type,
                modelValue: internalValue.value,
                "onUpdate:modelValue": ($event) => internalValue.value = $event,
                placeholder: _ctx.placeholder,
                disabled: _ctx.disabled,
                required: _ctx.required
              }, null, 8, ["id", "type", "modelValue", "onUpdate:modelValue", "placeholder", "disabled", "required"]),
              _ctx.error ? (openBlock(), createBlock(
                "p",
                {
                  key: 1,
                  class: "text-destructive text-xs"
                },
                toDisplayString(_ctx.error),
                1
                /* TEXT */
              )) : createCommentVNode("v-if", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("inertia/components/FormInput.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AuthLayout",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<div${ssrRenderAttrs(_attrs)}><header><nav class="flex items-center justify-between h-[52px] px-6 lg:px-8">`);
      _push(ssrRenderComponent(_component_Link, {
        href: "/",
        class: "-mx-1.5 px-1.5 flex items-center gap-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Icon), {
              icon: "lucide:gift",
              class: "w-5 h-5"
            }, null, _parent2, _scopeId));
            _push2(`<span class="text-lg font-medium leading-6"${_scopeId}> Alter Gifts </span>`);
          } else {
            return [
              createVNode(unref(Icon), {
                icon: "lucide:gift",
                class: "w-5 h-5"
              }),
              createVNode("span", { class: "text-lg font-medium leading-6" }, " Alter Gifts ")
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(`<div class="flex flex-1 justify-end gap-4"></div></nav>`);
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(`</header><div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(unref(_sfc_main$6), null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("inertia/components/layouts/AuthLayout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CardFooter",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("flex items-center p-6 pt-0", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("inertia/components/ui/card/CardFooter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main$1 as _,
  _sfc_main as a,
  _sfc_main$2 as b
};

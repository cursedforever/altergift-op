import { defineComponent, unref, withCtx, createVNode, toDisplayString, useSSRContext, mergeProps, computed, openBlock, createBlock, createCommentVNode, resolveComponent } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
import { Icon } from "@iconify/vue";
import { Toaster } from "vue-sonner";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Separator } from "radix-vue";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AppHead",
  __ssrInlineRender: true,
  props: {
    title: {},
    description: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Head), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>${ssrInterpolate(_ctx.title)}</title><meta name="description"${ssrRenderAttr("content", _ctx.description)}${_scopeId}>`);
          } else {
            return [
              createVNode(
                "title",
                null,
                toDisplayString(_ctx.title),
                1
                /* TEXT */
              ),
              createVNode("meta", {
                name: "description",
                content: _ctx.description
              }, null, 8, ["content"])
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("inertia/components/AppHead.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Sonner",
  __ssrInlineRender: true,
  props: {
    invert: { type: Boolean },
    theme: {},
    position: {},
    hotkey: {},
    richColors: { type: Boolean },
    expand: { type: Boolean },
    duration: {},
    gap: {},
    visibleToasts: {},
    closeButton: { type: Boolean },
    toastOptions: {},
    class: {},
    style: {},
    offset: {},
    dir: {},
    icons: {},
    containerAriaLabel: {},
    pauseWhenPageIsHidden: { type: Boolean },
    cn: { type: Function }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Toaster), mergeProps({ class: "toaster group" }, props, { "toast-options": {
        classes: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      } }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("inertia/components/ui/sonner/Sonner.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Separator",
  __ssrInlineRender: true,
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {},
    label: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Separator), mergeProps(delegatedProps.value, {
        class: unref(cn)(
          "shrink-0 bg-border relative",
          props.orientation === "vertical" ? "w-px h-full" : "h-px w-full",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (props.label) {
              _push2(`<span class="${ssrRenderClass(unref(cn)(
                "text-xs text-muted-foreground bg-background absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center",
                props.orientation === "vertical" ? "w-[1px] px-1 py-2" : "h-[1px] py-1 px-2"
              ))}"${_scopeId}>${ssrInterpolate(props.label)}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              props.label ? (openBlock(), createBlock(
                "span",
                {
                  key: 0,
                  class: unref(cn)(
                    "text-xs text-muted-foreground bg-background absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center",
                    props.orientation === "vertical" ? "w-[1px] px-1 py-2" : "h-[1px] py-1 px-2"
                  )
                },
                toDisplayString(props.label),
                3
                /* TEXT, CLASS */
              )) : createCommentVNode("v-if", true)
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("inertia/components/ui/separator/Separator.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppLayout",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<div${ssrRenderAttrs(_attrs)}><header class="sticky top-0 bg-background z-40"><nav class="flex items-center justify-between h-[52px] px-6 lg:px-8">`);
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
      _push(`<div class="flex flex-1 justify-end gap-4"><!-- <Link v-if="!$page.props.user" href="/login"> --><!-- <span>Se connecter</span> --><!-- </Link> -->`);
      _push(ssrRenderComponent(_component_Link, { href: "/#" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!-- <span>Panier</span> -->`);
          } else {
            return [
              createCommentVNode(" <span>Panier</span> ")
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(`<!-- @vue-ignore --><!-- <Link v-if="!$page.props.auth.user" href="/login">
          <Icon icon="lucide:user" class="w-6 h-6" />
          </Link>
          <!-- @vue-ignore --><!-- <UserNav v-if="$page.props.auth.user" :user="$page.props.auth.user" /> --></div></nav>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</header><div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("inertia/components/layouts/AppLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  _sfc_main$3 as a,
  _sfc_main$1 as b,
  cn as c,
  _sfc_main$2 as d
};

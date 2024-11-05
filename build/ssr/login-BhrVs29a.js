import { _ as _sfc_main$c } from "./Button-CuuDX7RD.js";
import { _ as _sfc_main$4, a as _sfc_main$5, b as _sfc_main$b } from "./CardFooter-Dte-UPsX.js";
import { _ as _sfc_main$7, a as _sfc_main$8, b as _sfc_main$9, c as _sfc_main$a } from "./Card-DyI5RSi3.js";
import { defineComponent, mergeProps, unref, useSSRContext, withCtx, createTextVNode, createVNode, createCommentVNode, openBlock, createBlock, withModifiers } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent } from "vue/server-renderer";
import { c as cn, a as _sfc_main$6 } from "./AppLayout-B4AJGgCi.js";
import { cva } from "class-variance-authority";
import { useForm } from "@inertiajs/vue3";
import { AlertCircle, Loader } from "lucide-vue-next";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AlertDescription",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("text-sm [&_p]:leading-relaxed", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("inertia/components/ui/alert/AlertDescription.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AlertTitle",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h5${ssrRenderAttrs(mergeProps({
        class: unref(cn)("mb-1 font-medium leading-none tracking-tight", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</h5>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("inertia/components/ui/alert/AlertTitle.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Alert",
  __ssrInlineRender: true,
  props: {
    class: {},
    variant: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)(unref(alertVariants)({ variant: _ctx.variant }), props.class),
        role: "alert"
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("inertia/components/ui/alert/Alert.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    layout: _sfc_main$4
  },
  __name: "login",
  __ssrInlineRender: true,
  props: {
    exceptions: {}
  },
  setup(__props) {
    const form = useForm({
      email: "",
      password: "",
      remember: false
    });
    let submit = () => {
      form.post("/login", {
        preserveScroll: true
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHead = _sfc_main$6;
      const _component_Card = _sfc_main$7;
      const _component_CardHeader = _sfc_main$8;
      const _component_CardTitle = _sfc_main$9;
      const _component_Alert = _sfc_main$1;
      const _component_AlertTitle = _sfc_main$2;
      const _component_AlertDescription = _sfc_main$3;
      const _component_CardContent = _sfc_main$a;
      const _component_FormInput = _sfc_main$b;
      const _component_Button = _sfc_main$c;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_AppHead, {
        title: "Connexion",
        description: "Se connecter sur Instant Gourmand"
      }, null, _parent));
      _push(`<div class="flex flex-col justify-center items-center space-y-6 h-[calc(100vh-120px)]">`);
      _push(ssrRenderComponent(_component_Card, { class: "w-[420px]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Se connecter`);
                      } else {
                        return [
                          createTextVNode("Se connecter")
                        ];
                      }
                    }),
                    _: 1
                    /* STABLE */
                  }, _parent3, _scopeId2));
                  _push3(`<!-- <CardDescription>
          <Link href="/register">
          Vous n’avez pas de compte ? Créez un compte
          </Link>
        </CardDescription> -->`);
                  if (_ctx.exceptions.E_INVALID_CREDENTIALS) {
                    _push3(ssrRenderComponent(_component_Alert, { variant: "destructive" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(AlertCircle), { class: "w-4 h-4" }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_AlertTitle, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Erreur`);
                              } else {
                                return [
                                  createTextVNode("Erreur")
                                ];
                              }
                            }),
                            _: 1
                            /* STABLE */
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_AlertDescription, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`Email ou mot de passe incorrect`);
                              } else {
                                return [
                                  createTextVNode("Email ou mot de passe incorrect")
                                ];
                              }
                            }),
                            _: 1
                            /* STABLE */
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(AlertCircle), { class: "w-4 h-4" }),
                            createVNode(_component_AlertTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Erreur")
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            createVNode(_component_AlertDescription, null, {
                              default: withCtx(() => [
                                createTextVNode("Email ou mot de passe incorrect")
                              ]),
                              _: 1
                              /* STABLE */
                            })
                          ];
                        }
                      }),
                      _: 1
                      /* STABLE */
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode(_component_CardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Se connecter")
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createCommentVNode(' <CardDescription>\r\n          <Link href="/register">\r\n          Vous n’avez pas de compte ? Créez un compte\r\n          </Link>\r\n        </CardDescription> '),
                    _ctx.exceptions.E_INVALID_CREDENTIALS ? (openBlock(), createBlock(_component_Alert, {
                      key: 0,
                      variant: "destructive"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(AlertCircle), { class: "w-4 h-4" }),
                        createVNode(_component_AlertTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("Erreur")
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        createVNode(_component_AlertDescription, null, {
                          default: withCtx(() => [
                            createTextVNode("Email ou mot de passe incorrect")
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    })) : createCommentVNode("v-if", true)
                  ];
                }
              }),
              _: 1
              /* STABLE */
            }, _parent2, _scopeId));
            _push2(`<form class=""${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CardContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid gap-4"${_scopeId2}><!-- email -->`);
                  _push3(ssrRenderComponent(_component_FormInput, {
                    id: "email",
                    label: "Email",
                    type: "email",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    error: unref(form).errors.email,
                    disabled: unref(form).processing
                  }, null, _parent3, _scopeId2));
                  _push3(`<!-- password -->`);
                  _push3(ssrRenderComponent(_component_FormInput, {
                    label: "Mot de passe",
                    type: "password",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    error: unref(form).errors.password,
                    disabled: unref(form).processing
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid gap-4" }, [
                      createCommentVNode(" email "),
                      createVNode(_component_FormInput, {
                        id: "email",
                        label: "Email",
                        type: "email",
                        modelValue: unref(form).email,
                        "onUpdate:modelValue": ($event) => unref(form).email = $event,
                        error: unref(form).errors.email,
                        disabled: unref(form).processing
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "disabled"]),
                      createCommentVNode(" password "),
                      createVNode(_component_FormInput, {
                        label: "Mot de passe",
                        type: "password",
                        modelValue: unref(form).password,
                        "onUpdate:modelValue": ($event) => unref(form).password = $event,
                        error: unref(form).errors.password,
                        disabled: unref(form).processing
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "disabled"])
                    ])
                  ];
                }
              }),
              _: 1
              /* STABLE */
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!-- submit -->`);
                  _push3(ssrRenderComponent(_component_Button, {
                    type: "submit",
                    class: "w-full",
                    disabled: unref(form).processing
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(form).processing) {
                          _push4(ssrRenderComponent(unref(Loader), { class: "mr-2 w-4 h-4 animate-spin" }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(` Se connecter `);
                      } else {
                        return [
                          unref(form).processing ? (openBlock(), createBlock(unref(Loader), {
                            key: 0,
                            class: "mr-2 w-4 h-4 animate-spin"
                          })) : createCommentVNode("v-if", true),
                          createTextVNode(" Se connecter ")
                        ];
                      }
                    }),
                    _: 1
                    /* STABLE */
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createCommentVNode(" submit "),
                    createVNode(_component_Button, {
                      type: "submit",
                      class: "w-full",
                      disabled: unref(form).processing
                    }, {
                      default: withCtx(() => [
                        unref(form).processing ? (openBlock(), createBlock(unref(Loader), {
                          key: 0,
                          class: "mr-2 w-4 h-4 animate-spin"
                        })) : createCommentVNode("v-if", true),
                        createTextVNode(" Se connecter ")
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["disabled"])
                  ];
                }
              }),
              _: 1
              /* STABLE */
            }, _parent2, _scopeId));
            _push2(`</form>`);
          } else {
            return [
              createVNode(_component_CardHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_CardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Se connecter")
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  createCommentVNode(' <CardDescription>\r\n          <Link href="/register">\r\n          Vous n’avez pas de compte ? Créez un compte\r\n          </Link>\r\n        </CardDescription> '),
                  _ctx.exceptions.E_INVALID_CREDENTIALS ? (openBlock(), createBlock(_component_Alert, {
                    key: 0,
                    variant: "destructive"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(AlertCircle), { class: "w-4 h-4" }),
                      createVNode(_component_AlertTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("Erreur")
                        ]),
                        _: 1
                        /* STABLE */
                      }),
                      createVNode(_component_AlertDescription, null, {
                        default: withCtx(() => [
                          createTextVNode("Email ou mot de passe incorrect")
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  })) : createCommentVNode("v-if", true)
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode("form", {
                class: "",
                onSubmit: withModifiers(unref(submit), ["prevent"])
              }, [
                createVNode(_component_CardContent, null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "grid gap-4" }, [
                      createCommentVNode(" email "),
                      createVNode(_component_FormInput, {
                        id: "email",
                        label: "Email",
                        type: "email",
                        modelValue: unref(form).email,
                        "onUpdate:modelValue": ($event) => unref(form).email = $event,
                        error: unref(form).errors.email,
                        disabled: unref(form).processing
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "disabled"]),
                      createCommentVNode(" password "),
                      createVNode(_component_FormInput, {
                        label: "Mot de passe",
                        type: "password",
                        modelValue: unref(form).password,
                        "onUpdate:modelValue": ($event) => unref(form).password = $event,
                        error: unref(form).errors.password,
                        disabled: unref(form).processing
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "disabled"])
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_sfc_main$5, null, {
                  default: withCtx(() => [
                    createCommentVNode(" submit "),
                    createVNode(_component_Button, {
                      type: "submit",
                      class: "w-full",
                      disabled: unref(form).processing
                    }, {
                      default: withCtx(() => [
                        unref(form).processing ? (openBlock(), createBlock(unref(Loader), {
                          key: 0,
                          class: "mr-2 w-4 h-4 animate-spin"
                        })) : createCommentVNode("v-if", true),
                        createTextVNode(" Se connecter ")
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["disabled"])
                  ]),
                  _: 1
                  /* STABLE */
                })
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
        /* STABLE */
      }, _parent));
      _push(`<!-- <p class="text-sm text-muted-foreground text-end hover:text-accent-foreground">
      <Link href="/forgot-password">Mot de passe oublié?</Link>
    </p> --></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("inertia/pages/auth/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_0 as _
};

import { _ as _sfc_main$a } from "./Button-CuuDX7RD.js";
import { _ as _sfc_main$2, b as _sfc_main$8, a as _sfc_main$9 } from "./CardFooter-Dte-UPsX.js";
import { _ as _sfc_main$4, a as _sfc_main$5, b as _sfc_main$6, c as _sfc_main$7 } from "./Card-DyI5RSi3.js";
import { defineComponent, mergeProps, unref, useSSRContext, resolveComponent, withCtx, createTextVNode, createVNode, createCommentVNode, withModifiers } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent } from "vue/server-renderer";
import { c as cn, a as _sfc_main$3 } from "./AppLayout-B4AJGgCi.js";
import { useForm } from "@inertiajs/vue3";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CardDescription",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<p${ssrRenderAttrs(mergeProps({
        class: unref(cn)("text-sm text-muted-foreground", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</p>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("inertia/components/ui/card/CardDescription.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    layout: _sfc_main$2
  },
  __name: "register",
  __ssrInlineRender: true,
  props: {
    exceptions: {},
    email: {}
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      email: props.email ?? null,
      password: null,
      passwordConfirmation: null,
      firstName: null,
      lastName: null,
      phoneNumber: null
    });
    let submit = () => {
      form.post("/register");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHead = _sfc_main$3;
      const _component_Card = _sfc_main$4;
      const _component_CardHeader = _sfc_main$5;
      const _component_CardTitle = _sfc_main$6;
      const _component_CardDescription = _sfc_main$1;
      const _component_Link = resolveComponent("Link");
      const _component_CardContent = _sfc_main$7;
      const _component_FormInput = _sfc_main$8;
      const _component_CardFooter = _sfc_main$9;
      const _component_Button = _sfc_main$a;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_AppHead, {
        title: "Inscription",
        description: "Créer un compte sur Instant Gourmand"
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
                        _push4(`Créer un compte`);
                      } else {
                        return [
                          createTextVNode("Créer un compte")
                        ];
                      }
                    }),
                    _: 1
                    /* STABLE */
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_CardDescription, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Link, { href: "/login" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Vous avez déjà un compte ? Se connecter`);
                            } else {
                              return [
                                createTextVNode("Vous avez déjà un compte ? Se connecter")
                              ];
                            }
                          }),
                          _: 1
                          /* STABLE */
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Link, { href: "/login" }, {
                            default: withCtx(() => [
                              createTextVNode("Vous avez déjà un compte ? Se connecter")
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
                  return [
                    createVNode(_component_CardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Créer un compte")
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    createVNode(_component_CardDescription, null, {
                      default: withCtx(() => [
                        createVNode(_component_Link, { href: "/login" }, {
                          default: withCtx(() => [
                            createTextVNode("Vous avez déjà un compte ? Se connecter")
                          ]),
                          _: 1
                          /* STABLE */
                        })
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
            _push2(`<form${_scopeId}>`);
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
                    disabled: _ctx.email
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="flex gap-2"${_scopeId2}><div class="w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_FormInput, {
                    label: "Prénom",
                    type: "text",
                    modelValue: unref(form).firstName,
                    "onUpdate:modelValue": ($event) => unref(form).firstName = $event,
                    error: unref(form).errors.firstName
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_FormInput, {
                    label: "Nom",
                    type: "text",
                    modelValue: unref(form).lastName,
                    "onUpdate:modelValue": ($event) => unref(form).lastName = $event,
                    error: unref(form).errors.lastName
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><!-- Phone number --><!-- <FormInput label="Téléphone" type="tel" v-model="form.phoneNumber" :error="form.errors.phoneNumber" /> --><!-- password -->`);
                  _push3(ssrRenderComponent(_component_FormInput, {
                    label: "Mot de passe",
                    type: "password",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    error: unref(form).errors.password
                  }, null, _parent3, _scopeId2));
                  _push3(`<!-- confirm password -->`);
                  _push3(ssrRenderComponent(_component_FormInput, {
                    label: "Confirmer mot de passe",
                    type: "password",
                    modelValue: unref(form).passwordConfirmation,
                    "onUpdate:modelValue": ($event) => unref(form).passwordConfirmation = $event,
                    error: unref(form).errors.passwordConfirmation
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
                        disabled: _ctx.email
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "disabled"]),
                      createVNode("div", { class: "flex gap-2" }, [
                        createVNode("div", { class: "w-full" }, [
                          createVNode(_component_FormInput, {
                            label: "Prénom",
                            type: "text",
                            modelValue: unref(form).firstName,
                            "onUpdate:modelValue": ($event) => unref(form).firstName = $event,
                            error: unref(form).errors.firstName
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error"])
                        ]),
                        createVNode("div", { class: "w-full" }, [
                          createVNode(_component_FormInput, {
                            label: "Nom",
                            type: "text",
                            modelValue: unref(form).lastName,
                            "onUpdate:modelValue": ($event) => unref(form).lastName = $event,
                            error: unref(form).errors.lastName
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error"])
                        ])
                      ]),
                      createCommentVNode(" Phone number "),
                      createCommentVNode(' <FormInput label="Téléphone" type="tel" v-model="form.phoneNumber" :error="form.errors.phoneNumber" /> '),
                      createCommentVNode(" password "),
                      createVNode(_component_FormInput, {
                        label: "Mot de passe",
                        type: "password",
                        modelValue: unref(form).password,
                        "onUpdate:modelValue": ($event) => unref(form).password = $event,
                        error: unref(form).errors.password
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error"]),
                      createCommentVNode(" confirm password "),
                      createVNode(_component_FormInput, {
                        label: "Confirmer mot de passe",
                        type: "password",
                        modelValue: unref(form).passwordConfirmation,
                        "onUpdate:modelValue": ($event) => unref(form).passwordConfirmation = $event,
                        error: unref(form).errors.passwordConfirmation
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error"])
                    ])
                  ];
                }
              }),
              _: 1
              /* STABLE */
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CardFooter, null, {
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
                        _push4(`Créer mon compte`);
                      } else {
                        return [
                          createTextVNode("Créer mon compte")
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
                        createTextVNode("Créer mon compte")
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
                      createTextVNode("Créer un compte")
                    ]),
                    _: 1
                    /* STABLE */
                  }),
                  createVNode(_component_CardDescription, null, {
                    default: withCtx(() => [
                      createVNode(_component_Link, { href: "/login" }, {
                        default: withCtx(() => [
                          createTextVNode("Vous avez déjà un compte ? Se connecter")
                        ]),
                        _: 1
                        /* STABLE */
                      })
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode("form", {
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
                        disabled: _ctx.email
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "disabled"]),
                      createVNode("div", { class: "flex gap-2" }, [
                        createVNode("div", { class: "w-full" }, [
                          createVNode(_component_FormInput, {
                            label: "Prénom",
                            type: "text",
                            modelValue: unref(form).firstName,
                            "onUpdate:modelValue": ($event) => unref(form).firstName = $event,
                            error: unref(form).errors.firstName
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error"])
                        ]),
                        createVNode("div", { class: "w-full" }, [
                          createVNode(_component_FormInput, {
                            label: "Nom",
                            type: "text",
                            modelValue: unref(form).lastName,
                            "onUpdate:modelValue": ($event) => unref(form).lastName = $event,
                            error: unref(form).errors.lastName
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error"])
                        ])
                      ]),
                      createCommentVNode(" Phone number "),
                      createCommentVNode(' <FormInput label="Téléphone" type="tel" v-model="form.phoneNumber" :error="form.errors.phoneNumber" /> '),
                      createCommentVNode(" password "),
                      createVNode(_component_FormInput, {
                        label: "Mot de passe",
                        type: "password",
                        modelValue: unref(form).password,
                        "onUpdate:modelValue": ($event) => unref(form).password = $event,
                        error: unref(form).errors.password
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error"]),
                      createCommentVNode(" confirm password "),
                      createVNode(_component_FormInput, {
                        label: "Confirmer mot de passe",
                        type: "password",
                        modelValue: unref(form).passwordConfirmation,
                        "onUpdate:modelValue": ($event) => unref(form).passwordConfirmation = $event,
                        error: unref(form).errors.passwordConfirmation
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error"])
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                createVNode(_component_CardFooter, null, {
                  default: withCtx(() => [
                    createCommentVNode(" submit "),
                    createVNode(_component_Button, {
                      type: "submit",
                      class: "w-full",
                      disabled: unref(form).processing
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Créer mon compte")
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
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("inertia/pages/auth/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_1 as _
};

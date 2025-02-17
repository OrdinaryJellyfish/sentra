/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, o);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ }),

/***/ "./src/admin/SettingsPage.tsx":
/*!************************************!*\
  !*** ./src/admin/SettingsPage.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SettingsPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/admin/components/ExtensionPage */ "flarum/admin/components/ExtensionPage");
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/utils/ItemList */ "flarum/common/utils/ItemList");
/* harmony import */ var flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ContentSafetyModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ContentSafetyModal */ "./src/admin/components/ContentSafetyModal.tsx");
/* harmony import */ var _components_PostShieldModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/PostShieldModal */ "./src/admin/components/PostShieldModal.tsx");

/*
 * Sentra - Intelligent community management and moderation for Flarum.
 * Copyright (C) 2025  Tristian Kelly <me@ordinaryjellyfish.xyz>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */







var SettingsPage = /*#__PURE__*/function (_ExtensionPage) {
  function SettingsPage() {
    return _ExtensionPage.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SettingsPage, _ExtensionPage);
  var _proto = SettingsPage.prototype;
  _proto.content = function content() {
    return m("div", {
      className: "ExtensionPage-settings"
    }, m("div", {
      className: "container"
    }, m("h2", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("ordinaryjellyfish-sentra.admin.services.heading")), this.serviceItems().toArray().map(function (_ref) {
      var label = _ref.label,
        modal = _ref.modal;
      return m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
        className: "Button",
        onclick: function onclick() {
          return flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().modal.show(modal);
        }
      }, label);
    }), m("h2", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("ordinaryjellyfish-sentra.admin.modules.heading")), this.moduleItems().toArray().map(function (_ref2) {
      var label = _ref2.label,
        modal = _ref2.modal;
      return m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
        className: "Button",
        onclick: function onclick() {
          return flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().modal.show(modal);
        }
      }, label);
    })));
  };
  _proto.serviceItems = function serviceItems() {
    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default())();
    items.add('content_safety', {
      label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('ordinaryjellyfish-sentra.admin.services.content_safety'),
      modal: _components_ContentSafetyModal__WEBPACK_IMPORTED_MODULE_5__["default"]
    });
    return items;
  };
  _proto.moduleItems = function moduleItems() {
    var items = new (flarum_common_utils_ItemList__WEBPACK_IMPORTED_MODULE_4___default())();
    items.add('post_shield', {
      label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('ordinaryjellyfish-sentra.admin.modules.post_shield'),
      modal: _components_PostShieldModal__WEBPACK_IMPORTED_MODULE_6__["default"]
    });
    return items;
  };
  return SettingsPage;
}((flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/admin/components/ContentSafetyModal.tsx":
/*!*****************************************************!*\
  !*** ./src/admin/components/ContentSafetyModal.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContentSafetyModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ServiceModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ServiceModal */ "./src/admin/components/ServiceModal.tsx");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Switch */ "flarum/common/components/Switch");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_3__);

/*
 * Sentra - Intelligent community management and moderation for Flarum.
 * Copyright (C) 2025  Tristian Kelly <me@ordinaryjellyfish.xyz>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */




var ContentSafetyModal = /*#__PURE__*/function (_ServiceModal) {
  function ContentSafetyModal() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _ServiceModal.call.apply(_ServiceModal, [this].concat(args)) || this;
    _this.key = 'content_safety';
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ContentSafetyModal, _ServiceModal);
  var _proto = ContentSafetyModal.prototype;
  _proto.form = function form() {
    var imageSetting = "ordinaryjellyfish-sentra.services." + this.key + ".analyze_images";
    var imageValue = this.setting(imageSetting)();
    return [m((flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_3___default()), {
      state: !!imageValue && imageValue !== '0',
      onchange: this.settings[imageSetting]
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('ordinaryjellyfish-sentra.admin.services.content_safety_settings.analyze_images')), this.apiKeyField(), this.endpointField()];
  };
  return ContentSafetyModal;
}(_ServiceModal__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./src/admin/components/ModuleModal.tsx":
/*!**********************************************!*\
  !*** ./src/admin/components/ModuleModal.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ModuleModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_admin_components_SettingsModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/admin/components/SettingsModal */ "flarum/admin/components/SettingsModal");
/* harmony import */ var flarum_admin_components_SettingsModal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_SettingsModal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Alert */ "flarum/common/components/Alert");
/* harmony import */ var flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Switch */ "flarum/common/components/Switch");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_4__);

/*
 * Sentra - Intelligent community management and moderation for Flarum.
 * Copyright (C) 2025  Tristian Kelly <me@ordinaryjellyfish.xyz>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */





var ModuleModal = /*#__PURE__*/function (_SettingsModal) {
  function ModuleModal() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _SettingsModal.call.apply(_SettingsModal, [this].concat(args)) || this;
    _this.key = '';
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ModuleModal, _SettingsModal);
  var _proto = ModuleModal.prototype;
  _proto.className = function className() {
    return 'Modal--large';
  };
  _proto.title = function title() {
    return flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("ordinaryjellyfish-sentra.admin.modules." + this.key);
  };
  _proto.helpText = function helpText() {
    return flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("ordinaryjellyfish-sentra.admin.modules." + this.key + "_help");
  };
  _proto.dependencies = function dependencies() {
    return [];
  };
  _proto.areRequiredServicesEnabled = function areRequiredServicesEnabled() {
    var _this2 = this;
    return this.dependencies().every(function (service) {
      return _this2.setting("ordinaryjellyfish-sentra.services." + service + ".enabled")() === '1';
    });
  };
  _proto.content = function content() {
    var setting = "ordinaryjellyfish-sentra.modules." + this.key + ".enabled";
    var value = this.setting(setting)();
    var requiredServices = this.dependencies();
    var allServicesEnabled = this.areRequiredServicesEnabled();
    return m("div", {
      className: "Modal-body"
    }, m("p", {
      className: "helpText"
    }, this.helpText()), requiredServices.length > 0 && m("p", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('ordinaryjellyfish-sentra.admin.modules.requires', {
      services: requiredServices.map(function (service) {
        return flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("ordinaryjellyfish-sentra.admin.services." + service);
      }).join(', ')
    })), allServicesEnabled ? m("div", {
      className: "Form"
    }, m("div", {
      className: "Form-group"
    }, m((flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_4___default()), {
      state: !!value && value !== '0',
      onchange: this.settings[setting],
      disabled: !allServicesEnabled
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("ordinaryjellyfish-sentra.admin.enable"))), m("div", {
      className: "Form-group"
    }, this.form()), m("div", {
      className: "Form-group"
    }, this.submitButton())) : m((flarum_common_components_Alert__WEBPACK_IMPORTED_MODULE_3___default()), {
      dismissable: false,
      type: "error"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('ordinaryjellyfish-sentra.admin.modules.requires_error')));
  };
  _proto.onsaved = function onsaved() {
    window.location.reload();
  };
  return ModuleModal;
}((flarum_admin_components_SettingsModal__WEBPACK_IMPORTED_MODULE_2___default()));
ModuleModal.isDismissible = true;


/***/ }),

/***/ "./src/admin/components/PostShieldModal.tsx":
/*!**************************************************!*\
  !*** ./src/admin/components/PostShieldModal.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostShieldModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ModuleModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModuleModal */ "./src/admin/components/ModuleModal.tsx");
/* harmony import */ var flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Select */ "flarum/common/components/Select");
/* harmony import */ var flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_3__);

/*
 * Sentra - Intelligent community management and moderation for Flarum.
 * Copyright (C) 2025  Tristian Kelly <me@ordinaryjellyfish.xyz>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */




var PostShieldModal = /*#__PURE__*/function (_ModuleModal) {
  function PostShieldModal() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _ModuleModal.call.apply(_ModuleModal, [this].concat(args)) || this;
    _this.key = 'post_shield';
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PostShieldModal, _ModuleModal);
  var _proto = PostShieldModal.prototype;
  _proto.dependencies = function dependencies() {
    return ['content_safety'];
  };
  _proto.form = function form() {
    return [m("h3", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('ordinaryjellyfish-sentra.admin.modules.post_shield_settings.harm_categories')), this.harmCategories()];
  };
  _proto.harmCategories = function harmCategories() {
    var _this2 = this;
    var categories = ['Hate', 'Sexual', 'Violence', 'SelfHarm'];
    return categories.map(function (category) {
      var severitySetting = "ordinaryjellyfish-sentra.modules." + _this2.key + ".categories." + category + ".severity";
      return m("div", {
        className: "Form-group"
      }, m("label", {
        className: "checkbox"
      }, m("input", {
        type: "checkbox",
        bidi: _this2.setting("ordinaryjellyfish-sentra.modules." + _this2.key + ".categories." + category + ".enabled")
      }), flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("ordinaryjellyfish-sentra.lib.post_shield." + category)), m("div", {
        className: "helpText"
      }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("ordinaryjellyfish-sentra.lib.post_shield." + category + "_help")), m("label", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('ordinaryjellyfish-sentra.admin.modules.post_shield_settings.severity_level')), m((flarum_common_components_Select__WEBPACK_IMPORTED_MODULE_3___default()), {
        options: {
          2: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('ordinaryjellyfish-sentra.admin.modules.post_shield_settings.severity_level_low'),
          4: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('ordinaryjellyfish-sentra.admin.modules.post_shield_settings.severity_level_medium'),
          6: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('ordinaryjellyfish-sentra.admin.modules.post_shield_settings.severity_level_high')
        },
        onchange: _this2.settings[severitySetting],
        value: _this2.setting(severitySetting)()
      }));
    });
  };
  return PostShieldModal;
}(_ModuleModal__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./src/admin/components/ServiceModal.tsx":
/*!***********************************************!*\
  !*** ./src/admin/components/ServiceModal.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ServiceModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_admin_components_SettingsModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/admin/components/SettingsModal */ "flarum/admin/components/SettingsModal");
/* harmony import */ var flarum_admin_components_SettingsModal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_SettingsModal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Switch */ "flarum/common/components/Switch");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_3__);

/*
 * Sentra - Intelligent community management and moderation for Flarum.
 * Copyright (C) 2025  Tristian Kelly <me@ordinaryjellyfish.xyz>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */




var ServiceModal = /*#__PURE__*/function (_SettingsModal) {
  function ServiceModal() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _SettingsModal.call.apply(_SettingsModal, [this].concat(args)) || this;
    _this.key = '';
    return _this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ServiceModal, _SettingsModal);
  var _proto = ServiceModal.prototype;
  _proto.className = function className() {
    return 'Modal--large';
  };
  _proto.title = function title() {
    return flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("ordinaryjellyfish-sentra.admin.services." + this.key);
  };
  _proto.helpText = function helpText() {
    return flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("ordinaryjellyfish-sentra.admin.services." + this.key + "_help");
  };
  _proto.content = function content() {
    var setting = "ordinaryjellyfish-sentra.services." + this.key + ".enabled";
    var value = this.setting(setting)();
    return m("div", {
      className: "Modal-body"
    }, m("p", {
      className: "helpText"
    }, this.helpText()), m("div", {
      className: "Form"
    }, m("div", {
      className: "Form-group"
    }, m((flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_3___default()), {
      state: !!value && value !== '0',
      onchange: this.settings[setting]
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans("ordinaryjellyfish-sentra.admin.enable"))), m("div", {
      className: "Form-group"
    }, this.form()), m("div", {
      className: "Form-group"
    }, this.submitButton())));
  };
  _proto.apiKeyField = function apiKeyField() {
    return m("div", null, m("label", {
      className: "sentra-form-label",
      "for": this.key + "_apiKey"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('ordinaryjellyfish-sentra.admin.api_key')), m("input", {
      type: "text",
      className: "FormControl",
      spellcheck: "false",
      id: this.key + "_apiKey",
      bidi: this.setting("ordinaryjellyfish-sentra.services." + this.key + ".api_key")
    }));
  };
  _proto.endpointField = function endpointField() {
    return m("div", null, m("label", {
      className: "sentra-form-label",
      "for": this.key + "_endpoint"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('ordinaryjellyfish-sentra.admin.endpoint')), m("input", {
      type: "text",
      className: "FormControl",
      spellcheck: "false",
      id: this.key + "_endpoint",
      bidi: this.setting("ordinaryjellyfish-sentra.services." + this.key + ".endpoint")
    }));
  };
  _proto.onsaved = function onsaved() {
    window.location.reload();
  };
  return ServiceModal;
}((flarum_admin_components_SettingsModal__WEBPACK_IMPORTED_MODULE_2___default()));
ServiceModal.isDismissible = true;


/***/ }),

/***/ "./src/admin/index.ts":
/*!****************************!*\
  !*** ./src/admin/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SettingsPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SettingsPage */ "./src/admin/SettingsPage.tsx");
/*
 * Sentra - Intelligent community management and moderation for Flarum.
 * Copyright (C) 2025  Tristian Kelly <me@ordinaryjellyfish.xyz>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */



flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('ordinaryjellyfish/sentra', function () {
  flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().extensionData["for"]('ordinaryjellyfish-sentra').registerPage(_SettingsPage__WEBPACK_IMPORTED_MODULE_1__["default"]).registerPermission({
    icon: 'fas fa-door-open',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('ordinaryjellyfish-sentra.admin.permissions.bypass'),
    permission: 'ordinaryjellyfish-sentra.bypass'
  }, 'moderate');
});

/***/ }),

/***/ "flarum/admin/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['admin/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/app'];

/***/ }),

/***/ "flarum/admin/components/ExtensionPage":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/ExtensionPage']" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/components/ExtensionPage'];

/***/ }),

/***/ "flarum/admin/components/SettingsModal":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/SettingsModal']" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/components/SettingsModal'];

/***/ }),

/***/ "flarum/common/components/Alert":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Alert']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Alert'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/Select":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Select']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Select'];

/***/ }),

/***/ "flarum/common/components/Switch":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Switch']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Switch'];

/***/ }),

/***/ "flarum/common/utils/ItemList":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['common/utils/ItemList']" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/ItemList'];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./admin.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.ts");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=admin.js.map
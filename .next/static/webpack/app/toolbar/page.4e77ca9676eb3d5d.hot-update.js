"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/toolbar/page",{

/***/ "(app-client)/./src/components/Editor/Editor.tsx":
/*!******************************************!*\
  !*** ./src/components/Editor/Editor.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Editor: function() { return /* binding */ Editor; },\n/* harmony export */   useEditor: function() { return /* binding */ useEditor; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/.pnpm/next@13.4.10_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Content */ \"(app-client)/./src/components/Editor/Content.tsx\");\n/* harmony import */ var _Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Toolbar */ \"(app-client)/./src/components/Editor/Toolbar.tsx\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nconst SetStateContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(_c = ()=>undefined);\n_c1 = SetStateContext;\nconst registerContent = (setState)=>(ref)=>{\n        setState((prevState)=>({\n                ...prevState,\n                contentRef: ref\n            }));\n    };\nconst registerToolbar = (setState)=>(ref)=>{\n        setState((prevState)=>({\n                ...prevState,\n                toolbarRef: ref\n            }));\n    };\nconst useEditor = ()=>{\n    _s();\n    const setState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SetStateContext);\n    return {\n        registerContent: registerContent(setState),\n        registerToolbar: registerToolbar(setState)\n    };\n};\n_s(useEditor, \"LBiHbV3AEobkaSAABXiOZZiiJsk=\");\nconst Editor = (param)=>{\n    let { children, ...rest } = param;\n    _s1();\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        contentRef: {\n            current: null\n        },\n        toolbarRef: {\n            current: null\n        }\n    });\n    const selectedText = (selection)=>{\n        if (selection.anchorNode === selection.focusNode) {\n            var _selection_anchorNode_textContent, _selection_anchorNode;\n            return (_selection_anchorNode = selection.anchorNode) === null || _selection_anchorNode === void 0 ? void 0 : (_selection_anchorNode_textContent = _selection_anchorNode.textContent) === null || _selection_anchorNode_textContent === void 0 ? void 0 : _selection_anchorNode_textContent.substring(selection.anchorOffset, selection.focusOffset);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let observer = null;\n        const content = state.contentRef.current;\n        const toolbar = state.toolbarRef.current;\n        const handleMutation = (records)=>{\n            if (content !== null) {\n                if (content.childElementCount === 0) {\n                    resetContent();\n                }\n            }\n        };\n        const containsStrongTag = (node)=>{\n            if (node.nodeName === \"STRONG\") {\n                return true;\n            } else if (node.parentNode) {\n                return containsStrongTag(node.parentNode);\n            }\n            return false;\n        };\n        const goToNodes = (node, callback)=>{\n            if (!node) return;\n            if (window.getSelection().containsNode(node, true)) {\n                callback(node);\n            }\n            node = node.firstChild;\n            while(node){\n                goToNodes(node, callback);\n                node = node.nextSibling;\n            }\n        };\n        const handleBoldButtonClick = (event)=>{\n            if (event.detail > 0 && event.button === 0) {\n                const selection = window.getSelection();\n                console.log(selection);\n            // https://developer.mozilla.org/docs/Web/API/Selection\n            // if (selection !== null) {\n            //   const strong = document.createElement(\"strong\");\n            //   strong.append(selectedText(selection));\n            //   const p = selection.anchorNode?.parentElement;\n            //   if (selection.anchorOffset < selection.focusOffset) {\n            //     const left = selection.anchorNode?.textContent?.substring(0, selection.anchorOffset);\n            //     const right = selection.focusNode?.textContent?.substring(selection.focusOffset);\n            //     p?.replaceChildren(left, strong, right);\n            //   } else if (selection.anchorOffset > selection.focusOffset) {\n            //     const left = selection.focusNode?.textContent?.substring(0, selection.focusOffset);\n            //     const right = selection.anchorNode?.textContent?.substring(selection.anchorOffset);\n            //     p?.replaceChildren(left, strong, right);\n            //   } else if (selection.anchorOffset === selection.focusOffset) {\n            //     const left = selection.focusNode?.textContent?.substring(0, selection.focusOffset);\n            //     const right = selection.anchorNode?.textContent?.substring(selection.anchorOffset);\n            //     //   p?.replaceChildren(left, strong, right);\n            //     // } else if (selection.anchorOffset < selection.focusOffset && selection.anchorNode.nodeName === \"STRONG\") {\n            //     //   const left = selection.focusNode?.textContent?.substring(0, selection.focusOffset);\n            //     //   const right = selection.anchorNode?.textContent?.substring(selection.anchorOffset);\n            //     p?.replaceChildren(left, strong, right);\n            //     //bonjour a tous <strong>je suis</strong>quentin ferrari\n            //     //bonjour<strong>a tous</strong><strong>je suis</strong><strong>quentin</strong>ferrari -> pratique pour italique\n            //     //bonjour<strong>a tous je</strong>gh -> plus propre\n            //   }\n            // }\n            }\n        // const strong = document.createElement(\"strong\");\n        // strong.innerText = selectedText;\n        // if (event.detail > 0 && event.button === 0 && isBoldActivated === false) {\n        //   // TODo\n        //   console.log(\"bold\", strong);\n        //   console.log(\"selected\", selectedText);\n        //   content?.replaceChild(strong, content.lastChild);\n        //   setBoldActivated(!isBoldActivated);\n        // } else if (event.detail > 0 && event.button === 0 && isBoldActivated === true) {\n        //   // TODO\n        //   strong?.remove();\n        //   setBoldActivated(!isBoldActivated);\n        //   console.log(\"bold\", isBoldActivated);\n        //   console.log(\"bold\", \"done\");\n        // }\n        };\n        const handleBoldButtonKeyUp = (event)=>{\n            const strong1 = document.createElement(\"strong\");\n            strong1.innerText = content;\n            if (event.code === \"Enter\" || event.code === \"Space\") {\n                // TODO\n                console.log(\"bold\", strong1);\n                content.append(strong1);\n                setBoldActivated(!isBoldActivated);\n                console.log(\"registercontent\", registerContent);\n                console.log(\"content\", content);\n            } else if (event.detail > 0 && event.button === 0 && isBoldActivated === true) {\n                var // TODO\n                _strong;\n                (_strong = strong1) === null || _strong === void 0 ? void 0 : _strong.remove();\n                setBoldActivated(!isBoldActivated);\n                console.log(\"bold\", isBoldActivated);\n                console.log(\"bold\", \"done\");\n            }\n        };\n        const handleItalicButtonClick = (event)=>{\n            const italic = document.createElement(\"i\");\n            italic.innerText = content;\n            if (event.detail > 0 && event.button === 0 && isItalicActivated === false) {\n                // TODo\n                console.log(\"italic\", italic);\n                content.append(italic);\n                setItalicActivated(!isItalicActivated);\n            } else if (event.detail > 0 && event.button === 0 && isItalicActivated === true) {\n                var // TODO\n                _strong;\n                (_strong = strong) === null || _strong === void 0 ? void 0 : _strong.remove();\n                setItalicActivated(!isItalicActivated);\n                console.log(\"italic\", isitalicActivated);\n                console.log(\"italic\", \"done\");\n            }\n        };\n        const handleItalicButtonKeyUp = (event)=>{\n            const italic = document.createElement(\"i\");\n            italic.innerText = content;\n            if (event.code === \"Enter\" || event.code === \"Space\") {\n                // TODO\n                console.log(\"italic\", italic);\n                content.append(italic);\n                setItalicActivated(!isItalicActivated);\n            } else if (event.detail > 0 && event.button === 0 && isItalicActivated === true) {\n                var // TODO\n                _strong;\n                (_strong = strong) === null || _strong === void 0 ? void 0 : _strong.remove();\n                setItalicActivated(!isItalicActivated);\n                console.log(\"italic\", isitalicActivated);\n                console.log(\"italic\", \"done\");\n            }\n        };\n        const resetContent = ()=>{\n            const p = document.createElement(\"p\");\n            p.append(document.createElement(\"br\"));\n            content.append(p);\n        };\n        if (content !== null) {\n            const observer = new MutationObserver(handleMutation);\n            observer.observe(content, {\n                childList: true\n            });\n            resetContent();\n        }\n        if (toolbar !== null) {\n            const boldButton = toolbar.querySelector(\"[aria-label='Gras']\");\n            const italicButton = toolbar.querySelector(\"[aria-label='Italique']\");\n            if (boldButton !== null) {\n                boldButton.addEventListener(\"click\", handleBoldButtonClick);\n                boldButton.addEventListener(\"keyup\", handleBoldButtonKeyUp);\n            }\n            if (italicButton !== null) {\n                italicButton.addEventListener(\"click\", handleItalicButtonClick);\n                italicButton.addEventListener(\"keyup\", handleItalicButtonKeyUp);\n            }\n        }\n        return ()=>{\n            const toolbar = state.toolbarRef.current;\n            if (observer !== null) {\n                observer.disconnect();\n            }\n            if (toolbar !== null) {\n                const boldButton = toolbar.querySelector(\"[aria-label='Gras']\");\n                const italicButton = toolbar.querySelector(\"[aria-label='Italique']\");\n                if (boldButton !== null) {\n                    boldButton.removeEventListener(\"click\", handleBoldButtonClick);\n                    boldButton.removeEventListener(\"keyup\", handleBoldButtonKeyUp);\n                }\n                if (italicButton !== null) {\n                    italicButton.removeEventListener(\"click\", handleItalicButtonClick);\n                    italicButton.removeEventListener(\"keyup\", handleItalicButtonKeyUp);\n                }\n            }\n        };\n    }, [\n        state.contentRef,\n        state.toolbarRef\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ...rest,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SetStateContext.Provider, {\n            value: setState,\n            children: children\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ferra\\\\inolib\\\\Inolib-backoffice\\\\src\\\\components\\\\Editor\\\\Editor.tsx\",\n            lineNumber: 261,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ferra\\\\inolib\\\\Inolib-backoffice\\\\src\\\\components\\\\Editor\\\\Editor.tsx\",\n        lineNumber: 260,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(Editor, \"M2XdCX9mdVAzolzQSrB9/lh9RhU=\");\n_c2 = Editor;\nEditor.Content = _Content__WEBPACK_IMPORTED_MODULE_2__.Content;\nEditor.Toolbar = _Toolbar__WEBPACK_IMPORTED_MODULE_3__.Toolbar;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"SetStateContext$createContext\");\n$RefreshReg$(_c1, \"SetStateContext\");\n$RefreshReg$(_c2, \"Editor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvRWRpdG9yL0VkaXRvci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUWU7QUFFc0M7QUFDQTtBQVdyRCxNQUFNTSxnQ0FBa0JOLG9EQUFhQSxNQUFXLElBQU1POztBQUV0RCxNQUFNQyxrQkFBa0IsQ0FBQ0MsV0FBdUIsQ0FBQ0M7UUFDL0NELFNBQVMsQ0FBQ0UsWUFBZTtnQkFBRSxHQUFHQSxTQUFTO2dCQUFFQyxZQUFZRjtZQUFJO0lBQzNEO0FBRUEsTUFBTUcsa0JBQWtCLENBQUNKLFdBQXVCLENBQUNDO1FBQy9DRCxTQUFTLENBQUNFLFlBQWU7Z0JBQUUsR0FBR0EsU0FBUztnQkFBRUcsWUFBWUo7WUFBSTtJQUMzRDtBQUVPLE1BQU1LLFlBQVk7O0lBQ3ZCLE1BQU1OLFdBQVdSLGlEQUFVQSxDQUFDSztJQUU1QixPQUFPO1FBQ0xFLGlCQUFpQkEsZ0JBQWdCQztRQUNqQ0ksaUJBQWlCQSxnQkFBZ0JKO0lBQ25DO0FBQ0YsRUFBRTtHQVBXTTtBQVNOLE1BQU1DLFNBQVM7UUFBQyxFQUFFQyxRQUFRLEVBQUUsR0FBR0MsTUFBYTs7SUFDakQsTUFBTSxDQUFDQyxPQUFPVixTQUFTLEdBQUdOLCtDQUFRQSxDQUFRO1FBQ3hDUyxZQUFZO1lBQUVRLFNBQVM7UUFBSztRQUM1Qk4sWUFBWTtZQUFFTSxTQUFTO1FBQUs7SUFDOUI7SUFFQSxNQUFNQyxlQUFlLENBQUNDO1FBQ3BCLElBQUlBLFVBQVVDLFVBQVUsS0FBS0QsVUFBVUUsU0FBUyxFQUFFO2dCQUN6Q0YsbUNBQUFBO1lBQVAsUUFBT0Esd0JBQUFBLFVBQVVDLFVBQVUsY0FBcEJELDZDQUFBQSxvQ0FBQUEsc0JBQXNCRyxXQUFXLGNBQWpDSCx3REFBQUEsa0NBQW1DSSxTQUFTLENBQUNKLFVBQVVLLFlBQVksRUFBRUwsVUFBVU0sV0FBVztRQUNuRztJQUNGO0lBRUExQixnREFBU0EsQ0FBQztRQUNSLElBQUkyQixXQUE2QjtRQUVqQyxNQUFNQyxV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TCxVQUFVO0tBQUM7SUFFdkMscUJBQ0UsOERBQUNpRTtRQUFLLEdBQUc3RCxJQUFJO2tCQUNYLDRFQUFDWixnQkFBZ0IwRSxRQUFRO1lBQUNDLE9BQU94RTtzQkFBV1E7Ozs7Ozs7Ozs7O0FBR2xELEVBQUU7SUE5TldEO01BQUFBO0FBZ09iQSxPQUFPWixPQUFPLEdBQUdBLDZDQUFPQTtBQUN4QlksT0FBT1gsT0FBTyxHQUFHQSw2Q0FBT0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRWRpdG9yL0VkaXRvci50c3g/YWNhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjcmVhdGVDb250ZXh0LFxuICB1c2VDb250ZXh0LFxuICB1c2VFZmZlY3QsXG4gIHVzZVN0YXRlLFxuICB0eXBlIERpc3BhdGNoLFxuICB0eXBlIEhUTUxBdHRyaWJ1dGVzLFxuICB0eXBlIFNldFN0YXRlQWN0aW9uLFxufSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgQ29udGVudCwgdHlwZSBDb250ZW50UmVmIH0gZnJvbSBcIi4vQ29udGVudFwiO1xuaW1wb3J0IHsgVG9vbGJhciwgdHlwZSBUb29sYmFyUmVmIH0gZnJvbSBcIi4vVG9vbGJhclwiO1xuXG50eXBlIFByb3BzID0gUmVhZG9ubHk8SFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+PjtcblxudHlwZSBTZXRTdGF0ZSA9IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPFN0YXRlPj47XG5cbnR5cGUgU3RhdGUgPSBSZWFkb25seTx7XG4gIGNvbnRlbnRSZWY6IENvbnRlbnRSZWY7XG4gIHRvb2xiYXJSZWY6IFRvb2xiYXJSZWY7XG59PjtcblxuY29uc3QgU2V0U3RhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxTZXRTdGF0ZT4oKCkgPT4gdW5kZWZpbmVkKTtcblxuY29uc3QgcmVnaXN0ZXJDb250ZW50ID0gKHNldFN0YXRlOiBTZXRTdGF0ZSkgPT4gKHJlZjogQ29udGVudFJlZikgPT4ge1xuICBzZXRTdGF0ZSgocHJldlN0YXRlKSA9PiAoeyAuLi5wcmV2U3RhdGUsIGNvbnRlbnRSZWY6IHJlZiB9KSk7XG59O1xuXG5jb25zdCByZWdpc3RlclRvb2xiYXIgPSAoc2V0U3RhdGU6IFNldFN0YXRlKSA9PiAocmVmOiBUb29sYmFyUmVmKSA9PiB7XG4gIHNldFN0YXRlKChwcmV2U3RhdGUpID0+ICh7IC4uLnByZXZTdGF0ZSwgdG9vbGJhclJlZjogcmVmIH0pKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VFZGl0b3IgPSAoKSA9PiB7XG4gIGNvbnN0IHNldFN0YXRlID0gdXNlQ29udGV4dChTZXRTdGF0ZUNvbnRleHQpO1xuXG4gIHJldHVybiB7XG4gICAgcmVnaXN0ZXJDb250ZW50OiByZWdpc3RlckNvbnRlbnQoc2V0U3RhdGUpLFxuICAgIHJlZ2lzdGVyVG9vbGJhcjogcmVnaXN0ZXJUb29sYmFyKHNldFN0YXRlKSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBFZGl0b3IgPSAoeyBjaGlsZHJlbiwgLi4ucmVzdCB9OiBQcm9wcykgPT4ge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlPFN0YXRlPih7XG4gICAgY29udGVudFJlZjogeyBjdXJyZW50OiBudWxsIH0sXG4gICAgdG9vbGJhclJlZjogeyBjdXJyZW50OiBudWxsIH0sXG4gIH0pO1xuXG4gIGNvbnN0IHNlbGVjdGVkVGV4dCA9IChzZWxlY3Rpb246IFNlbGVjdGlvbikgPT4ge1xuICAgIGlmIChzZWxlY3Rpb24uYW5jaG9yTm9kZSA9PT0gc2VsZWN0aW9uLmZvY3VzTm9kZSkge1xuICAgICAgcmV0dXJuIHNlbGVjdGlvbi5hbmNob3JOb2RlPy50ZXh0Q29udGVudD8uc3Vic3RyaW5nKHNlbGVjdGlvbi5hbmNob3JPZmZzZXQsIHNlbGVjdGlvbi5mb2N1c09mZnNldCk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IG9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBzdGF0ZS5jb250ZW50UmVmLmN1cnJlbnQ7XG4gICAgY29uc3QgdG9vbGJhciA9IHN0YXRlLnRvb2xiYXJSZWYuY3VycmVudDtcblxuICAgIGNvbnN0IGhhbmRsZU11dGF0aW9uID0gKHJlY29yZHM6IE11dGF0aW9uUmVjb3JkW10pID0+IHtcbiAgICAgIGlmIChjb250ZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGlmIChjb250ZW50LmNoaWxkRWxlbWVudENvdW50ID09PSAwKSB7XG4gICAgICAgICAgcmVzZXRDb250ZW50KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgY29udGFpbnNTdHJvbmdUYWcgPSAobm9kZSkgPT4ge1xuICAgICAgaWYgKG5vZGUubm9kZU5hbWUgPT09IFwiU1RST05HXCIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2UgaWYgKG5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgICByZXR1cm4gY29udGFpbnNTdHJvbmdUYWcobm9kZS5wYXJlbnROb2RlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ29Ub05vZGVzID0gKG5vZGUsIGNhbGxiYWNrKSA9PiB7XG4gICAgICBpZiAoIW5vZGUpIHJldHVybjtcblxuICAgICAgaWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5jb250YWluc05vZGUobm9kZSwgdHJ1ZSkpIHtcbiAgICAgICAgY2FsbGJhY2sobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIG5vZGUgPSBub2RlLmZpcnN0Q2hpbGQ7XG4gICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICBnb1RvTm9kZXMobm9kZSwgY2FsbGJhY2spO1xuICAgICAgICBub2RlID0gbm9kZS5uZXh0U2libGluZztcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQm9sZEJ1dHRvbkNsaWNrID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQuZGV0YWlsID4gMCAmJiBldmVudC5idXR0b24gPT09IDApIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGlvbik7XG5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZG9jcy9XZWIvQVBJL1NlbGVjdGlvblxuXG4gICAgICAgIC8vIGlmIChzZWxlY3Rpb24gIT09IG51bGwpIHtcbiAgICAgICAgLy8gICBjb25zdCBzdHJvbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3Ryb25nXCIpO1xuICAgICAgICAvLyAgIHN0cm9uZy5hcHBlbmQoc2VsZWN0ZWRUZXh0KHNlbGVjdGlvbikpO1xuXG4gICAgICAgIC8vICAgY29uc3QgcCA9IHNlbGVjdGlvbi5hbmNob3JOb2RlPy5wYXJlbnRFbGVtZW50O1xuXG4gICAgICAgIC8vICAgaWYgKHNlbGVjdGlvbi5hbmNob3JPZmZzZXQgPCBzZWxlY3Rpb24uZm9jdXNPZmZzZXQpIHtcbiAgICAgICAgLy8gICAgIGNvbnN0IGxlZnQgPSBzZWxlY3Rpb24uYW5jaG9yTm9kZT8udGV4dENvbnRlbnQ/LnN1YnN0cmluZygwLCBzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0KTtcbiAgICAgICAgLy8gICAgIGNvbnN0IHJpZ2h0ID0gc2VsZWN0aW9uLmZvY3VzTm9kZT8udGV4dENvbnRlbnQ/LnN1YnN0cmluZyhzZWxlY3Rpb24uZm9jdXNPZmZzZXQpO1xuXG4gICAgICAgIC8vICAgICBwPy5yZXBsYWNlQ2hpbGRyZW4obGVmdCwgc3Ryb25nLCByaWdodCk7XG4gICAgICAgIC8vICAgfSBlbHNlIGlmIChzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0ID4gc2VsZWN0aW9uLmZvY3VzT2Zmc2V0KSB7XG4gICAgICAgIC8vICAgICBjb25zdCBsZWZ0ID0gc2VsZWN0aW9uLmZvY3VzTm9kZT8udGV4dENvbnRlbnQ/LnN1YnN0cmluZygwLCBzZWxlY3Rpb24uZm9jdXNPZmZzZXQpO1xuICAgICAgICAvLyAgICAgY29uc3QgcmlnaHQgPSBzZWxlY3Rpb24uYW5jaG9yTm9kZT8udGV4dENvbnRlbnQ/LnN1YnN0cmluZyhzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0KTtcblxuICAgICAgICAvLyAgICAgcD8ucmVwbGFjZUNoaWxkcmVuKGxlZnQsIHN0cm9uZywgcmlnaHQpO1xuICAgICAgICAvLyAgIH0gZWxzZSBpZiAoc2VsZWN0aW9uLmFuY2hvck9mZnNldCA9PT0gc2VsZWN0aW9uLmZvY3VzT2Zmc2V0KSB7XG4gICAgICAgIC8vICAgICBjb25zdCBsZWZ0ID0gc2VsZWN0aW9uLmZvY3VzTm9kZT8udGV4dENvbnRlbnQ/LnN1YnN0cmluZygwLCBzZWxlY3Rpb24uZm9jdXNPZmZzZXQpO1xuICAgICAgICAvLyAgICAgY29uc3QgcmlnaHQgPSBzZWxlY3Rpb24uYW5jaG9yTm9kZT8udGV4dENvbnRlbnQ/LnN1YnN0cmluZyhzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0KTtcblxuICAgICAgICAvLyAgICAgLy8gICBwPy5yZXBsYWNlQ2hpbGRyZW4obGVmdCwgc3Ryb25nLCByaWdodCk7XG4gICAgICAgIC8vICAgICAvLyB9IGVsc2UgaWYgKHNlbGVjdGlvbi5hbmNob3JPZmZzZXQgPCBzZWxlY3Rpb24uZm9jdXNPZmZzZXQgJiYgc2VsZWN0aW9uLmFuY2hvck5vZGUubm9kZU5hbWUgPT09IFwiU1RST05HXCIpIHtcbiAgICAgICAgLy8gICAgIC8vICAgY29uc3QgbGVmdCA9IHNlbGVjdGlvbi5mb2N1c05vZGU/LnRleHRDb250ZW50Py5zdWJzdHJpbmcoMCwgc2VsZWN0aW9uLmZvY3VzT2Zmc2V0KTtcbiAgICAgICAgLy8gICAgIC8vICAgY29uc3QgcmlnaHQgPSBzZWxlY3Rpb24uYW5jaG9yTm9kZT8udGV4dENvbnRlbnQ/LnN1YnN0cmluZyhzZWxlY3Rpb24uYW5jaG9yT2Zmc2V0KTtcblxuICAgICAgICAvLyAgICAgcD8ucmVwbGFjZUNoaWxkcmVuKGxlZnQsIHN0cm9uZywgcmlnaHQpO1xuICAgICAgICAvLyAgICAgLy9ib25qb3VyIGEgdG91cyA8c3Ryb25nPmplIHN1aXM8L3N0cm9uZz5xdWVudGluIGZlcnJhcmlcbiAgICAgICAgLy8gICAgIC8vYm9uam91cjxzdHJvbmc+YSB0b3VzPC9zdHJvbmc+PHN0cm9uZz5qZSBzdWlzPC9zdHJvbmc+PHN0cm9uZz5xdWVudGluPC9zdHJvbmc+ZmVycmFyaSAtPiBwcmF0aXF1ZSBwb3VyIGl0YWxpcXVlXG4gICAgICAgIC8vICAgICAvL2JvbmpvdXI8c3Ryb25nPmEgdG91cyBqZTwvc3Ryb25nPmdoIC0+IHBsdXMgcHJvcHJlXG4gICAgICAgIC8vICAgfVxuICAgICAgICAvLyB9XG4gICAgICB9XG5cbiAgICAgIC8vIGNvbnN0IHN0cm9uZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIik7XG4gICAgICAvLyBzdHJvbmcuaW5uZXJUZXh0ID0gc2VsZWN0ZWRUZXh0O1xuICAgICAgLy8gaWYgKGV2ZW50LmRldGFpbCA+IDAgJiYgZXZlbnQuYnV0dG9uID09PSAwICYmIGlzQm9sZEFjdGl2YXRlZCA9PT0gZmFsc2UpIHtcbiAgICAgIC8vICAgLy8gVE9Eb1xuICAgICAgLy8gICBjb25zb2xlLmxvZyhcImJvbGRcIiwgc3Ryb25nKTtcbiAgICAgIC8vICAgY29uc29sZS5sb2coXCJzZWxlY3RlZFwiLCBzZWxlY3RlZFRleHQpO1xuICAgICAgLy8gICBjb250ZW50Py5yZXBsYWNlQ2hpbGQoc3Ryb25nLCBjb250ZW50Lmxhc3RDaGlsZCk7XG4gICAgICAvLyAgIHNldEJvbGRBY3RpdmF0ZWQoIWlzQm9sZEFjdGl2YXRlZCk7XG4gICAgICAvLyB9IGVsc2UgaWYgKGV2ZW50LmRldGFpbCA+IDAgJiYgZXZlbnQuYnV0dG9uID09PSAwICYmIGlzQm9sZEFjdGl2YXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgLy8gICAvLyBUT0RPXG4gICAgICAvLyAgIHN0cm9uZz8ucmVtb3ZlKCk7XG4gICAgICAvLyAgIHNldEJvbGRBY3RpdmF0ZWQoIWlzQm9sZEFjdGl2YXRlZCk7XG5cbiAgICAgIC8vICAgY29uc29sZS5sb2coXCJib2xkXCIsIGlzQm9sZEFjdGl2YXRlZCk7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKFwiYm9sZFwiLCBcImRvbmVcIik7XG4gICAgICAvLyB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUJvbGRCdXR0b25LZXlVcCA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgY29uc3Qgc3Ryb25nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiKTtcbiAgICAgIHN0cm9uZy5pbm5lclRleHQgPSBjb250ZW50O1xuICAgICAgaWYgKGV2ZW50LmNvZGUgPT09IFwiRW50ZXJcIiB8fCBldmVudC5jb2RlID09PSBcIlNwYWNlXCIpIHtcbiAgICAgICAgLy8gVE9ET1xuICAgICAgICBjb25zb2xlLmxvZyhcImJvbGRcIiwgc3Ryb25nKTtcbiAgICAgICAgY29udGVudC5hcHBlbmQoc3Ryb25nKTtcbiAgICAgICAgc2V0Qm9sZEFjdGl2YXRlZCghaXNCb2xkQWN0aXZhdGVkKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJyZWdpc3RlcmNvbnRlbnRcIiwgcmVnaXN0ZXJDb250ZW50KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJjb250ZW50XCIsIGNvbnRlbnQpO1xuICAgICAgfSBlbHNlIGlmIChldmVudC5kZXRhaWwgPiAwICYmIGV2ZW50LmJ1dHRvbiA9PT0gMCAmJiBpc0JvbGRBY3RpdmF0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgLy8gVE9ET1xuICAgICAgICBzdHJvbmc/LnJlbW92ZSgpO1xuICAgICAgICBzZXRCb2xkQWN0aXZhdGVkKCFpc0JvbGRBY3RpdmF0ZWQpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYm9sZFwiLCBpc0JvbGRBY3RpdmF0ZWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImJvbGRcIiwgXCJkb25lXCIpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVJdGFsaWNCdXR0b25DbGljayA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgY29uc3QgaXRhbGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgICBpdGFsaWMuaW5uZXJUZXh0ID0gY29udGVudDtcbiAgICAgIGlmIChldmVudC5kZXRhaWwgPiAwICYmIGV2ZW50LmJ1dHRvbiA9PT0gMCAmJiBpc0l0YWxpY0FjdGl2YXRlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgLy8gVE9Eb1xuICAgICAgICBjb25zb2xlLmxvZyhcIml0YWxpY1wiLCBpdGFsaWMpO1xuICAgICAgICBjb250ZW50LmFwcGVuZChpdGFsaWMpO1xuICAgICAgICBzZXRJdGFsaWNBY3RpdmF0ZWQoIWlzSXRhbGljQWN0aXZhdGVkKTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQuZGV0YWlsID4gMCAmJiBldmVudC5idXR0b24gPT09IDAgJiYgaXNJdGFsaWNBY3RpdmF0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgLy8gVE9ET1xuICAgICAgICBzdHJvbmc/LnJlbW92ZSgpO1xuICAgICAgICBzZXRJdGFsaWNBY3RpdmF0ZWQoIWlzSXRhbGljQWN0aXZhdGVkKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIml0YWxpY1wiLCBpc2l0YWxpY0FjdGl2YXRlZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaXRhbGljXCIsIFwiZG9uZVwiKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlSXRhbGljQnV0dG9uS2V5VXAgPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGl0YWxpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgICAgaXRhbGljLmlubmVyVGV4dCA9IGNvbnRlbnQ7XG4gICAgICBpZiAoZXZlbnQuY29kZSA9PT0gXCJFbnRlclwiIHx8IGV2ZW50LmNvZGUgPT09IFwiU3BhY2VcIikge1xuICAgICAgICAvLyBUT0RPXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaXRhbGljXCIsIGl0YWxpYyk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKGl0YWxpYyk7XG4gICAgICAgIHNldEl0YWxpY0FjdGl2YXRlZCghaXNJdGFsaWNBY3RpdmF0ZWQpO1xuICAgICAgfSBlbHNlIGlmIChldmVudC5kZXRhaWwgPiAwICYmIGV2ZW50LmJ1dHRvbiA9PT0gMCAmJiBpc0l0YWxpY0FjdGl2YXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAvLyBUT0RPXG4gICAgICAgIHN0cm9uZz8ucmVtb3ZlKCk7XG4gICAgICAgIHNldEl0YWxpY0FjdGl2YXRlZCghaXNJdGFsaWNBY3RpdmF0ZWQpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaXRhbGljXCIsIGlzaXRhbGljQWN0aXZhdGVkKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJpdGFsaWNcIiwgXCJkb25lXCIpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCByZXNldENvbnRlbnQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBwLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xuXG4gICAgICBjb250ZW50LmFwcGVuZChwKTtcbiAgICB9O1xuXG4gICAgaWYgKGNvbnRlbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoaGFuZGxlTXV0YXRpb24pO1xuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShjb250ZW50LCB7IGNoaWxkTGlzdDogdHJ1ZSB9KTtcblxuICAgICAgcmVzZXRDb250ZW50KCk7XG4gICAgfVxuXG4gICAgaWYgKHRvb2xiYXIgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGJvbGRCdXR0b24gPSB0b29sYmFyLnF1ZXJ5U2VsZWN0b3IoXCJbYXJpYS1sYWJlbD0nR3JhcyddXCIpO1xuICAgICAgY29uc3QgaXRhbGljQnV0dG9uID0gdG9vbGJhci5xdWVyeVNlbGVjdG9yKFwiW2FyaWEtbGFiZWw9J0l0YWxpcXVlJ11cIik7XG5cbiAgICAgIGlmIChib2xkQnV0dG9uICE9PSBudWxsKSB7XG4gICAgICAgIGJvbGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUJvbGRCdXR0b25DbGljayk7XG4gICAgICAgIGJvbGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGhhbmRsZUJvbGRCdXR0b25LZXlVcCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGFsaWNCdXR0b24gIT09IG51bGwpIHtcbiAgICAgICAgaXRhbGljQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVJdGFsaWNCdXR0b25DbGljayk7XG4gICAgICAgIGl0YWxpY0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgaGFuZGxlSXRhbGljQnV0dG9uS2V5VXApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCB0b29sYmFyID0gc3RhdGUudG9vbGJhclJlZi5jdXJyZW50O1xuXG4gICAgICBpZiAob2JzZXJ2ZXIgIT09IG51bGwpIHtcbiAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodG9vbGJhciAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBib2xkQnV0dG9uID0gdG9vbGJhci5xdWVyeVNlbGVjdG9yKFwiW2FyaWEtbGFiZWw9J0dyYXMnXVwiKTtcbiAgICAgICAgY29uc3QgaXRhbGljQnV0dG9uID0gdG9vbGJhci5xdWVyeVNlbGVjdG9yKFwiW2FyaWEtbGFiZWw9J0l0YWxpcXVlJ11cIik7XG5cbiAgICAgICAgaWYgKGJvbGRCdXR0b24gIT09IG51bGwpIHtcbiAgICAgICAgICBib2xkQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVCb2xkQnV0dG9uQ2xpY2spO1xuICAgICAgICAgIGJvbGRCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGhhbmRsZUJvbGRCdXR0b25LZXlVcCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXRhbGljQnV0dG9uICE9PSBudWxsKSB7XG4gICAgICAgICAgaXRhbGljQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVJdGFsaWNCdXR0b25DbGljayk7XG4gICAgICAgICAgaXRhbGljQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBoYW5kbGVJdGFsaWNCdXR0b25LZXlVcCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9LCBbc3RhdGUuY29udGVudFJlZiwgc3RhdGUudG9vbGJhclJlZl0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiB7Li4ucmVzdH0+XG4gICAgICA8U2V0U3RhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzZXRTdGF0ZX0+e2NoaWxkcmVufTwvU2V0U3RhdGVDb250ZXh0LlByb3ZpZGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuRWRpdG9yLkNvbnRlbnQgPSBDb250ZW50O1xuRWRpdG9yLlRvb2xiYXIgPSBUb29sYmFyO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb250ZW50IiwiVG9vbGJhciIsIlNldFN0YXRlQ29udGV4dCIsInVuZGVmaW5lZCIsInJlZ2lzdGVyQ29udGVudCIsInNldFN0YXRlIiwicmVmIiwicHJldlN0YXRlIiwiY29udGVudFJlZiIsInJlZ2lzdGVyVG9vbGJhciIsInRvb2xiYXJSZWYiLCJ1c2VFZGl0b3IiLCJFZGl0b3IiLCJjaGlsZHJlbiIsInJlc3QiLCJzdGF0ZSIsImN1cnJlbnQiLCJzZWxlY3RlZFRleHQiLCJzZWxlY3Rpb24iLCJhbmNob3JOb2RlIiwiZm9jdXNOb2RlIiwidGV4dENvbnRlbnQiLCJzdWJzdHJpbmciLCJhbmNob3JPZmZzZXQiLCJmb2N1c09mZnNldCIsIm9ic2VydmVyIiwiY29udGVudCIsInRvb2xiYXIiLCJoYW5kbGVNdXRhdGlvbiIsInJlY29yZHMiLCJjaGlsZEVsZW1lbnRDb3VudCIsInJlc2V0Q29udGVudCIsImNvbnRhaW5zU3Ryb25nVGFnIiwibm9kZSIsIm5vZGVOYW1lIiwicGFyZW50Tm9kZSIsImdvVG9Ob2RlcyIsImNhbGxiYWNrIiwid2luZG93IiwiZ2V0U2VsZWN0aW9uIiwiY29udGFpbnNOb2RlIiwiZmlyc3RDaGlsZCIsIm5leHRTaWJsaW5nIiwiaGFuZGxlQm9sZEJ1dHRvbkNsaWNrIiwiZXZlbnQiLCJkZXRhaWwiLCJidXR0b24iLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQm9sZEJ1dHRvbktleVVwIiwic3Ryb25nIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0IiwiY29kZSIsImFwcGVuZCIsInNldEJvbGRBY3RpdmF0ZWQiLCJpc0JvbGRBY3RpdmF0ZWQiLCJyZW1vdmUiLCJoYW5kbGVJdGFsaWNCdXR0b25DbGljayIsIml0YWxpYyIsImlzSXRhbGljQWN0aXZhdGVkIiwic2V0SXRhbGljQWN0aXZhdGVkIiwiaXNpdGFsaWNBY3RpdmF0ZWQiLCJoYW5kbGVJdGFsaWNCdXR0b25LZXlVcCIsInAiLCJNdXRhdGlvbk9ic2VydmVyIiwib2JzZXJ2ZSIsImNoaWxkTGlzdCIsImJvbGRCdXR0b24iLCJxdWVyeVNlbGVjdG9yIiwiaXRhbGljQnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpc2Nvbm5lY3QiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/components/Editor/Editor.tsx\n"));

/***/ })

});
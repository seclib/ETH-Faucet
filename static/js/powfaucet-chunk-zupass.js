(self.webpackChunkpow_faucet_client=self.webpackChunkpow_faucet_client||[]).push([[609],{9750:function(e,t,n){n.r(t),n.d(t,{PCDRequestType:function(){return E},ZupassLogin:function(){return b}});var o=n(7294),r=n(8515),a=n(4522),s=n(6083),u=n(8609),i=n(3489),l=n(5108);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},p.apply(this,arguments)}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,y(o.key),o)}}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=v(e);if(t){var r=v(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}(this,n)}}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}function g(e,t,n){return(t=y(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){var t=function(e,t){if("object"!==c(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==c(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===c(t)?t:String(t)}var E=function(e){return e.Get="Get",e}({}),b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(b,e);var t,n,v,y=m(b);function b(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,b),g(h(n=y.call(this,e)),"messageEvtListener",void 0),g(h(n),"loginPopop",void 0),n.messageEvtListener=function(e){return n.processWindowMessage(e)},n.state={popupOpen:!1,authInfo:null},n}return t=b,(n=[{key:"componentDidMount",value:function(){if(window.addEventListener("message",this.messageEvtListener),localStorage["zupass.AuthResult"])try{this.processLoginResult(JSON.parse(localStorage["zupass.AuthResult"])),localStorage.removeItem("zupass.AuthResult")}catch(e){l.error("error parsing auth result from localstorage: ",e)}else if(localStorage["zupass.AuthInfo"])try{var e=JSON.parse(localStorage["zupass.AuthInfo"]);this.loadAuthInfo(e)}catch(e){l.error("error parsing auth info from localstorage: ",e)}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("message",this.messageEvtListener),this.loginPopop=null}},{key:"render",value:function(){return o.createElement("div",{className:"faucet-zupass-auth"},o.createElement("div",{className:"auth-icon"},o.createElement("div",{className:"logo logo-zupass",style:{backgroundImage:"url('/images/devconnect-ist.png')"}})),this.state.authInfo?this.renderLoginState():this.renderLoginButton())}},{key:"renderLoginButton",value:function(){var e=this;return o.createElement("div",{className:"auth-field auth-noauth",onClick:function(t){return e.onLoginClick()}},o.createElement("div",null,"DevConnect attendee? Login with your Ticket.",this.props.faucetConfig.modules.zupass.infoHtml?o.createElement(u.Z,{placement:"bottom",overlay:this.renderInfoHtml()},o.createElement("span",{className:"zupass-info-icon"},o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-info-circle",viewBox:"0 0 16 16"},o.createElement("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),o.createElement("path",{d:"m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"})))):null),o.createElement("div",null,o.createElement("a",{href:"#",onClick:function(e){return e.preventDefault()}},this.state.popupOpen?o.createElement("span",{className:"inline-spinner"},o.createElement("img",{src:"/images/spinner.gif",className:"spinner"})):null,"Login with Zupass")))}},{key:"renderLoginState",value:function(){var e=this;return o.createElement("div",{className:"auth-field auth-profile"},o.createElement("div",{className:"auth-info"},"Authenticated with Devconnect Ticket. ",this.props.faucetConfig.modules.zupass.infoHtml?o.createElement(u.Z,{placement:"bottom",overlay:this.renderInfoHtml()},o.createElement("span",{className:"zupass-info-icon"},o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-info-circle",viewBox:"0 0 16 16"},o.createElement("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),o.createElement("path",{d:"m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"})))):null),o.createElement("div",{className:"auth-logout"},o.createElement("a",{href:"#",onClick:function(t){t.preventDefault(),e.onLogoutClick()}},"Logout")),o.createElement("div",{className:"auth-info"},"Attendee ID:",o.createElement(u.Z,{placement:"bottom",delay:{show:250,hide:400},overlay:function(t){return e.renderZupassTicketInfo(e.state.authInfo,t)}},o.createElement("span",{className:"auth-ident-truncated"},this.state.authInfo.attendeeId))))}},{key:"renderZupassTicketInfo",value:function(e,t){return e?o.createElement(i.Z,p({id:"zupass-tooltip"},t),o.createElement("div",{className:"zupass-info"},o.createElement("table",null,o.createElement("tbody",null,o.createElement("tr",null,o.createElement("td",{className:"zupass-title"},"TicketId:"),o.createElement("td",{className:"zupass-value"},e.ticketId)),o.createElement("tr",null,o.createElement("td",{className:"zupass-title"},"EventId:"),o.createElement("td",{className:"zupass-value"},e.eventId)),o.createElement("tr",null,o.createElement("td",{className:"zupass-title"},"ProductId:"),o.createElement("td",{className:"zupass-value"},e.productId)),o.createElement("tr",null,o.createElement("td",{className:"zupass-title"},"Attendee:"),o.createElement("td",{className:"zupass-value"},e.attendeeId)))))):null}},{key:"renderInfoHtml",value:function(){return this.props.faucetConfig.modules.zupass.infoHtml?o.createElement(i.Z,{id:"zupass-tooltip"},o.createElement("div",{className:"zupass-info",dangerouslySetInnerHTML:{__html:this.props.faucetConfig.modules.zupass.infoHtml}})):null}},{key:"getToken",value:function(){var e;return null===(e=this.state.authInfo)||void 0===e?void 0:e.token}},{key:"onLoginClick",value:function(){var e=this,t={ticket:{argumentType:s.ArgumentTypeName.PCD,pcdType:r.EdDSATicketPCDPackage.name,value:void 0,userProvided:!0,validatorParams:{eventIds:this.props.faucetConfig.modules.zupass.event.eventIds,productIds:this.props.faucetConfig.modules.zupass.event.productIds,notFoundMessage:"No eligible PCDs found"}},identity:{argumentType:s.ArgumentTypeName.PCD,pcdType:a.SemaphoreIdentityPCDPackage.name,value:void 0,userProvided:!0},validEventIds:{argumentType:s.ArgumentTypeName.StringArray,value:0!=this.props.faucetConfig.modules.zupass.event.eventIds.length?this.props.faucetConfig.modules.zupass.event.eventIds:void 0,userProvided:!1},fieldsToReveal:{argumentType:s.ArgumentTypeName.ToggleList,value:{revealTicketId:!0,revealEventId:!0,revealAttendeeSemaphoreId:!0,revealProductId:!0},userProvided:!1},externalNullifier:{argumentType:s.ArgumentTypeName.BigInt,value:this.props.faucetConfig.modules.zupass.nullifier,userProvided:!1},watermark:{argumentType:s.ArgumentTypeName.BigInt,value:this.props.faucetConfig.modules.zupass.watermark,userProvided:!1}},n={type:E.Get,returnUrl:this.props.faucetConfig.modules.zupass.redirectUrl||this.props.faucetContext.faucetApi.getApiUrl("/zupassCallback",!0),args:t,pcdType:"zk-eddsa-event-ticket-pcd",options:{genericProveScreen:!0,title:"ZKEdDSA Proof",description:"zkeddsa ticket pcd request"}},o=encodeURIComponent(JSON.stringify(n)),u="".concat(this.props.faucetConfig.modules.zupass.url,"#/prove?request=").concat(o);this.loginPopop=window.open(u,"_blank","width=450,height=600,top=100,popup"),this.state.popupOpen||this.setState({popupOpen:!0},(function(){e.pollPopupState()}))}},{key:"onLogoutClick",value:function(){localStorage.removeItem("zupass.AuthInfo"),this.setState({authInfo:null})}},{key:"pollPopupState",value:function(){var e=this;this.loginPopop&&this.state.popupOpen&&(this.loginPopop.closed?(this.setState({popupOpen:!1}),this.loginPopop=null):setTimeout((function(){return e.pollPopupState()}),1e3))}},{key:"processWindowMessage",value:function(e){e.data&&"object"===c(e.data)&&"zupass"===e.data.authModule&&e.data.authResult&&this.processLoginResult(e.data.authResult)}},{key:"processLoginResult",value:function(e){l.log("Zupass auth: ",e),this.loginPopop&&this.loginPopop.close(),e.data?(this.loadAuthInfo(e.data),localStorage["zupass.AuthInfo"]=JSON.stringify(e.data)):e.errorCode&&this.props.faucetContext.showDialog({title:"Could not authenticate with zupass",body:o.createElement("div",{className:"alert alert-danger"},"[",e.errorCode,"] ",e.errorMessage),closeButton:{caption:"Close"}})}},{key:"loadAuthInfo",value:function(e){this.setState({authInfo:e})}}])&&f(t.prototype,n),v&&f(t,v),Object.defineProperty(t,"prototype",{writable:!1}),b}(o.PureComponent);t.default=function(e){return o.createElement(b,p({},e,{ref:e.forwardRef}))}},3692:function(){},1196:function(){},950:function(){},6601:function(){},9214:function(){},8623:function(){},7748:function(){},5568:function(){},6619:function(){},7108:function(){},2361:function(){},4616:function(){}}]);
//# sourceMappingURL=powfaucet-chunk-zupass.js.map
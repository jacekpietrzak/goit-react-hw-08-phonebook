"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[725],{725:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var a=n(791),r=n(434),s=n(806),c="ContactForm_form__dhl+T",l="ContactForm_section__Yogoh",i="ContactForm_label__-cVXI",o="ContactForm_input__Bl93P",u="ContactForm_button__eSwX9",d=n(184),m=function(){var e=(0,r.v9)(s.Af),t=(0,a.useRef)(null),n=(0,a.useRef)(null),m=(0,r.I0)(),h=function(){var a={name:t.current.value,number:n.current.value},r=e.find((function(e){return e.name.toLowerCase()===a.name.toLowerCase()}));if(void 0!==r)return alert("".concat(r.name," is already in contacts."));m((0,s.uK)(a)),t.current.value="",n.current.value=""};return(0,d.jsxs)("form",{className:c,onSubmit:function(e){e.preventDefault(),h()},children:[(0,d.jsxs)("section",{className:l,children:[(0,d.jsx)("label",{className:i,htmlFor:"name",children:"Name"}),(0,d.jsx)("input",{className:o,type:"text",id:"name",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,ref:t})]}),(0,d.jsxs)("section",{className:l,children:[(0,d.jsx)("label",{className:i,htmlFor:"tel",children:"Number"}),(0,d.jsx)("input",{className:o,id:"tel",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,ref:n})]}),(0,d.jsx)("button",{className:u,type:"submit",children:"Add contact"})]})},h=n(367),_="Filter_filter__vxThR",f="Filter_label__vEd1E",v="Filter_input__N7T3z",x=function(){var e=(0,r.I0)(),t=(0,a.useRef)(null);return(0,d.jsxs)("div",{className:_,children:[(0,d.jsx)("label",{className:f,htmlFor:"filter",children:"Find contacts by name"}),(0,d.jsx)("input",{className:v,id:"filter",type:"text",name:"filter",onChange:function(){var n=t.current.value.toLowerCase();e((0,h.bI)(n))},ref:t})]})},p="ContactList_list__csErn",b="ContactListItem_contact__9Jn78",j="ContactListItem_button__loa1i",N=function(e){var t=e.contact,n=(0,r.I0)();return(0,d.jsxs)("li",{className:b,children:[t.name,": ",t.number,(0,d.jsx)("button",{className:j,type:"button",id:t.id,onClick:function(){return e=t.id,void n((0,s.zY)(e));var e},children:"Delete"})]})},C=function(){var e=(0,r.v9)(s.Af),t=(0,r.v9)(h.AD).status,n=e.filter((function(e){return e.name.toLowerCase().includes(t)}));return(0,d.jsx)("div",{children:(0,d.jsx)("ul",{className:p,children:n.map((function(e){return(0,d.jsx)(N,{contact:e},e.id)}))})})},F="App_h1__-PUlb",A="App_h2__bWieB";function w(){var e=(0,r.I0)(),t=(0,r.v9)(s.Af),n=(0,r.v9)(s.xU),c=(0,r.v9)(s.zh);return(0,a.useEffect)((function(){e((0,s.yF)())}),[e]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h1",{className:F,children:"Phonebook"}),(0,d.jsx)(m,{}),(0,d.jsx)("h2",{className:A,children:"Contacts"}),(0,d.jsx)(x,{}),n&&(0,d.jsx)("div",{children:"Loading..."}),c&&(0,d.jsx)("div",{children:c}),0===t.length&&!n&&(0,d.jsx)("div",{children:"No contacts to show"}),t.length>0&&(0,d.jsx)(C,{})]})}}}]);
//# sourceMappingURL=725.da4ff796.chunk.js.map
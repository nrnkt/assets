;(function(){function _createForOfIteratorHelper(o,allowArrayLike){var it=typeof Symbol!=="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&typeof o.length==="number"){if(it)o=it;var i=0;var F=function F(){};return{s:F,n:function n(){if(i>=o.length)return{done:true};return{done:false,value:o[i++]};},e:function e(_e2){throw _e2;},f:F};}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion=true,didErr=false,err;return{s:function s(){it=it.call(o);},n:function n(){var step=it.next();normalCompletion=step.done;return step;},e:function e(_e3){didErr=true;err=_e3;},f:function f(){try{if(!normalCompletion&&it.return!=null)it.return();}finally{if(didErr)throw err;}}};}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;})),keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}System.register(['./vendor-legacy.634dc9da.js','./index.esm-legacy.8f649444.js','./form-item-legacy.e4ad5153.js','./copy-clip-legacy.98530339.js','./index-legacy.49881944.js','./index-legacy.bdee6464.js'],function(exports){'use strict';var useToast,useTranslation,React,useDisclosure,react,Box,HStack,Button,Table,Thead,Tr,Th,Tbody,Td,Popover,PopoverTrigger,PopoverContent,PopoverArrow,PopoverCloseButton,PopoverHeader,PopoverBody,Text,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody,SimpleGrid,ModalFooter,admin,FormItem,copyToClip,readFromClip;return{setters:[function(module){useToast=module.g;useTranslation=module.h;React=module.R;useDisclosure=module.j;react=module.r;Box=module.l;HStack=module.o;Button=module.G;Table=module.aE;Thead=module.aF;Tr=module.aG;Th=module.aH;Tbody=module.aI;Td=module.aJ;Popover=module.aK;PopoverTrigger=module.aL;PopoverContent=module.aM;PopoverArrow=module.aN;PopoverCloseButton=module.aO;PopoverHeader=module.aP;PopoverBody=module.aQ;Text=module.E;Modal=module.W;ModalOverlay=module.X;ModalContent=module.Y;ModalHeader=module.Z;ModalCloseButton=module._;ModalBody=module.$;SimpleGrid=module.at;ModalFooter=module.a0;},function(module){admin=module.b;},function(module){FormItem=module.F;},function(module){copyToClip=module.c;readFromClip=module.r;},function(){},function(){}],execute:function execute(){var EmptyAccount={id:0,name:"",type:"",status:"",index:0};function GetDefaultValue(type,value){switch(type){case"string":if(value){return value;}return"";case"bool":if(value){return value==="true";}return false;case"select":if(value){return value;}return"";case"number":if(value){return parseInt(value);}return 0;}}var CommonItems=[{name:"name",label:"Virtual path",type:"string",required:true},{name:"index",label:"index",type:"number",required:true,description:"for sort"}];var Accounts=exports('default',function(){var toast=useToast();var _useTranslation=useTranslation(),t=_useTranslation.t;var _React$useState=React.useState([]),_React$useState2=_slicedToArray(_React$useState,2),accounts=_React$useState2[0],setAccounts=_React$useState2[1];var _React$useState3=React.useState({}),_React$useState4=_slicedToArray(_React$useState3,2),drivers=_React$useState4[0],setDrivers=_React$useState4[1];var _React$useState5=React.useState(EmptyAccount),_React$useState6=_slicedToArray(_React$useState5,2),currentAccount=_React$useState6[0],setcurrentAccount=_React$useState6[1];var _React$useState7=React.useState(false),_React$useState8=_slicedToArray(_React$useState7,2),isEdit=_React$useState8[0],setIsEdit=_React$useState8[1];var _React$useState9=React.useState(false),_React$useState10=_slicedToArray(_React$useState9,2),loading=_React$useState10[0],setLoading=_React$useState10[1];var _React$useState11=React.useState(false),_React$useState12=_slicedToArray(_React$useState11,2),addAccountLoading=_React$useState12[0],setAddAccountLoading=_React$useState12[1];var editDisclosure=useDisclosure();var initialDrivers=function initialDrivers(){admin.get("drivers").then(function(resp){var res=resp.data;if(res.code!==200){toast({title:t(res.message),status:"error",duration:3e3,isClosable:true});}else{setDrivers(res.data);}});};var refreshAccounts=function refreshAccounts(){setLoading(true);admin.get("accounts").then(function(resp){setLoading(false);var res=resp.data;if(res.code!==200){toast({title:t(res.message),status:"error",duration:3e3,isClosable:true});}else{setAccounts(res.data);}});};react.exports.useEffect(function(){refreshAccounts();initialDrivers();},[]);return/* @__PURE__ */React.createElement(Box,{w:"full"},/* @__PURE__ */React.createElement(HStack,null,/* @__PURE__ */React.createElement(Button,{onClick:function onClick(){setcurrentAccount(EmptyAccount);setIsEdit(false);editDisclosure.onOpen();}},t("Add")),/* @__PURE__ */React.createElement(Button,{colorScheme:"orange",isLoading:loading,onClick:function onClick(){refreshAccounts();}},t("Refresh"))),/* @__PURE__ */React.createElement(Box,{overflowX:"auto"},/* @__PURE__ */React.createElement(Table,{w:"full"},/* @__PURE__ */React.createElement(Thead,null,/* @__PURE__ */React.createElement(Tr,null,/* @__PURE__ */React.createElement(Th,null,t("Virtual path")),/* @__PURE__ */React.createElement(Th,null,t("type")),/* @__PURE__ */React.createElement(Th,null,t("root_folder")),/* @__PURE__ */React.createElement(Th,null,t("index")),/* @__PURE__ */React.createElement(Th,null,t("status")),/* @__PURE__ */React.createElement(Th,null,t("operation")))),/* @__PURE__ */React.createElement(Tbody,null,accounts.map(function(account){return/* @__PURE__ */React.createElement(Tr,{key:account.id},/* @__PURE__ */React.createElement(Td,null,account.name),/* @__PURE__ */React.createElement(Td,null,account.type),/* @__PURE__ */React.createElement(Td,null,account.root_folder),/* @__PURE__ */React.createElement(Td,null,account.index),/* @__PURE__ */React.createElement(Td,null,account.status),/* @__PURE__ */React.createElement(Td,{whiteSpace:"nowrap"},/* @__PURE__ */React.createElement(Button,{onClick:function onClick(){setcurrentAccount(account);setIsEdit(true);editDisclosure.onOpen();}},t("Edit")),/* @__PURE__ */React.createElement(Button,{ml:1,colorScheme:"green",onClick:function onClick(){var info=JSON.stringify(account,function(k,v){if(k==="id"){return void 0;}return v;},2);copyToClip(info);toast({title:t("Copied"),status:"success",duration:3e3,isClosable:true});}},t("Copy")),/* @__PURE__ */React.createElement(Popover,null,/* @__PURE__ */React.createElement(PopoverTrigger,null,/* @__PURE__ */React.createElement(Button,{ml:"1",colorScheme:"red"},t("Delete"))),/* @__PURE__ */React.createElement(PopoverContent,{whiteSpace:"normal"},/* @__PURE__ */React.createElement(PopoverArrow,null),/* @__PURE__ */React.createElement(PopoverCloseButton,null),/* @__PURE__ */React.createElement(PopoverHeader,null,t("Confirmation!")),/* @__PURE__ */React.createElement(PopoverBody,null,/* @__PURE__ */React.createElement(Text,{mb:"1"},t('Are you sure you want to delete "{{name}}" ?',{name:account.name})),/* @__PURE__ */React.createElement(Button,{colorScheme:"red",onClick:function onClick(){admin.delete("account",{params:{id:account.id}}).then(function(resp){var res=resp.data;if(res.code!==200){toast({title:t(res.message),status:"error",duration:3e3,isClosable:true});}else{toast({title:t(res.message),status:"success",duration:3e3,isClosable:true});refreshAccounts();}});}},t("Confirm")))))));})))),/* @__PURE__ */React.createElement(Modal,{isOpen:editDisclosure.isOpen,onClose:editDisclosure.onClose,size:"6xl"},/* @__PURE__ */React.createElement(ModalOverlay,null),/* @__PURE__ */React.createElement(ModalContent,null,/* @__PURE__ */React.createElement(ModalHeader,null,isEdit?t("Save"):t("Add")),/* @__PURE__ */React.createElement(ModalCloseButton,null),/* @__PURE__ */React.createElement(ModalBody,{pb:6},/* @__PURE__ */React.createElement(SimpleGrid,{minChildWidth:"250px",spacing:"2"},/* @__PURE__ */React.createElement(FormItem,{type:"select",readOnly:isEdit,required:true,label:t("type"),value:currentAccount.type,values:Object.keys(drivers),onChange:function onChange(value){var newAccount=_objectSpread({},currentAccount);newAccount.type=value;var _iterator=_createForOfIteratorHelper(drivers[value]),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var item=_step.value;if(!Object.keys(newAccount).includes(item.name)){newAccount[item.name]=GetDefaultValue(item.type,item.default);}}}catch(err){_iterator.e(err);}finally{_iterator.f();}setcurrentAccount(newAccount);}}),CommonItems.map(function(item){var _item$values;return/* @__PURE__ */React.createElement(FormItem,{key:item.name,type:item.type,label:item.label,value:currentAccount[item.name],description:item.description,required:item.required,values:(_item$values=item.values)===null||_item$values===void 0?void 0:_item$values.split(","),onChange:function onChange(value){if(item.type!=="bool"){setcurrentAccount(_objectSpread(_objectSpread({},currentAccount),{},_defineProperty({},item.name,value)));}else{setcurrentAccount(_objectSpread(_objectSpread({},currentAccount),{},_defineProperty({},item.name,!currentAccount[item.name])));}}});}),currentAccount.type&&drivers[currentAccount.type].map(function(item){var _item$values2;return/* @__PURE__ */React.createElement(FormItem,{key:item.name,type:item.type,label:item.label,value:currentAccount[item.name],description:item.description,required:item.required,values:(_item$values2=item.values)===null||_item$values2===void 0?void 0:_item$values2.split(","),onChange:function onChange(value){if(item.type!=="bool"){setcurrentAccount(_objectSpread(_objectSpread({},currentAccount),{},_defineProperty({},item.name,value)));}else{setcurrentAccount(_objectSpread(_objectSpread({},currentAccount),{},_defineProperty({},item.name,!currentAccount[item.name])));}}});}))),/* @__PURE__ */React.createElement(ModalFooter,null,/* @__PURE__ */React.createElement(Button,{mr:3,colorScheme:"gray",onClick:editDisclosure.onClose},t("Cancel")),/* @__PURE__ */React.createElement(Button,{mr:3,colorScheme:"green",onClick:function onClick(){readFromClip().then(function(info){try{var account=JSON.parse(info);if(currentAccount.id){account.id=currentAccount.id;}setcurrentAccount(account);}catch(e){toast({title:t("Invalid JSON"),status:"error",duration:3e3,isClosable:true});}});}},t("Paste")),/* @__PURE__ */React.createElement(Button,{isLoading:addAccountLoading,onClick:function onClick(){console.log(currentAccount);setAddAccountLoading(true);admin.post("account/".concat(isEdit?"save":"create"),currentAccount).then(function(resp){setAddAccountLoading(false);var res=resp.data;if(res.code!==200){toast({title:t(res.message),status:"error",duration:3e3,isClosable:true});if(!isEdit&&res.code!==400){refreshAccounts();editDisclosure.onClose();}}else{toast({title:t(res.message),status:"success",duration:3e3,isClosable:true});refreshAccounts();editDisclosure.onClose();}});}},t("Save"))))));});}};});})();

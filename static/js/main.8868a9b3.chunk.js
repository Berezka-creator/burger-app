(this["webpackJsonpburger-bulider"]=this["webpackJsonpburger-bulider"]||[]).push([[0],{15:function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__1EOf_",BreadTop:"BurgerIngredient_BreadTop__1I3v6",Seeds1:"BurgerIngredient_Seeds1__2AhHM",Seeds2:"BurgerIngredient_Seeds2__2yrxn",Meat:"BurgerIngredient_Meat__cQu3r",Cheese:"BurgerIngredient_Cheese__38pWx",Salad:"BurgerIngredient_Salad__G35sT",Bacon:"BurgerIngredient_Bacon__BkxxY"}},20:function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__2CYQC",Logo:"SideDrawer_Logo__1ZM0A",Open:"SideDrawer_Open__3D4R7",Close:"SideDrawer_Close__Sfz8I"}},22:function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__24PfQ",Label:"BuildControl_Label__1jztX",Less:"BuildControl_Less__2W0G8",More:"BuildControl_More__1c-H5"}},23:function(e,t,n){e.exports={Input:"Input_Input__2ZJAJ",Label:"Input_Label__17enD",InputElement:"Input_InputElement__2AYyT",Invalid:"Input_Invalid__2ZZH5"}},27:function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__1eHzv",Logo:"Toolbar_Logo__2rBmH",DesktopOnly:"Toolbar_DesktopOnly__1_YDT"}},31:function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__c7eDL",active:"NavigationItem_active__2Rh6G"}},34:function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__3oEgt",OrderButton:"BuildControls_OrderButton__2rawv",enable:"BuildControls_enable__Gvosk"}},35:function(e,t,n){e.exports={Button:"Button_Button__1UsU_",Success:"Button_Success__3Eam2",Danger:"Button_Danger__3ro1j"}},46:function(e,t,n){e.exports={Logo:"Logo_Logo__3PPR3"}},47:function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__27EdC"}},48:function(e,t,n){e.exports={ToggleButton:"ToggleButton_ToggleButton__WjRXj"}},49:function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__32HAe"}},50:function(e,t,n){e.exports={Content:"Layout_Content__255yK"}},51:function(e,t,n){e.exports={Burger:"Burger_Burger__1--2E"}},52:function(e,t,n){e.exports={Modal:"Modal_Modal__3g3f6"}},53:function(e,t,n){e.exports={Loader:"Spinner_Loader__15JuK",load6:"Spinner_load6__3aqiJ",round:"Spinner_round__3H0yq"}},54:function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__2VGDL"}},55:function(e,t,n){e.exports={ContactData:"ContactData_ContactData__3m9VL",Input:"ContactData_Input__1HXlM"}},56:function(e,t,n){e.exports={Order:"Order_Order__12592"}},57:function(e,t,n){e.exports={Auth:"Auth_Auth__3tKhK"}},65:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),i=n(24),o=n.n(i),c=(n(65),n(4)),s=n(5),u=n(7),l=n(6),d=n(9),p=n(27),h=n.n(p),j=n.p+"static/media/burger-logo.ec69c7f6.png",b=n(46),g=n.n(b),f=function(e){return Object(r.jsx)("div",{className:g.a.Logo,style:{height:e.height},children:Object(r.jsx)("img",{src:j,alt:"My burger"})})},O=n(47),m=n.n(O),v=n(16),x=n(31),_=n.n(x),y=function(e){return Object(r.jsx)("li",{className:_.a.NavigationItem,children:Object(r.jsx)(v.b,{to:e.link,exact:e.exact,activeClassName:_.a.active,children:e.children})})},C=function(e){return Object(r.jsxs)("ul",{className:m.a.NavigationItems,children:[Object(r.jsx)(y,{link:"/burger-app",exact:!0,children:"Burger Builder"}),e.isAuthenticated?Object(r.jsx)(y,{link:"/orders",children:"Orders"}):null,e.isAuthenticated?Object(r.jsx)(y,{link:"/logout",children:"Logout"}):Object(r.jsx)(y,{link:"/auth",children:"Authentication"})]})},k=n(48),S=n.n(k),I=function(e){return Object(r.jsxs)("div",{className:S.a.ToggleButton,onClick:e.clicked,children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})},N=n(49),T=n.n(N),B=function(e){return e.show?Object(r.jsx)("div",{className:T.a.Backdrop,onClick:e.clicked}):null},D=function(e){return Object(r.jsxs)("header",{className:h.a.Toolbar,children:[Object(r.jsx)("div",{children:Object(r.jsx)(I,{clicked:e.drawerToggleClicked})}),Object(r.jsx)("div",{className:h.a.Logo,children:Object(r.jsx)(f,{})}),Object(r.jsx)("nav",{className:h.a.DesktopOnly,children:Object(r.jsx)(C,{isAuthenticated:e.isAuth})})]})},A=n(50),w=n.n(A),E=n(20),L=n.n(E),H=function(e){return e.children},R=function(e){var t=[L.a.SideDrawer,L.a.Close];return e.open&&(t=[L.a.SideDrawer,L.a.Open]),Object(r.jsxs)(H,{children:[Object(r.jsx)(B,{show:e.open,clicked:e.closed}),Object(r.jsxs)("div",{className:t.join(" "),children:[Object(r.jsx)("div",{className:L.a.Logo,children:Object(r.jsx)(f,{})}),Object(r.jsx)("nav",{children:Object(r.jsx)(C,{isAuthenticated:e.isAuth})})]})]})},P=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={showSideDrawer:!1},e.sideDrawerClosedHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(H,{children:[Object(r.jsx)(D,{isAuth:this.props.isAuthenticated,drawerToggleClicked:this.sideDrawerToggleHandler}),Object(r.jsx)(R,{isAuth:this.props.isAuthenticated,open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),Object(r.jsx)("main",{className:w.a.Content,children:this.props.children})]})}}]),n}(a.Component),U=Object(d.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))(P),M=n(3),F=n(59),z=n(51),V=n.n(z),G=n(15),q=n.n(G),W=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=Object(r.jsx)("div",{className:q.a.BreadBottom});break;case"bread-top":e=Object(r.jsxs)("div",{className:q.a.BreadTop,children:[Object(r.jsx)("div",{className:q.a.Seeds1}),Object(r.jsx)("div",{className:q.a.Seeds2})]});break;case"meat":e=Object(r.jsx)("div",{className:q.a.Meat});break;case"cheese":e=Object(r.jsx)("div",{className:q.a.Cheese});break;case"salad":e=Object(r.jsx)("div",{className:q.a.Salad});break;case"bacon":e=Object(r.jsx)("div",{className:q.a.Bacon});break;default:e=null}return e}}]),n}(a.Component),Y=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(F.a)(Array(e.ingredients[t])).map((function(e,n){return Object(r.jsx)(W,{type:t},t+n)}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=Object(r.jsx)("p",{children:"Please start adding ingredients!"})),Object(r.jsxs)("div",{className:V.a.Burger,children:[Object(r.jsx)(W,{type:"bread-top"}),t,Object(r.jsx)(W,{type:"bread-bottom"})]})},J=n(34),$=n.n(J),X=n(22),Z=n.n(X),K=function(e){return Object(r.jsxs)("div",{className:Z.a.BuildControl,children:[Object(r.jsx)("div",{className:Z.a.Label,children:e.label}),Object(r.jsx)("button",{className:Z.a.More,onClick:e.added,children:"More"}),Object(r.jsx)("button",{className:Z.a.Less,onClick:e.removed,disabled:e.disabled,children:"Less"})]})},Q=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],ee=function(e){return Object(r.jsxs)("div",{className:$.a.BuildControls,children:[Object(r.jsxs)("p",{children:["Current price: ",Object(r.jsx)("strong",{children:e.price.toFixed(2)})]}),Q.map((function(t){return Object(r.jsx)(K,{label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]},t.label)})),Object(r.jsx)("button",{className:$.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered,children:e.isAuth?"ORDER NOW":"SIGNUP TO ORDER"})]})},te=n(52),ne=n.n(te),re=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"shouldComponentUpdate",value:function(e,t,n){return e.show!==this.props.show}},{key:"componentDidUpdate",value:function(e,t,n){}},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(B,{show:this.props.show,clicked:this.props.modalClosed}),Object(r.jsx)("div",{className:ne.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"},children:this.props.children})]})}}]),n}(a.Component),ae=n(35),ie=n.n(ae),oe=function(e){return Object(r.jsx)("button",{className:[ie.a.Button,ie.a[e.btnType]].join(" "),onClick:e.clicked,children:e.children})},ce=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(e,t,n){console.log("[Order summary] will update")}},{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return Object(r.jsxs)("li",{children:[Object(r.jsx)("span",{style:{textTransform:"capitalize"},children:t}),":",e.props.ingredients[t]]},t)}));return Object(r.jsxs)(H,{children:[Object(r.jsx)("h3",{children:"Your Order"}),Object(r.jsx)("p",{children:"A delicious burger with the following ingredients:"}),Object(r.jsx)("ul",{children:t}),Object(r.jsx)("p",{children:Object(r.jsxs)("strong",{children:["Total price:",this.props.price.toFixed(2)]})}),Object(r.jsx)("p",{children:"Continue to checkout?"}),Object(r.jsx)(oe,{btnType:"Danger",clicked:this.props.purchaseCanceled,children:"CANCEL"}),Object(r.jsx)(oe,{btnType:"Success",clicked:this.props.purchaseContinued,children:"CONTINUE"})]})}}]),n}(a.Component),se=n(26),ue=n.n(se),le=ue.a.create({baseURL:"https://react-my-burger-1f756-default-rtdb.firebaseio.com/"}),de=n(53),pe=n.n(de),he=function(){return Object(r.jsx)("div",{className:pe.a.Loader,children:"Loading ..."})},je=function(e,t){return function(n){Object(u.a)(i,n);var a=Object(l.a)(i);function i(){var e;Object(c.a)(this,i);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={error:null},e.errorConfirmedHandler=function(){e.setState({error:null})},e}return Object(s.a)(i,[{key:"componentDidMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return Object(r.jsxs)(H,{children:[Object(r.jsx)(re,{modalClosed:this.errorConfirmedHandler,show:this.state.error,children:this.state.error?this.state.error.message:null}),Object(r.jsx)(e,Object(M.a)({},this.props))]})}}]),i}(a.Component)},be="ADD_INGREDIENT",ge="REMOVE_INGREDIENT",fe="SET_INGREDIENTS",Oe="FETCH_INGREDIENTS_FAILED",me="PURCHASE_BURGER_SUCCESS",ve="PURCHASE_BURGER_FAIL",xe="PURCHASE_BURGER_START",_e="PURCHASE_INIT",ye="FETCH_ORDERS_START",Ce="FETCH_ORDERS_SUCCESS",ke="FETCH_ORDERS_FAIL",Se="AUTH_START",Ie="AUTH_FAILED",Ne="AUTH_SUCCESS",Te="AUTH_LOGOUT",Be="SET_AUTH_REDIRECT_PATH",De=function(){return function(e){le.get("https://react-my-burger-1f756-default-rtdb.firebaseio.com/ingredients.json").then((function(t){var n;e((n=t.data,{type:fe,ingredients:n}))})).catch((function(t){e({type:Oe})}))}},Ae=function(e,t){return function(n){n({type:xe}),le.post("/orders.json?auth="+t,e).then((function(t){console.log(t.data),n(function(e,t){return{type:me,orderId:e,orderData:t}}(t.data.name,e))})).catch((function(e){n(function(e){return{type:ve,error:e}}(e))}))}},we=function(e){return function(t){t({type:ye}),le.get("/orders.json?auth="+e).then((function(e){var n=[];for(var r in e.data)n.push(Object(M.a)(Object(M.a)({},e.data[r]),{},{id:r}));t({type:Ce,orders:n})})).catch((function(e){t({type:Oe,error:e})}))}},Ee=function(){return{type:Te}},Le=function(e,t,n){return function(r){r({type:Se});var a={email:e,password:t,returnSecureToken:!0},i="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDN6l9f2lnVy8xRjN_MFUdtNWSNbnLBEV0";n||(i="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDN6l9f2lnVy8xRjN_MFUdtNWSNbnLBEV0"),ue.a.post(i,a).then((function(e){var t,n,a;console.log(e.data),r((t=e.data.idToken,n=e.data.localId,{type:Ne,idToken:t,userId:n})),r((a=e.data.expiresIn,function(e){setTimeout((function(){e(Ee())}),1e3*a)}))})).catch((function(e){var t;r((t=e.response.data.error,{type:Ie,error:t}))}))}},He=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={purchasing:!1},e.purchaseHandler=function(){e.props.isAuthenticated?e.setState({purchasing:!0}):e.props.history.push("/auth")},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinueHandler=function(){e.props.onInitPurchase(),e.props.history.push("/checkout")},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){console.log(this.props),this.props.onInitIngredients()}},{key:"updatePurchaseState",value:function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0}},{key:"render",value:function(){var e=this,t=Object(M.a)({},this.props.ings);for(var n in t)t[n]=t[n]<=0;var a=null,i=this.props.error?Object(r.jsx)("p",{children:"Ingredients can't be loaded"}):Object(r.jsx)(he,{});return this.props.ings&&(i=Object(r.jsxs)(H,{children:[Object(r.jsx)(Y,{ingredients:this.props.ings}),Object(r.jsx)(ee,{isAuth:this.props.isAuthenticated,ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientRemoved,disabled:t,purchasable:this.updatePurchaseState(this.props.ings),price:this.props.price,ordered:function(){return e.purchaseHandler()}})]}),a=Object(r.jsx)(ce,{ingredients:this.props.ings,price:this.props.price,purchaseCanceled:function(){return e.purchaseCancelHandler()},purchaseContinued:function(){return e.purchaseContinueHandler()}})),this.state.loading&&(a=Object(r.jsx)(he,{})),Object(r.jsxs)(H,{children:[Object(r.jsx)(re,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler,children:a}),i]})}}]),n}(a.Component),Re=Object(d.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuthenticated:null!==e.auth.token}}),(function(e){return{onIngredientAdded:function(t){return e({type:be,ingredientName:t})},onIngredientRemoved:function(t){return e({type:ge,ingredientName:t})},onInitIngredients:function(){return e(De())},onInitPurchase:function(){return e({type:_e})},onSetRedirectPath:function(t){return e(function(e){return{type:Be,path:e}}(t))}}}))(je(He,le)),Pe=n(54),Ue=n.n(Pe),Me=function(e){return Object(r.jsxs)("div",{className:Ue.a.CheckoutSummary,children:[Object(r.jsx)("h1",{children:"We hope it testes well!"}),Object(r.jsx)("div",{style:{width:"100%",margin:"auto"},children:Object(r.jsx)(Y,{ingredients:e.ingredients})}),Object(r.jsx)(oe,{btnType:"Danger",clicked:e.checkoutCancelled,children:"CANCEL"}),Object(r.jsx)(oe,{btnType:"Success",clicked:e.checkoutContinued,children:"CONTINUE"})]})},Fe=n(8),ze=n(55),Ve=n.n(ze),Ge=n(23),qe=n.n(Ge),We=function(e){var t=null,n=[qe.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&n.push(qe.a.Invalid),e.elementType){case"input":t=Object(r.jsx)("input",Object(M.a)(Object(M.a)({className:n.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}));break;case"textarea":t=Object(r.jsx)("textarea",Object(M.a)(Object(M.a)({className:n.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}));break;case"select":t=Object(r.jsx)("select",{className:n.join(" "),value:e.value,onChange:e.changed,children:e.elementConfig.options.map((function(e){return Object(r.jsx)("option",{value:e.value,children:e.displayValue},e.value)}))});break;default:t=Object(r.jsx)("input",Object(M.a)(Object(M.a)({className:n.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}))}return Object(r.jsxs)("div",{className:qe.a.Input,children:[Object(r.jsx)("label",{className:qe.a.Label,children:e.label}),t]})},Ye=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"ZIP Code"},value:"",validation:{required:!0,minLength:5,maxLength:5,isNumeric:!0},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your E-Mail"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",validation:{},valid:!0}},formIsValid:!1},e.orderHandler=function(t){t.preventDefault();var n={};for(var r in e.state.orderForm)n[r]=e.state.orderForm[r].value;var a={ingredients:e.props.ings,price:e.props.price,orderData:n};e.props.onOrderBurger(a,e.props.token)},e.inputChangedHandler=function(t,n){var r=Object(M.a)({},e.state.orderForm),a=Object(M.a)({},r[n]);a.value=t.target.value,a.valid=e.checkValidity(a.value,a.validation),a.touched=!0,r[n]=a;var i=!0;for(var o in r)i=r[o].valid&&i;e.setState({orderForm:r,formIsValid:i})},e}return Object(s.a)(n,[{key:"checkValidity",value:function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var a=Object(r.jsxs)("form",{onSubmit:this.orderHandler,children:[t.map((function(t){return Object(r.jsx)(We,{elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}},t.id)})),Object(r.jsx)(oe,{btnType:"Success",disabled:!this.state.formIsValid,children:"ORDER"})]});return this.props.loading&&(a=Object(r.jsx)(he,{})),Object(r.jsxs)("div",{className:Ve.a.ContactData,children:[Object(r.jsx)("h4",{children:"Enter your Contact Data"}),a]})}}]),n}(a.Component),Je=Object(d.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.orders.loading,token:e.auth.token}}),(function(e){return{onOrderBurger:function(t,n){return e(Ae(t,n))}}}))(je(Ye,le)),$e=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).checkoutCanceledHandler=function(){e.props.history.goBack()},e.checkoutContinuedHandler=function(){e.props.history.replace("/checkout/contact-data")},e}return Object(s.a)(n,[{key:"render",value:function(){var e=Object(r.jsx)(Fe.a,{to:"/burger-app"});if(this.props.ings){var t=this.props.purchased?Object(r.jsx)(Fe.a,{to:"/burger-app"}):null;e=Object(r.jsxs)("div",{children:[t,Object(r.jsx)(Me,{ingredients:this.props.ings,checkoutContinued:this.checkoutContinuedHandler,checkoutCanceled:this.checkoutCanceledHandler}),Object(r.jsx)(Fe.b,{path:this.props.match.path+"/contact-data",component:Je})]})}return e}}]),n}(a.Component),Xe=Object(d.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,purchased:e.orders.purchased}}),null)($e),Ze=n(56),Ke=n.n(Ze),Qe=function(e){var t=[];for(var n in e.ingredients)t.push({name:n,amount:e.ingredients[n]});var a=t.map((function(e){return Object(r.jsxs)("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid black",padding:"5px"},children:[e.name," (",e.amount,")"]},e.name)}));return Object(r.jsxs)("div",{className:Ke.a.Order,children:[Object(r.jsxs)("p",{children:["Ingredients: ",a," "]}),Object(r.jsxs)("p",{children:["Price: ",Object(r.jsxs)("strong",{children:[" USD ",e.price," "]})]})]})},et=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token)}},{key:"render",value:function(){var e=Object(r.jsx)(he,{});return this.props.loading||(e=this.props.orders.map((function(e){return Object(r.jsx)(Qe,{ingredients:e.ingredients,price:e.price},e.id)}))),Object(r.jsx)("div",{children:e})}}]),n}(a.Component),tt=Object(d.b)((function(e){return{orders:e.orders.orders,loading:e.orders.loading,token:e.auth.token}}),(function(e){return{onFetchOrders:function(t){return e(we(t))}}}))(je(et,le)),nt=n(17),rt=n(57),at=n.n(rt),it=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your E-Mail"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignup:!0},e.inputChangedHandler=function(t,n){var r=Object(M.a)(Object(M.a)({},e.state.controls),{},Object(nt.a)({},n,Object(M.a)(Object(M.a)({},e.state.controls[n]),{},{value:t.target.value,valid:e.checkValidity(t.target.value,e.state.controls[n].validation),touched:!0})));e.setState({controls:r})},e.submitHandler=function(t){t.preventDefault(),e.props.onAuth(e.state.controls.email.value,e.state.controls.password.value,e.state.isSignup)},e.switchAuthModeHandler=function(){e.setState((function(e){return{isSignup:!e.isSignup}}))},e}return Object(s.a)(n,[{key:"checkValidity",value:function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.controls)t.push({id:n,config:this.state.controls[n]});var a=t.map((function(t){return Object(r.jsx)(We,{elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}},t.id)}));this.props.loading&&(a=Object(r.jsx)(he,{}));var i=null;this.props.error&&(i=Object(r.jsx)("p",{children:this.props.error.message}));var o=null;return this.props.isAuthenticated&&(o=Object(r.jsx)(Fe.a,{to:"/burger-app"})),Object(r.jsxs)("div",{className:at.a.Auth,children:[o,i,Object(r.jsxs)("form",{onSubmit:this.submitHandler,children:[a,Object(r.jsx)(oe,{btnType:"Success",children:"Submit"})]}),Object(r.jsxs)(oe,{clicked:function(){return e.switchAuthModeHandler()},btnType:"Danger",children:["SWITCH TO ",this.state.isSignup?"SIGNIN":"SIGNUP"]})]})}}]),n}(a.Component),ot=Object(d.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token,building:e.burgerBuilder.building}}),(function(e){return{onAuth:function(t,n,r){return e(Le(t,n,r))}}}))(it),ct=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return Object(r.jsx)(Fe.a,{to:"/burger-app"})}}]),n}(a.Component),st=Object(d.b)(null,(function(e){return{onLogout:function(){return e(Ee())}}}))(ct),ut=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(r.jsx)(U,{children:Object(r.jsxs)(Fe.d,{children:[Object(r.jsx)(Fe.b,{path:"/checkout",component:Xe}),Object(r.jsx)(Fe.b,{path:"/orders",component:tt}),Object(r.jsx)(Fe.b,{path:"/auth",component:ot}),Object(r.jsx)(Fe.b,{path:"/logout",component:st}),Object(r.jsx)(Fe.b,{path:"/burger-app",exact:!0,component:Re})]})})}}]),n}(a.Component),lt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,90)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),i(e),o(e)}))},dt=n(58),pt=n(18),ht=function(e,t){return Object(M.a)(Object(M.a)({},e),t)},jt={ingredients:null,totalPrice:4,error:!1,building:!1},bt={salad:.5,cheese:.4,meat:1.3,bacon:.7},gt=function(e,t){var n=Object(nt.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r={ingredients:ht(e.ingredients,n),building:!0,totalPrice:e.totalPrice+bt[t.ingredientName]};return ht(e,r)},ft=function(e,t){var n=Object(nt.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),r={ingredients:ht(e.ingredients,n),totalPrice:e.totalPrice-bt[t.ingredientName]};return ht(e,r)},Ot=function(e,t){return ht(e,{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},totalPrice:4,error:!1,building:!1})},mt=function(e,t){return ht(e,{error:!0})},vt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:jt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be:return gt(e,t);case ge:return ft(e,t);case fe:return Ot(e,t);case Oe:return mt(e);default:return e}},xt={orders:[],loading:!1,purchased:!1},_t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case me:var n=ht(t.orderData,{id:t.orderId});return ht(e,{loading:!0,purchased:!0,orders:e.orders.concat(n)});case ve:return ht(e,{loading:!1,purchased:!0,orders:e.orders.concat(n)});case xe:return ht(e,{loading:!0});case _e:return ht(e,{purchased:!1});case ye:return ht(e,{loading:!0});case Ce:return ht(e,{loading:!1,orders:t.orders});case ke:return ht(e,{loading:!1});default:return e}},yt={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},Ct=function(e,t){return ht(e,{error:null,loading:!0})},kt=function(e,t){return ht(e,{token:t.idToken,userId:t.userId,error:null,loading:!1})},St=function(e,t){return ht(e,{error:t.error,loading:!1})},It=function(e,t){return ht(e,{token:null,userId:null})},Nt=function(e,t){return ht(e,{authRedirectPath:t.path})},Tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:yt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Se:return Ct(e);case Ie:return St(e,t);case Ne:return kt(e,t);case Te:return It(e);case Be:return Nt(e,t);default:return e}},Bt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||pt.d,Dt=Object(pt.c)({burgerBuilder:vt,orders:_t,auth:Tt}),At=Object(pt.e)(Dt,Bt(Object(pt.a)(dt.a))),wt=Object(r.jsx)(d.a,{store:At,children:Object(r.jsx)(v.a,{children:Object(r.jsx)(ut,{})})});o.a.render(wt,document.getElementById("root")),lt()}},[[89,1,2]]]);
//# sourceMappingURL=main.8868a9b3.chunk.js.map
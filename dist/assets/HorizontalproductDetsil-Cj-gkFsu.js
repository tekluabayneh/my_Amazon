import{r as n,D as j,h as p,j as s,L as m,b as a,T as u}from"./index-NPOR4z2-.js";import{P as i}from"./ProductDetsilStyle.module-NKZOF980.js";import{R as g}from"./Rating-DzKdsViK.js";const y=()=>{const{state:N,dispatch:l}=n.useContext(j),[e,d]=n.useState([]),[o,t]=n.useState(!1);let{ProductId:r}=p();n.useEffect(()=>{(async()=>{t(!0);try{let x=await(await fetch(`https://fakestoreapi.com/products/${r}`)).json();d(x),t(!1)}catch(c){console.log("Something went wrong",c)}})()},[r]);const h=()=>{l({type:u.ADD_TO_BASKET,item:e})};return s.jsx(s.Fragment,{children:o?s.jsx(m,{}):s.jsxs("section",{className:i.productDetailContainer,children:[s.jsxs("div",{className:i.singleImgContaine,children:[s.jsx("div",{className:i.smallImgShow,children:e.image&&e.image.length>0?s.jsx("img",{src:e.image,alt:""}):""}),s.jsx("div",{className:i.SingleImg,children:e.image&&e.image.length>0?s.jsx("img",{src:e.image,alt:""}):""})]}),s.jsxs("div",{className:i.SingleproductContent_container,children:[s.jsxs("div",{children:[s.jsx("h6",{className:i.description,children:e.description}),s.jsxs("div",{className:i.ratingContaienr,children:[s.jsx(a,{to:"",className:i.visite_Store,children:"visite the store"}),s.jsxs("span",{className:i.flexLinks_sore,children:[s.jsx("span",{children:s.jsx(g,{className:i.rating,name:"review-rating",value:e.rating?e.rating.rate:"",precision:.1,sx:{fontSize:"15px"}})}),s.jsxs(a,{to:"",children:[s.jsxs("span",{children:[e.rating?e.rating.rate:"","rarings"]}),s.jsx("span",{children:"Search this page"})]})]}),s.jsx("span",{className:i.amazoneChoice,children:"Amazon's Choice"}),s.jsx("p",{className:i.lasbought,children:"500+ bought in past month"})]}),s.jsx("hr",{})]}),s.jsx("div",{className:i.singleProduct_center_content}),s.jsxs("div",{className:i.priceContainer,children:[s.jsx("sub",{children:"$"}),s.jsx("h3",{children:Math.floor(e.price)}),s.jsx("sub",{children:"90"})]}),s.jsxs("div",{className:i.oprduct_details,children:[s.jsx("h4",{children:"Product Details"}),s.jsxs("ul",{children:[s.jsxs("li",{children:["Product Name: ",s.jsx("span",{children:e.title})]}),s.jsxs("li",{children:["Category: ",s.jsx("span",{children:e.category})]}),s.jsxs("li",{children:["Brand: ",s.jsx("span",{children:e.brand})]}),s.jsxs("li",{children:["Warranty Information:",s.jsx("span",{children:e.warrantyInformation})]}),s.jsxs("li",{children:["Shipping Information:",s.jsx("span",{children:e.shippingInformation})]}),s.jsxs("li",{children:["Availability Status:",s.jsx("span",{children:e.availabilityStatus})]}),s.jsxs("li",{children:["Weight (grams): ",s.jsxs("span",{children:[e.weight,"g"]})]})]})]})]}),s.jsxs("div",{className:i.addtocart_and_by_btn_container,children:[s.jsxs("div",{className:i.priceContainer,children:[s.jsx("sub",{children:"$"}),s.jsx("h3",{children:Math.floor(e.price)}),s.jsx("sub",{children:"90"})]}),s.jsxs("p",{children:["$314.91 Shipping & Import Fees Deposit to France Details Delivery Wednesday, December 18. Order within"," ",s.jsx("span",{className:"text-success",children:" 18 hrs 51 mins"})]}),s.jsxs("span",{className:i.locationDelever,children:[s.jsx("span",{class:"material-symbols-outlined",style:{fontSize:"15px"},children:"location_on"})," ","Delever to Ethiopia"]}),s.jsx("h6",{className:"text-success",children:"in Stock"}),s.jsxs("select",{name:"",id:"",children:[s.jsx("option",{value:"",children:"1"}),s.jsx("option",{value:"",children:"2"}),s.jsx("option",{value:"",children:"4"}),s.jsx("option",{value:"",children:"5"})]}),s.jsx("button",{onClick:()=>h(),id:e.id,className:i.btn_addTocart,children:s.jsx(a,{to:"/cart",children:" add to cart"})}),s.jsx("button",{className:i.btn_buy,children:"Buy Now"}),s.jsxs("ul",{className:i.caddTo_cart_list,children:[s.jsxs("li",{children:[s.jsx("span",{children:"Ships from"}),s.jsx("span",{children:"Amazon.com"})]}),s.jsxs("li",{children:[s.jsx("span",{children:"Returns"}),s.jsx("span",{children:"Returnable until Jan 31, 2025"})]}),s.jsxs("li",{children:[s.jsx("span",{children:"Payment"}),s.jsx("span",{children:"Secure transaction"})]})]}),s.jsxs("div",{className:i.gift_container_checkbox,children:[s.jsx("input",{type:"checkbox",name:"",id:""}),s.jsx("p",{children:"Add a gift receipt for easy returns"})]}),s.jsx("button",{children:"Add to List"})]})]})})};export{y as default};

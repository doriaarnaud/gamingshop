import { ref, computed } from 'vue'
import { defineStore, storeToRefs } from 'pinia'

export const useProductTab=defineStore('product_tab',//this is refered as 'productstore' in script setup 'Home' component
{
  state: () =>
  ({
    product_tab:
    [
      {id:0,idt:'f2eh4y7fbhx684g',price:1,image:'/Products/Product1.jpg',title:'Gm1',description:'This is full product description'},
      {id:1,idt:'f2eh4y7fbhx684g',price:2,image:'/Products/Product2.jpg',title:'Gm12',description:'This is full product description'},
      {id:2,idt:'f2eh4y7fbhx684g',price:3,image:'/Products/Product3.jpg',title:'Gm123',description:'This is full product description'},
      {id:3,idt:'f2eh4y7fbhx684g',price:4,image:'/Products/Product6.jpg',title:'Gm1432',description:'This is full product description'},
      {id:4,idt:'f2eh4y7fbhx684g',price:5,image:'/Products/Product5.jpg',title:'Gm143653',description:'This is full product description'},
      {id:5,idt:'f2eh4y7fbhx684g',price:6,image:'/Products/Product4.jpg',title:'Gm165764',description:'This is full product description'},
      {id:6,idt:'f2eh4y7fbhx684g',price:7,image:'/Products/Product7.jpg',title:'Gm',description:'This is full product description'},
      {id:7,idt:'f2eh4y7fbhx684g',price:8,image:'/Products/Product8.jpg',title:'Gm',description:'This is full product description'},
      {id:8,idt:'f2eh4y7fbhx684g',price:9,image:'/Products/Product9.jpg',title:'Gm',description:'This is full product description'}
    ],
    directitemqtt:0,//used to initialize the 'itemview' quantity 
    searchtext:''//v-model for the input search in header page
  }),
  getters:
  {
    getproducttab(state)
    {
      return state.product_tab//return the'product_tab' array in the main product window
    }
  },
  actions:
  {
    filteredlist()
    {
      return this.product_tab.filter((products)=>
			{
				return products.title.toLowerCase().includes(this.searchtext.toLowerCase());
			})
    }
  }
})
export const useItemView=defineStore('itemview',//this is refered as 'itemview' in script setup 'Home' component
{
  state:()=>
    ({
      tab_cart:[],//array used to store item in cart
      id:'',//product 'id' (example:0,1,2,3,4,...)
      pid:'',//product 'id' (example:'i48h3a8f3d',...)
      ivimagesource:'',//thumbnails source
      thumbtitle:'',//thumbnails title (product title)
      productprice:0,//each product price
      thumbdescription:'',//each product short description
      quantitytosend:1,//used to identify each product quantity in 'itemview' component
      itemviewqtt:1,//appear in the'itemview' component and increment when plus/minus button is clicked
      isitemzero:false,//disable minus button when 'itemviewqtt' equal to 0
      agrandit:false,//disappear the 'itemview' component
      original:true,//restore the main product window opacity
      isopaque:false,//switch the main product window opacity
      cartshow:false,//appear/disappear the cart component
      itemviewshow:false
    }),
    actions:
    {
      decrire(id,idt,image,title,price,quantity,description)//all data in this function appear in the ItemView component
      {
          this.agrandit=true;//switch the 'itemview' component...
          this.original=false;//...to show, set the opacity of...
          this.isopaque=true;//...main product container.
          this.id=id;//product 'id' (example:0,1,2,3,4,...)
          this.pid=idt;//product 'id' (example:'i48h3a8f3d',...)
          this.ivimagesource=image;//thumbnails source
          this.thumbtitle=title;//thumbnails title (product presentation)
          this.productprice=price;//each product price
          this.quantitytosend=quantity;//used to identify each product quantity in 'itemview' component
          this.thumbdescription=description;//each product full descrption
          if(this.agrandit && this.cartshow)
          {
              this.cartshow=false;//hide the 'cart' component when 'itemview' component is showing
          }
      },
      itemplus()
      {
          this.quantitytosend+=1;//used to modify each item quantity in the 'tab_cart' array 
          this.itemviewqtt+=1;//this is used to calculate the item total price in the 'itemview' component in real time
          this.isitemzero=false;//switch minus button to be clickable
      },
      itemminus()
      {
          this.quantitytosend-=1;//used to modify each item quantity in the 'tab_cart' array 
          this.itemviewqtt-=1;;//this is used to calculate the item total price in the 'itemview' in real time
          if(this.itemviewqtt==0)
          {
            this.isitemzero=true;//disable minus button to be unclickable
          }
      },
      quitter()
      {
          this.agrandit=false;//hide the 'ItemView' component
          this.original=true;//restore main product content opacity
          this.isopaque=false;//switch the class in 'Product' component
          this.itemviewqtt=1;//initialization of each item quantity in 'itemview' component
          this.quantitytosend=1;//initialization of each item quantity passed as argument in 'addtocart' function
      }
    }
    
})
export const useTabCart=defineStore('tab_cart',//this is refered as 'cartstore' in script setup 'Home' component
{
  state:()=>
  ({
    tab_cart:[],//the cart array
    cartquantity:0,//the global cart quantity
    id:'',//used as 'id' of each product in the array or API (example:0,1,2,3,4,...)
    totalamount:0,//total amount of all product in cart
    agrandit:false,//switch the 'itemview' component to show/hide
    original:false,//switch opacity of main product container
    isopaque:false,//switch opacity of main product container
    cartshow:false,//switch 'cart' component to show/hide
    ischeckout:false,//show the 'checkout'component
    ifnoproducttoclear:true,//switch the 'clear cart' button to be clickable/unclickable
    ifnoproducttocheckout:true//switch the 'checkout' button to be clickable/unclickable
  }),
  getters:
  {
    gettabcart(state)
    {
      return state.tab_cart//return the 'tab_cart' array when this function is called
    },
    getcartquantity(state)
    {
      return this.cartquantity//return the 'global' cart quantity when this function is called
    }
  },
  actions:
  {
    cartswitch()
    {
        this.agrandit=false;//hide the 'ItemView' component
        this.original=true;//restore main product content opacity
        this.isopaque=false;//switch the class in 'Product' component
        this.cartshow=!this.cartshow;//switch the 'cart' to show/hide
    },
    additem(id,pid,imagesource,title,price,description)//all the arguments used for each product to add in the cart
    {
      this.ifnoproducttocheckout=false;//switch the 'clear cart' button to be clickable because a product is being added in cart
      this.ifnoproducttoclear=false;//switch the 'checkout' button to be clickable because a product is being added in cart
      this.agrandit=false;//hide the 'itemview' component when cart show
      this.original=true;//restore the main...
      this.isopaque=false;//...product container opacity
      this.id=id;//set 'id' in the array via the argument
      let itemqtt=1;//set original quantity to 1
      let product=
        {
            id:id,//'id' in the array (example:0,1,2,3...)
            productid:pid,//product 'id' (example:'i48h3a8f3d',...)
            ivimagesource:imagesource,//thumbnails source
            thumbtitle:title,//thumbnails title (product presentation)
            productprice:price,//each product price
            description:description,//each product full description
            itemqtt:itemqtt,//each product quantity to add in the cart
            eachtotalprice:price//each product total amount
        }
        this.tab_cart.push(product);
        this.tab_cart.push(product);
        for(let i=0;i<this.tab_cart.length;i++)
        {
          if(this.tab_cart[i].id==this.id)//used to avoid product repeat in the cart
          {
            this.tab_cart.pop();
          }
        }
        let itemcount=0;                        //used to...
        for(let i=0;i<this.tab_cart.length;i++)//...count all items...
        {                                      //...
          itemcount+=this.tab_cart[i].itemqtt;//...in the cart
        }                                     //...        
        this.cartquantity=itemcount;          //...and put that value in 'cartquantity'
        let amountresult=0;//used to store cart total amount
        for(let i=0;i<this.tab_cart.length;i++)
        {
            amountresult+=this.tab_cart[i].eachtotalprice;//loop over the tab_cart array to 'sync' with all cart actions(price)
        }
        this.totalamount=amountresult;//this value appear in the cart component as 'Total'
    },
    addtocart(id,pid,imagesource,title,price,quantity,description)
    {
      this.agrandit=false;
      this.original=true;
      this.isopaque=false;
      this.ifnoproducttocheckout=false;
      this.ifnoproducttoclear=false;
      let eachtotalprice=price*quantity;
      this.id=id;
      let product=
        {
            id:id,//product 'id' (example:0,1,2,3,4,...)
            productid:pid,//product 'id' (example:'i48h3a8f3d',...)
            ivimagesource:imagesource,//thumbnails source
            thumbtitle:title,//thumbnails title (product presentation)
            productprice:price,//each product price
            itemqtt:quantity,//each product quantity to put in the cart 
            description:description,//each product full description
            eachtotalprice:eachtotalprice//each product total amount
        }
        this.tab_cart.push(product);
        this.tab_cart.push(product);
        for(let i=0;i<this.tab_cart.length;i++)//used to...
        {                                      //...
          if(this.tab_cart[i].id==this.id)    //...avoid product repeated in the cart
          {                                       
            this.tab_cart[i].eachtotalprice=this.tab_cart[i].productprice*this.tab_cart[i].itemqtt;//each item total calculation in the array
            if(quantity>this.tab_cart[i].itemqtt)//if the number (quantity) in the 'itemview' component is more than the each product quantity in the cart...
            {
              this.tab_cart[i].itemqtt+=quantity;//...add that number to the 'product' quantity 
              this.tab_cart[i].eachtotalprice=this.tab_cart[i].productprice*this.tab_cart[i].itemqtt;//re-calculate each product total price
            }
            else if(this.tab_cart[i].itemqtt>quantity)//the same way as above...
            {                                         //...
              this.tab_cart[i].itemqtt+=quantity;       //...
              this.tab_cart[i].eachtotalprice=this.tab_cart[i].productprice*this.tab_cart[i].itemqtt;//re-calculate each product total price
            }
            this.tab_cart.pop();//erase repeated product in the cart
          }
          else if(this.tab_cart[i].id!=this.id)//if the product is newer (never added to the cart)
          {
            this.tab_cart.push(product);//add it...
            this.tab_cart.pop();//...and remove
          }
        }
        let amountresult=0;//used to store cart total amount
        for(let i=0;i<this.tab_cart.length;i++)
        {
          amountresult+=this.tab_cart[i].eachtotalprice;//loop over the tab_cart array to 'sync' with all cart actions(price)
        }
        this.totalamount=amountresult;//this value appear in the cart component as 'Total'
        let itemcount=0;
        for(let i=0;i<this.tab_cart.length;i++)
        {
          itemcount+=this.tab_cart[i].itemqtt;
        }
        this.cartquantity=itemcount;
    },
    cartminus(index)
      {
          let resultat=0;//used to store cart total amount
          let qttresult=0;//used to store cart global quantity
          this.tab_cart[index].itemqtt-=1;//decrement each item quantity when plus button in cart component is clicked
          let eachtotalprice=this.tab_cart[index].itemqtt*this.tab_cart[index].productprice;
          this.tab_cart[index].eachtotalprice=eachtotalprice;//'eahtotalprice' variable is each item total price in cart
          for(let i=0;i<this.tab_cart.length;i++)
          {
              resultat+=this.tab_cart[i].eachtotalprice;//loop over the tab_cart array to 'sync' with all cart actions(price)
          }
          this.totalamount=resultat;
          for(let j=0;j<this.tab_cart.length;j++)
          {
              qttresult+=this.tab_cart[j].itemqtt;//loop over the tab_cart array to 'sync' with all cart actions(quantity)
          }
          this.cartquantity=qttresult;//modify the global cart quantity
          if(this.tab_cart[index].itemqtt==0)
          {
              this.removeitem(index);
          }
          if(this.tab_cart.length==0)
          {
              this.cartshow=false;
          }
      },
    cartplus(index)
      {
          this.iscartzero=false;
          let resultat=0;//used to store cart total amount
          let qttresult=0;//used to store cart global quantity
          this.tab_cart[index].itemqtt+=1;//increment each item quantity when plus button in cart component is clicked
          let eachtotalprice=this.tab_cart[index].itemqtt*this.tab_cart[index].productprice;
          this.tab_cart[index].eachtotalprice=eachtotalprice;//'eahtotalprice' variable is each item total price in cart
          for(let i=0;i<this.tab_cart.length;i++)
          {
              resultat+=this.tab_cart[i].eachtotalprice;//loop over the tab_cart array to 'sync' with all cart actions(price)
          }
          this.totalamount=resultat;
          for(let j=0;j<this.tab_cart.length;j++)
          {
              qttresult+=this.tab_cart[j].itemqtt;//loop over the tab_cart array to 'sync' with all cart actions(quantity)
          }
          this.cartquantity=qttresult;//modify the global cart quantity 
        },
    removeitem(index)
    {
      let resultat=0;//used to store 'totalamount' in cart
      this.totalamount-=this.tab_cart[index].eachtotalprice;
      this.cartquantity-=this.tab_cart[index].itemqtt;
      this.tab_cart.splice(index,1);
      for(let i=0;i<this.tab_cart.length;i++)
      {
          resultat+=this.tab_cart[i].eachtotalprice;//loop over the tab_cart array to 'sync' with removing actions(price)
      }
      this.totalamount=resultat;//modify the global cart 'totalamount'
      if(this.tab_cart.length==0)//if there is no item in the cart
      {
          this.cartshow=false;//hide the cart component
          this.ifnoproducttoclear=true;//switch the 'clear cart' button to be unclickable
          this.ifnoproducttocheckout=true;//switch the 'checkout' button to be unclickable
      }
    },
    clearcart()
      {
          this.tab_cart=[];//put the 'cart' array to an empty array
          this.totalamount=0;//set total amount to 0
          this.cartquantity=0;//set the global cart quantity to 0
          this.ifnoproducttoclear=true;//set the 'clear cart' button to unclickable
          this.ifnoproducttocheckout=true;//set the 'checkout'  button to unclickable
          this.cartshow=false;//hide the cart component
      },
      checkout()
      {
          this.ischeckout=true;//show the checkout component
          this.agrandit=false;//hide the 'itemview' 
          this.cartshow=false;//hide the 'cart' 
      },
      checkoutswitch()
      {
        this.ischeckout=false;//hide the checkout component
      }
  }
})

<script setup>
import { useProductTab } from '@/stores/GState'
import { useTabCart } from '@/stores/GState'
import { useItemView } from '@/stores/GState'
const productstore=useProductTab()
const cartstore=useTabCart()
const itemview=useItemView()
</script>
<template>
  <div class="home">
      <div class="home_content">
          <div class="product_container">
              <div :class="[{productContent:itemview.original},{opaque:itemview.isopaque}]">
                  <Products v-for="thumb in productstore.filteredlist()" :key="thumb.id"
                      @describe="itemview.decrire(thumb.id,thumb.idt,thumb.image,thumb.title,thumb.price,itemview.quantitytosend,thumb.description)"
                      @ajouter="cartstore.additem(thumb.id,thumb.idt,thumb.image,thumb.title,thumb.price,thumb.description,productstore.directitemqtt)" 
                        :id=thumb.id    
                        :productid=thumb.idt
                        :thumbs=thumb.image
                        :thumbtitle=thumb.title
                        :productprice=thumb.price>
                  </Products>
                  <div class="cart_button">
                      <CartShow :cartshowlabel=cartshowlabel :cartquantity=cartstore.getcartquantity 
                      @click="cartstore.cartswitch()">
                      </CartShow>
                  </div>
                  <div class="cartview" v-if="cartstore.cartshow">
                      <Chariot v-for="(item,index) in cartstore.tab_cart" :key="item.index" 
                      @removeitem="cartstore.removeitem(index)"
                      @cartminus=cartstore.cartminus(index)
                      @cartplus=cartstore.cartplus(index)
                      @moins=cartstore.moins(index)
                      @plus=cartstore.plus(index)
                      :itemthumbs="item.ivimagesource"
                      :itemid="item.productid"
                      :itemtitle="item.thumbtitle"
                      :itemsingleprice="item.productprice"
                      :cartitemqtt="item.itemqtt"
                      :cartitemtotal="item.eachtotalprice">
                      </Chariot>
                      <hr/>
                      <TotalCost :totalcost=totalcostlabel :totalamount=cartstore.totalamount>

                      </TotalCost>
                      <Checkout :clearlabel="clearlabel" :checkoutlabel="checkoutlabel"
                        :ifnoproducttoclear="cartstore.ifnoproducttoclear"
                        :ifnoproducttocheckout="cartstore.ifnoproducttocheckout"
                        @clearcart="cartstore.clearcart()"
                        @checkout="cartstore.checkout()">
                      </Checkout>
                  </div>  
              </div>
          </div>
          <transition name="itemviewcontent">
            <ItemView v-if="itemview.agrandit" @quitter="itemview.quitter()" 
                  @itemplus="itemview.itemplus"
                  @itemminus="itemview.itemminus"
                  :thumbs=itemview.ivimagesource
                  :id=itemview.id
                  :pid=itemview.pid
                  :thumbtitle=itemview.thumbtitle
                  :productprice=itemview.productprice
                  :thumbdescription=itemview.thumbdescription
                  :itemviewqtt=itemview.itemviewqtt
                  :isitemzero=itemview.isitemzero
                   @additem="cartstore.addtocart(
                    itemview.id,
                    itemview.pid,
                    itemview.ivimagesource,
                    itemview.thumbtitle,
                    itemview.productprice,
                    itemview.quantitytosend,
                    itemview.thumbdescription)">
              </ItemView>
          </transition> 
              <div class="itemcheckout" v-if="cartstore.ischeckout">
                <div class="itemcheckout_content">
                      <table id="chktable">
                          <tr>
                              <th>Item</th>
                              <th>Quantity</th>
                              <th>Single Price</th>
                              <th>Item Total Price</th>
                          </tr>
                          <tr v-for="(item,index) in cartstore.tab_cart" :key="item.index">
                              <td><img :src="item.ivimagesource" alt="item image" width="150" height></td>
                              <td>{{ item.itemqtt }}</td>
                              <td>$ {{ item.productprice }}</td>
                              <td>$ {{ item.eachtotalprice }}</td>
                          </tr>
                          <tr>
                              <td></td>
                              <td></td>
                              <td>Total</td>
                              <td id="totalprice">$ {{ cartstore.totalamount }}</td>
                          </tr>
                      </table>
                      <button id="checkoutcancel" @click="cartstore.checkoutswitch()">Cancel</button>
                      <h4>Your payment process goes here...</h4>
                  </div>
              </div>
      </div>
  </div>
</template>

<script>
import Products from '@/components/Products.vue'
import ItemView from '@/views/ItemView.vue'
import Cart from '@/components/Cart.vue'
import CartShow from '@/components/CartShow.vue'
import TotalCost from '@/components/TotalCost.vue'
import Chariot from '@/components/Chariot.vue'
import Checkout from '@/components/Checkout.vue'

//CartShow component
let cartshowlabel="Cart";//button label

let clearlabel='Clear cart';
let checkoutlabel='Checkout';
let totalcostlabel='Total';
export default 
{
  name:'Home',
  components:
  {
      Products,ItemView,Cart,CartShow,TotalCost,Chariot,Checkout
  },
  data()
  {
      return{
            cartshowlabel,clearlabel,checkoutlabel,totalcostlabel
        }
  },
  props:
  {
      'pluslabel':String,
      'minuslabel':String
  }
}
</script>

<style>
@media (min-width: 1200px)
{
  .product_container
  {
      margin-left: auto;
      margin-right: auto;
      padding-bottom: 100px;
      width:1280px;
      height: 950px;
      text-align:center;
  }
  .product_container .productContent 
  {
      margin-top:-40px;
      width:1180px;
      margin-left:5%;
      margin-right:auto;
      display:flex;
      align-content:center;
      flex-wrap:wrap;
  }
  .product_container .opaque
  {
      margin-top:-40px;
      width:100%;
      margin-left:5%;
      display:flex;
      align-content:center;
      flex-wrap:wrap;
      opacity:0.4;
  }
  .cart_button
  {
      position:fixed;
      margin-top:-10px;
      margin-left:-90px;
      background-color: #ffffff;
  }
  .cartview
  {
      position:fixed;
      margin-left:-90px;
      margin-top:40px;
      width:720px;
      height: 420px;
      margin-bottom:160px;
      z-index:99999999999999;
      background-color: #463f3f;
      color:#ffffff;
      overflow:scroll;
  }
  .itemcheckout
  {
      position:relative;
      width:100%;
      margin-top:-1000px;
      z-index:9999999999999;
  }
  .itemcheckout_content
  {
      border:1px inset black;
      background-color: #fefefe;
      width:100%;
      padding:5px;
      margin-left:-6px;
      margin-right:auto;
  }
  .itemcheckout_content table
  {
      width:100%;
  }
  table#chktable
  {
      border-collapse: collapse;
      text-align: center;
  }
  table#chktable td,th
  {
      border:1px solid black;
      font-family:arial;
      font-size: 1.2em;
  }
  table#chktable td#totalprice
  {
      font-size: 1.5em;
  }
  table#chktable tr th
  {
    background-image:linear-gradient(#463f3f,#ada5a5);
    height: 50px;
    color:#ffffff;
  }
  button#checkoutcancel
    {
        width:150px;
        height: 30px;
        font-family:arial;
        font-weight:bold;
        border:2px solid black;
        margin-top: 10px;
    }
    button#checkoutcancel:hover
    {
        cursor:pointer;
    }
    .itemviewcontent-enter
    {
        opacity: .5;
        transition:all ease 0.1s;
    }
    .itemviewcontent-enter-active
    {
        transition:all ease 0.1s;
    }
    .itemviewcontent-enter-to
    {
        opacity: 1;
    }
    .itemviewcontent-leave-to
    {
        transition: all ease 0.5s;
        opacity: 0;
    }
}
@media (min-width: 992px) and (max-width: 1199px)
{
  .product_container
  {
      margin-left:0%;
      margin-right: auto;
      padding-bottom: 100px;
      width:990px;
      height:950px;
      text-align:center;
  }
  .product_container .productContent 
  {
      margin-top:-40px;
      width:990px;
      margin-left:auto;
      margin-right:auto;
      display:flex;
      align-content:center;
      flex-wrap:wrap;
      z-index:900000000000;
  }
  .product_container .opaque
  {
      margin-top:-40px;
      width:990px;
      margin-left:auto;
      margin-right:auto;
      display:flex;
      align-content:center;
      flex-wrap:wrap;
      opacity:0.4;
  }
  .cart_button
  {
      position:fixed;
      margin-top:-10px;
      margin-left:110px;
      background-color: #ffffff;
  }
  .cartview
  {
      position:fixed;
      margin-left:0px;
      margin-top:40px;
      width:720px;
      height: 420px;
      margin-bottom:160px;
      z-index:99999999999999;
      background-color: #463f3f;
      color:#ffffff;
      overflow:scroll;
  }
  .itemcheckout
  {
      position:relative;
      width:100%;
      margin-top:-1000px;
      z-index:9999999999999;
  }
  .itemcheckout_content
  {
      border:1px inset black;
      background-color: #fefefe;
      width:99%;
      padding:5px;
      margin-left:auto;
      margin-right:auto;
  }
  .itemcheckout_content table
  {
      width:100%;
  }
  table#chktable
  {
      border-collapse: collapse;
      text-align: center;
  }
  table#chktable td,th
  {
      border:1px solid black;
      font-family:arial;
      font-size: 1.2em;
  }
  table#chktable td#totalprice
  {
      font-size: 1.5em;
  }
  table#chktable tr th
  {
    background-image:linear-gradient(#463f3f,#ada5a5);
    height: 50px;
    color:#ffffff;
  }
  button#checkoutcancel
    {
        width:150px;
        height: 30px;
        font-family:arial;
        font-weight:bold;
        border:2px solid black;
        margin-top: 10px;
    }
    button#checkoutcancel:hover
    {
        cursor:pointer;
    }
    .itemviewcontent-enter
    {
        opacity: .5;
        transition:all ease 0.1s;
    }
    .itemviewcontent-enter-active
    {
        transition:all ease 0.1s;
    }
    .itemviewcontent-enter-to
    {
        opacity: 1;
    }
    .itemviewcontent-leave-to
    {
        transition: all ease 0.5s;
        opacity: 0;
    }
}
@media (min-width: 768px) and (max-width: 991px)
{
  .product_container
  {
      margin-left:0%;
      margin-right: auto;
      padding-bottom: 100px;
      width:100%;
      height:950px;
      text-align:center;
  }
  .product_container .productContent 
  {
      margin-top:-40px;
      width:100%;
      margin-left:0;
      margin-right:0;
      display:flex;
      align-content:center;
      flex-wrap:wrap;
  }
  .product_container .opaque
  {
      margin-top:-40px;
      width:100%;
      margin-left:0px;
      margin-right:auto;
      display:flex;
      align-content:center;
      flex-wrap:wrap;
      opacity:0.4;
  }
  .cart_button
  {
      position:absolute;
      margin-top:-10px;
      margin-left:110px;
      background-color: #ffffff;
  }
  .cartview
  {
      position:absolute;
      margin-left:-15px;
      margin-top:40px;
      width:720px;
      height: 420px;
      margin-bottom:160px;
      z-index:99999999999999;
      background-color: #463f3f;
      color:#ffffff;
      overflow:scroll;
  }
  .itemcheckout
  {
      position:relative;
      width:100%;
      margin-top:-1000px;
      z-index:9999999999999;
  }
  .itemcheckout_content
  {
      border:1px inset black;
      background-color: #fefefe;
      width:99%;
      padding:5px;
      margin-left:auto;
      margin-right:auto;
  }
  .itemcheckout_content table
  {
      width:100%;
  }
  table#chktable
  {
      border-collapse: collapse;
      text-align: center;
  }
  table#chktable td,th
  {
      border:1px solid black;
      font-family:arial;
      font-size: 1.2em;
  }
  table#chktable td#totalprice
  {
      font-size: 1.5em;
  }
  table#chktable tr th
  {
    background-image:linear-gradient(#463f3f,#ada5a5);
    height: 50px;
    color:#ffffff;
  }
  button#checkoutcancel
    {
        width:150px;
        height: 30px;
        font-family:arial;
        font-weight:bold;
        border:2px solid black;
        margin-top: 10px;
    }
    button#checkoutcancel:hover
    {
        cursor:pointer;
    }
    .itemviewcontent-enter
    {
        opacity: .5;
        transition:all ease 0.1s;
    }
    .itemviewcontent-enter-active
    {
        transition:all ease 0.1s;
    }
    .itemviewcontent-enter-to
    {
        opacity: 1;
    }
    .itemviewcontent-leave-to
    {
        transition: all ease 0.5s;
        opacity: 0;
    }
}
@media (min-width: 576px) and (max-width: 767px)
{
  .product_container
  {
      margin-left:0%;
      margin-right: auto;
      padding-bottom:0px;
      width:100%;
      height:1280px;
      text-align:center;
  }
  .product_container .productContent 
  {
      padding-top:200px;
      margin-top:-200px;
      width:100%;
      margin-left:6%;
      margin-right:auto;
      display:flex;
      align-content:center;
      flex-wrap:wrap;
  }
  .product_container .opaque
  {
      padding-top:-100px;
      margin-top:0px;
      width:100%;
      margin-left:6%;
      margin-right:auto;
      display:flex;
      align-content:center;
      flex-wrap:wrap;
      opacity:0.4;
  }
  .cart_button
  {
      position:absolute;
      top:150px;
      background-color: #ffffff;
  }
  .cartview
  {
      position:absolute;
      margin-left:-70px;
      margin-top:0px;
      width:720px;
      height: 420px;
      margin-bottom:160px;
      z-index:99999999999999;
      background-color: #463f3f;
      color:#ffffff;
      overflow:scroll;
  }
  .itemcheckout
  {
      position:relative;
      width:100%;
      margin-top:-1080px;
      z-index:9999999999999;
  }
  .itemcheckout_content
  {
      border:1px inset black;
      background-color: #fefefe;
      width:98%;
      padding:5px;
      margin-left:auto;
      margin-right:auto;
  }
  .itemcheckout_content table
  {
      width:100%;
  }
  table#chktable
  {
      border-collapse: collapse;
      text-align: center;
  }
  table#chktable td,th
  {
      border:1px solid black;
      font-family:arial;
      font-size: 1.2em;
  }
  table#chktable td#totalprice
  {
      font-size: 1.5em;
  }
  table#chktable tr th
  {
    background-image:linear-gradient(#463f3f,#ada5a5);
    height: 50px;
    color:#ffffff;
  }
  button#checkoutcancel
    {
        width:150px;
        height: 30px;
        font-family:arial;
        font-weight:bold;
        border:2px solid black;
        margin-top: 10px;
    }
    button#checkoutcancel:hover
    {
        cursor:pointer;
    }
    .itemviewcontent-enter
    {
        opacity: .5;
        transition:all ease 0.1s;
    }
    .itemviewcontent-enter-active
    {
        transition:all ease 0.1s;
    }
    .itemviewcontent-enter-to
    {
        opacity: 1;
    }
    .itemviewcontent-leave-to
    {
        transition: all ease 0.5s;
        opacity: 0;
    }
}
@media (max-width: 575px)
{
  .product_container
  {
      margin-left:15%;
      margin-right: auto;
      padding-bottom:0px;
      width:100%;
      height:1280px;
      overflow:scroll;
      text-align:center;
  }
  .product_container .productContent 
  {
      margin-top:-200px;
      padding-top: 200px;
      width:570px;
      overflow:scroll;
      margin-left:auto;
      margin-right:auto;
      display:flex;
      align-content:center;
      flex-wrap:wrap;
  }
  .product_container .opaque
  {
      margin-top:-40px;
      padding-top:0px;
      width:100%;
      margin-left:auto;
      margin-right:auto;
      display:flex;
      align-content:center;
      flex-wrap:wrap;
      opacity:0.4;
  }
  .cart_button
  {
      position:absolute;
      top:150px;
      left:8px;
      background-color: #ffffff;
      z-index:900000000000;
  }
  .cartview
  {
      position:absolute;
      margin-left:-84px;
      margin-top:0px;
      width:100%;
      height: 420px;
      margin-bottom:160px;
      background-color: #463f3f;
      color:#ffffff;
      overflow:scroll;
  }
  .itemcheckout
  {
      position:relative;
      width:100%;
      margin-top:-1270px;
      z-index:9999999999999;
  }
  .itemcheckout_content
  {
      border:1px inset black;
      background-color: #fefefe;
      width:99%;
      padding:5px;
      margin-left:auto;
      margin-right:auto;
  }
  .itemcheckout_content table
  {
      width:100%;
  }
  table#chktable
  {
      border-collapse: collapse;
      text-align: center;
  }
  table#chktable td,th
  {
      border:1px solid black;
      font-family:arial;
      font-size: 1em;
  }
  table#chktable td#totalprice
  {
      font-size: 1.5em;
  }
  table#chktable tr th
  {
    background-image:linear-gradient(#463f3f,#ada5a5);
    height: 50px;
    color:#ffffff;
    font-size:0.9em;
  }
  button#checkoutcancel
    {
        width:150px;
        height: 30px;
        font-family:arial;
        font-weight:bold;
        border:2px solid black;
        margin-top: 10px;
    }
    button#checkoutcancel:hover
    {
        cursor:pointer;
    }
    .itemviewcontent-enter
    {
        opacity: .5;
        transition:all ease 0.1s;
    }
    .itemviewcontent-enter-active
    {
        transition:all ease 0.1s;
    }
    .itemviewcontent-enter-to
    {
        opacity: 1;
    }
    .itemviewcontent-leave-to
    {
        transition: all ease 0.5s;
        opacity: 0;
    }
}
</style>
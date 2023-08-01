<template>
    <div class="cart">
        <div class="cartcontent">
             <img id="thumbs"
				:src="itemthumbs" 
				alt="Products_Images" 
				width="150" 
				height="80"/>
                <h3>Id : {{itemid}}<br/> {{itemtitle}} | {{itemsingleprice}} $</h3>
            <div class="cart_control">
                <CartPQ :eachprice=eachprice 
                    @cartminus="$emit('cartminus')" 
                    @cartplus="$emit('cartplus')" 
                    @removeitem="$emit('removeitem')">
                </CartPQ>    
            </div>
        </div>
    </div>
</template>

<script>
import CartPQ from '@/components/CartPQ.vue'
export default 
{
   name:'Cart',
   props:
   {
    'itemthumbs':String,//image source for thumbnail
    'itemid':String,//value used as 'prrduct Id'
    'itemtitle':String,//product title
    'itemsingleprice':Number,//each product price
    'eachprice':Number//value passed via 'eachprice' prop in CartPQ component
   },
   components:
   {
    CartPQ
   }
}
</script>
<style>
.cart
{
    border:1px solid #ffffff;
    width:400px;
    height:250px;
    margin-left:auto;
    margin-right:auto;
}
.cart_control
{
    display:flex;
}
.cart_control 
{
    margin-left:50px;
    margin-top:20px;
}
@media screen and (max-width:720px)
{
    .cart_content
    {
        margin-left:50%;
        margin-right:auto;
    }
}
</style>
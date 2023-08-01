<template>
    <div class="cart">
        <div class="cartcontent">
             <img id="thumbs"
				:src="itemthumbs" 
				alt="Products_Images" 
				width="180" 
				height="100"/>
                <h3>Id : {{itemid}}<br/> {{itemtitle}} | {{itemsingleprice}} $</h3>
            <div class="cart_control">
                <button id="cartminus" @click="moins" @mouseup="$emit('cartminus')" :disabled="iscartzero">-</button>
                <p id="cartitemqtt">{{cartitemqtt}}</p>
                <button id="cartplus" @click="plus" @mouseup="$emit('cartplus')">+</button>
                <p id="cartitemtotal">{{cartitemtotal}} $</p>
                <div class="removecart">
                    <button id="removeitem" @click="$emit('removeitem')">X</button>
                </div>   
            </div>
        </div>
    </div>
</template>

<script>
export default 
{
   name:'Chariot',
   props:
   {
    'itemthumbs':String,//image source for thumbnail
    'itemid':String,//value used as 'prrduct Id'
    'itemtitle':String,//product title
    'itemsingleprice':Number,//each product price
    'cartitemqtt':Number,//each item quantity in cart
    'cartitemtotal':Number,//each item total in cart
    'iscartzero':Boolean//boolean for minus button in cart component
   }
}
</script>
<style>

@media (min-width: 1200px)
{
    .cart
    {
        border:1px solid #ffffff;
        width:100%;
        height:250px;
        margin-left:0px;
        margin-right:0;
        width:100%;
    }
    .cart_control
    {
        display:flex;
        position: absolute;
        left:19%;
        margin-top:30px;
    }
}
@media (min-width: 992px) and (max-width: 1199px)
{
    .cart
    {
        border:1px solid #ffffff;
        width:100%;
        height:250px;
        margin-left:0px;
        margin-right:0;
        width:100%;
    }
    .cart_control
    {
        display:flex;
        position: absolute;
        left:19%;
        margin-top:30px;
    }
}
@media (min-width: 768px) and (max-width: 991px)
{
    .cart
    {
        border:1px solid #ffffff;
        width:100%;
        height:250px;
        margin-left:0px;
        margin-right:0;
        width:100%;
    }
    .cart_control
    {
        display:flex;
        position: absolute;
        left:20%;
        margin-top:30px;
    }
}
@media (min-width: 576px) and (max-width: 767px)
{
    .cart
    {
        border:1px solid #ffffff;
        width:100%;
        height:250px;
        margin-left:0px;
        margin-right:0;
        width:100%;
    }
    .cart_control
    {
        display:flex;
        position: absolute;
        left:20%;
        margin-top:30px;
    }
}
@media (max-width: 575px)
{
    .cart
    {
        border:1px solid #ffffff;
        width:400px;
        height:250px;
        margin-left:0;
        margin-right:0;
        width:100%;
    }
    .cart_control
    {
        display:flex;
        margin-left: 20%;
        margin-right: auto;
        margin-top:60px;
    }
}
</style>
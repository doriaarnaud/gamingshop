<template>
    <div class="checkout">
        <div class="checkout_container">
            <button id="clearcart" :disabled=ifnoproducttoclear @click="$emit('clearcart')">{{clearlabel}}</button>
            <button id="checkout" :disabled=ifnoproducttocheckout @click="$emit('checkout')">{{checkoutlabel}}</button>
        </div>
    </div>

</template>
<script>
export default 
{
    name:'Checkout',
    props:
    {
        'clearlabel':String,
        'checkoutlabel':String,
        'ifnoproducttoclear':Boolean,//disable the button when 'tab_cart' length is less than 1
        'ifnoproducttocheckout':Boolean//disable the button when 'tab_cart' length is less than 1
    }
}
</script>

<style>
button#clearcart
{
    width:100px;
    height: 30px;
    font-family:arial;
    font-weight:bold;
    border:2px solid black;
}
button#clearcart:hover
{
    cursor:pointer;
}
button#checkout
{
    width:100px;
    height: 30px;
    font-family:arial;
    font-weight:bold;
    border:2px solid black;
}
button#checkout:hover
{
    cursor:pointer;
}
</style>
<template>
    <div id="cartbouton_container">
        <button id="cartminus" @click="moins" @mouseup="$emit('cartminus')" :disabled=isitemzero>-</button>
        <p id="cartitemqtt">{{cartitemqtt}}</p>
        <button id="cartplus" @click="plus" @mouseup="$emit('cartplus')">+</button>
        <p id="cartitemtotal">{{cartitemtotal}} $</p>
        <div class="removecart">
            <button id="removeitem" @click="$emit('removeitem')">X</button>
        </div>
    </div>
</template>

<script>
let cartitemqtt=0;
let cartitemtotal=0;
let isitemzero=false;
export default 
{
    name:'CartPQ',
    props:
    {
        'eachprice':Number
    },
    data()
    {
        return {cartitemqtt,isitemzero,cartitemtotal}
    },
    mounted:function()
    {
        this.cartitemtotal=this.eachprice;
    },
    methods:
    {
        moins:function()
        {
            --this.cartitemqtt;
            if(this.cartitemqtt==0)
            {
                this.isitemzero=true;
            }
            this.cartitemtotal=this.eachprice*this.cartitemqtt;
        },
        plus:function()
        {
            ++this.cartitemqtt;
            this.isitemzero=false;
            this.cartitemtotal=this.eachprice*this.cartitemqtt;
        }
    }
}
</script>
<style>
#cartbouton_container
{
	width:500px;
	height: 50px;
	margin-left:auto;
	margin-right:auto;
	margin-top:30px;
	display:flex;
}
button#cartplus,button#cartminus
{
	width:40px;
	height:20px;
	font-family:arial;
	font-size:1em;
	text-align:center;
	border:none;
	margin-top:2px;
}
button#cartplus:hover,button#cartminus:hover
{
	cursor:pointer;
}
button#cartplus
{
	border-radius: 0px 10px 10px 0px;
}
button#cartminus
{
	border-radius: 10px 0px 0px 10px;
}
p#cartitemqtt
{
	font-family:arial;
	font-size:1.1em;
	margin-top:2px;
}
p#cartitemqtt
{
	width:50px;
}
p#cartitemtotal
{
	width:150px;
    margin-top:1px;
    font-size:1.2em;
    font-family:arial;
}
button#removeitem
{
	width:50px;
	height:20px;
	font-family:arial;
	font-size:1em;
	text-align:center;
	border:none;
	margin-top:2px;
	margin-left:10px;
	background-color: #c0c0c0;
	border-radius: 10px 10px 10px 10px;
}
button#removeitem:hover
{
	cursor:pointer;
	background-color: #d0d0d0;
}

</style>
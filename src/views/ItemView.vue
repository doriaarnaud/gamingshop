<template>
    <div class="itemview">
		<div class="itemview_content">
			<div class="item_image">
				<img id="thumbs"
				:src="thumbs" 
				alt="Products_Images" />
                <h3>Id : {{pid}}<br/> {{thumbtitle}} | {{productprice}} $</h3>
                <p>
                    {{thumbdescription}}
                </p>
				<div class="button_container">
					<button id="itemviewminus" 
						@click="moins" 
						@mouseup="$emit('itemminus')" 
					:disabled=isitemzero>-</button>
					<p id="itemviewqtt">{{itemviewqtt}}</p>
					<button id="itemviewplus" @click="plus" @mouseup="$emit('itemplus')">+</button>
					<p id="itemviewtotal">{{itemviewtotal}} $</p>
					<button id="viewaddtocart" 
						@click="$emit('additem')" 
						:disabled="isitemzero">Add to cart
					</button>
				</div>
                <button id="quit" @click="$emit('quitter')" @mouseup=quitter>X</button>
			</div>
		</div>
    </div>
</template>

<script>
let boutonlabel="Add to cart";
import CartPQ from '@/components/CartPQ.vue'
export default 
{
	name:'ItemView',
	props:
	{
		'id':Number,//the product id in the array or the API object data
		'pid':String,//used as 'product Id example'
		'thumbs':String,//image source for the decription window
		'thumbwidth':Number,//image width
		'thumbheight':Number,//image height
		'thumbtitle':String,//used as 'product title'
		'productprice':Number,//used as 'product price'//used as 'item quantity in ItemView component'
		'thumbdescription':String,//used as 'full product description'. All these data appear in this component
		'itemviewqtt':Number,
		'isitemzero':Boolean
	},
	data()
	{
		return {boutonlabel}
	},
	components:
	{
		CartPQ
	},
	computed:
	{
		itemviewtotal:function()
		{
			let resultat=this.itemviewqtt*this.productprice;
			return resultat;
		}
	}
}
</script>
<style>
@media (min-width: 1200px)
{
	.itemview
	{
		position:relative;
		margin-top:-650px;
		width:650px;
		height: 450px;
		margin-left:auto;
		margin-right: auto;
		margin-bottom: 160px;
		z-index:9999999999999;
	}
	.itemview .itemview_content
	{
		border:1px solid black;
		background-color: #fefefe;
		border-radius:5px;
		width:650px;
		height:500px;
		margin-left:auto;
		margin-right: auto;
		padding:5px;
	}
	.itemview .itemview_content button#quit
	{
		float:right;
		width:40px;
		height: 25x;
		margin-top:-500px;
		border:none;
		font-family: arial;
		font-size: 1.5em;
		text-align: center;
		z-index:90000000000000000;
	}
	.itemview .itemview_content button#quit:hover
	{
		background-color: #ff0000;
		color:#ffffff;
		cursor: pointer;
	}
	.item_image img#thumbs
	{
		position:relative;
		margin-right: auto;
		margin-left: 15%;
		margin-top:30px;
		width:70%;
		height: 250px;
	}
	.item_image h3,p
	{
		text-align:center;
	}
	.button_container
	{
		display:flex;
		width:450px;
		margin-top:60px;
		margin-left:auto;
		margin-right:auto;
	}
	button#itemviewminus
	{
		width:50px;
		height:30px;
		border:none;
		border-radius:10px 0px 0px 10px;
		font-size:1.5em;
		padding:0;
		margin-left:10px;
	}
	button#itemviewminus:hover
	{
		cursor:pointer;
	}
	p#itemviewqtt
	{
		font-size:1.5em;
		padding:0;
		margin-top:2px;
		width:30px;
		font-family:arial;
	}
	button#itemviewplus
	{
		width:50px;
		height:30px;
		border:none;
		border-radius:0px 10px 10px 0px;
		font-size:1.5em;
		padding:0;
	}
	button#itemviewplus:hover
	{
		cursor:pointer;
	}
	p#itemviewtotal
	{
		font-size:1.5em;
		padding:0;
		margin-top:2px;
		width:30px;
		width:200px;
		font-family:arial;
	}
	button#viewaddtocart
	{
		width:110px;
		height:30px;
		font-family:arial;
		font-size:1em;
		text-align:center;
		border:none;
		margin-top:2px;
		margin-left:80px;
		background-color: #c0c0c0;
		border-radius: 10px 10px 10px 10px;
	}
	button#viewaddtocart:hover
	{
		cursor:pointer;
		background-color: #d0d0d0;
	}
}
@media (min-width: 992px) and (max-width: 1199px)
{
	.itemview
	{
		position:relative;
		margin-top:-750px;
		width:650px;
		height: 450px;
		margin-left:auto;
		margin-right: auto;
		margin-bottom: 100px;
		z-index:9999999999999;
	}
	.itemview .itemview_content
	{
		border:1px inset black;
		background-color: #fefefe;
		border-radius:5px;
		width:650px;
		height:500px;
		margin-left:auto;
		margin-right: auto;
		padding:5px;
	}
	.itemview .itemview_content button#quit
	{
		float:right;
		width:40px;
		height: 25x;
		margin-top:-500px;
		border:none;
		font-family: arial;
		font-size: 1.5em;
		text-align: center;
		z-index:90000000000000000;
	}
	.itemview .itemview_content button#quit:hover
	{
		background-color: #ff0000;
		color:#ffffff;
		cursor: pointer;
	}
	.item_image img#thumbs
	{
		position:relative;
		margin-right: auto;
		margin-left: 16%;
		margin-top:30px;
		width:70%;
		height: 250px;
	}
	.item_image h3,p
	{
		text-align:center;
	}
	.button_container
	{
		display:flex;
		width:450px;
		margin-top:60px;
		margin-left:auto;
		margin-right:auto;
	}
	button#itemviewminus
	{
		width:50px;
		height:30px;
		border:none;
		border-radius:10px 0px 0px 10px;
		font-size:1.5em;
		padding:0;
		margin-left:10px;
	}
	button#itemviewminus:hover
	{
		cursor:pointer;
	}
	p#itemviewqtt
	{
		font-size:1.5em;
		padding:0;
		margin-top:2px;
		width:30px;
		font-family:arial;
	}
	button#itemviewplus
	{
		width:50px;
		height:30px;
		border:none;
		border-radius:0px 10px 10px 0px;
		font-size:1.5em;
		padding:0;
	}
	button#itemviewplus:hover
	{
		cursor:pointer;
	}
	p#itemviewtotal
	{
		font-size:1.5em;
		padding:0;
		margin-top:2px;
		width:30px;
		width:200px;
		font-family:arial;
	}
	button#viewaddtocart
	{
		width:110px;
		height:30px;
		font-family:arial;
		font-size:1em;
		text-align:center;
		border:none;
		margin-top:2px;
		margin-left:80px;
		background-color: #c0c0c0;
		border-radius: 10px 10px 10px 10px;
	}
	button#viewaddtocart:hover
	{
		cursor:pointer;
		background-color: #d0d0d0;
	}
}
@media (min-width: 768px) and (max-width: 991px)
{
	.itemview
	{
		position:relative;
		margin-top:-850px;
		width:650px;
		height: 450px;
		margin-left:auto;
		margin-right: auto;
		margin-bottom: 160px;
		z-index:9999999999999;
	}
	.itemview .itemview_content
	{
		border:1px inset black;
		background-color: #fefefe;
		border-radius:5px;
		width:650px;
		height:500px;
		margin-left:auto;
		margin-right: auto;
		padding:5px;
	}
	.itemview .itemview_content button#quit
	{
		float:right;
		width:40px;
		height: 25x;
		margin-top:-500px;
		border:none;
		font-family: arial;
		font-size: 1.5em;
		text-align: center;
		z-index:90000000000000000;
	}
	.itemview .itemview_content button#quit:hover
	{
		background-color: #ff0000;
		color:#ffffff;
		cursor: pointer;
	}
	.item_image img#thumbs
	{
		position:relative;
		margin-right: auto;
		margin-left:16%;
		margin-top:30px;
		width:70%;
		height: 250px;
		z-index:0;
	}
	.item_image h3,p
	{
		text-align:center;
	}
	.button_container
	{
		display:flex;
		width:450px;
		margin-top:60px;
		margin-left:auto;
		margin-right:auto;
	}
	button#itemviewminus
	{
		width:50px;
		height:30px;
		border:none;
		border-radius:10px 0px 0px 10px;
		font-size:1.5em;
		padding:0;
		margin-left:10px;
	}
	button#itemviewminus:hover
	{
		cursor:pointer;
	}
	p#itemviewqtt
	{
		font-size:1.5em;
		padding:0;
		margin-top:2px;
		width:30px;
		font-family:arial;
	}
	button#itemviewplus
	{
		width:50px;
		height:30px;
		border:none;
		border-radius:0px 10px 10px 0px;
		font-size:1.5em;
		padding:0;
	}
	button#itemviewplus:hover
	{
		cursor:pointer;
	}
	p#itemviewtotal
	{
		font-size:1.5em;
		padding:0;
		margin-top:2px;
		width:30px;
		width:200px;
		font-family:arial;
	}
	button#viewaddtocart
	{
		width:110px;
		height:30px;
		font-family:arial;
		font-size:1em;
		text-align:center;
		border:none;
		margin-top:2px;
		margin-left:80px;
		background-color: #c0c0c0;
		border-radius: 10px 10px 10px 10px;
	}
	button#viewaddtocart:hover
	{
		cursor:pointer;
		background-color: #d0d0d0;
	}
}
@media (min-width: 576px) and (max-width: 767px)
{
	.itemview
	{
		position:relative;
		margin-top:-800px;
		width:100%;
		height: 450px;
		margin-left:auto;
		margin-right: auto;
		margin-bottom: 160px;
		z-index:9999999999999;
	}
	.itemview .itemview_content
	{
		border:1px inset black;
		background-color: #fefefe;
		border-radius:5px;
		height:500px;
		margin-left:auto;
		margin-right: auto;
		padding:5px;
	}
	.itemview .itemview_content button#quit
	{
		position:relative;
		width:40px;
		height: 25x;
		float:right;
		margin-top: -500px;
		border:none;
		font-family: arial;
		font-size: 1.5em;
		text-align: center;
		z-index:90000000000000000;
	}
	.itemview .itemview_content button#quit:hover
	{
		background-color: #ff0000;
		color:#ffffff;
		cursor: pointer;
	}
	.item_image img#thumbs
	{
		position:relative;
		margin-right: auto;
		margin-left:17%;
		width:70%;
		height: 250px;
	}
	.item_image h3,p
	{
		text-align:center;
	}
	.button_container
	{
		display:flex;
		width:450px;
		margin-top:90px;
		margin-left:auto;
		margin-right:auto;
	}
	button#itemviewminus
	{
		width:50px;
		height:30px;
		border:none;
		border-radius:10px 0px 0px 10px;
		font-size:1.5em;
		padding:0;
		margin-left:10px;
	}
	button#itemviewminus:hover
	{
		cursor:pointer;
	}
	p#itemviewqtt
	{
		font-size:1.5em;
		padding:0;
		margin-top:2px;
		width:30px;
		font-family:arial;
	}
	button#itemviewplus
	{
		width:50px;
		height:30px;
		border:none;
		border-radius:0px 10px 10px 0px;
		font-size:1.5em;
		padding:0;
	}
	button#itemviewplus:hover
	{
		cursor:pointer;
	}
	p#itemviewtotal
	{
		font-size:1.5em;
		padding:0;
		margin-top:2px;
		width:30px;
		width:200px;
		font-family:arial;
	}
	button#viewaddtocart
	{
		width:110px;
		height:30px;
		font-family:arial;
		font-size:1em;
		text-align:center;
		border:none;
		margin-top:2px;
		margin-left:80px;
		background-color: #c0c0c0;
		border-radius: 10px 10px 10px 10px;
	}
	button#viewaddtocart:hover
	{
		cursor:pointer;
		background-color: #d0d0d0;
	}
}
@media (max-width: 575px)
{
	.itemview
	{
		position:absolute;
		margin-top:-200%;
		width:95%;
		height: 450px;
		margin-left:0;
		margin-right: auto;
		z-index:9999999999999;
	}
	.itemview .itemview_content
	{
		border:1px inset black;
		background-color: #fefefe;
		border-radius:5px;
		width:100%;
		height:500px;
		margin-left:auto;
		margin-right: auto;
		padding:5px;
	}
	.itemview .itemview_content button#quit
	{
		position:absolute;
		top:5px;
		left:90%;
		width:40px;
		height: 25x;
		border:none;
		font-family: arial;
		font-size: 1.5em;
		text-align: center;
		z-index:90000000000000000;
	}
	.itemview .itemview_content button#quit:hover
	{
		background-color: #ff0000;
		color:#ffffff;
		cursor: pointer;
	}
	.item_image img#thumbs
	{
		position:relative;
		width:100%;
		height: 250px;
	}
	.item_image h3,p
	{
		text-align:center;
	}
	.button_container
	{
		display:flex;
		width:450px;
		margin-top:60px;
		margin-left:auto;
		margin-right:auto;
	}
	button#itemviewminus
	{
		width:50px;
		height:30px;
		border:none;
		border-radius:10px 0px 0px 10px;
		font-size:1.5em;
		padding:0;
		margin-left:10px;
	}
	button#itemviewminus:hover
	{
		cursor:pointer;
	}
	p#itemviewqtt
	{
		font-size:1.5em;
		padding:0;
		margin-top:2px;
		width:30px;
		font-family:arial;
	}
	button#itemviewplus
	{
		width:50px;
		height:30px;
		border:none;
		border-radius:0px 10px 10px 0px;
		font-size:1.5em;
		padding:0;
	}
	button#itemviewplus:hover
	{
		cursor:pointer;
	}
	p#itemviewtotal
	{
		font-size:1.5em;
		padding:0;
		margin-top:2px;
		width:30px;
		width:200px;
		font-family:arial;
	}
	button#viewaddtocart
	{
		width:110px;
		height:30px;
		font-family:arial;
		font-size:1em;
		text-align:center;
		border:none;
		margin-top:2px;
		margin-left:80px;
		background-color: #c0c0c0;
		border-radius: 10px 10px 10px 10px;
	}
	button#viewaddtocart:hover
	{
		cursor:pointer;
		background-color: #d0d0d0;
	}
}
</style>
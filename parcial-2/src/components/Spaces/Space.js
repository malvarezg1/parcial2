import React from 'react'


const Space =(props) => {


    const  onCardClick  = (space) => {
        props.onClickCallback(space)
    };

    let url = ""
    if(props.spaces.type ==="loft"){
        url = "https://en.pimg.jp/071/428/403/1/71428403.jpg"
    }
    else{
        url = "https://png.pngtree.com/element_our/png_detail/20181206/house-vector-icon-png_262129.jpg"
    }
    return(
    <div>
    <div class="card"  onClick={onCardClick.bind(null, props.spaces)} >
    <img class="card-img-top" src={url} alt="House"></img>
    <div class="card-body">
    <h5 class="card-title">{props.spaces.name}</h5>
    <p class="card-text">{props.spaces.address}</p>
    </div>
    </div>
    </div>
    ) 

}
export default Space;
import { useState } from "react";
import {FormattedMessage} from "react-intl";
import "./Room.css"
const Room = (props) =>{

    const [devices, setDevices] = useState([])

    const hadleClickOnRoom  = (room) =>{
        setDevices(room.devices)
    }

    
    return(
        <div className="container">
            <h1><FormattedMessage id="room"/></h1>
            <div className="row">
                <div className="col-lg-8">
                    <div className="row">
                        {props.rooms.map((room)=> {
                            let url =""
                            if(room.name === "Living room"){
                                url = "https://st10.cannypic.com/thumbs/39/392109_632_canny_pic.jpg"
                            }
                            else if(room.name === "Dinner room"){
                                url ="https://static.vecteezy.com/system/resources/thumbnails/001/635/277/small/dining-room-table-vector.jpg"
                            }
                            else{
                                url = "https://image.shutterstock.com/image-vector/kitchen-interior-furniture-stove-cupboard-260nw-1924244117.jpg"
                            }
                            
                            return(
                             <div className="col">
                             <div class="card"  onClick={hadleClickOnRoom.bind(null, room)} >
                             <h5 class="card-title">{room.name}</h5>
                             <img class="card-img-top" src={url} alt="House"></img>
                             <div class="card-body">
                             </div>
                             </div>
                             </div>
                        )})}  
                    </div>
                </div>
                <div className="col-lg-4">
                <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">ID</th>
                    <th scope="col"><FormattedMessage id="device"/></th>
                    <th scope="col"><FormattedMessage id="value"/></th>
                    </tr>
                </thead>
                <tbody>

                    {devices.map( (device) =>(
                        <tr>
                        <th scope="row">1</th>
                        <td>{device.id}</td>
                        <td>{device.name}</td>
                        <td>{device.desired.value}</td>
                        </tr>
                    )
                    )}
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}
export default Room;
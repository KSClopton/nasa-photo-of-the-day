import React, {useState, useEffect} from "react";
import axios from "axios";


const PicOfDay = ({data}) => {
    return (
        <div className="photo-container">
        <img src={data.hdurl} />
        </div>
    )
}
export default PicOfDay;
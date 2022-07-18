import React from "react";

const random = Math.floor(Math.random() * 55);

function houseAgeRange() {
    var ans = [];
    const ageStart = 1965;
    const ageEnd = 2021;
    for (let i = ageStart; i <= ageEnd; i++) {
        ans.push(i);
    }
    return  ans;
}
const x = houseAgeRange();


function generateDesc() {
    const priceRange = (random / 1.5 * 2);
    const ownerList = ['John Doe', 'Will Willingham','The Property Company', 'Ariel Oswalt','Mike Peters'];
    const ownerIndex = Math.floor(Math.random() * (ownerList.length - 1));
    const locationList = ['Detroit,MI','San Diego,Ca'];
    const locationIndex = Math.floor(Math.random() * (locationList.length - 1));
    const xIndex = Math.floor(Math.random() * (x.length - 1));
    const randomDescription = {location: locationList[locationIndex], price: priceRange, owner: ownerList[ownerIndex] , age: x[xIndex]};
    return randomDescription;
}

var description = generateDesc();


function Description() {
    return(
        <>
        <div className="Description">
            <div></div>
            <div>
            <li>{description.price}</li>
            <li>{description.location}</li>
            <li>{description.owner}</li>
            <li>{description.age}</li>
            </div>
            <div></div>
        </div>
        </>
    )
}

export default Description;
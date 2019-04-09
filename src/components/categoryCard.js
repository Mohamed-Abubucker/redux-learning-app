import React from 'react';
// import connect from 'react-redux'

export default function CategoryCard({ category = {
    _id: "5bcbf958c9f98b323ff02b22",
    categoryEn: 'Proten foods',
    categoryTl: 'உணவு தானியங்கள்',
    imageUrl: "https://cmarket.sgp1.digitaloceanspaces.com/cmarketlarge_9999/images_AA82799471475853.blob",
    tinyImageUrl: "https://cmarket.sgp1.digitaloceanspaces.com/cmarkettiny_9999/_tiny_images_AA82799471475853.blob",
} }) {
    return (
        <div style={{ display: "flex", 'flex-direction': 'column', maxWidth: '200px', padding: '10px', alignItems: 'center', border: '1px solid #000012', margin: '10px', borderRadius: '15px' }} key={category._id} onClick={() => { window.location = "https://www.google.co.in" }} _target="blank">
            <h3>{category.categoryTl}</h3>
            <img style={{ width: '170px', height: '120px' }} src={category.imageUrl} alt={"error: 404"} />
            {/* <preview>{JSON.stringify(category)}</preview> */}
            <h3>{category.categoryEn}</h3>
        </div>
    )
}



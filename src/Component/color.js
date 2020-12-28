import React from 'react'



const Showcolor = ({ color }) => {

    return (
        <>
            <div> {
                color ? color.map((e, index) => {

                    return (
                        <div className="col-6 col-xl-4 " >
                            <div key={index} className=" rounded mb-3"
                                style={{
                                    background: e.color_code,
                                    border: "1px solid #000", paddingTop: '75%'
                                }} />
                        </div>
                    )
                }) : null
            }
            </div>
        </>
    )
}


function Color({ color, type, page }) {
    console.log('type :>> ', color, type, page);

    return (
        <>
            <Showcolor color={color ? color[`color_${type}_${page}`] : null} />
        </>
    )
}
export default Color;
import React, { useEffect, useState } from 'react'
import { Quicktest } from "../"
// import {} from 

function Colorswitch() {

    const [red, setRed] = useState('');
    const [green, setGreen] = useState('');
    const [blue, setBlue] = useState('');


    const [pagecolor, setPagecolor] = useState({
        type: "red",
        page: "1",
    });

    useEffect(() => {
        try {
            showLoadingCallBack()
            const res = await GetQuizs()
            setRed(res.data.items.red)
            setGreen(res.data.items.green)
            setBlue(res.data.items.blue)
            closeShowLoding()
        } catch (error) {
            closeShowLoding()
            console.log('error:>>', error.response.data.error);
            const log = error.response.data.error ? error.response.data.error.message : undefined;
            errorCallBack("Text Admin Server", log);
        }
    }, [])
    const Page = (props) => {
        switch (props.value) {
            case "red":
                return (red ?
                    <Color
                        color={red}
                        type={pagecolor.type}
                        page={pagecolor.page} /> : null)
            case "green":
                return (green ?
                    <Color
                        color={green}
                        type={pagecolor.type}
                        page={pagecolor.page} /> : null)
            case "blue":
                return (blue ?
                    <Color
                        color={blue}
                        type={pagecolor.type}
                        page={pagecolor.page} /> : null)
            default:
                return (
                    <div>

                    </div>
                );
        }
    }

    const click = (value) => {
        if (pagecolor.page == "10" && pagecolor.type == "red") {
            setPagecolor({
                type: "green",
                page: "1",
            })
        } else if (pagecolor.page == "10" && pagecolor.type == "green") {
            setPagecolor({
                type: "blue",
                page: "1",
            })
        } else {
            let page = (Number(pagecolor.page) + 1).toString()
            setPagecolor({ ...pagecolor, page })
        }
    }
    return (
        <>
            <div>
                <h3>
                    คุณเห็นสีทั้งหมดหรือไม่ ?
                    </h3>
                <h6>{pagecolor.page} โทนสี {pagecolor.type == "red" ? "แดง" :
                    pagecolor.type == "green" ? "เขียว" :
                        pagecolor.type == "blue" ? "น้ำเงิน" : ''}</h6>
                {pagecolor ? <PageColor value={pagecolor.type} /> : null}
                <div className="d-grid gap-2 col-sm-6 col-md-6 col-xl-6 pt-3 mx-auto btn-footer" >
                    <button className="btn-block" type="button" onClick={() => click(true = 1)}>เห็นสีทั้งหมด</button>
                    <button className="btn-block" type="button" onClick={() => click(false = 0)}>ไม่เห็นสีทั้งหมด</button>
                </div>
            </div>
        </>
    )

}
export default Colorswitch;
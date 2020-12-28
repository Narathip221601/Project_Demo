import React, { useEffect,useState } from 'react';
import Axios from 'axios';


function Totallsum() {
    const [sum, setSum] = useState('')
    useEffect(() => {
        let token = JSON.parse(sessionStorage.getItem("token"));
        console.log("data", token.access_token);

        Axios({
            method: "POST",
            url: "http://139.59.232.220:9000/quizs/addQuizs",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token.access_token,
            },
        }).then((result) => {
            console.log("result", result.data.items.message);
            let ssum = result.data.items.status_code.message
            const { data } = result;
            console.log(data);
            setSum(data.items)
            console.log('sum', sum)
              alert(JSON.stringify(data))
              ;
          });
        }, []);

    return (
        <div className="bout" dangerouslySetInnerHTML={{ __html: sum }}>
      </div>
    )
}

export default Totallsum;
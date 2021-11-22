import React, {useState} from "react";
import { getData } from "./data";
import { Button } from "@mui/material";

const GetData =() => {
    
    const [page, setPage] = useState(1);

    const current_data = getData.filter((data) => {
        if (page === 1) {
            return data.CoustomerID === 1;
        } else if (page === 2) {
            return data.CoustomerID === 2;
        } else if (page === 3) {
            return data.CoustomerID === 3;
        }
    });

    const back = () => {
        setPage(page -1 );
    }

    const next = () => {
        setPage(page +1 );
    }


    return(
        <div>
            {current_data.map((data) => (
                <li key={data.CoustomerID} style={{listStyle:"none"}}>
                  顧客名：{data.CustomerName}　住所：{data.Address}
                </li>
            ))}
            <Button variant="outlined" onClick={back}>戻る</Button>
            <Button variant="outlined" onClick={next}>次へ</Button>
            
        </div>
    );
}

export default GetData;
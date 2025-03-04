import React, { useState } from "react";
import './Bai02.css';

export default function Bai02(){
    const [money, setMoney] = useState("");
    const [rate, setRate] = useState("");
    const [goal, setGoal] = useState("");
    const [data, setData] = useState([]);

    function handleClick(){
        let m = parseFloat(money);
        let r = parseFloat(rate) / 100;
        let g = parseFloat(goal);
        let years = [];
        let year = new Date().getFullYear();

        while (m < g) {
            let endYear = Math.round(m*(1+r));
            if(endYear > g) {
                break;
            }
            years.push({year: year, money: m, rate: r *100, endYear: endYear});
            m = endYear;
            year++;
        }

        setData(years);
    }
     return(
        <div className="container">
            <label htmlFor="iv">Input Your Invest Money: </label>
            <input id="iv" value={money} type="text" onChange={(e) => setMoney(e.target.value)}/>
            <br />
            <label htmlFor="ir">Input Rate: </label>
            <input id="ir" value={rate} type="text" onChange={(e) => setRate(e.target.value)}/>
            <br />
            <label htmlFor="ig">Input Your Goal: </label>
            <input id="ig" type="text" value={goal} onChange={(e) => setGoal(e.target.value)}/>

            <table border={1}>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Money</th>
                        <th>Rate</th>
                        <th>End Year</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) =>{
                        return(
                            <tr key={index}>
                            <td>{row.year}</td>
                            <td>{row.money}</td>
                            <td>{row.rate}</td>
                            <td>{row.endYear}</td>
                            </tr>
                        )
                    })}
                </tbody>

            </table>
            <button onClick={handleClick}>Click</button>
        </div>
    );
}
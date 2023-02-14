import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Admin.css";
// import { formatDistance } from 'date-fns';
const Admin = () => {
    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    const [genre, setGenre] = useState();
    const [readTime, setReadtime] = useState();
    const [date, setDate] = useState();
    const [IsPending, setIsPending] = useState(false);
    const history = useHistory();
    const [image, setImage] = useState();
    const [yearfns, setYearfns] = useState(2022);
    const [monthfns, setMonthfns] = useState(0);
    const [dateNofns, setDatenofns] = useState(1);

    // const result = formatDistance(
    //     new Date(),
    //     new Date(yearfns, monthfns, dateNofns)
    //   )

    const data = new FormData();
    data.append("title",title);
    data.append("body",body);
    data.append("genre",genre);
    data.append("readTime",readTime);
    data.append("date", new Date().toLocaleString());
    data.append("image",image);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://zeesblog.onrender.com/admin/post', {
            method: 'POST',
            body: data,
        })
            .then(() => {
                setIsPending(false);
                history.push("/blogs/:id");
            })
    }

    const years = [
        2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038
    ]
    const months = [
        'january',
        'febuary',
        'march',
        'april',
        'may',
        'june',
        'july',
        'august',
        'september',
        'october',
        'november',
        'december',
        ''
    ]
    const dateNos = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
    ]

    // const result = formatDistance(
    //     new Date(),
    //     new Date(yearfns, monthfns, dateNofns)
    //   )
    //   console.log(result);
      console.log(new Date(yearfns, monthfns, dateNofns));
    //   new Date(yearfns, monthfns, dateNofns),
    //   {addSuffix: true}

    return ( 
        <div className="admin-container">
            <div className="h2">Hi Zee, what are we writing?</div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">
                    blog title
                </label>
                <input type="text" name="" id="" 
                    required
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="">genre</label>
                <input type="text" 
                    required
                    onChange={(e) => setGenre(e.target.value)}
                />
                 <label htmlFor="">read time</label>
                <input type="text" 
                    required
                    onChange={(e) => setReadtime(e.target.value)}
                />
                <label htmlFor="">date</label>
                {/* <input type="text" 
                    required
                    onChange={(e) => setDate(e.target.value)}
                /> */}
                <div className="dates">
                    <select name="" id="" onChange={(e) => setYearfns(e.target.value)}>
                      { years.map((year, index) => (
                          <option key={index}>{year}</option>
                      )) }  
                    </select>
                    <select name="" id="" onChange={(e) => setMonthfns(e.target.value)}>
                        { months.map((month, index) => (
                            <option value={index} key={index}> {month} </option>
                        )) }
                    </select>
                    <select name="" id="" onChange={(e) => setDatenofns(e.target.value)}>
                        { dateNos.map((dateNo, index) => (
                            <option key={index}>{dateNo}</option>
                        )) }
                    </select>
                </div>
                <label htmlFor="">Upload Image</label>
                <input type="file" name="image" id="image"
                    required
                    onChange={(e) => setImage(e.target.files[0])}
                 />  
                <label htmlFor="">blog body</label>
                <textarea
                    required
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
     
              {!IsPending &&  <button>add blog</button>}
              {IsPending &&  <button disabled>adding blog</button>}
            </form>
            <p>{title}</p>
            <p>{body}</p>
            <p>{genre}</p>
            <p>{readTime}</p>
            <p>{date}</p>
            <p>{yearfns}</p>
            <p>{monthfns}</p>
            <p>{dateNofns}</p>
        </div>
     );
}
 
export default Admin;
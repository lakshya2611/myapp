import React ,{useState} from 'react'

export default function TextArea(props) {

    const [text,setText] = useState("");
    // const auxVerb = ['be', 'can', 'could', 'dare', 'do', 'have', 'may', 'might', 'must', 'need', 'ought', 'shall', 'should', 'will', "would"];

    const UppercaseChanged = ()=>
    {  
        let newText = text.toUpperCase();
        setText(newText);
        props.showalt("Changed to Upper Case","success");
    }

    const lowercaseChanged = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showalt("Changed to Lower Case","success");
    }

    // const printAuxVerb = ()=>{
    //     let count =0;
    //     // let newtext = text.charAt(0).toUpperCase()+text.substring(1,text.length); (for capitalize first letter)
    //     let arr = text.split(" ");
    //     for(let i =0;i<arr.length;i++)
    //     {
    //         for(let j=0;i<auxVerb.length;j++)
    //         {
    //             if(arr[i] === auxVerb[i])
    //             {
    //                 count++;
    //             }
    //         }
    //     }
    //     console.log(count);

    //     // setText(newtext);
    // }

    const ClearChanged = ()=>{
        let newText = "";
        setText(newText);
        props.showalt("Text has been cleared","success");
    }

    const removeSpace = ()=>{
        let newText = text.replace(/\s{2,}/g,'');
        setText(newText);
        props.showalt("All the extra space has been removed","success");
    }

    const HandleChange = (event)=>{

        setText(event.target.value);
    }

    return (
        <>
        <div className={`container mb-3 text-${props.mode ==='light'?'dark':'light'}`}>
            <h2>{props.heading}</h2>
            <textarea className={`form-control text-${props.mode=== 'light'?'dark':'light'}`} style={{backgroundColor:props.mode=== 'light'?'white':'#212529',border:props.mode=== 'light'?'1px solid black':'1px solid white'}} value = {text} onChange = {HandleChange} id="box" rows="10"></textarea>
            <button className={`btn btn-${props.btnMode} my-2 mx-3`} onClick= {UppercaseChanged}>Convert to UPPERCASE</button>
            <button className={`btn btn-${props.btnMode} my-2 mx-3`} onClick= {lowercaseChanged}>Convert to lowercase</button>
            <button className={`btn btn-${props.btnMode} my-2 mx-3`} onClick= {removeSpace}>Remove extra space</button>
            {/* <button className="btn btn-primary my-3 mx-3" onClick= {printAuxVerb}>Print Auxillary Verb</button> */}
            <button className={`btn btn-${props.btnMode} my-2 mx-3`} onClick= {ClearChanged}>Clear</button>
        </div>

        <div className={`container text-${props.mode=== 'light'?'dark':'light'}`}>
            <h2>Your Text Summary</h2>
            <h5>{(text.length === 0) ? text.split(" ").length-1 : text.split(" ").length} words and {text.length} no. of characters</h5>
        </div>

        </>
    )
}

import React ,{useState} from 'react'

export default function Textform(props) {
  
 
  const handleUpclick=()=>{
    
    if(text===""){
      props.showalert('nothing to do in lowercase','warning');
    }
    else{setText(text.toLowerCase());
   props.showalert('lowercase set','success');}
  }
  const handleDownclick=()=>{
    if(text===""){
      props.showalert('nothing to do in uppercase','warning');
    }else{
    setText(text.toUpperCase());
    props.showalert('uppercase set','success');
  document.title='Readutils.uppercase';
  setInterval(()=>{
    document.title='Readutils is amazing';
  },2000)
  setInterval(()=>{
    document.title='install Readutils now';
  },1500)
  }
  }
  const handle3click=()=>{
    setText("")
  }
  const handle4click=()=>{
    setText( text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" "))
  }
  const handle5click=()=>{
setText(text.replace(/\s+/g,' ').trim())  
  }
  
  const handlechange=(event)=>{
setText(event.target.value)
  }
  const calculateWords = () => {
    let numOfWords = 0;
    let word = text.replace(/\s+/g,' ');
    console.log(word)
    let words=word.split(" ")
    let length = words.length;
    numOfWords =
      words[length - 1] === ""  || words[length - 1] === " "
        ? length - 1
        : length;
    console.log(words);
    return numOfWords;}
    const handlecopy=()=>{
      let text=document.getElementById('mytext');
      text.select();
      navigator.clipboard.writeText(text.value);
      if(text.value===''){
       props.showalert(' nothing to coppy','warning') 
      }else{
      props.showalert('coppied to clipboard','success');}
    }

//font change
const [fontchange,setFont]= useState({fontSize:'1vw'})
const [fonttext,settext]= useState('enlarge font size')
const handlefont=()=>{
  if (fontchange.fontSize==='1vw' && text!=='') {
    setFont({fontSize:'2vw'})
    settext('small font size')
  }
  else{
    setFont({fontSize:'1vw'})
    settext('enlarge font size')
  }
}
  const [text,setText]=useState('enter the text here')
  return (
    <>
    <div className={`container textform-${props.mode} ` }>
      <h1 className='heading'>
       { props.heading}
      </h1>
<div className="mb-3">
 
  <textarea className={`form-control textform-${props.mode}` }id="mytext" style={fontchange} rows="8"value={text} onChange={handlechange} ></textarea>
  <button id="upper" className={`button btn-${props.mode}`}  type="submit"onClick={handleDownclick}>convert to Uppercase</button>
  <button id="lower" className={`button btn-${props.mode}`}  type="submit" onClick={handleUpclick}>convert to lowercase</button>
  <button id="lower" className={`button btn-${props.mode}`}  type="submit" onClick={handle4click}>capitalize </button>
  <button id="lower" className={`button btn-${props.mode}`}  type="submit" onClick={handle3click}>clear all</button>
  <button id="lower" className={`button btn-${props.mode}`}  type="submit" onClick={handle5click}>remove extra spaces </button>
  <button id="lower" className={`button btn-${props.mode}`}  type="submit" onClick={handlecopy}>copy text </button>
  <button id="lower" className={`button btn-${props.mode}`}  type="submit" onClick={handlefont}> {fonttext} </button>

</div>
    </div>
<div className={`container my-3  textform-${props.mode} `}>
  <h1>Your text summary</h1>
  <p>{calculateWords()} words and {text.replace(/ /g,"").length} charecters</p>
  <p>{0.008 * calculateWords()} Munites read</p>
  <h2>preview</h2>
  <p className='prev'>{text.length>0?text:'enter something in the above box to show here'}</p>
</div>

    </>
  )
}

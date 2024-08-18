import React ,{useState} from 'react'

export default function About() {

    // const [myStyle, setMyStyle] = useState({
    
    //     color:'black',
    //     backgroundColor: 'white'
    // })
    
    // const [btnText, setBtnText] = useState("🌑")

    // const toggleStyle = () =>{
    //     if(myStyle.color==='white'){
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor: 'white',
    //             // border: '1px solid white'
    //         })
    //         setBtnText("🌑")
    //     }
    //     else{
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor: 'black'
    //             // border: '2px solid black'
    //         })
    //         setBtnText("🌕")
    //     }
    // }

  return (
    
        <div className = "container" >
            {/* <h2> About us</h2> */}
        
            <div className="container my-1">
            {/* <button type="button" class="btn btn-primary" onClick={toggleStyle} >{btnText}</button> */}
            </div>

            <div className="accordion" id="accordionExample" >
    <div className="accordion-item" >
        <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
            About us
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse co llapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>
    
    </div>

    </div>
  )
}

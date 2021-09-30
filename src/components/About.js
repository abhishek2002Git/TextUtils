// Enabling Dark Mode
// import React, {useState} from "react";

export default function About(props) {
    // const [{color: props.mode==='dark'?'white':'black'}, set{color: props.mode==='dark'?'white':'black'}] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    // let {color: props.mode==='dark'?'white':'black'} = {
    //   color: props.mode === 'dark'?'white':'black',
    //   backgroundColor: props.mode === 'dark'?'black':'white'
    // }

  
  return (
    <div  className="aboutstyle" >
      <div className="container my-4 aboutstyle" style={{color: props.mode==='dark'?'white':'black'}}>
          <h1>About Us</h1>
        <div className="accordion" id="accordionExample" >
          <div className="accordion-item" >
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button aboutstyle aboutBox"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                id="toWork"
                style={{color: props.mode==='dark'?'white':'black', backgroundColor: props.mode==='dark'?'black':'white'}}
              >
                Accordion Item #1 here 
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show aboutstyle"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
              style={{color: props.mode==='dark'?'white':'black'}}
            >
              <div className="accordion-body" style={{backgroundColor: props.mode==='dark'?'black':'white'}}>
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed aboutstyle aboutBox"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={{color: props.mode==='dark'?'white':'black', backgroundColor: props.mode==='dark'?'black':'white'}}
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse aboutstyle"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
              style={{color: props.mode==='dark'?'white':'black'}}
            >
              <div className="accordion-body" style={{backgroundColor: props.mode==='dark'?'black':'white'}}>
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed aboutstyle aboutBox"
                type="button"
                id="btn3"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={{color: props.mode==='dark'?'white':'black', backgroundColor: props.mode==='dark'?'black':'white'}}
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse aboutstyle"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
              style={{color: props.mode==='dark'?'white':'black'}}
            >
              <div className="accordion-body" style={{backgroundColor: props.mode==='dark'?'black':'white'}}>
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

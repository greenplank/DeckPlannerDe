import React from "react";
import lang_var from "../../multilanguage"

const Information = ({selected_language}) => {
  // alert(selected_language)
  return (
    <>
      <div className="top-banner bg">
        <div className="heading">
          <h2>Green Plank Deck Planner</h2>
        </div>
      </div>
      <div className="container pt-5">
        {/* <h3>Information 11</h3> */}
        <p>
          {lang_var['infopgpra1'][selected_language]}
          {/* Our decking planner is designed to help you choose a Green Plank NFC
          decking board for your next decking project, whilst giving an
          illustration of how it will look and an estimate of decking material
          you’ll need to complete your project. */}
        </p>

        <div className="row mb-4">
          <div className="col-md-8">
            <div className="w-100">
              <img
                width="100%"
                src="./images/info/info1.png"
                className="image-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-4">
            <h4>
          {lang_var['infopgpra2'][selected_language]}
            </h4>
            <ul>
              <li>{lang_var['infopgpra3'][selected_language]}</li>
              <li>Garden</li>
              <li>Roof</li>
              <li>Balcony</li>
            </ul>
          </div>
        </div>
        <hr />
        <hr />
        <div className="row mb-4">
          <div className="col-md-8">
            <div className="w-100">
              <img
                width="100%"
                src="./images/info/info2.png"
                className="image-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-4">
            <h4>{lang_var['infopgpra4'][selected_language]}</h4>
            <p>
            {lang_var['infopgpra5'][selected_language]}
            </p>
            <ul>
              <li>
              {lang_var['infopgpra6'][selected_language]}
              </li>
              <li>
              {lang_var['infopgpra7'][selected_language]}
              </li>
              <li>{lang_var['Dimensions'][selected_language]}</li>
              <li>{lang_var['shape'][selected_language]}</li>
            </ul>
          </div>
        </div>
        <hr />
        <hr />
        <div className="row mb-4">
          <div className="col-md-8">
            <div className="w-100">
              <img
                width="100%"
                src="./images/info/info3.png"
                className="image-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-4">
            <h4>{lang_var['deckfloorshape'][selected_language]}</h4>
            <p>
              Here, you will find the different deck floor shapes to choose.
            </p>
            <ul>
              <li>Select the shape suitable to your requirement.</li>
              <li>
                Input the size in form of centimeters (cm) for the respective
                sides.
              </li>
              <p>
                Once, you will enter the size information for all sides, you
                will get below an estimate of material required to build your
                Green Plank deck floor.
              </p>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;

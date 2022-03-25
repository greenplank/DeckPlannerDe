import React from 'react';
import lang_var from "../../multilanguage"


const Help = ({selected_language}) => {
    return ( 
        <>
            <div className="top-banner">
                <div className="heading">
                    <h2>{lang_var['about'][selected_language]}</h2>
                </div>
            </div>
            <div className="container pt-5">
                <p>{lang_var['aboutpgpra1'][selected_language]}</p>
                <p>{lang_var['aboutpgpra2'][selected_language]}</p>
            </div>
        </>
     );
}
 
export default Help;
import React, { useState } from 'react';
import Header from "./Header";
import { Grid } from '@material-ui/core';
import Main from "./Main";

function App() {
    const [testit, setTestrit] = useState("");
    function updateHeader(valuee) {
        setTestrit(valuee);
    }
    
    
    return (
        //<div className="box">
        <div >
            <Grid container direction="column" spacing={3}>
                <Grid id="headerGrid" item style={{marginBottom: "50px"}}>
                    <Header/>
                </Grid>
                <Grid item container direction="row">
                    <Grid item xs={1} sm={1} md={2}></Grid>
                    <Grid item xs={10} sm={10} md={8}>
                        <Main />
                    </Grid>
                    <Grid item xs={1} sm={1} md={2}></Grid>
                </Grid> 
            </Grid>
        </div>
    );
}

export default App;
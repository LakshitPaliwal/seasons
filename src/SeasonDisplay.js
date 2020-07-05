import React from 'react';

const seasonConfig={
    summer:{
        text:"lets go to beach",
        iconName:'sun'
    },
    winter:{
        text:"its too cold",
        iconName:'snowflake'
    }
};

const getSeason=(lat,month)=>{
    if(month > 2 && month<9){
        return lat > 0 ? 'summer' : 'winter';
        //lat >0 is for finding are you in nothern hemisphere or southern hemisphere
        //if lat is true than it s summer otherwise it is false than it is winter
    } 
    else{
        return lat>0 ? 'winter' :'summer';
        //if lat is true than it s winter otherwise it is false than it is summer

    }
};

const SeasonDisplay=(props)=>{
    const season=getSeason(props.lat, new Date().getMonth());
    const {text,iconName}=seasonConfig[season];
    return( 
    <div>

        <h1>
            {text}
        </h1>

    </div>

    );
}


export default SeasonDisplay;

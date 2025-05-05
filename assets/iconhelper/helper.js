import React from 'react';
import {Image} from 'react-native';

const Icon = (props) => {
    if (props.icon === 'paper') {
        return <Image height={props.dimensions} width={props.dimensions} source={require('../icons/paper.png')} style={props.style}/>;
    } else if (props.icon === 'corkboard') {
        return <Image height={props.dimensions} width={props.dimensions} source={require('../icons/corkboard.png')} style={props.style}/>;
    } else if (props.icon === 'cog') {
        return <Image height={props.dimensions} width={props.dimensions} source={require('../icons/gear.png')} style={props.style}/>;
    } else if (props.icon === 'chain') {
        return <Image height={props.dimensions} width={props.dimensions} source={require('../icons/chain.png')} style={props.style}/>;
    } else if (props.icon === 'teams' || props.icon === 'teams.microsoft.com') {
        return <Image height={props.dimensions} width={props.dimensions} source={require('../icons/teams.png')} style={props.style}/>;
    } else if (props.icon === 'mail') {
        return <Image height={props.dimensions} width={props.dimensions} source={require('../icons/mail.png')} style={props.style}/>;
    } else if (props.icon === 'viat' || props.icon === 'thelenham.viat.org.uk') {
        return <Image height={props.dimensions} width={props.dimensions} source={'https://thelenham.viat.org.uk/favicon.ico'} style={props.style}/>;
    } else {
        return <Image height={props.dimensions} width={props.dimensions} source={require('../icons/missing.png')} style={props.style}/>;
    }
};

export default Icon;

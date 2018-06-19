import React from 'react';
import PropTypes from 'prop-types';

import types from './types';
import { HeroContainer, HeroBackground } from './style';

const Hero = (props) => {
    const { children } = props;
    return (
        <HeroContainer {...props}>
            <HeroBackground {...props}>{children}</HeroBackground>
        </HeroContainer>
    )
};

Hero.propTypes = types;

export { Hero };

import React from 'react';
import PropTypes from 'prop-types';

import types from './types';
import { AvatarContainer } from './style';

const Avatar = (props) => {
    return (
        <AvatarContainer {...props} />
    )
};

Avatar.propTypes = types;

export { Avatar };

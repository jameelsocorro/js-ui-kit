import React, { Component } from 'react';
import PropTypes from 'prop-types';
import types from './types';

import {
    ImageLinkContainer,
    ImageLinkElement
} from './style';

class ImageLink extends Component {

    onImageClick() {
        const { url } = this.props;
        window.open(url, '_blank');
    }

    render() {
        const { src, className } = this.props;
        return (
            <ImageLinkContainer className={className}
                                onClick={this.onImageClick.bind(this)}>
                <ImageLinkElement src={src} alt="" />
            </ImageLinkContainer>
        );
    }
}

ImageLink.propTypes = types;

export { ImageLink };

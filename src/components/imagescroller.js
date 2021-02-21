import React from 'react';
import ImageGallery from 'react-image-gallery';

export default class ImageScroller extends React.Component {
    render() {
        return (
            <ImageGallery items={this.props.images} showThumbnails={false} autoPlay={true} showPlayButton={false} showFullscreenButton={false} showNav={false} slideInterval={10000} />
        );
    }
}
import React from 'react';
import PropTypes from 'prop-types';

const Content = props => {
    const { children } = props;

    return (
        <main className="content">
            {children}
        </main>
    )
}

Content.propTpes = {
    children: PropTypes.element.isRequired
};

export default Content;

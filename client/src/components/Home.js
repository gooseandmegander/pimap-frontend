import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';

export default withAuth(class Home extends Component {

    render() {

        return (
            <div className='home'>
                <h1>Home component at '/'</h1>
            </div>
        )
    }
});
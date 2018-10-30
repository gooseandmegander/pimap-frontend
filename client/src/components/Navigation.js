import React from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

export default withAuth(
    class Navigation extends React.Component {
        constructor(props) {
            super(props);
            this.state = { authenticated: null };
            this.checkAuthentication = this.checkAuthentication.bind(this);
            this.checkAuthentication();
        }

        async checkAuthentication() {
            const authenticated = await this.props.auth.isAuthenticated();
            if (authenticated !== this.state.authenticated) {
                this.setState({ authenticated });
            }
        }

        async logout() {
            this.props.auth.logout('/');
        }

        componentDidUpdate() {
            this.checkAuthentication();
        }

        render() {
            if (this.state.authenticated === null) return null;
            const authNav = this.state.authenticated ? (
                <li>
                    <div
                        onClick={() => this.logout()}
                    >
                        Logout
                        </div>
                </li>
            ) : (
                    <React.Fragment>
                        <li>
                            <Link to='/register'>Register</Link>
                        </li>
                        <li>
                            <Link to='/login'>Login Test</Link>
                        </li>
                    </React.Fragment>
                );
            return (
                <nav className='auth-nav'>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to='/protected'>Protected</Link>
                        </li>
                        {authNav}
                    </ul>
                </nav>
            );
        }
    }
);
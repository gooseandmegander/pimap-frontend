import React from 'react';
// import { withAuth } from '@okta/okta-react';
// import axios from 'axios';

// export default withAuth(class Protected extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             message: null
//         }
//     }

//     componentDidMount() {
//         axios.get('https://8e49c2a1-c5c1-4524-ac22-ef1a5152e46b.mock.pstmn.io/test',
//             {
//                 headers: {
//                     Authorization: 'Bearer ' + this.props.auth.getAccessToken()
//                 }
//             })
//             .then(msg => {
//                 this.setState({ message: msg.data });
//             })
//             .catch(err => new Error(err));
//     }

//     render() {
//         if (!this.state.message) return <div>Loading..</div>;
//         return <h1>{this.state.message}</h1>;
//     }
// });

export default () => <h1>Protected</h1>;
import './index.scss'
import firebase, { auth } from '../../firebase/config';

const fbProvider = new firebase.auth.FacebookAuthProvider();

const Login = () => {
    const handleFbLogin = () => {
        auth.signInWithPopup(fbProvider);
    };
    
    return (
        <>
            <div>
                FUN CHAT
            </div>
            <div className="login">
                <button className="btn-login">
                    Đăng nhập bằng Google
                </button>
                <button className="btn-login" onClick={handleFbLogin}>
                    Đăng nhập bằng Facebook
                </button>
            </div>
        </>
    )
};

export default Login;
import React, { useState, FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../UI/Button';
import Input from '../UI/Input';
import Message from '../UI/Message';

import { RootState } from '../../Store';
import { signIn, setError, signInWithGoogle } from '../../Store/actions/authActions';
import { motion } from 'framer-motion';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const { error } = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        return () => {
            if (error) {
                dispatch(setError(''));
            }
        }
    }, [error, dispatch]);

    const SignInHandler = (e: FormEvent) => {
        e.preventDefault()
        setLoading(true);
        dispatch(signIn({ email, password }, () => setLoading(false)));
        setLoading(false)
    }
    const SignInWithGoogleHanlder = (e: FormEvent) => {
        e.preventDefault()
        setLoading(true);
        dispatch(signInWithGoogle());
        setLoading(false);
    }

    return (
            <section className="signUpIn">
                <div className="signUpIn-container">
                    <h2>SIGN IN</h2>
                    <form className="form" onSubmit={SignInHandler}>
                        {error && <Message type="danger" msg={error} />}
                        <Input
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.currentTarget.value)}
                            placeholder={"Email"}
                            label={"Email"}
                        />
                        <Input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.currentTarget.value)}
                            placeholder={"Password"}
                            label={"Password"}
                        />
                        <Link to="/forgot-password">Forgot Password?</Link>
                        <Button text={loading ? "Loading..." : "Sign In"} disabled={loading} />
                    </form>
                    <Button onClick={SignInWithGoogleHanlder} text={loading ? "Loading..." : "Sign in with google"} disabled={loading} />
                </div>
            </section>
    )
}

export default SignIn;
import React, { useState, FormEvent, useEffect } from 'react';
// import {useHistory, Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../UI/Button';
import Input from '../UI/Input';
import Message from '../UI/Message';

import { RootState } from '../../Store';
import { signUp, setError, signUpWithGoogle } from '../../Store/actions/authActions';
import { motion } from 'framer-motion';

function SignUp() {
    const [name, setName] = useState('');
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

    const SignUpHandler = (e: FormEvent) => {
        e.preventDefault()
        setLoading(true);
        dispatch(signUp({ email, password, name }, () => setLoading(false)));
    }

    const SignUpWithGoogle = (e: FormEvent) => {
        e.preventDefault()
        setLoading(true);
        dispatch(signUpWithGoogle());
        setLoading(false);
    }

    const containerVariants = {
        hidden: {
            opacity: 0,
            y: '100vw',
        },
        visible: {
            opacity: 1,
            y: '0vw',
            transition: { delay: 0.3, duration: 0.5 }
        },
        exit: {
            x: '-100vw',
            transition: { ease: 'easeInOut' }
        }
    }

    return (
        <motion.div className=""
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit">
            <section className="signUp">
                <div className="signUp-container">
                    <h2>Sign up</h2>
                    <form className="form" onSubmit={SignUpHandler}>
                        {error && <Message type="danger" msg={error} />}
                        <Input
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.currentTarget.value)}
                            placeholder={"Name"}
                            label={"Name"}
                        />
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
                        <Button text={loading ? "Loading..." : "Sign Up"} disabled={loading} />
                    </form>
                    <Button onClick={SignUpWithGoogle} text={loading ? "Loading..." : "Sign Up with google"} disabled={loading} />
                </div>
            </section>
        </motion.div>
    )
}

export default SignUp;
import React, { useState, FormEvent, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../UI/Button';
import Input from '../UI/Input';
import Message from '../UI/Message';

import { RootState } from '../../Store';
import { sendPassWordResetEmail, setError, setSuccess } from '../../Store/actions/authActions';

function ForgottPassword() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const { error, success } = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        return () => {
            if (error) {
                dispatch(setError(''));
            }
            if (error) {
                dispatch(setSuccess(''));
            }
        }
    }, [error, dispatch, success]);

    const SignInHandler = async (e: FormEvent) => {
        e.preventDefault()
        setLoading(true);
        await dispatch(sendPassWordResetEmail(email, 'Email Sent!'));
        setLoading(false);
    }

    return (
        <section className="signUpIn">
            <div className="signUpIn-container">
                <h2>Reset password</h2>
                <form className="form" onSubmit={SignInHandler}>
                    {error && <Message type="danger" msg={error} />}
                    {success && <Message type="danger" msg={success} />}
                    <Input
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.currentTarget.value)}
                        placeholder={"Email address"}
                        label={"Email address"}
                    />
                    <Button text={loading ? "Loading..." : "Send"} disabled={loading} />
                </form>
            </div>
        </section>
    )
}

export default ForgottPassword;
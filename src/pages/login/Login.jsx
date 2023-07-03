import { useState } from 'react'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        console.log("Email: " + email);
        console.log("Password: " + password);
    }

    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="col-12 col-md-6">
                        <div className="rounded shadow p-4 mt-4">
                            <h3>Login</h3>
                            <hr></hr>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
                            </div>
                            <button type="button" className="btn btn-primary" onClick={handleLogin}>Login</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

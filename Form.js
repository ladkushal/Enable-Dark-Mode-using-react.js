import React from 'react'

export default function Form(props) {
    return (
        <div className='container my-3' style={{ backgroundColor: props.mode === 'light' ? 'white' : '#2e3338', color: props.mode === 'light' ? '#2e3338' : 'white' }}>
            <h1>Enter The Details Below:-</h1>
            <form>
                <div className="form-group my-3">
                    <label for="exampleInputEmail1" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#2e3338', color: props.mode === 'light' ? '#2e3338' : 'white' }}>Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#2e3338', color: props.mode === 'light' ? '#2e3338' : 'white' }} />
                </div>
                <div className="form-group my-3">
                    <label for="exampleInputPassword1" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#2e3338', color: props.mode === 'light' ? '#2e3338' : 'white' }}>Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" style={{backgroundColor: props.mode === 'light' ? 'white' : '#2e3338', color: props.mode === 'light' ? '#2e3338' : 'white' }}/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

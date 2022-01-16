import { Component, useEffect } from "react"

export function Component1(props) {
    return (
        <div style={{margin: '20px 20px', padding: '5px 10px 10px 10px', border: '2px solid yellow'}}>
            <h4>Component1.js</h4>
            <h5>Props : {JSON.stringify(props)}</h5>
            <Component2 {...props}></Component2>
        </div>
    )
}

function Component2(props) {
    return (
        <div style={{margin: '20px 20px', padding: '5px 10px 10px 10px', border: '2px solid white'}}>
            <h4>Component2.js</h4>
            <h5>Props : {JSON.stringify(props)}</h5>
            <Component3 {...props}></Component3>
        </div>
    )
}

class Component3 extends Component {
    render() {
        return (
            <div style={{margin: '20px 20px', padding: '5px 10px 10px 10px', border: '2px solid #8eff71'}}>
                <h4>Component3.js</h4>
                <h5>Props : {JSON.stringify(this.props)}</h5>
            </div>
        )
    }
}
import React, {Component} from 'react';

const AsyncComponent = (importComponent) => {
    console.log(importComponent)
    return class extends Component {
        state = {
            component: null
        }
        

        componentDidMount () {
            importComponent()
                .then(cmp => {
                    this.setState({component : cmp.default});
                })
        } 

        render () {
            const C = this.state.component;
            console.log(C)

            return C ? <C {...this.props} /> : null;    
        }
    }
}

export default AsyncComponent;
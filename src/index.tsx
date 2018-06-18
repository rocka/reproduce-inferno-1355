import { Component } from 'inferno';
import { HashRouter, Route } from 'inferno-router';

class Compo extends Component<any, any> {
    constructor(props) {
        super(props);
    }
    public render() {
        return (
            <span>hello</span>
        );
    }
}

export default function compo() {
    return (
        <HashRouter>
            <div>
                <Route path='/' component={Compo}></Route>
            </div>
        </HashRouter>
    );
}

import React from 'react';
import Input from './Components/Input';
import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            x: null,
            y: null,
            pyramid: [[''], ['', ''], ['', '', ''], ['', '', '', '']]
        }
    }

    inputComponent(x, y) {
        return <Input
            onChange={(e) => {
                const newValue = this.state.pyramid;
                newValue[x][y] = e.target.value;
                this.setState({
                    pyramid: newValue
                });
            }}/>
    }

    render() {
        const {
            x, y, pyramid
        } = this.state;

        return <div className="app">
            <div className='pyramid'>
                <div className='pyramid__level'>
                    {this.inputComponent(0, 0)}
                </div>
                <div className='pyramid__level'>
                    {this.inputComponent(1, 0)}
                    {this.inputComponent(1, 1)}
                </div>
                <div className='pyramid__level'>
                    {this.inputComponent(2, 0)}
                    {this.inputComponent(2, 1)}
                    {this.inputComponent(2, 2)}
                </div>
                <div className='pyramid__level'>
                    {this.inputComponent(3, 0)}
                    {this.inputComponent(3, 1)}
                    {this.inputComponent(3, 2)}
                    {this.inputComponent(3, 3)}
                </div>
            </div>
            Значение в ячейке:
            <div className='output-coors'>
                <div className='output-coors__input'>x
                    <Input onChange={(e) => this.setState({ x: e.target.value })}/>
                </div>
                <div className='output-coors__input'>y
                    <Input onChange={(e) => this.setState({ y: e.target.value })}/>
                </div>
            </div>
            <div className='output-value'>
                {pyramid[x] && pyramid[x][y]
                    && <div>{pyramid[x][y]}</div>}
            </div>
        </div>;
    }
}

export default App;

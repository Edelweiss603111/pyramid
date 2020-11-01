import React from 'react';
import PropTypes from 'prop-types';

export default class Input extends React.Component {
    static propTypes = {
        id: PropTypes.number,
        type: PropTypes.string,
        name: PropTypes.string,
        maxLength: PropTypes.number,
        onChange: PropTypes.func,
        onClick: PropTypes.func,
    }

    static defaultProps = {
        onChange: () => {},
        onClick: () => {},
        maxLength: 1,
        type: 'text'
    }

    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
    }

    render() {
        const {
            id,
            type,
            name,
            onClick,
            onChange,
            maxLength
        } = this.props;
        return <div className='form-input'>
            <input id={id} type={type} name={name}
                maxLength={maxLength}
                onClick={onClick.bind(this)}
                onChange={onChange.bind(this)}
                className='form-input__input'/>
        </div>;
    }
}

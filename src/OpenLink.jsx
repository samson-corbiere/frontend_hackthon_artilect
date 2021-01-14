import React, {Component} from "react";

class OpenLink extends Component {

    render() {
        const link = this.props.link
        // const link = this.props.step.metadata.link || '';
        const text = this.props.step.metadata.text || '';
        return (
            <a href={link} target="_blank" rel="noreferrer">
                {text}
            </a>
        );
    }
}

export default OpenLink;

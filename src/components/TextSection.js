import React from 'react';
import _ from 'lodash';

import Markdown from 'markdown-to-jsx';

export default class TextSection extends React.Component {
    render() {
        const section = _.get(this.props, 'section');
        const content = _.get(section, 'content');

        return (
            <div className="text-block container container--md">
                <Markdown options={{ forceBlock: true }} className="sb-markdown max-w-screen-md mx-auto" data-sb-field-path="markdown_content">
                    {content}
                </Markdown>
            </div>
        );
    }
}

import React from 'react';
import { BubbleHtml } from 'nivo';

const Chart = ({ names, onClick }) => {

    return (
        <BubbleHtml
            width={900}
            height={500}
            root={{
                name: 'nivo', color: 'green', children: [
                    {
                        name: 'viz', color: 'hsl(343, 70%, 50%)', children: [{
                            name: 'stack', color: 'hsl(243, 70%, 50%)', children: [
                                { name: names[0], color: 'hsl(275, 70%, 50%)', loc: 183981 },
                                { name: names[1], color: 'hsl(52, 70%, 50%)', loc: 163187 },
                                { name: names[2], color: 'hsl(45, 70%, 50%)', loc: 195355 }
                            ]
                        }]
                    }]
            }}
            identity="name"
            value="loc"
            label={'id'}
            labelSkipRadius={16}
            enableLabel={true}
            colors='green'
            onClick={(e) => onClick(e)}
            colorBy='depth'
        />);
};


export default Chart;

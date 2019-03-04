import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const diagramStick = () => {
    return (
        // make sure parent container have a defined height when using responsive component,
        // otherwise height will be 0 and no chart will be rendered.
        // website examples showcase many properties, you'll often use just a few of them.
        <div style={{ height: '1000px', width: '1000px' }}>
            <ResponsivePie
                data={
                    [
                        {
                            "id": "css",
                            "label": "css",
                            "value": 424,
                            "color": "hsl(333, 70%, 50%)"
                        },
                        {
                            "id": "rust",
                            "label": "rust",
                            "value": 585,
                            "color": "hsl(182, 70%, 50%)"
                        },
                        {
                            "id": "hack",
                            "label": "hack",
                            "value": 50,
                            "color": "hsl(17, 70%, 50%)"
                        },
                        {
                            "id": "scala",
                            "label": "scala",
                            "value": 10,
                            "color": "hsl(289, 70%, 50%)"
                        },
                        {
                            "id": "lisp",
                            "label": "lisp",
                            "value": 253,
                            "color": "hsl(221, 70%, 50%)"
                        }
                    ]

                }
                margin={{
                    "top": 40,
                    "right": 80,
                    "bottom": 80,
                    "left": 80
                }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                colors="nivo"
                colorBy="id"
                borderWidth={1}
                borderColor="inherit:darker(0.2)"
                radialLabelsSkipAngle={10}
                radialLabelsTextXOffset={6}
                radialLabelsTextColor="#333333"
                radialLabelsLinkOffset={0}
                radialLabelsLinkDiagonalLength={16}
                radialLabelsLinkHorizontalLength={24}
                radialLabelsLinkStrokeWidth={1}
                radialLabelsLinkColor="inherit"
                slicesLabelsSkipAngle={10}
                slicesLabelsTextColor="#333333"
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                defs={[
                    {
                        "id": "dots",
                        "type": "patternDots",
                        "background": "inherit",
                        "color": "rgba(255, 255, 255, 0.3)",
                        "size": 4,
                        "padding": 1,
                        "stagger": true
                    },
                    {
                        "id": "lines",
                        "type": "patternLines",
                        "background": "inherit",
                        "color": "rgba(255, 255, 255, 0.3)",
                        "rotation": -45,
                        "lineWidth": 6,
                        "spacing": 10
                    }
                ]}
                fill={[
                    {
                        "match": {
                            "id": "ruby"
                        },
                        "id": "dots"
                    },
                    {
                        "match": {
                            "id": "c"
                        },
                        "id": "dots"
                    },
                    {
                        "match": {
                            "id": "go"
                        },
                        "id": "dots"
                    },
                    {
                        "match": {
                            "id": "python"
                        },
                        "id": "dots"
                    },
                    {
                        "match": {
                            "id": "scala"
                        },
                        "id": "lines"
                    },
                    {
                        "match": {
                            "id": "lisp"
                        },
                        "id": "lines"
                    },
                    {
                        "match": {
                            "id": "elixir"
                        },
                        "id": "lines"
                    },
                    {
                        "match": {
                            "id": "javascript"
                        },
                        "id": "lines"
                    }
                ]}
                legends={[
                    {
                        "anchor": "bottom",
                        "direction": "row",
                        "translateY": 56,
                        "itemWidth": 100,
                        "itemHeight": 18,
                        "itemTextColor": "#999",
                        "symbolSize": 18,
                        "symbolShape": "circle",
                        "effects": [
                            {
                                "on": "hover",
                                "style": {
                                    "itemTextColor": "#000"
                                }
                            }
                        ]
                    }
                ]}
            />
        </div>
    );
}

export default diagramStick;
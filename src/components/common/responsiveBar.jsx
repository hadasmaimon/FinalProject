import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const ResponsiveBarContainer = () => {
    return (
        // make sure parent container have a defined height when using responsive component,
        // otherwise height will be 0 and no chart will be rendered.
        // website examples showcase many properties, you'll often use just a few of them.
        <div style={{ height: '1000px', width: '1000px' }}>
            <ResponsiveBar
                data={[
                    {
                        "country": "AD",
                        "hot dog": 185,
                        "hot dogColor": "hsl(129, 70%, 50%)",
                        "burger": 95,
                        "burgerColor": "hsl(286, 70%, 50%)",
                        "sandwich": 101,
                        "sandwichColor": "hsl(153, 70%, 50%)",
                        "kebab": 144,
                        "kebabColor": "hsl(92, 70%, 50%)",
                        "fries": 180,
                        "friesColor": "hsl(300, 70%, 50%)",
                        "donut": 13,
                        "donutColor": "hsl(340, 70%, 50%)"
                    },
                    {
                        "country": "AE",
                        "hot dog": 34,
                        "hot dogColor": "hsl(256, 70%, 50%)",
                        "burger": 29,
                        "burgerColor": "hsl(336, 70%, 50%)",
                        "sandwich": 114,
                        "sandwichColor": "hsl(51, 70%, 50%)",
                        "kebab": 28,
                        "kebabColor": "hsl(137, 70%, 50%)",
                        "fries": 13,
                        "friesColor": "hsl(150, 70%, 50%)",
                        "donut": 184,
                        "donutColor": "hsl(348, 70%, 50%)"
                    },
                    {
                        "country": "AF",
                        "hot dog": 159,
                        "hot dogColor": "hsl(164, 70%, 50%)",
                        "burger": 85,
                        "burgerColor": "hsl(13, 70%, 50%)",
                        "sandwich": 58,
                        "sandwichColor": "hsl(281, 70%, 50%)",
                        "kebab": 166,
                        "kebabColor": "hsl(327, 70%, 50%)",
                        "fries": 105,
                        "friesColor": "hsl(30, 70%, 50%)",
                        "donut": 104,
                        "donutColor": "hsl(182, 70%, 50%)"
                    },
                    {
                        "country": "AG",
                        "hot dog": 56,
                        "hot dogColor": "hsl(107, 70%, 50%)",
                        "burger": 47,
                        "burgerColor": "hsl(208, 70%, 50%)",
                        "sandwich": 111,
                        "sandwichColor": "hsl(10, 70%, 50%)",
                        "kebab": 179,
                        "kebabColor": "hsl(4, 70%, 50%)",
                        "fries": 33,
                        "friesColor": "hsl(135, 70%, 50%)",
                        "donut": 86,
                        "donutColor": "hsl(274, 70%, 50%)"
                    },
                    {
                        "country": "AI",
                        "hot dog": 2,
                        "hot dogColor": "hsl(87, 70%, 50%)",
                        "burger": 140,
                        "burgerColor": "hsl(43, 70%, 50%)",
                        "sandwich": 94,
                        "sandwichColor": "hsl(292, 70%, 50%)",
                        "kebab": 84,
                        "kebabColor": "hsl(217, 70%, 50%)",
                        "fries": 0,
                        "friesColor": "hsl(283, 70%, 50%)",
                        "donut": 181,
                        "donutColor": "hsl(187, 70%, 50%)"
                    },
                    {
                        "country": "AL",
                        "hot dog": 31,
                        "hot dogColor": "hsl(356, 70%, 50%)",
                        "burger": 117,
                        "burgerColor": "hsl(302, 70%, 50%)",
                        "sandwich": 25,
                        "sandwichColor": "hsl(130, 70%, 50%)",
                        "kebab": 55,
                        "kebabColor": "hsl(188, 70%, 50%)",
                        "fries": 105,
                        "friesColor": "hsl(206, 70%, 50%)",
                        "donut": 13,
                        "donutColor": "hsl(349, 70%, 50%)"
                    },
                    {
                        "country": "AM",
                        "hot dog": 140,
                        "hot dogColor": "hsl(316, 70%, 50%)",
                        "burger": 4,
                        "burgerColor": "hsl(223, 70%, 50%)",
                        "sandwich": 102,
                        "sandwichColor": "hsl(313, 70%, 50%)",
                        "kebab": 168,
                        "kebabColor": "hsl(298, 70%, 50%)",
                        "fries": 24,
                        "friesColor": "hsl(311, 70%, 50%)",
                        "donut": 99,
                        "donutColor": "hsl(140, 70%, 50%)"
                    }
                ]}
                keys={[
                    "hot dog",
                    "burger",
                    "sandwich",
                    "kebab",
                    "fries",
                    "donut"
                ]}
                indexBy="country"
                margin={{
                    "top": 50,
                    "right": 130,
                    "bottom": 50,
                    "left": 60
                }}
                padding={0.3}
                colors="nivo"
                colorBy="id"
                defs={[
                    {
                        "id": "dots",
                        "type": "patternDots",
                        "background": "inherit",
                        "color": "#38bcb2",
                        "size": 4,
                        "padding": 1,
                        "stagger": true
                    },
                    {
                        "id": "lines",
                        "type": "patternLines",
                        "background": "inherit",
                        "color": "#eed312",
                        "rotation": -45,
                        "lineWidth": 6,
                        "spacing": 10
                    }
                ]}
                fill={[
                    {
                        "match": {
                            "id": "fries"
                        },
                        "id": "dots"
                    },
                    {
                        "match": {
                            "id": "sandwich"
                        },
                        "id": "lines"
                    }
                ]}
                borderColor="inherit:darker(1.6)"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    "tickSize": 5,
                    "tickPadding": 5,
                    "tickRotation": 0,
                    "legend": "country",
                    "legendPosition": "middle",
                    "legendOffset": 32
                }}
                axisLeft={{
                    "tickSize": 5,
                    "tickPadding": 5,
                    "tickRotation": 0,
                    "legend": "food",
                    "legendPosition": "middle",
                    "legendOffset": -40
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor="inherit:darker(1.6)"
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                legends={[
                    {
                        "dataFrom": "keys",
                        "anchor": "bottom-right",
                        "direction": "column",
                        "justify": false,
                        "translateX": 120,
                        "translateY": 0,
                        "itemsSpacing": 2,
                        "itemWidth": 100,
                        "itemHeight": 20,
                        "itemDirection": "left-to-right",
                        "itemOpacity": 0.85,
                        "symbolSize": 20,
                        "effects": [
                            {
                                "on": "hover",
                                "style": {
                                    "itemOpacity": 1
                                }
                            }
                        ]
                    }
                ]}
            />
        </div>
    );
}

export default ResponsiveBarContainer;
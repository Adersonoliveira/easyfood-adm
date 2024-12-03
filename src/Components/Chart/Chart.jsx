import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis } from 'recharts';

import './chart.scss';

const data = [
    {
        name: 'Janeiro',
        total: 700,
    },
    {
        name: 'Fevereiro',
        total: 1250,
    },
    {
        name: 'Março',
        total: 1410,
    },
    {
        name: 'Abril',
        total: 1100,
    },
    {
        name: 'Maio',
        total: 700,
    },
    {
        name: 'Junho',
        total: 1000,
    },
    {
        name: 'Julho',
        total: 1250,
    },
    {
        name: 'Agosto',
        total: 1050,
    },
    {
        name: 'Setembro',
        total: 800,
    },
    {
        name: 'Outubro',
        total: 960,
    },
    {
        name: 'Novembro',
        total: 1150,
    },
    {
        name: 'Dezembro',
        total: 1250,
    },
];

function Chart({ height, title }) {
    return (
        <div className="chart_sec">
            <div>
                <div className="title">
                    <p>{title} (Ano Atual)</p>
                </div>

                <div style={{ width: '100%', height: 300 }}>
                    {/* <ResponsiveContainer> */}
                    <AreaChart
                        width={850}
                        height={height}
                        data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="totals" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#536def" stopOpacity={0.9} />
                                <stop offset="95%" stopColor="#536def" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" stroke="gray" />
                        <CartesianGrid strokeDasharray="3 3" className="strokee" />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="total"
                            stroke="#536def"
                            fillOpacity={1}
                            fill="url(#totals)"
                        />
                    </AreaChart>
                    {/* </ResponsiveContainer> */}
                </div>
            </div>
        </div>
    );
}

export default Chart;

import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { Tooltip } from '@mui/material';
import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';

import './progressBar.scss';

function ProgressBar() {
    const data01 = [
        { name: 'Users', value: 2333 },
        { name: 'Hotels', value: 2500 },
        { name: 'Rooms', value: 1005 },
        { name: 'Blogs', value: 1095 },
        { name: 'Balance', value: 2000 },
    ];

    return (
        <div className="progress_bar">
            <div className="top">
                <p>Total Vendas</p>
                <MoreVertOutlinedIcon />
            </div>

            <div className="middle">
                <div className="progress">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={400} height={400}>
                            <Pie
                                dataKey="value"
                                isAnimationActive={false}
                                data={data01}
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#536def"
                                label
                            />
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <p>Total vendas do dia.</p>
                <p className="price">
                    <AttachMoneyOutlinedIcon style={{ fontSize: '32px' }} />
                    8.933
                </p>
            </div>

            <div className="bottom">
                <p>Processamento de transação anterior. Os últimos pagamentos podem não estar incluídos.</p>

                <div className="botom_nested">
                    <div className="nested_nested">
                        <p>Semana anterior</p>
                        <p className="pricee">
                            <KeyboardArrowUpOutlinedIcon /> $11.9k
                        </p>
                    </div>
                    <div className="nested_nested">
                        <p>Mês anterior</p>
                        <p className="pricee decrese">
                            <KeyboardArrowUpOutlinedIcon /> $12.4k
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProgressBar;

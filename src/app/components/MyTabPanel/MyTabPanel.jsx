import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function MyTabPanel(props) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ display: 'flex',
                    justifyContent: 'center',
                    borderBottom: 0,
                    borderColor: 'divider',
                    borderRadius: 5,
                    backgroundColor: '#FEF7FF'}}>
                <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary" aria-label="basic tabs example">
                    {
                        props.tabs.map((element) =>
                            <Tab key={element.id} label={element.text} {...a11yProps(element.id)} />
                        )
                    }
                </Tabs>
            </Box>

            {
                props.tabs.map((element) =>
                    <CustomTabPanel key={element.id} value={value} index={element.id}>
                        {element.contenido}
                    </CustomTabPanel>
                )
            }
        </Box>
    );
}
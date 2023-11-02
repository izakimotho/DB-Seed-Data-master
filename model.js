exports.origin = [
    'Email',
    'Phone',
    'Voice'
];

exports.jobPerformanceImpacts = [
    'Users cannot perform a portion of their job',
    'Users cannot perform any aspect of their job'
];

exports.scalesOfImpact = [
    'Individual',
    'Single Department',
    'Multiple Departments/Entire Company'
];

exports.statuses = [
    'Open',
    'Awaiting Customer Response',
    'Awaiting Technician',
    'Cancelled',
    'Hold',
    'In Progress',
    'Open',
    'Resolved'
];

exports.categories = [
    {
        name: 'Development',
        subcategories: [
            {
                id: 1113,
                name: 'Issue/Change Request'
            },
            {
                id: 1105,
                name: 'Email Delivery Issues'
            }
        ]
    },
    {
        name: 'Purchasing',
        subcategories: [
            {
                id: 1103,
                name: 'Request New Software'
            },
            {
                id: 1104,
                name: 'Request New Hardware'
            }
        ]
    },
    {
        name: 'General Support',
        subcategories: [
            {
                id: 1119,
                name: 'Desktop/Laptop Support'
            },
            {
                id: 1120,
                name: 'Applications'
            },
            {
                id: 1121,
                name: 'Server/Database Management'
            },
            {
                id: 1122,
                name: 'Sharepoint'
            }
        ]
    },
    {
        name: 'System Issue',
        subcategories: [
            {
                id: 1114,
                name: 'System Outage'
            },
            {
                id: 1115,
                name: 'Report A System Problem'
            },
            {
                id: 1116,
                name: 'VPN Connectivity/No Internet Access/WiFi Connectivity'
            }
        ]
    },
    {
        name: 'User Management',
        subcategories: [
            {
                id: 1101,
                name: 'Account Access Request'
            },
            {
                id: 1100,
                name: 'Terminate an Existing User Account'
            },
            {
                id: 1102,
                name: 'Request New Employee Account'
            },
            {
                id: 1117,
                name: 'Mapped Drives'
            },
            {
                id: 1118,
                name: 'Permissions'
            }
        ]
    },
    {
        name: 'Non PC Hardware Support',
        subcategories: [
            {
                id: 1123,
                name: 'Printers'
            },
            {
                id: 1124,
                name: 'Copiers'
            },
            {
                id: 1125,
                name: 'Phones'
            },
            {
                id: 1126,
                name: 'Scanners'
            }
        ]
    },
    {
        name: 'Custom',
        subcategories: [
            {
                id: 1127,
                name: 'OSS Customer Support'
            }
        ]
    }
];
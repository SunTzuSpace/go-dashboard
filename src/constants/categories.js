import { BarChart, Feather, Shield, RefreshCcw, Archive, PieChart, Award, Book, Key } from 'react-feather'

const categories = [
    // {
    //     name: 'Dexes',
    //     sidebar: true,
    //     icon: RefreshCcw
    // },
    // {
    //     name: 'Lending',
    //     sidebar: true,
    //     icon: PieChart
    // },
    // {
    //     name: 'Yield',
    //     sidebar: true,
    //     icon: BarChart
    // },
    // {
    //     name: 'Minting',
    //     sidebar: false,
    //     icon: BarChart
    // },
    // {
    //     name: 'Services',
    //     sidebar: false,
    //     icon: BarChart
    // },
    // {
    //     name: 'Insurance',
    //     sidebar: true,
    //     icon: Shield
    // },
    // {
    //     name: 'Options',
    //     sidebar: false,
    //     icon: BarChart
    // },
    // {
    //     name: 'Indexes',
    //     sidebar: true,
    //     icon: Archive
    // },
    // {
    //     name: 'Staking',
    //     sidebar: false,
    //     icon: BarChart
    // },
    {
        name: 'Renown',
        sidebar: true,
        icon: Award
    },
    {
        name: 'Strategy',
        sidebar: true,
        icon: Book
    },
    {
        name: 'Assets',
        sidebar: true,
        icon: Feather
    },
    {
        name: 'Oracle',
        sidebar: true,
        icon: Key
    },
]

export default categories.reduce((acc, category) => {
    acc[category.name.toLowerCase()] = category;
    return acc;
}, {})

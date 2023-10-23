import { Arcade, Advanced, Pro } from './'
export const nav = [
    {
        list: '1',
        item: {
            step: ' Step 1',
            text: 'Your info'
        }

    },
    {
        list: '2',
        item: {
            step: 'Step 2',
            text: 'Select plan'
        }

    },
    {
        list: '3',
        item: {
            step: 'Step 3',
            text: 'Add-ons'
        }

    },
    {
        list: '4',
        item: {
            step: 'Step 4',
            text: 'Summary'
        }

    }
]

export const form = [
    {
        id: 1,
        title: 'Personal info',
        info: 'Please provide your name, email address, and phone number.',
    },
    {
        id: 2,
        title: 'Select your plan',
        info: 'You have the option of monthly or yearly billing.',
    },
    {
        id: 3,
        title: 'Pick add-ons',
        info: 'Add-ons help enhance your gaming experience.',
    },
    {
        id: 4,
        title: 'Finishing up',
        info: 'Double-check everything looks OK before confirming.',
    }
]

export const plans = [
    {
        img: Arcade,
        text: 'Arcade',
        month: '$9/mo',
        year: '$90/yr'
    },
    {
        img: Advanced,
        text: 'Advanced',
        month: '$12/mo',
        year: '$120/yr'
    },
    {
        img: Pro,
        text: 'Pro',
        month: '$15/mo',
        year: '$150/yr'
    }
]
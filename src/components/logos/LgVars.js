import Image from 'next/image';

export function VaWinter() {
    return <Image alt='winter' src={'/static/img/varlogo/logo_winter.jpg'} />
}

export function VaNewYear() {
    return <Image alt='new-year' src={'/static/img/varlogo/logo_ny.jpg'} />
}

export function VaSpring() {
    return <Image alt='spring' src={'/static/img/varlogo/logo_spring.jpg'} />
}

export function VaAutumn() {
    return <Image alt='autumn' src={'/static/img/varlogo/logo_autumn.jpg'} />
}

export function VaDefault() {
    return <Image alt='default' src={'/static/img/varlogo/logo_main.jpg'} />
}

export interface CustomTitleProps {
    title: string,
    desc: string,
    id: string
}

export interface CustomCardProps {
    gradient: string,
    id: string,
    children?: React.ReactNode;
}

export interface CardProps {
    id: string
}


export interface ServiceStore {
    inViewService: string | null,
    setInViewService: (service: string | null) => void;
}
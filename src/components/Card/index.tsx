import { StyledCard } from "./style";

interface CardProps {
    name: string
    email: string
}

export default function Card({ name, email }: CardProps) {
    
    return (
        <StyledCard>
            <h1>{name}</h1>
            <p>{email}</p>
        </StyledCard>
    )
}
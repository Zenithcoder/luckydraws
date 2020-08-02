export class Game {
    id: string;
    name: string;
    description: string;
    ticket_number: number;
    ticket_row: number;
    total_ticket: number;
    available_ticket: number;
    value: number;
    comp_id: string;
    main_image: string;
    status: string;
    amount: number;
    discount: number;
    featured: number;
    discount_amount: number;
    end_date: Date;
    created_at: Date;
    updated_at: Date;
    __meta__: {
        tickets: number;
        paid_tickets: number;
    }
}

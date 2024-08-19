export interface ISheduleAppoimentDto {        
    date: Date;          
    time: string;        
    userId: number;    
    status: 'active' | 'cancelled';
}

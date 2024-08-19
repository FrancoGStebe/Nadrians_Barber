import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./user";

@Entity({name: "turns"})
class Turns{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    date!: Date;

    @Column()
    time!: string;


    @Column()
    userId!: number;

    @Column()
    status!: 'active' | 'cancelled';

    @ManyToOne(() => User,
    (user) => user.turns)
    user!: User
    
}

export default Turns;
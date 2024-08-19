import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Credential from "./credentials";
import Turns from "./turns";

@Entity({name: "users"})
class User {

    @PrimaryGeneratedColumn()
    id!: number;
 
    @Column()
    name!: string;
  
    @Column({ unique: true })
    email!: string;

    @Column()
    birthdate!: Date;

    @Column()
    nDni!: string;

    @OneToOne(()=> Credential)
    @JoinColumn()
    Credential!: Credential;

    @OneToMany(() => Turns,
    (turns) => turns.user)
    turns!: Turns[]

}

export default User;
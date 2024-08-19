import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Credential {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @Column({ unique: true })
    username!: string;

    @Column()
    password!: string;

}

export default Credential;
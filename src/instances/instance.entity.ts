import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne,} from 'typeorm';
import { Team } from '../teams/team.entity';
import { Status } from '../status/status.entity';

@Entity()
export class Instance {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string

    @ManyToOne(type => Status)
    @JoinColumn()
    statusId: Status

    @ManyToOne(type => Team)
    @JoinColumn()
    teamId: Team

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    modifiedAt: Date;
}
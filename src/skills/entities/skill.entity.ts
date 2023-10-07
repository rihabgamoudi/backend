import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Skill {
   
        @ApiProperty()
        @PrimaryGeneratedColumn({ type: "integer", name: "id" })
        id: number;
    
        @ApiProperty()
        @Column("text", { name: "title", nullable: true })
        title?: string | null;
    
    
        @ApiProperty()
        @Column("text", { name: "desc", nullable: true })
        desc?: string | null;
    
        @ApiProperty()
        @Column("text", { name: "description", nullable: true })
        description?: string | null;
    
        @ApiProperty()
        @Column("text", { name: "livedemo", nullable: true })
        livedemo?: string | null;
    
    
        @ApiProperty()
        @Column("text", { name: "githurl", nullable: true })
        githurl?: string | null;
    
    
        @ApiProperty()
        @Column("text", { name: "mediumlink", nullable: true })
        mediumlink?: string | null;
    
    
        @ApiProperty()
        @Column("text", { name: "imgUrl", nullable: true })
        imgUrl?: string | null;
    
    
        @ApiProperty()
        @Column("text", { name: "tech", nullable: true })
        tech?: string | null;
    }

    

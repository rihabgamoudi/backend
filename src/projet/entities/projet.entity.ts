import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Projet {

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
    @Column("text", { name: "imgurl", nullable: true })
    imgurl?: string | null;


    @ApiProperty()
    @Column("text", { name: "tech", nullable: true })
    tech?: string | null;
}
function Entitie(target: Projet, propertyKey: "id"): void {
    throw new Error("Function not implemented.");
}


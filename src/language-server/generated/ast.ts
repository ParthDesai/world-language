/******************************************************************************
 * This file was generated by langium-cli 1.1.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

/* eslint-disable */
import { AstNode, AbstractAstReflection, Reference, ReferenceInfo, TypeMetaData } from 'langium';

export interface Animal extends AstNode {
    readonly $container: Main;
    readonly $type: 'Animal';
    gene: string
    name: string
    sound: string
}

export const Animal = 'Animal';

export function isAnimal(item: unknown): item is Animal {
    return reflection.isInstance(item, Animal);
}

export interface Instance extends AstNode {
    readonly $container: Main;
    readonly $type: 'Instance';
    name: string
    species: Reference<Animal>
}

export const Instance = 'Instance';

export function isInstance(item: unknown): item is Instance {
    return reflection.isInstance(item, Instance);
}

export interface Main extends AstNode {
    readonly $type: 'Main';
    animals: Array<Animal>
    instances: Array<Instance>
    transfer: Array<Transfer>
    worlds: Array<World>
}

export const Main = 'Main';

export function isMain(item: unknown): item is Main {
    return reflection.isInstance(item, Main);
}

export interface Transfer extends AstNode {
    readonly $container: Main;
    readonly $type: 'Transfer';
    animalToTransfer: Reference<Instance>
    from: Reference<World>
    to: Reference<World>
}

export const Transfer = 'Transfer';

export function isTransfer(item: unknown): item is Transfer {
    return reflection.isInstance(item, Transfer);
}

export interface World extends AstNode {
    readonly $container: Main;
    readonly $type: 'World';
    contains: Array<Reference<Instance>>
    name: string
}

export const World = 'World';

export function isWorld(item: unknown): item is World {
    return reflection.isInstance(item, World);
}

export interface WorldsAstType {
    Animal: Animal
    Instance: Instance
    Main: Main
    Transfer: Transfer
    World: World
}

export class WorldsAstReflection extends AbstractAstReflection {

    getAllTypes(): string[] {
        return ['Animal', 'Instance', 'Main', 'Transfer', 'World'];
    }

    protected override computeIsSubtype(subtype: string, supertype: string): boolean {
        switch (subtype) {
            default: {
                return false;
            }
        }
    }

    getReferenceType(refInfo: ReferenceInfo): string {
        const referenceId = `${refInfo.container.$type}:${refInfo.property}`;
        switch (referenceId) {
            case 'Instance:species': {
                return Animal;
            }
            case 'Transfer:animalToTransfer':
            case 'World:contains': {
                return Instance;
            }
            case 'Transfer:from':
            case 'Transfer:to': {
                return World;
            }
            default: {
                throw new Error(`${referenceId} is not a valid reference id.`);
            }
        }
    }

    getTypeMetaData(type: string): TypeMetaData {
        switch (type) {
            case 'Main': {
                return {
                    name: 'Main',
                    mandatory: [
                        { name: 'animals', type: 'array' },
                        { name: 'instances', type: 'array' },
                        { name: 'transfer', type: 'array' },
                        { name: 'worlds', type: 'array' }
                    ]
                };
            }
            case 'World': {
                return {
                    name: 'World',
                    mandatory: [
                        { name: 'contains', type: 'array' }
                    ]
                };
            }
            default: {
                return {
                    name: type,
                    mandatory: []
                };
            }
        }
    }
}

export const reflection = new WorldsAstReflection();

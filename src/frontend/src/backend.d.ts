import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Tip {
    id: bigint;
    title: string;
    description: string;
    category: Category;
}
export enum Category {
    mental = "mental",
    food = "food",
    exercise = "exercise",
    routine = "routine"
}
export interface backendInterface {
    addTip(title: string, description: string, category: Category): Promise<Tip>;
    getAllTips(): Promise<Array<Tip>>;
    getTip(id: bigint): Promise<Tip>;
    getTipsByCategory(category: Category): Promise<Array<Tip>>;
}

export interface IProjectModel {
    id: number;
    name: string;
    cost?: number;
    total_cost?: number;
    first_flight?: string;
    launch?: string;
    status: string;
}
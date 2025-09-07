export interface Project{
    id: number;
    name:string;
    description?:string;
    owner?:string;
    created_by?:string;
    is_project_done?:boolean;
    start_date?:Date;
    end_date?:Date;
}
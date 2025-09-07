import { Pipe,PipeTransform } from "@angular/core";
import { Project } from "../../models/project.model";

@Pipe({
    name:'projectNames'
})


export class ProjectNamesPipe implements PipeTransform{
    transform(projects: Project[] | undefined | null, seperator =', '):string {
        if(!projects || projects.length == 0){
            return 'No projects assigned';
        }
        return projects.map(project => project.name).join(seperator);
    }
}
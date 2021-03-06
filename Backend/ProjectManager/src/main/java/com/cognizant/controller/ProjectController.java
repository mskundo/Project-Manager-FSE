package com.cognizant.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.entity.Project;
import com.cognizant.model.ProjectRecord;
import com.cognizant.service.ProjectService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/projectmanager/projects")
public class ProjectController {
	
	@Autowired
	private ProjectService projectService;
	
	@PostMapping("/saveProject")
	public ProjectRecord saveProject(@RequestBody ProjectRecord projectRecord){
		return projectService.saveProject(projectRecord);
	}
	
	@GetMapping("/getProjects")
    public List<Project> getAllProjects() {
    	return projectService.findAll();
    }
	
	@PutMapping("/updateProject/{id}")
	public Project updateProject(@RequestBody Project project, @PathVariable ("id") Long projectId){
		return projectService.updateProject(project, projectId);
	}
	
	@DeleteMapping("/deleteProject/{id}")
	public String deleteProject(@PathVariable ("id") Long projectId){
		projectService.deleteProject(projectId);
		return "deleted project successfully";
	}

}
